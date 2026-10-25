// Writes the showcase list and its structured data into work.html, so crawlers see it without JavaScript.
// Run after editing data.js:  node tools/build-showcase.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import vm from 'node:vm';

const root = new URL('..', import.meta.url);
const ctx = {};
vm.runInNewContext(readFileSync(new URL('data.js', root), 'utf8') + '\nthis.WORK = WORK; this.showcaseHTML = showcaseHTML;', ctx);
const { WORK, showcaseHTML } = ctx;

const base = 'https://www.ssoftwaresolution.com/';
const ld = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'CollectionPage', '@id': base + 'work.html#page', url: base + 'work.html', name: 'Portfolio: 7 Live Software Demos | Shah Software Solution', inLanguage: 'en-MY', dateModified: new Date().toISOString().slice(0, 10), isPartOf: { '@id': base + '#website' }, about: { '@id': base + '#business' } },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: base }, { '@type': 'ListItem', position: 2, name: 'Portfolio', item: base + 'work.html' }] },
    { '@type': 'ItemList', name: 'Live demos by Shah Software Solution', itemListElement: WORK.map((w, i) => ({
      '@type': 'ListItem', position: i + 1,
      item: { '@type': 'CreativeWork', name: `${w.name} (${w.en[0]})`, description: w.en[1], url: w.url, image: `${base}images/work/${w.k}-desk.webp`, creator: { '@id': base + '#business' } },
    })) },
  ],
};

const file = new URL('work.html', root);
let html = readFileSync(file, 'utf8');
const swap = (start, end, body) => {
  const a = html.indexOf(start), b = html.indexOf(end, a);
  if (a < 0 || b < 0) throw new Error('marker missing: ' + start);
  html = html.slice(0, a + start.length) + body + html.slice(b);
};
// first run turns the placeholders into start/end markers
html = html.replace('<!--SHOWCASE-->', '<!--SHOWCASE--><!--/SHOWCASE-->').replace('<!--LD-->', '<!--LD--><!--/LD-->');
swap('<!--SHOWCASE-->', '<!--/SHOWCASE-->', showcaseHTML('en'));
swap('<!--LD-->', '<!--/LD-->', '\n' + JSON.stringify(ld, null, 1) + '\n');
writeFileSync(file, html);
console.log(`work.html: ${WORK.length} projects written`);
