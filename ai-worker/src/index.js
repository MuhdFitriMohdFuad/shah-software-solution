// Reads a visitor's project description and returns the estimator settings as JSON,
// using a model on OpenRouter. The site prices everything itself; the model only maps
// the description to options and prices modules that are not in the standard list.

const FEATURE_IDS = ["login", "admin", "pay", "book", "dash", "lang", "integ", "notif", "upload", "map", "chat", "aibot"];
const TIERS = { web: 4, app: 3, sys: 3, iot: 3, ux: 3 };

const SYSTEM = `You help visitors of Shah Software Solution, a Malaysian software studio, turn a description of the software they want into estimator settings. The description may be in English, Bahasa Melayu or a mix.

Reply with one JSON object only, no other text, in this shape:
{"svc": "...", "tier": 0, "look": "...", "feats": ["..."], "custom": [{"en": "...", "ms": "...", "lo": 0, "hi": 0, "weeks": 1}], "level": 0.4, "why": ["..."], "note": "..."}

Choose:
- svc: "web" (websites), "app" (Android/iOS apps), "sys" (business systems such as HR, bookings, queues, inventory, portals), "iot" (connected devices and sensors), "ux" (design only, no build).
- tier, by svc:
  web: 0 Landing Page (one page), 1 Corporate Website (5 to 7 pages), 2 E-Commerce Website (online shop), 3 Website & System (admin panel, member login, database, custom features)
  app: 0 Basic App (one platform), 1 Cross-platform App, 2 Premium Custom App
  sys: 0 Starter System (one workflow), 1 Business System (several modules, portals, reports), 2 Company-wide System (roles, integrations, audit trail)
  iot: 0 Prototype, 1 Pilot (small fleet), 2 Production
  ux: 0 Basic Design (up to 3 pages), 1 Pro Design (up to 10 pages), 2 Complete Suite
- look: "simple" unless they mention their brand or a custom look ("custom"), or animation, illustration or a premium feel ("premium").
- feats, only those the description actually asks for: login (user accounts), admin (admin panel), pay (online payment), book (bookings/appointments), dash (reports dashboard), lang (more than one language), integ (connect to an existing system), notif (automatic WhatsApp/SMS/email notifications; a plain "WhatsApp button" is not this), upload (file/document upload), map (maps or live tracking), chat (in-app chat), aibot (AI chatbot or assistant).
- custom: up to 4 modules the description needs that the feature list does not cover (for example payroll, inventory, LHDN e-Invoice). Give an English name (en), a Bahasa Melayu name (ms), a price range in RM for building that module alone (lo, hi; between 300 and 3000, most modules around 500 to 1500), and extra build weeks (1 to 4). Use [] if none.
- level: how complex this project is compared with a typical project of the same type and tier, from 0 to 1. The site places the price at this point between the owner's minimum and maximum, so you never set the price yourself. Around 0.2 for a small, simple version; 0.4 for a typical one; 0.6 to 0.8 for many users, several branches, integrations, approvals or real-time features; 0.9 or more only for very large or demanding projects.
- why: two to four short reasons for that level, in the visitor's language, each based on something they wrote (for example "150 staff across 3 branches").
- note: one short sentence in the visitor's language about anything unclear that the team should ask about, or "".

Do not invent features the visitor did not ask for.`;

function cors(env) {
  return {
    "access-control-allow-origin": env.ALLOWED_ORIGIN || "*",
    "access-control-allow-methods": "POST, OPTIONS",
    "access-control-allow-headers": "content-type",
  };
}

// free models sometimes wrap JSON in prose or code fences
function firstJson(s) {
  const a = s.indexOf("{"), b = s.lastIndexOf("}");
  if (a < 0 || b <= a) return null;
  try { return JSON.parse(s.slice(a, b + 1)); } catch { return null; }
}

const int = (v, lo, hi, d) => (Number.isFinite(+v) ? Math.min(Math.max(Math.round(+v), lo), hi) : d);

function clean(r) {
  if (!r || !(r.svc in TIERS)) return null;
  const custom = (Array.isArray(r.custom) ? r.custom : []).slice(0, 4).filter((c) => c && c.en).map((c) => {
    const lo = int(c.lo, 300, 3000, 800);
    return { en: String(c.en).slice(0, 60), ms: String(c.ms || c.en).slice(0, 60), lo, hi: int(c.hi, lo, 5000, lo * 2), weeks: int(c.weeks, 1, 4, 1) };
  });
  return {
    svc: r.svc,
    tier: int(r.tier, 0, TIERS[r.svc] - 1, 0),
    look: ["simple", "custom", "premium"].includes(r.look) ? r.look : "simple",
    feats: [...new Set((Array.isArray(r.feats) ? r.feats : []).filter((f) => FEATURE_IDS.includes(f)))],
    custom,
    level: Number.isFinite(+r.level) ? Math.min(Math.max(+r.level, 0), 1) : 0.4,
    why: (Array.isArray(r.why) ? r.why : []).slice(0, 4).map((w) => String(w).slice(0, 120)),
    note: typeof r.note === "string" ? r.note.slice(0, 200) : "",
  };
}

export default {
  async fetch(request, env) {
    const headers = cors(env);
    if (request.method === "OPTIONS") return new Response(null, { headers });
    if (request.method !== "POST") return new Response("Method not allowed", { status: 405, headers });

    let text = "";
    try {
      ({ text = "" } = await request.json());
    } catch {
      return new Response("Bad JSON", { status: 400, headers });
    }
    text = String(text).trim().slice(0, 1500);
    if (text.length < 8) return new Response("Description too short", { status: 400, headers });

    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        authorization: `Bearer ${env.OPENROUTER_API_KEY}`,
        "content-type": "application/json",
        "HTTP-Referer": env.ALLOWED_ORIGIN || "https://ssoftwaresolution.com",
        "X-Title": "Shah Software Solution estimator",
      },
      body: JSON.stringify({
        // OpenRouter tries these in order when one is busy or rate-limited
        models: [env.OPENROUTER_MODEL, env.OPENROUTER_BACKUP_MODEL].filter(Boolean),
        response_format: { type: "json_object" },
        temperature: 0.2,
        max_tokens: 800,
        messages: [
          { role: "system", content: SYSTEM },
          { role: "user", content: text },
        ],
      }),
    });
    // the site falls back to its built-in reader on any non-200
    if (!res.ok) return new Response("Upstream error", { status: res.status === 429 ? 429 : 502, headers });

    const data = await res.json().catch(() => null);
    const out = clean(firstJson(data?.choices?.[0]?.message?.content || ""));
    if (!out) return new Response("No estimate", { status: 422, headers });
    return Response.json(out, { headers });
  },
};
