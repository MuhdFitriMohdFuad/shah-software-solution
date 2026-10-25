// Live demos, shared by the homepage and the showcase page.
// k: image name in images/work, f: filter group, en/ms: [type, what it does], good: [who it suits en, ms]
const WORK = [
  { k: 'hrms', f: 'ops', name: 'Nusa HR', url: 'https://demo-hrms.ssoftwaresolution.com/',
    en: ['HR system', 'Attendance, leave, claims and payroll in one place, from clock-in to payslip.'], ms: ['Sistem HR', 'Kehadiran, cuti, tuntutan dan gaji di satu tempat, dari daftar masuk ke slip gaji.'],
    good: ['Companies that manage staff attendance, leave and payroll.', 'Syarikat yang mengurus kehadiran, cuti dan gaji staf.'] },
  { k: 'eventoperation', f: 'ops', name: 'Stageflow', url: 'https://demo-eventoperation.ssoftwaresolution.com/',
    en: ['Event operations', 'Plan tasks, vendors, budget and staff, then run event day from a live control room.'], ms: ['Operasi acara', 'Rancang tugasan, vendor, bajet dan staf, kemudian kendalikan hari acara dari bilik kawalan langsung.'],
    good: ['Event organisers, venues and corporate event teams.', 'Penganjur acara, dewan dan pasukan acara korporat.'] },
  { k: 'servicequeue', f: 'queue', name: 'Gilir', url: 'https://demo-servicequeue.ssoftwaresolution.com/',
    en: ['Service queue', 'Customers take a number from their phone and see their place in line.'], ms: ['Giliran servis', 'Pelanggan ambil nombor dari telefon dan lihat giliran mereka.'],
    good: ['Clinics, service centres and any counter with a queue.', 'Klinik, pusat servis dan mana-mana kaunter yang ada giliran.'] },
  { k: 'restaurantqueue', f: 'queue', name: 'Tableline', url: 'https://demo-restaurantqueue.ssoftwaresolution.com/r/BAYU-PJ',
    en: ['Restaurant waitlist', 'Diners join the waitlist from the board and get told when their table is ready.'], ms: ['Senarai menunggu restoran', 'Pelanggan sertai senarai menunggu dan dimaklumkan bila meja sedia.'],
    good: ['Restaurants and cafés with a waiting line at peak hours.', 'Restoran dan kafe yang ada barisan menunggu pada waktu puncak.'] },
  { k: 'booking', f: 'queue', name: 'Folk Barber', url: 'https://demo-booking.ssoftwaresolution.com/services',
    en: ['Booking system', 'Choose a service, a barber and a time, then track the booking.'], ms: ['Sistem tempahan', 'Pilih servis, tukang gunting dan masa, kemudian jejak tempahan.'],
    good: ['Barbers, salons, spas and any appointment-based business.', 'Kedai gunting rambut, salun, spa dan bisnes yang guna temujanji.'] },
  { k: 'ecommerce', f: 'web', name: 'Sora Parfum', url: 'https://demo-ecommerce.ssoftwaresolution.com/',
    en: ['Online store', 'A perfume shop with product pages, bag and checkout.'], ms: ['Kedai dalam talian', 'Kedai minyak wangi dengan halaman produk, troli dan pembayaran.'],
    good: ['Brands selling products online, from perfume to tudung.', 'Jenama yang menjual produk online, dari minyak wangi hingga tudung.'] },
  { k: 'landingpage', f: 'web', name: 'Ruang Studio', url: 'https://demo-landingpage.ssoftwaresolution.com/',
    en: ['Landing page', 'An interior design studio site built to get consultation bookings.'], ms: ['Laman pendaratan', 'Laman studio reka bentuk dalaman untuk dapatkan tempahan konsultasi.'],
    good: ['Service businesses that want enquiries, like studios and consultants.', 'Bisnes servis yang mahu pertanyaan, seperti studio dan perunding.'] },
];

// one showcase entry; used by work.js in the browser and by the build step that writes the static page
function showcaseHTML(lang) {
  const ms = lang === 'ms', L = ms ? 1 : 0, total = String(WORK.length).padStart(2, '0');
  return WORK.map((w, i) => {
    const [kind, desc] = w[lang] || w.en, host = w.url.replace(/^https:\/\//, '').replace(/\/$/, '');
    const wa = 'https://wa.me/601114196505?text=' + encodeURIComponent(ms ? `Hai Shah Software, saya mahu sistem seperti ${w.name} (${kind}).` : `Hi Shah Software, I'd like a system like ${w.name} (${kind}).`);
    return `<li class="sc-item" id="${w.k}" data-f="${w.f}">
      <div class="sc-media">
        <a class="ice-shot" href="${w.url}" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true"><span class="shot-bar"><i></i><i></i><i></i><span>${host}</span></span><img src="images/work/${w.k}-desk.webp" width="1200" height="750" loading="${i < 1 ? 'eager' : 'lazy'}" alt="${w.name} ${kind.toLowerCase()} on desktop"></a>
        <img class="sc-phone" src="images/work/${w.k}-phone.webp" width="390" height="844" loading="lazy" alt="${w.name} on a phone">
      </div>
      <div class="sc-info">
        <p class="hud-k">${ms ? 'PROJEK' : 'PROJECT'}_${String(i + 1).padStart(2, '0')} <span>/ ${total}</span></p>
        <h2>${w.name}</h2>
        <p class="ice-kind">${kind}</p>
        <p class="sc-desc">${desc}</p>
        <p class="sc-for"><i>${ms ? 'Sesuai untuk' : 'Good for'}</i> ${w.good[L]}</p>
        <div class="sc-act">
          <a class="btn btn-dark" href="${w.url}" target="_blank" rel="noopener">${ms ? 'Buka demo' : 'Open live demo'} <span class="arr" aria-hidden="true">↗</span></a>
          <a class="btn btn-ghost" href="${wa}" target="_blank" rel="noopener">${ms ? 'Bina yang macam ini' : 'Build one like this'} <span class="arr" aria-hidden="true">›</span></a>
        </div>
      </div>
    </li>`;
  }).join('');
}
