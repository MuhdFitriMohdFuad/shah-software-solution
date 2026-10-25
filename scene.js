// One 3D scene behind the hero and the portfolio.
// Hero: ice blocks fly in and assemble as you scroll; numbered callouts pin to five of them.
// The structure lifts away as the portfolio scrolls in.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const root = document.documentElement;
const canvas = $('#gl');
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = (t) => 1 - Math.pow(1 - t, 3);
const easeIO = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

let renderer = null;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
} catch {
  renderer = null;
}
if (!renderer) root.classList.add('no-gl');
else start();

function start() {
  root.classList.add('gl');
  const small = () => innerWidth < 900;
  renderer.setPixelRatio(Math.min(devicePixelRatio, small() ? 1.5 : 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  const FOG = new THREE.Color('#dfe6ed');
  scene.background = FOG;
  scene.fog = new THREE.Fog(FOG, 10, 30);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;

  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  const key = new THREE.DirectionalLight('#ffffff', 2.4);
  key.position.set(5, 7, 6);
  const rim = new THREE.DirectionalLight('#9fd4ff', 3);
  rim.position.set(-6, 2, -5);
  scene.add(new THREE.HemisphereLight('#f5f9fc', '#94a2b0', 0.9), key, rim);

  // snowfield and a slow drift of flakes
  const ground = new THREE.Mesh(new THREE.CircleGeometry(40, 64), new THREE.MeshStandardMaterial({ color: '#d5dde5', roughness: 1 }));
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -1.75;
  scene.add(ground);
  const FLAKES = small() ? 260 : 600;
  const flakePos = new Float32Array(FLAKES * 3);
  for (let i = 0; i < FLAKES; i++) {
    flakePos[i * 3] = (Math.random() - 0.5) * 30;
    flakePos[i * 3 + 1] = Math.random() * 14 - 2;
    flakePos[i * 3 + 2] = (Math.random() - 0.5) * 24;
  }
  const flakeGeo = new THREE.BufferGeometry();
  flakeGeo.setAttribute('position', new THREE.BufferAttribute(flakePos, 3));
  const flakes = new THREE.Points(flakeGeo, new THREE.PointsMaterial({ color: '#ffffff', size: 0.045, transparent: true, opacity: 0.85, depthWrite: false }));
  scene.add(flakes);

  // ice: clear on desktop, frosted (no transmission) on phones to stay fast
  const ice = new THREE.MeshPhysicalMaterial({
    color: '#e8f2f9', roughness: 0.16, metalness: 0, ior: 1.31, thickness: 1.1,
    transmission: small() ? 0 : 0.92, attenuationColor: new THREE.Color('#86c3ea'), attenuationDistance: 1.6,
    clearcoat: 1, clearcoatRoughness: 0.18, envMapIntensity: 1.3,
  });
  // cool grey edges read on the light fog, the way frost lines do
  const edgeMat = new THREE.LineBasicMaterial({ color: '#5f7d97', transparent: true, opacity: 0.4 });

  // ---- hero structure: 3 x 3 x 3 blocks ----
  const S = 0.9, GAP = 0.08, STEP = S + GAP;
  const blockGeo = new RoundedBoxGeometry(S, S, S, 4, 0.09);
  const blockEdges = new THREE.EdgesGeometry(new THREE.BoxGeometry(S * 0.995, S * 0.995, S * 0.995));
  const build = new THREE.Group();
  scene.add(build);
  const blocks = [];
  for (let y = -1; y <= 1; y++) for (let x = -1; x <= 1; x++) for (let z = -1; z <= 1; z++) {
    const m = new THREE.Mesh(blockGeo, ice);
    m.add(new THREE.LineSegments(blockEdges, edgeMat));
    blocks.push({
      m,
      to: new THREE.Vector3(x * STEP, y * STEP, z * STEP),
      // scattered to the right and behind, so nothing flies across the headline
      from: new THREE.Vector3(-1 + Math.random() * 7, -1 + Math.random() * 6, -5 + Math.random() * 7),
      rot: new THREE.Euler(Math.random() * 6, Math.random() * 6, Math.random() * 6),
      key: (y + 1) * 10 + Math.random() * 8,
    });
    build.add(m);
  }
  // bottom layer lands first
  blocks.sort((a, b) => a.key - b.key).forEach((b, i) => { b.delay = (i / blocks.length) * 0.55; });
  // the five blocks that carry a callout: front-facing corners and edges
  const tagged = [[1, 1, 1], [-1, 1, 1], [1, -1, 1], [-1, -1, 1], [1, 0, -1]].map(([x, y, z]) =>
    blocks.find((b) => b.to.x === x * STEP && b.to.y === y * STEP && b.to.z === z * STEP));

  // ---- callouts ----
  const stage = $('.hero .stage');
  const leads = $('#leads');
  const labels = $$('#callouts li');
  leads.innerHTML = labels.map(() => '<line /><circle r="3.5" />').join('');
  const lines = [...leads.querySelectorAll('line')], dots = [...leads.querySelectorAll('circle')];
  const v = new THREE.Vector3();

  // ---- pointer parallax ----
  let mx = 0, my = 0, tx = 0, ty = 0;
  if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
    addEventListener('pointermove', (e) => { tx = e.clientX / innerWidth - 0.5; ty = e.clientY / innerHeight - 0.5; }, { passive: true });
  }

  // ---- layout ----
  const resize = () => {
    renderer.setSize(innerWidth, innerHeight, false);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
  };
  addEventListener('resize', resize);
  resize();

  const hero = $('#top'), work = $('#work');
  let last = performance.now();
  let running = true, raf = 0;
  // one loop at a time, however many places ask for a frame
  const kick = () => { if (!raf && running && !document.hidden) { last = performance.now(); raf = requestAnimationFrame(frame); } };
  const vis = new IntersectionObserver((es) => {
    const any = [hero, work].some((el) => { const r = el.getBoundingClientRect(); return r.bottom > 0 && r.top < innerHeight; });
    running = any;
    root.classList.toggle('gl-off', !any);
    if (any) kick();
  });
  vis.observe(hero); vis.observe(work);

  const pct = $('#build-pct');
  let t = 0;

  function frame(now) {
    raf = 0;
    if (!running || document.hidden) return;
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    t += dt;
    mx += (tx - mx) * 0.05;
    my += (ty - my) * 0.05;
    const narrow = small();

    // scroll progress through the pinned hero, and how far the portfolio has come in
    const hr = hero.getBoundingClientRect();
    const heroP = reduced ? 1 : clamp(-hr.top / Math.max(1, hr.height - innerHeight));
    const wr = work.getBoundingClientRect();
    const inWork = narrow ? 0 : clamp((innerHeight - wr.top) / (innerHeight * 0.9)) * clamp(wr.bottom / (innerHeight * 0.6));
    const done = clamp(heroP / 0.85);

    // blocks fly in
    blocks.forEach((b) => {
      const k = easeIO(clamp((done - b.delay) / 0.45));
      b.m.position.lerpVectors(b.from, b.to, k);
      b.m.rotation.set(b.rot.x * (1 - k), b.rot.y * (1 - k), b.rot.z * (1 - k));
      if (k < 1 && !reduced) b.m.position.y += Math.sin(t * 0.8 + b.key) * 0.12 * (1 - k);
    });
    build.position.set(narrow ? 0.2 : 3, (narrow ? 2.45 : 0.15) + inWork * 5, 0);
    // three-quarter view: two faces and the top show, so it reads as a solid block
    build.rotation.y = (reduced ? -0.62 : -0.9 + done * 0.28 + t * 0.03) + mx * 0.25;
    build.scale.setScalar(narrow ? 0.62 : 0.92);
    pct.textContent = String(Math.round(done * 100)).padStart(3, '0');
    stage.classList.toggle('built', done > 0.97 && inWork < 0.05);

    // camera eases from a wide view to a closer three-quarter view
    const camR = (narrow ? 13 : 11.5) - done * 1.6;
    camera.position.set(Math.sin(0.25 + my * 0.05) * camR * 0.25 + mx * 0.6, 1.6 + done * 2.6 - my * 0.4, camR);
    camera.lookAt(narrow ? 0 : 1.2, narrow ? 0.6 : 0.1, 0);

    // flakes drift down
    const fp = flakeGeo.attributes.position;
    if (!reduced) {
      for (let i = 0; i < FLAKES; i++) {
        let y = fp.getY(i) - dt * (0.25 + (i % 7) * 0.04);
        if (y < -1.7) y = 12;
        fp.setY(i, y);
        fp.setX(i, fp.getX(i) + Math.sin(t + i) * dt * 0.05);
      }
      fp.needsUpdate = true;
    }

    renderer.render(scene, camera);

    // pin callouts to their blocks
    if (stage.classList.contains('built') && !narrow) {
      labels.forEach((li, i) => {
        tagged[i].m.getWorldPosition(v).project(camera);
        const x = (v.x * 0.5 + 0.5) * innerWidth, y = (-v.y * 0.5 + 0.5) * innerHeight;
        // labels sit to the right of their block unless that would leave the screen
        const right = x + 70 + li.offsetWidth < innerWidth - 16;
        const lx = x + (right ? 70 : -70), ly = y + (i < 2 ? -46 : 46);
        li.style.transform = `translate(${right ? lx : lx - li.offsetWidth}px, ${ly - li.offsetHeight / 2}px)`;
        lines[i].setAttribute('x1', x); lines[i].setAttribute('y1', y);
        lines[i].setAttribute('x2', lx); lines[i].setAttribute('y2', ly);
        dots[i].setAttribute('cx', x); dots[i].setAttribute('cy', y);
      });
    }
    raf = requestAnimationFrame(frame);
  }
  document.addEventListener('visibilitychange', kick);
  kick();
}
