// Showcase page: language, filters, menu and the press-in hover on screenshots.
const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
let lang = 'en';

const MS = {
  skip: 'Langkau ke kandungan', 'nav.services': 'Servis', 'nav.work': 'Projek', 'nav.pricing': 'Harga', 'nav.faq': 'Soalan', 'nav.contact': 'Hubungi', 'nav.wa': 'WhatsApp kami',
  'sc.k': 'Portfolio', 'sc.h': 'Tujuh sistem, hidup dan boleh dicuba.', 'sc.p': 'Setiap projek di bawah ialah demo yang berfungsi. Buka, klik dan cuba sendiri dengan data contoh. Bila jumpa yang sesuai, kami bina versi untuk bisnes anda.',
  'work.all': 'Semua', 'work.ops': 'Sistem perniagaan', 'work.queue': 'Giliran & tempahan', 'work.web': 'Kedai & laman web',
  'sc.ch': 'Ada sistem dalam fikiran?', 'sc.cp': 'Terangkan apa yang anda mahu dan dapatkan anggaran harga serta tempoh dalam seminit.', 'sc.c1': 'Anggar kos projek saya', 'sc.c2': 'Mula di WhatsApp',
  'sc.lic': 'Demo menggunakan syarikat rekaan dan data contoh. Sistem yang kami bina untuk anda dilesenkan untuk perniagaan anda; kod sumber kekal milik Shah Software Solution.',
};
const EN = {};
function setLang(l) {
  lang = l;
  document.documentElement.lang = l === 'ms' ? 'ms-MY' : 'en-MY';
  $$('[data-i18n]').forEach((el) => {
    const k = el.dataset.i18n;
    if (!(k in EN)) EN[k] = el.textContent;
    el.textContent = l === 'ms' && MS[k] ? MS[k] : EN[k];
  });
  $$('.lang button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === l)));
  try { localStorage.setItem('lang', l); } catch {}
  $('#showcase').innerHTML = showcaseHTML(l);
  applyFilter();
}
$$('.lang button').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));

// filters, with a count per group
let filter = 'all';
function applyFilter() {
  $$('.sc-item').forEach((el) => { el.hidden = filter !== 'all' && el.dataset.f !== filter; });
}
$$('.filters button').forEach((b) => {
  const n = b.dataset.f === 'all' ? WORK.length : WORK.filter((w) => w.f === b.dataset.f).length;
  b.insertAdjacentHTML('beforeend', ` <span class="n">${n}</span>`);
  b.addEventListener('click', () => {
    filter = b.dataset.f;
    $$('.filters button').forEach((o) => o.setAttribute('aria-pressed', String(o === b)));
    applyFilter();
  });
});

// header: frosted once scrolled, menu on phones
const bar = $('.bar'), menu = $('.menu');
addEventListener('scroll', () => bar.classList.toggle('solid', scrollY > 10), { passive: true });
bar.classList.toggle('solid', scrollY > 10);
menu.addEventListener('click', () => { const o = !bar.classList.contains('open'); bar.classList.toggle('open', o); menu.setAttribute('aria-expanded', String(o)); });

// hovering a screenshot presses it in: the side under the pointer tips away
if (!reduced && matchMedia('(hover: hover) and (pointer: fine)').matches) {
  $('#showcase').addEventListener('pointermove', (e) => {
    const el = e.target.closest('.ice-shot');
    if (!el) return;
    const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1400px) rotateY(${(x * 7).toFixed(2)}deg) rotateX(${(-y * 7).toFixed(2)}deg) scale(0.985)`;
  });
  $('#showcase').addEventListener('pointerout', (e) => {
    const el = e.target.closest('.ice-shot');
    if (el && !el.contains(e.relatedTarget)) el.style.transform = '';
  });
}

$$('.yr').forEach((el) => { el.textContent = new Date().getFullYear(); });
let saved = 'en'; try { saved = localStorage.getItem('lang') || 'en'; } catch {}
setLang(saved === 'ms' ? 'ms' : 'en');
