// Static site: nothing to compile. Validates dist/ so CI/hosts fail fast on a broken deploy.
import { access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const need = ['index.html','styles.css','app.js','motion.js','interactions.js','ornaments.js','denim-art.js','catalog.js','ribbon-geometry.js',
  ...['black','blue','gold','green','ivory','lilac','pink','red','weave'].map(n => `assets/${n}.webp`)];
let bad = 0;
for (const f of need) { try { await access(fileURLToPath(new URL(`../dist/${f}`, import.meta.url))); } catch { console.error('missing dist/' + f); bad++; } }
if (bad) process.exit(1);
console.log('dist/ OK - publish directory: dist');
