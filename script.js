// Shah Software Solution — the live builder and everything around it
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const WA = 'https://wa.me/601114196505?text=';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const rm = (n) => 'RM ' + Math.round(n).toLocaleString('en-MY');
let lang = 'en';

/* ---------- copy: English in the HTML, Bahasa Melayu here ---------- */
const MS = {
  'skip': 'Langkau ke kandungan',
  'nav.work': 'Projek', 'nav.services': 'Servis', 'nav.pricing': 'Harga', 'nav.faq': 'Soalan', 'nav.wa': 'WhatsApp kami',
  'hero.h': 'Bisnes anda. Dibina blok demi blok.',
  'hud.manifesto': 'Manifesto', 'hud.m': 'Kami bina perisian yang menggerakkan perniagaan Malaysia: laman web, aplikasi, sistem dan peranti bersambung. Harga jelas, dibina blok demi blok.',
  'hud.scroll': 'Skrol untuk bina', 'hud.build': 'Bina', 'work.k': 'Portfolio', 'work.more': 'Lihat semua projek', 'try.k': 'Cuba sendiri', 'steps.k': 'Proses',
  'try.h': 'Taip nama bisnes anda. Lihat ia dibina.', 'try.p': 'Pilih jenis bisnes anda dan lihat draf pertama laman anda, bersama kod yang membinanya. Laman sebenar anda direka khas untuk anda.',
  'faq.qa': 'Apa itu Shah Software Solution?', 'faq.aa': 'Shah Software Solution ialah syarikat pembangunan perisian Malaysia (SSM 202403307959) yang mereka dan membina laman web, aplikasi mudah alih, sistem perniagaan dan IoT untuk perniagaan. Pakej laman web bermula dari RM399 termasuk domain, hosting dan SSL, dan tujuh demo langsung menunjukkan sistem HR, giliran, tempahan, e-dagang dan acara.',
  'faq.qt': 'Berapa lama untuk siapkan laman web?', 'faq.at': 'Laman pendaratan boleh siap dalam 1 hari, laman korporat 1 hingga 2 minggu dan laman e-dagang 2 hingga 3 minggu, selepas kandungan anda sedia. Aplikasi dan sistem perniagaan mengambil masa lebih lama; kalkulator menunjukkan tempoh untuk projek anda.',
  'faq.qb': 'Boleh laman web saya dalam Bahasa Melayu dan English?', 'faq.ab': 'Boleh. Kami bina laman web dan sistem dalam Bahasa Melayu, English atau kedua-duanya, dengan butang tukar bahasa seperti di laman ini.',
  'pkg.cap': 'Pakej laman web. Setiap pakej termasuk domain, hosting 1 tahun dan SSL.', 'pkg.h1': 'Pakej', 'pkg.h2': 'Harga dari', 'pkg.h3': 'Apa yang anda dapat', 'pkg.h4': 'Tempoh biasa',
  'pkg.lp': '1 halaman, SEO asas, butang hubungi atau WhatsApp, sokongan 3 bulan', 'pkg.lpt': 'Kira-kira 1 minggu',
  'pkg.cw': '5 hingga 7 halaman, borang hubungan dan Google Map, SEO, sokongan 6 bulan', 'pkg.cwt': '1 hingga 2 minggu',
  'pkg.ec': 'Produk tanpa had, akaun pelanggan, bayaran FPX dan kad, pengurusan pesanan', 'pkg.ect': '2 hingga 3 minggu',
  'pkg.ws': 'Log masuk dan keluar, panel admin, pangkalan data dan ciri khas', 'pkg.wst': '3 hingga 6 minggu',
  'pkg.cap2': 'Pakej dan harga permulaan', 'pkg.lic': "Semua harga adalah lesen untuk guna perisian bagi perniagaan anda. Kod sumber kekal milik Shah Software Solution: ia tidak boleh disalin, diubah suai atau dijual semula. Hak milik kod sumber diberi harga berasingan.",
  'faq.qo': 'Adakah saya memiliki kod sumber?', 'faq.ao': 'Harga pakej adalah lesen untuk guna perisian bagi perniagaan anda. Kod sumber kekal milik Shah Software Solution, jadi ia tidak boleh disalin, diubah suai atau dijual semula. Data perniagaan anda tetap milik anda dan boleh dieksport. Jika mahu memiliki kod sumber, harganya berasingan dan boleh dibincang.', 'pkg.note2': 'Pakej laman web termasuk domain, hosting 1 tahun dan SSL. Fungsi tambahan dari RM300 setiap satu. Guna kalkulator di bawah untuk julat harga tepat projek anda.',
  'pkg.note': 'Aplikasi mudah alih, sistem perniagaan, IoT dan reka bentuk UI/UX diberi harga ikut skop. Guna kalkulator di bawah untuk lihat julat harga dan tempoh projek anda.',
  'foot.upd': 'Kemas kini terakhir',
  'faq.q0': 'Berapa harga sebuah laman web?', 'faq.a0': 'Laman pendaratan bermula dari RM399, laman korporat dari RM899 dan laman e-dagang dari RM1,299. Setiap pakej laman web termasuk domain, hosting 1 tahun dan SSL.', 'hero.eye': 'Studio pembangunan perisian di Malaysia',
  'hero.p': 'Laman web, aplikasi mudah alih, sistem perniagaan dan IoT untuk perniagaan Malaysia. Laman pendaratan dari RM399, termasuk domain, hosting dan SSL.',
  'hero.label': 'Nama bisnes', 'hero.cta': 'Lihat harga untuk ini',
  'kind.cafe': 'Kafe', 'kind.clinic': 'Klinik', 'kind.shop': 'Kedai', 'kind.salon': 'Salun', 'kind.startup': 'Startup',
  'pipe.h': 'Dari mesej pertama hingga dilancarkan',
  'pipe.s0': 'Reka bentuk', 'pipe.s0p': 'Kami lakar halaman dan setuju rupanya dengan anda sebelum sebarang kod ditulis.',
  'pipe.s1': 'Bina', 'pipe.s1p': 'Kami kod untuk telefon dan desktop, dan sambungkan apa yang perlu: bayaran, tempahan, pangkalan data, peranti.',
  'pipe.s2': 'Uji', 'pipe.s2p': 'Kami uji di telefon dan pelayar sebenar, dan baiki apa yang rosak sebelum anda melihatnya.',
  'pipe.s3': 'Lancar', 'pipe.s3p': 'Kami lancarkan di domain anda. Dengan pelan penyelenggaraan, kemas kini dan pembaikan terus dijaga.',
  'work.h': 'Sistem yang kami bina. Buka dan cuba.', 'work.p': 'Tujuh demo yang berfungsi, boleh dibuka dan digunakan sekarang.',
  'work.all': 'Semua', 'work.ops': 'Sistem bisnes', 'work.queue': 'Giliran & tempahan', 'work.web': 'Kedai & laman web', 'work.desk': 'Desktop', 'work.phone': 'Telefon',
  'svc.h': 'Semua yang bisnes anda perlukan untuk go digital', 'svc.p': 'Satu pasukan untuk laman web, aplikasi, sistem dalaman dan peranti bersambung. Pilih servis untuk lihat apa yang termasuk.',
  'svc.web': 'Laman web', 'svc.app': 'Aplikasi mudah alih', 'svc.ux': 'Reka bentuk UI/UX',
  'price.h': 'Tahu kosnya sebelum sebaris kod ditulis.', 'price.p': 'Pilih apa yang mahu dibina dan ciri yang diperlukan. Anda dapat anggaran kos pembinaan, tempoh siap, dan jumlah bayaran bagi setiap tiga fasa.',
  'svc.sys': 'Sistem perniagaan', 'svc.iot': 'IoT',
  'est.what': 'Apa yang kita bina?', 'est.feat': 'Tambah ciri yang anda perlukan', 'est.k': 'Anggaran kos pembinaan',
  'est.idea': 'Terangkan sistem yang anda mahu', 'est.hint': 'Kami isi pilihan di bawah berdasarkan penerangan anda. Anda masih boleh ubah apa-apa.',
  'est.ph': 'Contoh: Sistem tempahan untuk 3 kedai gunting rambut saya. Pelanggan tempah dan bayar deposit online, staf log masuk untuk lihat jadual, dan saya mahu laporan jualan bulanan. Dalam BM dan English.',
  'est.how': 'Cara kami kira', 'est.min': 'Minimum', 'est.max': 'Maksimum', 'est.look': 'Bagaimana rupanya?',
  'price.excl': 'Pakej laman web termasuk domain, hosting 1 tahun dan SSL. Tidak termasuk: audit keselamatan dan sijil keselamatan atau pematuhan pihak ketiga.',
  'ph.1': 'Reka bentuk & pelan', 'ph.1d': '30% untuk mula', 'ph.2': 'Pembinaan', 'ph.2d': '40% selepas anda luluskan reka bentuk', 'ph.3': 'Uji & lancar', 'ph.3d': '30% sebelum dilancarkan',
  'price.maint': 'Saya juga mahu penyelenggaraan selepas pelancaran', 'price.cta': 'Hantar anggaran ini di WhatsApp',
  'price.fine': 'Ini anggaran, bukan sebut harga. Kami sahkan harga tetap bagi setiap fasa selepas panggilan percuma.',
  'faq.h': 'Sebelum anda mula',
  'faq.q1': 'Bagaimana cara bayaran?', 'faq.a1': 'Anda bayar dalam tiga fasa: 30% untuk mula reka bentuk, 40% bila anda luluskan reka bentuk dan kami mula membina, dan 30% sebelum pelancaran. Setiap fasa disertakan senarai apa yang anda dapat.',
  'faq.q2': 'Boleh bina sistem khas atau projek IoT?', 'faq.a2': 'Boleh. Kami bina semua jenis sistem: HR, giliran, tempahan, e-dagang, operasi acara dan IoT. Sistem khas mengikut sebut harga.',
  'faq.q3': 'Adakah anda selenggara sistem selepas pelancaran?', 'faq.a3': 'Ya. Penyelenggaraan dan sokongan selepas pelancaran disebut harga berasingan, mengikut keperluan sistem anda.',
  'faq.q4': 'Adakah anda bina aplikasi Android dan iOS?', 'faq.a4': 'Basic App untuk satu platform. Cross-platform App dan Premium Custom App berjalan di Android dan iOS.',
  'faq.q5': 'Bagaimana nak mula?', 'faq.a5': 'Hantar mesej WhatsApp ke +60 11-1419 6505 atau emel info@ssoftwaresolution.com. Kami akan cadangkan pakej dan pelan bayaran.',
  'nav.contact': 'Hubungi',
  'hero.cta1': 'Anggar kos projek saya', 'hero.cta2': 'Lihat demo langsung', 'hero.try': 'Cuba: taip nama bisnes anda',
  'work.h': 'Sistem sebenar, sedang berjalan', 'steps.p': 'Proses yang jelas, dan anda tahu pelannya sebelum apa-apa dibina.',
  'close.cta': 'Mula di WhatsApp',
  'line.web': 'Laman web', 'line.app': 'Aplikasi mudah alih', 'line.sys': 'Sistem perniagaan', 'line.ux': 'Reka bentuk UI/UX',
  'contact.h': 'Ceritakan tentang projek anda', 'contact.p': 'Hantar borang ini dan kami akan balas melalui emel atau telefon. Lebih suka bersembang? WhatsApp kami di +60 11-1419 6505.',
  'contact.name': 'Nama anda', 'contact.email': 'Emel', 'contact.phone': 'Nombor telefon', 'contact.subject': 'Subjek', 'contact.message': 'Mesej', 'contact.send': 'Hantar mesej',
  'close.h1': 'Sedia untuk bina', 'close.h2': '?',
};
const EN = {};
const t = (k, en) => (lang === 'ms' && MS[k]) || en;

/* ---------- the builder ---------- */
const KINDS = {
  cafe: { bg: '#fff7ee', ink: '#2b1608', acc: '#a4471c', soft: '#f6e3cf', font: 'Georgia, serif', rad: '999px',
    en: { tag: 'Coffee, kaya toast and a seat by the window.', cta: 'Order for pickup', nav: ['Menu', 'Visit', 'Order'] },
    ms: { tag: 'Kopi, roti bakar kaya dan meja tepi tingkap.', cta: 'Pesan untuk ambil', nav: ['Menu', 'Lawati', 'Pesan'] },
    items: [['Kopi O', 'RM2.80'], ['Teh tarik', 'RM3.20'], ['Kaya toast', 'RM4.50']],
    art: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M12 26h32v12a14 14 0 0 1-14 14h-4a14 14 0 0 1-14-14z"/><path d="M44 30h4a6 6 0 0 1 0 12h-4M22 10c-2 4 2 6 0 10M30 10c-2 4 2 6 0 10"/></svg>' },
  clinic: { bg: '#f2fbf9', ink: '#08302b', acc: '#0b8a76', soft: '#d7f1ec', font: 'inherit', rad: '10px',
    en: { tag: 'Family doctor, walk-ins welcome. Book your slot online.', cta: 'Book an appointment', nav: ['Doctors', 'Services', 'Book'] },
    ms: { tag: 'Doktor keluarga, pesakit tanpa temujanji dialu-alukan. Tempah slot dalam talian.', cta: 'Tempah temujanji', nav: ['Doktor', 'Servis', 'Tempah'] },
    items: [['General check-up', '9:00'], ['Blood test', '10:30'], ['Vaccination', '14:00']],
    art: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"><path d="M24 10h16v14h14v16H40v14H24V40H10V24h14z"/></svg>' },
  shop: { bg: '#fffaf0', ink: '#1f1500', acc: '#d1462f', soft: '#fbe9d3', font: 'inherit', rad: '6px',
    en: { tag: 'Batik shirts made in Kelantan, shipped across Malaysia.', cta: 'Shop the collection', nav: ['Shop', 'New', 'Cart (0)'] },
    ms: { tag: 'Baju batik buatan Kelantan, dihantar ke seluruh Malaysia.', cta: 'Beli koleksi', nav: ['Kedai', 'Baru', 'Troli (0)'] },
    items: [['Kemeja Batik', 'RM89'], ['Sarong', 'RM59'], ['Selendang', 'RM45']],
    art: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"><path d="M14 22h36l-3 32H17z"/><path d="M24 22v-4a8 8 0 0 1 16 0v4"/></svg>' },
  salon: { bg: '#1c1420', ink: '#fbeff6', acc: '#e7a3c4', soft: '#2c2031', on: '#1c1420', font: 'Georgia, serif', rad: '2px',
    en: { tag: 'Cuts, colour and treatments. Pick a stylist and a time.', cta: 'Book a stylist', nav: ['Stylists', 'Prices', 'Book'] },
    ms: { tag: 'Gunting, warna dan rawatan. Pilih penggaya dan masa.', cta: 'Tempah penggaya', nav: ['Penggaya', 'Harga', 'Tempah'] },
    items: [['Haircut', 'RM35'], ['Colour', 'RM120'], ['Treatment', 'RM80']],
    art: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><circle cx="18" cy="46" r="7"/><circle cx="46" cy="46" r="7"/><path d="M23 41l25-31M41 41L16 10"/></svg>' },
  startup: { bg: '#f4f3ff', ink: '#14123a', acc: '#4f46e5', soft: '#e3e1ff', font: 'inherit', rad: '10px',
    en: { tag: 'The app that does the boring part for you. Join the early list.', cta: 'Get early access', nav: ['Product', 'Pricing', 'Sign in'] },
    ms: { tag: 'Aplikasi yang buat kerja membosankan untuk anda. Sertai senarai awal.', cta: 'Dapatkan akses awal', nav: ['Produk', 'Harga', 'Log masuk'] },
    items: [['Sign up', '1 min'], ['Connect', '2 min'], ['Done', '✓']],
    art: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"><path d="M32 6c10 8 14 20 10 34H22C18 26 22 14 32 6z"/><circle cx="32" cy="24" r="4"/><path d="M22 40l-8 10h10M42 40l8 10H40"/></svg>' },
};
const state = { name: 'Kopi Ah Seng', kind: 'cafe' };
const slug = (s) => (s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '').slice(0, 24) || 'yourbusiness');
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function siteHTML() {
  const k = KINDS[state.kind], c = k[lang] || k.en, name = esc(state.name.trim() || 'Your Business');
  return `<div class="s-nav"><span class="s-logo">${name}</span><nav>${c.nav.map((n) => `<span>${n}</span>`).join('')}</nav></div>
    <div class="s-hero"><div><h3>${name}</h3><p>${esc(c.tag)}</p><span class="s-btn">${esc(c.cta)}</span></div><div class="s-art" style="color:${k.acc}">${k.art}</div></div>
    <div class="s-items">${k.items.map(([a, b]) => `<div>${a}<span>${b}</span></div>`).join('')}</div>`;
}
function theme(el) {
  const k = KINDS[state.kind];
  el.style.setProperty('--s-bg', k.bg); el.style.setProperty('--s-ink', k.ink); el.style.setProperty('--s-acc', k.acc);
  el.style.setProperty('--s-soft', k.soft); el.style.setProperty('--s-on', k.on || '#fff'); el.style.setProperty('--s-rad', k.rad); el.style.setProperty('--s-font', k.font);
}
function codeLines() {
  const k = KINDS[state.kind], c = k[lang] || k.en, name = state.name.trim() || 'Your Business';
  return [
    `<!-- ${slug(name)}.com.my, built by Shah Software -->`,
    `<header class="nav">`,
    `  <a class="logo">${name}</a>`,
    `</header>`,
    `<section class="hero" data-theme="${state.kind}">`,
    `  <h1>${name}</h1>`,
    `  <p>${c.tag}</p>`,
    `  <a class="btn" href="#${state.kind === 'shop' ? 'cart' : 'book'}">${c.cta}</a>`,
    `</section>`,
    `<ul class="${state.kind === 'shop' ? 'products' : 'list'}">`,
    ...k.items.map(([a, b]) => `  <li>${a} <span>${b}</span></li>`),
    `</ul>`,
  ].join('\n');
}
const hl = (src) => esc(src)
  .replace(/(&lt;!--.*?--&gt;)/g, '<span class="t-attr">$1</span>')
  .replace(/(&lt;\/?)([a-z0-9]+)/g, '$1<span class="t-tag">$2</span>')
  .replace(/([a-z-]+)=(&quot;.*?&quot;)/g, '<span class="t-attr">$1</span>=<span class="t-str">$2</span>');

let typer = 0;
function typeCode() {
  const el = $('#code'), src = codeLines();
  clearInterval(typer);
  if (reduced) { el.innerHTML = hl(src); return; }
  let i = 0;
  typer = setInterval(() => {
    i = Math.min(src.length, i + 7);
    el.innerHTML = hl(src.slice(0, i));
    if (i >= src.length) clearInterval(typer);
  }, 16);
}
function renderSite(typeIt = true, rebuild = true) {
  const site = $('#site'), real = $('#pv-real') || document.createElement('div');
  if (rebuild) {
    theme(site); site.innerHTML = siteHTML();
    theme(real); real.innerHTML = siteHTML();
  } else {
    const nm = state.name.trim() || 'Your Business';
    $$('.s-logo, .s-hero h3', site).concat($$('.s-logo, .s-hero h3', real)).forEach((e) => { e.textContent = nm; });
  }
  const s = slug(state.name);
  $('#url').textContent = `${s}.com.my`;
  $('#file').textContent = `${s}/index.html`;
  $('#close-name').textContent = state.name.trim() || 'Your Business';
  const kindLabel = $(`[data-kind="${state.kind}"]`).textContent;
  const msg = lang === 'ms'
    ? `Hai Shah Software, saya mahu laman web untuk ${state.name} (${kindLabel}). Boleh beri anggaran kos?`
    : `Hi Shah Software, I'd like a website for ${state.name} (${kindLabel}). Can you send me a cost estimate?`;
  $('#close-wa').href = WA + encodeURIComponent(msg);
  if (typeIt) typeCode();
}
(() => {
  const input = $('#biz');
  let deb = 0;
  input.addEventListener('input', () => {
    state.name = input.value;
    clearTimeout(deb);
    renderSite(false, false);                       // names update instantly, no replayed animation
    deb = setTimeout(() => typeCode(), 140);         // the code retypes once typing pauses
  });
  $$('#kinds button').forEach((b) => b.addEventListener('click', () => {
    $$('#kinds button').forEach((o) => o.setAttribute('aria-checked', String(o === b)));
    state.kind = b.dataset.kind;
    const site = $('#site');
    if (reduced) return renderSite(true);
    site.classList.add('swap');                        // blur out, rebuild, blur back in
    setTimeout(() => { renderSite(true); setTimeout(() => site.classList.remove('swap'), 30); }, 150);
  }));
  $('#kinds').addEventListener('keydown', (e) => {
    const bs = $$('#kinds button'), i = bs.findIndex((b) => b.getAttribute('aria-checked') === 'true');
    if (!['ArrowRight', 'ArrowLeft'].includes(e.key)) return;
    const n = bs[(i + (e.key === 'ArrowRight' ? 1 : bs.length - 1)) % bs.length]; n.click(); n.focus();
  });
})();

/* ---------- portfolio ---------- */
// WORK comes from data.js, shared with the showcase page
function renderWork() {
  $('#projects').innerHTML = WORK.map((w, i) => {
    const [kind, desc] = w[lang] || w.en, n = String(i + 1).padStart(2, '0');
    return `<li class="ice-step" id="w-${w.k}" data-i="${i}">
      <a class="ice-shot" href="${w.url}" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true"><span class="shot-bar"><i></i><i></i><i></i><span>${w.url.replace(/^https:\/\//, '').replace(/\/$/, '')}</span></span><img src="images/work/${w.k}-desk.webp" width="1200" height="750" loading="lazy" alt="${w.name} ${kind.toLowerCase()} demo"></a>
      <div class="ice-card">
        <p class="hud-k">PORTFOLIO_${n} <span>/ ${String(WORK.length).padStart(2, '0')}</span></p>
        <h3>${w.name}</h3>
        <p class="ice-kind">${kind}</p>
        <p>${desc}</p>
        <a class="hud-link" href="${w.url}" target="_blank" rel="noopener">${lang === 'ms' ? 'Klik untuk buka demo' : 'Click to explore'} <span aria-hidden="true">↗</span></a>
      </div>
    </li>`;
  }).join('');
  window.dispatchEvent(new CustomEvent('sss:work'));
  watchWork();
}
// the demo in the middle of the screen is the active one
let workIO = null;
function watchWork() {
  if (!('IntersectionObserver' in window)) { $$('.ice-step').forEach((s) => s.classList.add('on')); return; }
  if (workIO) workIO.disconnect();
  workIO = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) $$('.ice-step').forEach((s) => s.classList.toggle('on', s === e.target));
  }), { rootMargin: '-40% 0px -40% 0px' });
  $$('.ice-step').forEach((s) => workIO.observe(s));
}
// hovering a screenshot presses it in: the side under the pointer tips away
if (!reduced && matchMedia('(hover: hover) and (pointer: fine)').matches) {
  $('#projects').addEventListener('pointermove', (e) => {
    const el = e.target.closest('.ice-shot');
    if (!el) return;
    const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1400px) rotateY(${(x * 7).toFixed(2)}deg) rotateX(${(-y * 7).toFixed(2)}deg) scale(0.985)`;
  });
  $('#projects').addEventListener('pointerout', (e) => {
    const el = e.target.closest('.ice-shot');
    if (el && !el.contains(e.relatedTarget)) el.style.transform = '';
  });
}
// shared with scene.js
window.SSS = { work: WORK, get lang() { return lang; } };

/* ---------- services explorer ---------- */
const FOLDER = '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M2.5 5.5a1 1 0 0 1 1-1h4l2 2h7a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1z"/></svg>';
const SVC = [
  { id: 'websites', en: ['Websites', 'Company sites, landing pages and online shops that work on any phone and are set up to be found on Google.', ['Landing page from RM399, corporate site from RM899, online shop from RM1,299', 'Domain, hosting (1 year) and SSL included', 'Responsive design and SEO setup', 'Admin panel and custom features on Website & System'], 'Paid in 3 project phases'],
    ms: ['Laman web', 'Laman syarikat, laman pendaratan dan kedai online yang berfungsi di semua telefon dan disediakan untuk dijumpai di Google.', ['Laman pendaratan dari RM399, laman korporat dari RM899, kedai online dari RM1,299', 'Termasuk domain, hosting (1 tahun) dan SSL', 'Reka bentuk responsif dan SEO', 'Panel admin dan ciri khas untuk Website & System'], 'Bayar ikut 3 fasa projek'], demo: 'ecommerce' },
  { id: 'mobile-apps', en: ['Mobile apps', 'Apps for Android and iOS, from a simple first version to a cross-platform app with analytics.', ['Single platform on Basic App', 'iOS and Android on Cross-platform', 'API integration', 'Full support on Premium Custom'], 'Paid in 3 project phases'],
    ms: ['Aplikasi mudah alih', 'Aplikasi untuk Android dan iOS, dari versi pertama yang ringkas hingga aplikasi merentas platform dengan analitik.', ['Satu platform untuk Basic App', 'iOS dan Android untuk Cross-platform', 'Integrasi API', 'Sokongan penuh untuk Premium Custom'], 'Bayar ikut 3 fasa projek'], demo: 'servicequeue' },
  { id: 'business-systems', en: ['Business systems', 'Custom software for how your company runs: HR, queues, bookings, event operations, inventory.', ['Built around your workflow', 'Staff and customer portals', 'Works on phone and desktop', 'See the demos above'], 'Estimate the cost below'],
    ms: ['Sistem perniagaan', 'Perisian khas mengikut cara syarikat anda beroperasi: HR, giliran, tempahan, operasi acara, inventori.', ['Dibina ikut aliran kerja anda', 'Portal staf dan pelanggan', 'Berfungsi di telefon dan desktop', 'Lihat demo di atas'], 'Anggarkan kos di bawah'], demo: 'hrms' },
  { id: 'iot', en: ['IoT', 'Connected devices and the dashboards that read them: sensors, counters, displays and alerts.', ['Device to cloud', 'Live dashboards', 'Alerts to phone', 'Integration with your system'], 'Estimate the cost below'],
    ms: ['IoT', 'Peranti bersambung dan papan pemuka yang membacanya: sensor, pembilang, paparan dan amaran.', ['Peranti ke awan', 'Papan pemuka langsung', 'Amaran ke telefon', 'Integrasi dengan sistem anda'], 'Anggarkan kos di bawah'] },
  { id: 'ui-ux', en: ['UI/UX design', 'Screens your customers understand at first look, from three key pages to a full product.', ['Up to 3 pages on Basic', 'User testing and prototypes on Pro', 'Design system on Complete Suite', 'Design files you keep'], 'Paid in 3 project phases'],
    ms: ['Reka bentuk UI/UX', 'Skrin yang pelanggan faham sekali pandang, dari tiga halaman utama hingga produk penuh.', ['Sehingga 3 halaman untuk Basic', 'Ujian pengguna dan prototaip untuk Pro', 'Sistem reka bentuk untuk Complete Suite', 'Fail reka bentuk milik anda'], 'Bayar ikut 3 fasa projek'] },
];
let svcSel = 0;
function renderSvc() {
  $('#tree').innerHTML = SVC.map((s, i) => `<button role="tab" id="tr-${s.id}" aria-controls="pane" aria-selected="${i === svcSel}" tabindex="${i === svcSel ? 0 : -1}" data-i="${i}">${FOLDER}<span>${s.id}/</span></button>`).join('');
  const s = SVC[svcSel], [title, desc, list, from] = s[lang] || s.en;
  $('#pane').setAttribute('aria-labelledby', 'tr-' + s.id);
  $('#pane').innerHTML = `<h3>${title}</h3><p class="desc">${desc}</p><ul>${list.map((x) => `<li>${x}</li>`).join('')}</ul>
    <div class="from"><b>${from}</b><a class="act" href="${WA + encodeURIComponent((lang === 'ms' ? 'Hai Shah Software, saya berminat dengan ' : "Hi Shah Software, I'm interested in ") + title)}" target="_blank" rel="noopener">${lang === 'ms' ? 'Tanya di WhatsApp' : 'Ask on WhatsApp'}</a>${s.demo ? `<a class="ghost" href="#w-${s.demo}">${lang === 'ms' ? 'Lihat contoh' : 'See an example'}</a>` : ''}</div>`;
  $$('#tree button').forEach((b) => b.addEventListener('click', () => { svcSel = +b.dataset.i; renderSvc(); $(`#tree [data-i="${svcSel}"]`).focus(); }));
}
$('#tree').addEventListener('keydown', (e) => {
  const d = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
  if (!d) return; e.preventDefault();
  svcSel = (svcSel + d + SVC.length) % SVC.length; renderSvc(); $(`#tree [data-i="${svcSel}"]`).focus();
});

/* ---------- build-cost estimator, paid in 3 phases ---------- */
// Estimate ranges in RM. Edit these to match your real pricing.
const EST = {
  // website packages include domain + hosting (1 year), SSL and support
  web: { f: 1, tiers: [
    ['Landing Page', '', ['1 page, domain & hosting 1 year, SSL, basic SEO, 3 months support', '1 halaman, domain & hosting 1 tahun, SSL, SEO asas, sokongan 3 bulan'], 399, 799, 0.2, 0.2],
    ['Corporate Website', 'Most popular', ['5 to 7 pages, contact form & Google Map, SEO, domain & hosting 1 year, SSL, 6 months support', '5 hingga 7 halaman, borang hubungan & Google Map, SEO, domain & hosting 1 tahun, SSL, sokongan 6 bulan'], 899, 1799, 1, 2],
    ['E-Commerce Website', '', ['Unlimited products, customer accounts, FPX & card payment, order management admin, domain & hosting 1 year, SSL', 'Produk tanpa had, akaun pelanggan, bayaran FPX & kad, admin pengurusan pesanan, domain & hosting 1 tahun, SSL'], 1299, 2999, 2, 3],
    ['Website & System', '', ['Login & logout, admin panel, database and custom features built for you', 'Log masuk & keluar, panel admin, pangkalan data dan ciri khas untuk anda'], 2999, 7999, 3, 6]] },
  app: { f: 1, tiers: [
    ['Basic App', '', ['Single platform, basic features, standard UI', 'Satu platform, ciri asas, UI standard'], 2999, 5999, 2, 4],
    ['Cross-platform App', 'Recommended', ['iOS & Android, advanced features, API integration', 'iOS & Android, ciri lanjutan, integrasi API'], 4999, 11999, 3, 6],
    ['Premium Custom App', '', ['Custom development, enterprise features, full support', 'Pembangunan khas, ciri perusahaan, sokongan penuh'], 11999, 29999, 6, 12]] },
  sys: { f: 1, tiers: [
    ['Starter System', '', ['One workflow, like bookings or a queue, with staff login', 'Satu aliran kerja, seperti tempahan atau giliran, dengan log masuk staf'], 1999, 3999, 1, 3],
    ['Business System', 'Most popular', ['Several modules, staff and customer portals, reports', 'Beberapa modul, portal staf dan pelanggan, laporan'], 3999, 9999, 3, 6],
    ['Company-wide System', '', ['Roles and permissions, integrations, audit trail', 'Peranan dan kebenaran, integrasi, jejak audit'], 7999, 19999, 6, 12]] },
  iot: { f: 1, tiers: [
    ['Prototype', '', ['One device type, from sensor to dashboard (hardware not included)', 'Satu jenis peranti, dari sensor ke papan pemuka (tidak termasuk perkakasan)'], 1999, 4999, 2, 3],
    ['Pilot', 'Recommended', ['A small fleet of devices with alerts to your phone', 'Sekumpulan kecil peranti dengan amaran ke telefon'], 4999, 11999, 3, 6],
    ['Production', '', ['Rollout-ready devices, fleet management, integrations', 'Peranti sedia dipasang, pengurusan peranti, integrasi'], 11999, 29999, 6, 12]] },
  ux: { f: 1, tiers: [
    ['Basic Design', '', ['Up to 3 pages, basic wireframes, mobile responsive', 'Sehingga 3 halaman, wireframe asas, responsif mudah alih'], 499, 999, 1, 1],
    ['Pro Design', 'Best value', ['Up to 10 pages, user testing, interactive prototypes', 'Sehingga 10 halaman, ujian pengguna, prototaip interaktif'], 1499, 2999, 1, 2],
    ['Complete Suite', '', ['End-to-end design, large projects, design system', 'Reka bentuk menyeluruh, projek besar, sistem reka bentuk'], 3999, 7999, 3, 5]] },
};
// add-on features: about RM500 each, more when the work is bigger; [id, en, ms, lo, hi, what it is en, ms]
const FEATS = [
  ['login', 'User accounts & login', 'Akaun pengguna & log masuk', 500, 700, 'Customers or staff sign up and log in to their own account.', 'Pelanggan atau staf daftar dan log masuk ke akaun sendiri.'],
  ['admin', 'Admin panel', 'Panel admin', 500, 800, 'A back office where you update content, products or records yourself.', 'Bahagian belakang untuk anda kemas kini kandungan, produk atau rekod sendiri.'],
  ['pay', 'Online payment', 'Bayaran online', 500, 900, 'Customers pay online by FPX, card or e-wallet.', 'Pelanggan bayar online melalui FPX, kad atau e-wallet.'],
  ['book', 'Bookings & appointments', 'Tempahan & janji temu', 500, 800, 'Customers pick a service, date and time and book themselves.', 'Pelanggan pilih servis, tarikh dan masa, dan tempah sendiri.'],
  ['dash', 'Reports dashboard', 'Papan pemuka laporan', 500, 900, 'Live charts and reports of sales, bookings or staff.', 'Carta dan laporan jualan, tempahan atau staf yang dikemas kini terus.'],
  ['lang', 'English + BM', 'English + BM', 300, 500, 'The whole site in Bahasa Melayu and English, with a switch.', 'Seluruh laman dalam Bahasa Melayu dan English, dengan butang tukar.'],
  ['integ', 'Connect to your existing system', 'Sambung ke sistem sedia ada', 500, 1500, 'Links to software you already use, like SQL Account or your POS.', 'Sambung ke perisian yang anda sudah guna, seperti SQL Account atau POS.'],
  ['notif', 'WhatsApp, SMS & email alerts', 'Notifikasi WhatsApp, SMS & e-mel', 500, 700, 'Automatic messages such as reminders, receipts and status updates.', 'Mesej automatik seperti peringatan, resit dan status terkini.'],
  ['upload', 'File & document upload', 'Muat naik fail & dokumen', 300, 500, 'Users upload photos or documents, such as receipts or IC copies.', 'Pengguna muat naik gambar atau dokumen, seperti resit atau salinan IC.'],
  ['map', 'Maps & live tracking', 'Peta & penjejakan langsung', 500, 1000, 'Show locations on a map or track deliveries live.', 'Tunjuk lokasi di peta atau jejak penghantaran secara langsung.'],
  ['chat', 'In-app chat', 'Chat dalam aplikasi', 500, 1000, 'Customers and staff message each other inside the app.', 'Pelanggan dan staf berbalas mesej di dalam aplikasi.'],
  ['aibot', 'AI chatbot or assistant', 'Chatbot atau pembantu AI', 500, 1500, 'An AI assistant that answers customer questions any time.', 'Pembantu AI yang menjawab soalan pelanggan pada bila-bila masa.'],
];
// design style multiplies the base package price (not the features)
const LOOKS = [
  ['simple', 'Simple', 'Ringkas', 'Clean layout from a proven template', 'Susun atur kemas dari templat terbukti', 1],
  ['custom', 'Custom', 'Khas', 'Designed around your brand', 'Direka ikut jenama anda', 1.4],
  ['premium', 'Premium', 'Premium', 'Custom design with animation and illustrations', 'Reka bentuk khas dengan animasi dan ilustrasi', 1.8],
];
// features a package already includes, per tier (never charged twice)
const INCL = {
  web: [[], [], ['pay', 'admin', 'login'], ['login', 'admin']],
  sys: [['login', 'admin'], ['login', 'admin'], ['login', 'admin']],
};
const PHASES = [0.3, 0.4, 0.3];
// who each package is for, with an example: [en, ms] per tier
const BEST = {
  web: [['One product, promotion or event. Example: a cake shop\'s promo page.', 'Satu produk, promosi atau acara. Contoh: laman promosi kedai kek.'],
    ['A company that needs a proper profile site. Example: a clinic, contractor or agency.', 'Syarikat yang perlukan laman profil lengkap. Contoh: klinik, kontraktor atau agensi.'],
    ['Selling products online with payment. Example: a tudung or perfume shop.', 'Jual produk online dengan bayaran. Contoh: kedai tudung atau minyak wangi.'],
    ['A site where members or staff log in. Example: a tuition centre with student accounts.', 'Laman di mana ahli atau staf log masuk. Contoh: pusat tuisyen dengan akaun pelajar.']],
  app: [['A first version on Android or iPhone only, to test your idea.', 'Versi pertama di Android atau iPhone sahaja, untuk uji idea anda.'],
    ['An app for customers on both Android and iPhone. Example: a loyalty or booking app.', 'Aplikasi untuk pelanggan di Android dan iPhone. Contoh: aplikasi mata ganjaran atau tempahan.'],
    ['A bigger app with several user types and integrations. Example: delivery with riders and merchants.', 'Aplikasi besar dengan beberapa jenis pengguna dan integrasi. Contoh: penghantaran dengan rider dan peniaga.']],
  sys: [['One shop or team that needs one process done in a system. Example: bookings for a barber, or a queue for a clinic.', 'Satu kedai atau pasukan yang perlukan satu proses dalam sistem. Contoh: tempahan kedai gunting rambut, atau giliran klinik.'],
    ['A growing business with several departments. Example: HR, stock and reports for an F&B outlet.', 'Bisnes yang berkembang dengan beberapa bahagian. Contoh: HR, stok dan laporan untuk kedai makan.'],
    ['Many branches or 50+ staff, with roles and approvals. Example: a franchise HQ with every outlet on one system.', 'Banyak cawangan atau 50+ staf, dengan peranan dan kelulusan. Contoh: HQ francais dengan semua cawangan dalam satu sistem.']],
  iot: [['Testing one idea with a few devices. Example: one temperature sensor in a cold room.', 'Uji satu idea dengan beberapa peranti. Contoh: satu sensor suhu dalam bilik sejuk.'],
    ['A small rollout at one site. Example: 20 sensors with alerts to the manager\'s phone.', 'Pemasangan kecil di satu lokasi. Contoh: 20 sensor dengan amaran ke telefon pengurus.'],
    ['A full rollout across many sites, with device management.', 'Pemasangan penuh di banyak lokasi, dengan pengurusan peranti.']],
  ux: [['Designing a few key screens before you build.', 'Reka beberapa skrin utama sebelum dibina.'],
    ['A full website or app design, tested with real users.', 'Reka bentuk penuh laman web atau aplikasi, diuji dengan pengguna sebenar.'],
    ['Large products that need a design system for a team.', 'Produk besar yang perlukan sistem reka bentuk untuk satu pasukan.']],
};
const BADGE_MS = { 'Most popular': 'Paling popular', 'Recommended': 'Disyorkan', 'Best value': 'Nilai terbaik' };
const defTier = (svc) => Math.max(0, EST[svc].tiers.findIndex((t) => t[1]));
const plan = { svc: 'web', i: defTier('web'), look: 'simple', feats: new Set(), custom: [], level: 0.4, why: [] };
const r500 = (n) => Math.round(n / 500) * 500;
// durations are in weeks; under a week they read as working days (5 a week)
const dur = (a, b) => {
  const ms = lang === 'ms';
  if (b < 1) { const d1 = Math.max(1, Math.round(a * 5)), d2 = Math.max(1, Math.round(b * 5)); return d1 === d2 ? (ms ? `${d1} hari` : `${d1} day${d1 > 1 ? 's' : ''}`) : (ms ? `${d1} hingga ${d2} hari` : `${d1} to ${d2} days`); }
  a = Math.max(1, Math.round(a)); b = Math.max(a, Math.round(b));
  return a === b ? (ms ? `${a} minggu` : `${a} week${a > 1 ? 's' : ''}`) : (ms ? `${a} hingga ${b} minggu` : `${a} to ${b} weeks`);
};
const rmk = (n) => 'RM ' + (n >= 10000 ? +(n / 1000).toFixed(1) + 'k' : Math.round(n).toLocaleString('en-MY'));

function renderTiers() {
  $('#tiers').innerHTML = EST[plan.svc].tiers.map(([n, badge, d, lo, hi], i) => `<button type="button" role="radio" class="tier" aria-checked="${i === plan.i}" data-i="${i}"><b>${n}</b>${badge ? `<span class="badge">${lang === 'ms' ? BADGE_MS[badge] : badge}</span>` : ''}<small>${d[lang === 'ms' ? 1 : 0]}</small><span class="best"><i>${lang === 'ms' ? 'Sesuai untuk' : 'Best for'}</i> ${(BEST[plan.svc][i] || [])[lang === 'ms' ? 1 : 0] || ''}</span><em>${lang === 'ms' ? 'dari' : 'from'} ${rmk(lo)}</em></button>`).join('');
  $$('#tiers .tier').forEach((b) => b.addEventListener('click', () => { plan.i = +b.dataset.i; $$('#tiers .tier').forEach((o) => o.setAttribute('aria-checked', String(o === b))); calc(); }));
  $('#feat-wrap').hidden = plan.svc === 'ux';
  $('#look-wrap').hidden = plan.svc === 'iot';
  $('#looks').innerHTML = LOOKS.map(([id, en, ms, den, dms, x]) => `<button type="button" role="radio" class="look" aria-checked="${plan.look === id}" data-id="${id}"><b>${lang === 'ms' ? ms : en}</b><small>${lang === 'ms' ? dms : den}</small><em>${x === 1 ? (lang === 'ms' ? 'Harga asas' : 'Base price') : '×' + x}</em></button>`).join('');
  $$('#looks .look').forEach((b) => b.addEventListener('click', () => { plan.look = b.dataset.id; $$('#looks .look').forEach((o) => o.setAttribute('aria-checked', String(o === b))); calc(); }));
  $('#feats').innerHTML = FEATS.map(([id, en, ms, lo, hi, den, dms]) => `<button type="button" class="feat" aria-pressed="${plan.feats.has(id)}" data-id="${id}"><span class="plus" aria-hidden="true"></span><b>${lang === 'ms' ? ms : en}</b><small>${lang === 'ms' ? dms : den}</small><em>+${rm(lo)}${hi > lo ? ` – ${rm(hi).replace('RM ', '')}` : ''}</em></button>`).join('');
  $$('#feats .feat').forEach((b) => b.addEventListener('click', () => {
    const id = b.dataset.id;
    plan.feats.has(id) ? plan.feats.delete(id) : plan.feats.add(id);
    b.setAttribute('aria-pressed', String(plan.feats.has(id))); calc();
  }));
}
$$('#seg button').forEach((b) => b.addEventListener('click', () => {
  $$('#seg button').forEach((o) => o.setAttribute('aria-selected', String(o === b)));
  plan.svc = b.dataset.svc; plan.i = defTier(plan.svc); renderTiers(); calc();
}));

// count numbers toward their new value; falls back to an instant set when hidden or reduced
function tween(el, to, fmt) {
  const from = el._v ?? to; el._v = to;
  if (reduced || document.hidden || from === to) { el.textContent = fmt(to); return; }
  const t0 = performance.now(), dur = 600;
  clearTimeout(el._t);
  const step = () => {
    const p = Math.min(1, (performance.now() - t0) / dur), e = 1 - Math.pow(1 - p, 4);
    el.textContent = fmt(from + (to - from) * e);
    if (p < 1) el._t = setTimeout(step, 16);
  };
  step();
}
function calc() {
  const S = EST[plan.svc], [n, , , lo0, hi0, w1, w2] = S.tiers[plan.i];
  const incl = (INCL[plan.svc] || [])[plan.i] || [];
  $$('#feats .feat').forEach((b) => { const on = incl.includes(b.dataset.id); b.classList.toggle('inc', on); b.disabled = on; b.title = on ? (lang === 'ms' ? 'Sudah termasuk dalam pakej' : 'Already included in this package') : ''; b.dataset.inc = on ? (lang === 'ms' ? 'termasuk' : 'included') : ''; });
  const feats = plan.svc === 'ux' ? [] : FEATS.filter(([id]) => plan.feats.has(id) && !incl.includes(id));
  const look = LOOKS.find((l) => l[0] === plan.look), x = plan.svc === 'iot' ? 1 : look[5];
  // prices stay exact (RM399, RM1,999), and the estimate ends in 9 like the packages
  const rnd = Math.round;
  const cust = plan.svc === 'ux' ? [] : plan.custom;
  const lo = rnd(lo0 * x + feats.reduce((a, f) => a + f[3], 0) * S.f + cust.reduce((a, c) => a + c.lo, 0));
  const hi = rnd(hi0 * x + feats.reduce((a, f) => a + f[4], 0) * S.f + cust.reduce((a, c) => a + c.hi, 0));
  const lookName = plan.svc === 'iot' ? '' : (lang === 'ms' ? look[2] : look[1]);
  const wk1 = w1 + Math.ceil((feats.length + cust.length) / 2), wk2 = w2 + feats.length + cust.reduce((a, c) => a + c.weeks, 0);
  $('#sum-pkg').textContent = lookName && plan.look !== 'simple' ? `${n} · ${lookName}` : n;
  // the estimate sits between the minimum and maximum, at the project's complexity level
  const lv = Math.min(Math.max(plan.level, 0), 1), raw = lo + (hi - lo) * lv;
  const est = Math.min(hi, Math.max(lo, Math.round(raw / (raw < 5000 ? 50 : 500)) * (raw < 5000 ? 50 : 500) - 1));
  tween($('#c-lo'), lo, rm); tween($('#c-hi'), hi, rm); tween($('#c-est'), est, rm);
  $('#rb-dot').style.left = lv * 100 + '%';
  $('#rb-band').style.transform = `scaleX(${lv})`;
  $('#est-k').textContent = plan.why.length
    ? (lang === 'ms' ? `Anggaran untuk penerangan anda · tahap kerumitan ${Math.round(lv * 100)}%` : `Estimate for your description · complexity ${Math.round(lv * 100)}%`)
    : (lang === 'ms' ? 'Harga biasa untuk pilihan ini' : 'Typical price for this setup');
  $('#mini-v').textContent = rmk(est);
  // breakdown: every line that adds up to the total
  const ms = lang === 'ms', rng = (a, b) => `${rm(a)} – ${rm(b)}`;
  const rows = [[n, rng(lo0, hi0)]];
  if (x !== 1) rows.push([`${ms ? 'Reka bentuk' : 'Design'}: ${lookName} ×${x}`, '+ ' + rng(lo0 * (x - 1), hi0 * (x - 1))]);
  feats.forEach((f) => rows.push([f[ms ? 2 : 1] + (S.f !== 1 ? ` (×${S.f})` : ''), '+ ' + rng(f[3] * S.f, f[4] * S.f)]));
  incl.forEach((id) => rows.push([FEATS.find((f) => f[0] === id)[ms ? 2 : 1], ms ? 'termasuk' : 'included']));
  cust.forEach((c) => rows.push([(ms ? c.ms : c.en) + ` <i>${ms ? 'khas' : 'custom'}</i>`, '+ ' + rng(c.lo, c.hi)]));
  $('#brk').innerHTML = rows.map(([a, b]) => `<li><span>${a}</span><b>${b}</b></li>`).join('') + `<li class="tot"><span>${ms ? 'Minimum hingga maksimum' : 'Minimum to maximum'}</span><b>${rng(lo, hi)}</b></li><li class="tot"><span>${ms ? `Anggaran pada kerumitan ${Math.round(lv * 100)}%` : `Estimate at ${Math.round(lv * 100)}% complexity`}</span><b>${rm(est)}</b></li>`;
  // timeline: weeks per phase and a likely finish window if work starts next week
  // phases split the middle of the timeline 25 / 55 / 20; short jobs count in working days so the phases fit the total
  const days = Math.max(1, Math.round((wk1 + wk2) / 2 * 5)), inDays = days < 15;
  const unit = inDays ? days : Math.round(days / 5);
  const d1 = Math.max(1, Math.round(unit * 0.25)), d3 = Math.max(1, Math.round(unit * 0.2)), d2 = Math.max(1, unit - d1 - d3);
  const word = inDays ? (ms ? ['hari', 'hari'] : ['day', 'days']) : (ms ? ['minggu', 'minggu'] : ['week', 'weeks']);
  const wl = (a, b) => (a === b ? `${word[0]} ${a}` : `${word[1]} ${a}–${b}`);
  const spans = unit <= 2 ? [[1, unit], [1, unit], [1, unit]] : [[1, d1], [d1 + 1, d1 + d2], [d1 + d2 + 1, d1 + d2 + d3]];
  spans.forEach(([a, b], i) => { $('#wk-' + i).textContent = wl(a, b); });
  const day = (w) => { const d = new Date(); d.setDate(d.getDate() + 7 + w * 7); return d.toLocaleDateString(ms ? 'ms-MY' : 'en-MY', { day: 'numeric', month: 'short', year: 'numeric' }); };
  const from = day(wk1), to = day(wk2), when = from === to ? from : (ms ? `${from} hingga ${to}` : `${from} to ${to}`);
  $('#ready').textContent = ms ? `Jika mula minggu depan, siap sekitar ${when}` : `Start next week and it is ready around ${when}`;
  const wkTxt = dur(wk1, wk2);
  $('#weeks').textContent = lang === 'ms' ? `Lebih kurang ${wkTxt}` : `About ${wkTxt}`;
  PHASES.forEach((p, i) => { $('#ph-' + i).textContent = rm(Math.round(est * p / 10) * 10); });
  const svcName = $(`#seg [data-svc="${plan.svc}"]`).textContent, maint = $('#maint').checked, idea = $('#idea').value.trim().slice(0, 600);
  const fl = feats.map((f) => f[lang === 'ms' ? 2 : 1]).concat(cust.map((c) => (lang === 'ms' ? c.ms : c.en))).join(', ');
  const msg = lang === 'ms'
    ? `Hai Shah Software, saya guna kalkulator di laman anda: ${svcName}, ${n}${lookName && plan.look !== 'simple' ? ` (reka bentuk ${lookName})` : ''}${fl ? ` dengan ${fl}` : ''}. Anggaran ${rm(est)} (julat ${rm(lo)} hingga ${rm(hi)}), lebih kurang ${wkTxt}.${maint ? ' Saya juga mahu penyelenggaraan selepas pelancaran.' : ''}${idea ? ` Penerangan saya: ${idea}` : ''} Boleh kita berbincang?`
    : `Hi Shah Software, I used the estimator on your site: ${svcName}, ${n}${lookName && plan.look !== 'simple' ? ` (${lookName} design)` : ''}${fl ? ` with ${fl}` : ''}. Estimate ${rm(est)} (range ${rm(lo)} to ${rm(hi)}), about ${wkTxt}.${maint ? ' I would also like maintenance after launch.' : ''}${idea ? ` My description: ${idea}` : ''} Can we talk?`;
  $('#plan-wa').href = WA + encodeURIComponent(msg);
}
$('#maint').addEventListener('change', calc);

/* ---------- describe your system: fills the estimator from free text ---------- */
// Set this to your deployed ai-worker URL to use your OpenRouter model; empty = the built-in keyword reader below.
const AI_ENDPOINT = '';
const KW = {
  // [feature id or setting, words in English and BM]
  login: ['login', 'log in', 'sign in', 'user account', 'customer account', 'member', 'log masuk', 'akaun pengguna', 'ahli', 'register', 'daftar'],
  admin: ['admin', 'manage', 'backend', 'back office', 'urus', 'kawal', 'cms', 'update myself', 'kemaskini sendiri'],
  pay: ['payment', 'pay online', 'pay a', 'checkout', 'fpx', 'deposit', 'bayar online', 'bayaran online', 'bayar deposit', 'toyyibpay', 'billplz', 'stripe', 'ipay88', 'online banking'],
  book: ['booking', 'book ', 'appointment', 'reservation', 'schedule', 'tempah', 'tempahan', 'temujanji', 'janji temu', 'jadual', 'slot'],
  dash: ['report', 'dashboard', 'analytics', 'statistic', 'sales report', 'laporan', 'papan pemuka', 'statistik', 'graf', 'chart'],
  lang: ['bm', 'bahasa', 'english', 'bilingual', 'dwibahasa', 'malay', 'melayu', 'multi-language', 'mandarin', 'chinese'],
  integ: ['integrat', 'connect to', 'existing system', 'api', 'sql account', 'autocount', 'xero', 'quickbooks', 'sambung', 'sedia ada', 'erp', 'pos system'],
  notif: ['notification', 'notify', 'reminder', 'alert', 'sms', 'whatsapp notification', 'whatsapp message', 'email notification', 'auto message', 'notifikasi', 'peringatan', 'amaran', 'mesej automatik'],
  upload: ['upload', 'document', 'file', 'attachment', 'receipt', 'muat naik', 'dokumen', 'fail', 'resit', 'gambar'],
  map: ['map', 'gps', 'tracking', 'track ', 'location', 'delivery', 'rider', 'peta', 'lokasi', 'jejak', 'penghantaran'],
  chat: ['chat ', 'live chat', 'in-app chat', 'message each other', 'messaging', 'sembang'],
  aibot: ['ai ', 'a.i', 'chatbot', 'bot', 'gpt', 'claude', 'assistant', 'pembantu', 'artificial'],
};
const MODS = [
  // modules we price as custom work when the description asks for them: [words, en, ms, lo, hi, extra weeks]
  [['inventory', 'stock', 'stok', 'inventori', 'warehouse', 'gudang'], 'Inventory & stock', 'Inventori & stok', 800, 2000, 1],
  [['payroll', 'salary', 'gaji', 'epf', 'kwsp', 'socso', 'perkeso'], 'Payroll (EPF, SOCSO)', 'Gaji (KWSP, PERKESO)', 1000, 2500, 2],
  [['attendance', 'clock in', 'kehadiran', 'punch card', 'cuti', 'leave'], 'Attendance & leave', 'Kehadiran & cuti', 800, 1500, 1],
  [['queue', 'giliran', 'number calling', 'nombor giliran'], 'Queue management', 'Pengurusan giliran', 800, 1500, 1],
  [['loyalty', 'points', 'reward', 'mata ganjaran', 'voucher', 'baucar'], 'Loyalty points & vouchers', 'Mata ganjaran & baucar', 500, 1000, 1],
  [['multi branch', 'multiple branch', 'branches', 'outlets', 'cawangan', 'outlet'], 'Multi-branch setup', 'Sokongan banyak cawangan', 500, 1500, 1],
  [['e-invoice', 'einvoice', 'lhdn', 'myinvois'], 'LHDN e-Invoice (MyInvois)', 'e-Invois LHDN (MyInvois)', 1000, 2500, 1],
  [['qr', 'scan'], 'QR code scanning', 'Imbasan kod QR', 300, 600, 1],
];
// a keyword must start at a word boundary, so 'kedai' never matches 'ai' and 'approval' never matches 'app'
const reEsc = (w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const has = (t, words) => words.some((w) => new RegExp('(?:^|[^a-z0-9])' + reEsc(w.trimStart())).test(t));
function readIdea(raw) {
  const t = ' ' + raw.toLowerCase().replace(/[,.;:!?()"']/g, ' ').replace(/\s+/g, ' ') + ' ';
  let svc = 'web';
  if (has(t, ['ui/ux', 'figma', 'prototype', 'wireframe', 'design only', 'reka bentuk sahaja', 'mockup'])) svc = 'ux';
  if (has(t, ['system', 'sistem', 'portal', 'hr ', 'hrms', 'crm', 'erp', 'payroll', 'gaji', 'inventory', 'stok', 'queue', 'giliran', 'staff', 'staf', 'pekerja', 'pos '])) svc = 'sys';
  if (has(t, ['app ', 'apps ', 'aplikasi', 'android', 'ios', 'iphone', 'play store', 'app store', 'mobile'])) svc = 'app';
  if (has(t, ['iot', 'sensor', 'device', 'peranti', 'arduino', 'esp32', 'raspberry', 'temperature', 'suhu', 'meter', 'cctv'])) svc = 'iot';
  const feats = Object.keys(KW).filter((k) => has(t, KW[k]));
  const mods = MODS.filter((m) => has(t, m[0])).map(([, en, ms, lo, hi, weeks]) => ({ en, ms, lo, hi, weeks }));
  const size = feats.length + mods.length * 2;
  let tier;
  if (svc === 'web') {
    // "1 page", "satu page sahaja", "5 halaman": the page count decides between landing and corporate
    const m = t.match(/(\d+)\s*(?:pages?|halaman|muka surat|mukasurat)/);
    const pages = m ? +m[1] : has(t, ['satu page', 'satu halaman', 'satu muka', 'one page', 'one-page', 'single page', 'single-page', 'sehalaman', 'page sahaja', 'halaman sahaja']) ? 1 : 0;
    tier = has(t, ['landing', 'promo page']) || pages === 1 ? 0
      : feats.includes('admin') || feats.includes('login') || size >= 5 ? 3
      : has(t, ['shop', 'kedai online', 'ecommerce', 'e-commerce', 'jual online', 'cart', 'troli', 'produk']) ? 2 : 1;
  } else {
    // one workflow for one place is the small package; both phone platforms already means a cross-platform app
    const both = svc === 'app' && has(t, ['android']) && has(t, ['ios', 'iphone', 'apple']);
    tier = has(t, ['company-wide', 'seluruh syarikat', 'enterprise', 'thousands', 'ribuan', 'production', 'rollout', 'franchise', 'francais']) || size >= 7 ? 2
      : !both && !(svc === 'iot' && /\b[1-9]\d+\b/.test(t)) && (size <= 1 || has(t, ['simple', 'basic', 'ringkas', 'asas', 'biasa', 'small', 'kecil', 'prototype', 'mvp'])) ? 0 : 1;
  }
  const look = has(t, ['premium', 'luxury', 'mewah', 'animation', 'animasi', 'illustration', 'ilustrasi', 'wow']) ? 'premium'
    : has(t, ['brand', 'jenama', 'custom design', 'unique', 'unik', 'logo', 'corporate', 'korporat']) ? 'custom' : 'simple';
  // complexity inside the range: scale, number of users/branches, custom work, and words like simple/complex
  const ms = lang === 'ms', why = [];
  let level = 0.35;
  const nums = (t.match(/\d[\d,]*/g) || []).map((n) => +n.replace(/,/g, '')).filter((n) => n < 1e6);
  const big = Math.max(0, ...nums);
  if (big >= 500) { level += 0.25; why.push(ms ? `Skala besar (${big})` : `Large scale (${big})`); }
  else if (big >= 50) { level += 0.12; why.push(ms ? `Skala sederhana (${big})` : `Medium scale (${big})`); }
  if (has(t, ['branch', 'cawangan', 'outlet', 'multi'])) { level += 0.08; why.push(ms ? 'Lebih dari satu lokasi' : 'More than one location'); }
  if (has(t, ['integrat', 'sambung', 'api', 'existing system', 'sedia ada'])) { level += 0.08; why.push(ms ? 'Integrasi dengan sistem lain' : 'Integration with another system'); }
  if (has(t, ['complex', 'kompleks', 'advanced', 'canggih', 'custom workflow', 'approval', 'kelulusan', 'real-time', 'masa nyata'])) { level += 0.12; why.push(ms ? 'Aliran kerja kompleks' : 'Complex workflow'); }
  if (mods.length >= 2) { level += 0.06; why.push(ms ? 'Beberapa modul khas' : 'Several custom modules'); }
  if (has(t, ['simple', 'ringkas', 'basic', 'asas', 'biasa', 'tengok', 'small', 'kecil', 'mvp', 'cheap', 'murah', 'bajet'])) { level -= 0.18; why.push(ms ? 'Diminta versi ringkas' : 'A simple version requested'); }
  if (!why.length) why.push(ms ? 'Skop biasa untuk pakej ini' : 'Typical scope for this package');
  return { svc, tier, look, feats, custom: mods, level: Math.min(Math.max(level, 0.1), 0.9), why };
}
function applyIdea(r, source) {
  plan.svc = r.svc; plan.i = Math.min(r.tier, EST[r.svc].tiers.length - 1); plan.look = r.look;
  plan.feats = new Set(r.feats.filter((f) => FEATS.some((x) => x[0] === f)));
  plan.custom = r.custom.slice(0, 5);
  plan.level = Number.isFinite(+r.level) ? Math.min(Math.max(+r.level, 0), 1) : 0.4;
  plan.why = (r.why || []).slice(0, 4).map((w) => String(w).slice(0, 120));
  $$('#seg button').forEach((o) => o.setAttribute('aria-selected', String(o.dataset.svc === plan.svc)));
  renderTiers(); calc();
  const ms = lang === 'ms', T = EST[plan.svc].tiers[plan.i][0];
  const picked = [...plan.feats].map((id) => FEATS.find((f) => f[0] === id)[ms ? 2 : 1]).concat(plan.custom.map((c) => (ms ? c.ms : c.en)));
  const out = $('#idea-out');
  out.innerHTML = `<p><b>${ms ? 'Apa yang kami faham' : 'What we understood'}</b>${source === 'ai' ? ' <span class="ai-tag">AI</span>' : ''}</p>
    <p>${$(`#seg [data-svc="${plan.svc}"]`).textContent} · ${T}</p>
    ${picked.length ? `<ul>${picked.map((p) => `<li>${p}</li>`).join('')}</ul>` : `<p class="muted">${ms ? 'Tiada ciri khusus dikesan. Tambah di bawah jika perlu.' : 'No specific features found. Add them below if you need any.'}</p>`}
    <p class="why-k">${ms ? 'Kenapa harga ini' : 'Why this price'}</p><ul class="why">${plan.why.map((w) => `<li>${w}</li>`).join('')}</ul>
    ${r.note ? `<p class="muted">${r.note}</p>` : ''}`;
  out.hidden = false;
  out.classList.remove('pop'); void out.offsetWidth; out.classList.add('pop');
}
$('#analyse-l').textContent = AI_ENDPOINT ? 'Estimate with AI' : 'Work out my estimate';
$('#analyse').addEventListener('click', async () => {
  const text = $('#idea').value.trim(), btn = $('#analyse');
  if (text.length < 8) { $('#idea').focus(); return; }
  btn.disabled = true; btn.classList.add('busy');
  let r = null, src = 'local';
  if (AI_ENDPOINT) {
    try {
      const res = await fetch(AI_ENDPOINT, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ text, lang }) });
      if (res.ok) { r = await res.json(); src = 'ai'; }
    } catch {}
  }
  if (!r || !r.svc || !EST[r.svc]) { r = readIdea(text); src = 'local'; } else {
    r.custom = (r.custom || []).map((c) => ({ en: String(c.en).slice(0, 60), ms: String(c.ms || c.en).slice(0, 60), lo: Math.min(Math.max(+c.lo || 0, 300), 3000), hi: Math.min(Math.max(+c.hi || 0, +c.lo || 300), 5000), weeks: Math.min(Math.max(+c.weeks || 1, 1), 8) }));
  }
  applyIdea(r, src);
  btn.disabled = false; btn.classList.remove('busy');
});

/* ---------- packages: every category, one tab each, with how to choose and pros and cons ---------- */
// per category: why prices differ, how to choose, size labels, and per tier [pros en, cons en, pros ms, cons ms]
const PKG_INFO = {"web": {"why": ["Prices differ by how many pages the site has and whether it only shows information or also takes orders, payments or logins. More of that means more to build, test and support.", "Harga berbeza ikut bilangan halaman dan sama ada laman hanya paparkan maklumat, atau juga terima pesanan, bayaran atau log masuk. Lebih banyak fungsi, lebih banyak yang perlu dibina, diuji dan disokong."], "choose": ["Only need people to find you and contact you? Landing Page. Need several pages about your company and services? Corporate Website. Want to sell and take payment online? E-Commerce. Need members or staff to log in? Website & System.", "Cuma mahu orang jumpa dan hubungi anda? Landing Page. Perlu beberapa halaman tentang syarikat dan servis? Corporate Website. Mahu jual dan terima bayaran online? E-Commerce. Perlu ahli atau staf log masuk? Website & System."], "size": [["Small", "Kecil"], ["Medium", "Sederhana"], ["Large", "Besar"], ["Custom", "Khas"]], "tiers": [[["Lowest price, can go live in 1 day", "One clear message that drives WhatsApp enquiries"], ["Only one page, so little room for detail", "No online orders, payments or login"], ["Harga paling rendah, boleh siap dalam 1 hari", "Satu mesej jelas yang bawa pertanyaan WhatsApp"], ["Hanya satu halaman, kurang ruang untuk butiran", "Tiada pesanan, bayaran atau log masuk online"]], [["Room to explain your company, services and team", "More pages help you show up on Google"], ["Information only, no online sales", "Text and photos need to come from you"], ["Ruang untuk terangkan syarikat, servis dan pasukan", "Lebih banyak halaman bantu anda muncul di Google"], ["Maklumat sahaja, tiada jualan online", "Teks dan gambar perlu datang daripada anda"]], [["Sell around the clock with FPX and card payment", "Order management to track every sale"], ["Product photos and stock must be kept up to date", "Payment gateways charge a small fee per sale"], ["Jual 24 jam dengan bayaran FPX dan kad", "Pengurusan pesanan untuk jejak setiap jualan"], ["Gambar produk dan stok perlu sentiasa dikemas kini", "Gerbang pembayaran caj sedikit untuk setiap jualan"]], [["Login, admin panel and features built around your process", "Can grow into a full system later"], ["Higher price and a longer build", "Needs clear requirements before we start"], ["Log masuk, panel admin dan ciri yang dibina ikut proses anda", "Boleh berkembang jadi sistem penuh nanti"], ["Harga lebih tinggi dan masa bina lebih lama", "Perlu keperluan yang jelas sebelum mula"]]]}, "app": {"why": ["Prices differ by how many platforms the app runs on (Android, iPhone or both), how many types of users it has and how many systems it connects to.", "Harga berbeza ikut berapa platform aplikasi berjalan (Android, iPhone atau kedua-duanya), berapa jenis pengguna dan berapa sistem lain yang disambung."], "choose": ["Testing an idea with a small group? Basic App. Customers use both Android and iPhone? Cross-platform App. Several user types such as customers, staff and riders, plus integrations? Premium Custom App.", "Mahu uji idea dengan kumpulan kecil? Basic App. Pelanggan guna Android dan iPhone? Cross-platform App. Beberapa jenis pengguna seperti pelanggan, staf dan rider, serta integrasi? Premium Custom App."], "size": [["Small", "Kecil"], ["Medium", "Sederhana"], ["Large", "Besar"]], "tiers": [[["Lowest-cost way to get your own app", "Quick to put in front of real users"], ["One platform only, Android or iPhone", "Basic features and a standard design"], ["Cara paling murah untuk ada aplikasi sendiri", "Cepat untuk diuji oleh pengguna sebenar"], ["Satu platform sahaja, Android atau iPhone", "Ciri asas dan reka bentuk standard"]], [["One app for both Android and iPhone", "Connects to your website or system"], ["Costs more than Basic", "App store reviews add a few days to each release"], ["Satu aplikasi untuk Android dan iPhone", "Sambung ke laman web atau sistem anda"], ["Lebih mahal daripada Basic", "Semakan app store tambah beberapa hari setiap kali kemas kini"]], [["Built for many user types and heavy use", "Full support after launch"], ["Highest cost and the longest build", "Needs a budget for ongoing maintenance"], ["Dibina untuk banyak jenis pengguna dan penggunaan tinggi", "Sokongan penuh selepas dilancarkan"], ["Kos paling tinggi dan masa bina paling lama", "Perlu bajet untuk penyelenggaraan berterusan"]]]}, "sys": {"why": ["Prices differ by how many processes (modules) the system covers, how many users and branches use it, and whether it needs roles, approvals or links to other software.", "Harga berbeza ikut berapa proses (modul) yang diliputi, berapa ramai pengguna dan cawangan, dan sama ada perlu peranan, kelulusan atau sambungan ke perisian lain."], "choose": ["One process in one place, like bookings or a queue? Starter System. Several departments such as HR, stock and reports? Business System. Many branches or 50+ staff with roles and approvals? Company-wide System.", "Satu proses di satu tempat, seperti tempahan atau giliran? Starter System. Beberapa bahagian seperti HR, stok dan laporan? Business System. Banyak cawangan atau 50+ staf dengan peranan dan kelulusan? Company-wide System."], "size": [["Small", "Kecil"], ["Medium", "Sederhana"], ["Large", "Besar"]], "tiers": [[["Low cost, live in 1 to 3 weeks", "Solves your biggest problem first"], ["One workflow only", "Each extra module is added later at extra cost"], ["Kos rendah, siap dalam 1 hingga 3 minggu", "Selesaikan masalah paling besar dahulu"], ["Satu aliran kerja sahaja", "Setiap modul tambahan dikenakan caj kemudian"]], [["Modules share one database, so nothing is entered twice", "Staff and customer portals with reports"], ["Takes 3 to 6 weeks", "Staff need a little training to switch over"], ["Semua modul guna satu pangkalan data, tiada data dimasukkan dua kali", "Portal staf dan pelanggan dengan laporan"], ["Mengambil masa 3 hingga 6 minggu", "Staf perlu sedikit latihan untuk bertukar"]], [["Every branch and department on one system", "Roles, approvals and an audit trail for control"], ["Highest cost, 6 to 12 weeks", "Needs one person in charge on your side"], ["Semua cawangan dan bahagian dalam satu sistem", "Peranan, kelulusan dan jejak audit untuk kawalan"], ["Kos paling tinggi, 6 hingga 12 minggu", "Perlu seorang pegawai bertanggungjawab di pihak anda"]]]}, "iot": {"why": ["Prices differ by the number of devices, how many sites they are installed at, and how they are managed and connected. Hardware is priced separately.", "Harga berbeza ikut bilangan peranti, berapa lokasi dipasang, dan cara ia diurus dan disambung. Perkakasan dicaj berasingan."], "choose": ["Proving an idea with one or a few devices? Prototype. One site with tens of devices and phone alerts? Pilot. Many sites that need device management? Production.", "Mahu buktikan idea dengan satu atau beberapa peranti? Prototype. Satu lokasi dengan puluhan peranti dan amaran telefon? Pilot. Banyak lokasi yang perlu pengurusan peranti? Production."], "size": [["Small", "Kecil"], ["Medium", "Sederhana"], ["Large", "Besar"]], "tiers": [[["Test the idea before spending big", "Live dashboard from day one"], ["A few devices at one site", "Not built for a full rollout yet"], ["Uji idea sebelum belanja besar", "Papan pemuka langsung dari hari pertama"], ["Beberapa peranti di satu lokasi", "Belum sedia untuk pemasangan penuh"]], [["Real use at one site, with alerts to your phone", "Shows the savings before a bigger rollout"], ["Hardware is priced separately", "Covers one site only"], ["Penggunaan sebenar di satu lokasi, dengan amaran ke telefon", "Tunjuk penjimatan sebelum pemasangan lebih besar"], ["Perkakasan dicaj berasingan", "Untuk satu lokasi sahaja"]], [["Many sites, with device management", "Connects to your other systems"], ["Highest cost and the longest setup", "Needs on-site installation and upkeep"], ["Banyak lokasi, dengan pengurusan peranti", "Sambung ke sistem anda yang lain"], ["Kos paling tinggi dan pemasangan paling lama", "Perlu pemasangan dan penjagaan di lokasi"]]]}, "ux": {"why": ["Prices differ by how many screens are designed, and whether they are tested with real users and turned into a design system.", "Harga berbeza ikut berapa skrin direka, dan sama ada diuji dengan pengguna sebenar dan dijadikan sistem reka bentuk."], "choose": ["Need a few key screens to show investors or a developer? Basic Design. Designing a whole website or app? Pro Design. A large product with a team building it? Complete Suite.", "Perlu beberapa skrin utama untuk tunjuk pelabur atau pembangun? Basic Design. Mereka bentuk seluruh laman web atau aplikasi? Pro Design. Produk besar yang dibina oleh satu pasukan? Complete Suite."], "size": [["Small", "Kecil"], ["Medium", "Sederhana"], ["Large", "Besar"]], "tiers": [[["Low cost, ready in about a week", "See your idea before paying to build it"], ["Up to 3 pages only", "No user testing"], ["Kos rendah, siap dalam kira-kira seminggu", "Lihat idea anda sebelum bayar untuk bina"], ["Sehingga 3 halaman sahaja", "Tiada ujian pengguna"]], [["Up to 10 pages with clickable prototypes", "Tested with real users before you build"], ["Design only, building is separate", "Takes 1 to 2 weeks"], ["Sehingga 10 halaman dengan prototaip boleh klik", "Diuji dengan pengguna sebenar sebelum dibina"], ["Reka bentuk sahaja, pembinaan berasingan", "Mengambil masa 1 hingga 2 minggu"]], [["A design system keeps every screen consistent", "Ready for a team of developers"], ["Highest design cost", "Only worth it for larger products"], ["Sistem reka bentuk pastikan semua skrin seragam", "Sedia untuk satu pasukan pembangun"], ["Kos reka bentuk paling tinggi", "Hanya berbaloi untuk produk besar"]]]}};
const PKG_CATS = [['web', 'Website', 'Laman web'], ['app', 'Mobile app', 'Aplikasi mudah alih'], ['sys', 'Business system', 'Sistem perniagaan'], ['iot', 'IoT', 'IoT'], ['ux', 'UI/UX design', 'Reka bentuk UI/UX']];
let pkgSel = 'web';
function renderPkgs() {
  const ms = lang === 'ms', L = ms ? 1 : 0;
  $('#pkg-tabs').innerHTML = PKG_CATS.map(([id, en, m]) => `<button type="button" role="tab" aria-selected="${id === pkgSel}" data-svc="${id}">${ms ? m : en}</button>`).join('');
  $('#pkg-panels').innerHTML = PKG_CATS.map(([id, en, m]) => {
    const I = PKG_INFO[id];
    return `<div class="pk-panel${id === pkgSel ? ' on' : ''}" data-svc="${id}" role="tabpanel">
      <h3 class="sr">${ms ? m : en}</h3>
      <div class="pk-guide"><div><p class="pk-k">${ms ? 'Kenapa harga berbeza' : 'Why prices differ'}</p><p>${I.why[L]}</p></div><div><p class="pk-k">${ms ? 'Cara pilih' : 'How to choose'}</p><p>${I.choose[L]}</p></div></div>
      <div class="pk-grid">${EST[id].tiers.map(([n, , d, lo, , w1, w2], i) => {
        const [pe, ce, pm, cm] = I.tiers[i];
        return `<article class="pk"><p class="pk-size">${I.size[i][L]}</p><h4>${n}</h4><p class="pk-price">${rm(lo)} <span>· ${dur(w1, w2)}</span></p>
          <p class="pk-what">${d[L]}</p><p class="pk-best"><i>${ms ? 'Sesuai untuk' : 'Best for'}</i> ${(BEST[id][i] || [])[L] || ''}</p>
          <ul class="pk-pros" aria-label="${ms ? 'Kelebihan' : 'Pros'}">${(ms ? pm : pe).map((x) => `<li>${x}</li>`).join('')}</ul>
          <ul class="pk-cons" aria-label="${ms ? 'Kekurangan' : 'Cons'}">${(ms ? cm : ce).map((x) => `<li>${x}</li>`).join('')}</ul></article>`;
      }).join('')}</div></div>`;
  }).join('');
  $$('#pkg-tabs button').forEach((b) => b.addEventListener('click', () => { pkgSel = b.dataset.svc; renderPkgs(); $(`#pkg-tabs [data-svc="${pkgSel}"]`).focus(); }));
}

/* ---------- builder to estimator: the widget's button opens the price for the site it drew ---------- */
$('#build-wa').addEventListener('click', (e) => {
  e.preventDefault();
  const kindLabel = $(`[data-kind="${state.kind}"]`).textContent, nm = state.name.trim() || (lang === 'ms' ? 'bisnes saya' : 'my business');
  $('#idea').value = lang === 'ms' ? `Laman web untuk ${nm} (${kindLabel}), satu halaman dengan butang WhatsApp` : `Website for ${nm} (${kindLabel}), one page with a WhatsApp button`;
  $$('#seg button').forEach((o) => o.setAttribute('aria-selected', String(o.dataset.svc === 'web')));
  $('#analyse').click();
  $('.planner').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
});

/* ---------- language ---------- */
function setLang(l) {
  lang = l;
  document.documentElement.lang = l === 'ms' ? 'ms-MY' : 'en-MY';
  $$('[data-i18n]').forEach((el) => {
    const k = el.dataset.i18n;
    if (!(k in EN)) EN[k] = el.textContent;
    el.textContent = l === 'ms' && MS[k] ? MS[k] : EN[k];
  });
  $$('[data-i18n-ph]').forEach((el) => { const k = el.dataset.i18nPh; if (!(k in EN)) EN[k] = el.placeholder; el.placeholder = l === 'ms' && MS[k] ? MS[k] : EN[k]; });
  $$('.lang button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === l)));
  $('#biz').setAttribute('aria-label', t('hero.label', 'Business name'));
  try { localStorage.setItem('lang', l); } catch {}
  renderSite(false); $('#code').innerHTML = hl(codeLines());
  renderWork();
  renderSvc(); renderTiers(); renderPkgs(); calc(); splitHero();
  $('[data-wa="hello"]').href = WA + encodeURIComponent(l === 'ms' ? 'Hai Shah Software, saya ingin tahu lebih lanjut.' : "Hi Shah Software, I'd like to know more.");
}
$$('.lang button').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));

/* ---------- nav, reveals ---------- */
(() => {
  const bar = $('.bar'), menu = $('.menu');
  menu.addEventListener('click', () => { const o = !bar.classList.contains('open'); bar.classList.toggle('open', o); menu.setAttribute('aria-expanded', String(o)); });
  $$('.links a').forEach((a) => a.addEventListener('click', () => { bar.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }));
  const links = $$('.links a'), secs = links.map((a) => $(a.getAttribute('href')));
  let tick = false;
  addEventListener('scroll', () => {
    if (tick) return; tick = true;
    requestAnimationFrame(() => {
      let cur = -1; secs.forEach((s, i) => { if (s && s.getBoundingClientRect().top < innerHeight * 0.35) cur = i; });
      links.forEach((a, i) => a.classList.toggle('on', i === cur)); tick = false;
    });
  }, { passive: true });
})();
let io;
function observe() {
  if (!('IntersectionObserver' in window)) { $$('.rv').forEach((e) => e.classList.add('in')); return; }
  io = io || new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
  $$('.rv:not(.in)').forEach((el, i) => { el.style.setProperty('--d', (i % 3) * 80 + 'ms'); io.observe(el); });
}


/* ---------- contact form: EmailJS, same service and template as the live site ---------- */
(() => {
  const form = $('#contactForm'); if (!form) return;
  const status = $('#f-status'), btn = $('#send');
  const say = (en, ms, cls) => { status.className = 'f-status ' + (cls || ''); status.innerHTML = lang === 'ms' ? ms : en; };
  const ready = () => { if (window.emailjs && !ready.done) { emailjs.init({ publicKey: 'FKkC4eU0EN20aj2R3' }); ready.done = true; } return ready.done; };
  // suggest a subject and message from what the visitor built in the hero
  form.addEventListener('focusin', () => {
    if (!$('#subject').value) $('#subject').value = (lang === 'ms' ? 'Laman web untuk ' : 'Website for ') + (state.name.trim() || 'my business');
    if (!$('#message').value) $('#message').value = lang === 'ms' ? `Saya mahu laman web untuk ${state.name} (${$(`[data-kind="${state.kind}"]`).textContent}).` : `I'd like a website for ${state.name} (${$(`[data-kind="${state.kind}"]`).textContent}).`;
  }, { once: true });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let bad = null;
    ['name', 'email', 'message'].forEach((id) => {
      const el = $('#' + id), ok = el.value.trim() && (id !== 'email' || /^\S+@\S+\.\S+$/.test(el.value.trim()));
      el.setAttribute('aria-invalid', String(!ok)); if (!ok && !bad) bad = el;
    });
    if (bad) { bad.focus(); return say('Please fill in your name, a valid email and a message.', 'Sila isi nama, emel yang sah dan mesej.', 'err'); }
    if (!ready()) return say('The form could not load. Please <a href="https://wa.me/601114196505" target="_blank" rel="noopener">WhatsApp us</a> instead.', 'Borang tidak dapat dimuatkan. Sila <a href="https://wa.me/601114196505" target="_blank" rel="noopener">WhatsApp kami</a>.', 'err');
    const label = btn.querySelector('span'), orig = label.textContent;
    btn.disabled = true; label.textContent = lang === 'ms' ? 'Menghantar…' : 'Sending…'; say('', '');
    const v = (id) => $('#' + id).value.trim();
    emailjs.send('service_y1262c6', 'template_dbr4uds', { name: v('name'), email: v('email'), phone: v('phone'), subject: v('subject'), message: v('message') })
      .then(() => { form.reset(); say('Message sent. We will get back to you soon.', 'Mesej dihantar. Kami akan menghubungi anda tidak lama lagi.', 'ok'); })
      .catch((err) => { console.error('EmailJS Error:', err); say('Sorry, the message did not send. Please try again or <a href="https://wa.me/601114196505" target="_blank" rel="noopener">WhatsApp us</a>.', 'Maaf, mesej tidak dihantar. Cuba lagi atau <a href="https://wa.me/601114196505" target="_blank" rel="noopener">WhatsApp kami</a>.', 'err'); })
      .finally(() => { btn.disabled = false; label.textContent = orig; });
  });
  form.addEventListener('input', (e) => e.target.removeAttribute('aria-invalid'));
})();

/* ---------- Stripe-style details: solid bar on scroll, step line fills when seen ---------- */
(() => {
  const bar = $('.bar');
  const on = () => bar.classList.toggle('solid', scrollY > 10);
  addEventListener('scroll', on, { passive: true }); on();
  const steps = $('.steps');
  if (steps && 'IntersectionObserver' in window) {
    new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) steps.style.setProperty('--prog', 1); }), { threshold: 0.4 }).observe(steps);
  } else if (steps) steps.style.setProperty('--prog', 1);
})();

/* ---------- hero headline words, header progress, editor tilt ---------- */
function splitHero() {
  const h = $('#hero-h'), txt = h.textContent.trim();
  const cut = txt.indexOf('.') + 1;
  let i = 0;
  const words = (s, cls) => s.trim().split(/\s+/).map((w) => `<span class="w${cls}" style="--i:${i++}">${w}</span>`).join(' ');
  h.setAttribute('aria-label', txt);
  h.innerHTML = `<span aria-hidden="true">${words(txt.slice(0, cut), '')} ${words(txt.slice(cut), ' g')}</span>`;
}
(() => {
  const prog = $('.bar .progress');
  const on = () => { const max = document.documentElement.scrollHeight - innerHeight; prog.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`; };
  addEventListener('scroll', on, { passive: true }); on();
  const vis = $('.hero-visual'), ide = $('#builder');
  if (!reduced && matchMedia('(hover: hover) and (pointer: fine)').matches) {
    vis.addEventListener('pointermove', (e) => {
      const r = vis.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      ide.style.transform = `perspective(1400px) rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 5).toFixed(2)}deg)`;
    });
    vis.addEventListener('pointerleave', () => { ide.style.transform = ''; });
  }
})();

/* ---------- start ---------- */
$$('#year, .yr').forEach((el) => { el.textContent = new Date().getFullYear(); });
let saved = 'en'; try { saved = localStorage.getItem('lang') || 'en'; } catch {}
setLang(saved === 'ms' ? 'ms' : 'en');
typeCode();
observe();
setTimeout(() => $$('.rv').forEach((e) => e.classList.add('in')), 4000);
