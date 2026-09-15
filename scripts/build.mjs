import { cp, mkdir, readFile, stat } from 'node:fs/promises';

const html = await readFile('index.html', 'utf8');
const css = await readFile('fonts/fonts.css', 'utf8');
const js = await readFile('app.js', 'utf8');
new Function(js);
for (const match of (html + js).matchAll(/images\/[a-zA-Z0-9.-]+/g)) {
  if (!(await stat(match[0])).size) throw new Error(`Empty image: ${match[0]}`);
}
for (const path of ['media/banner-3.mp4', 'media/banner-3-poster.jpg', ...[...css.matchAll(/url\(([^)]+)\)/g)].map(match => `fonts/${match[1]}`)]) {
  if (!(await stat(path)).size) throw new Error(`Empty asset: ${path}`);
}
for (const match of html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)) {
  new Function(match[1]);
}
await mkdir('dist', { recursive: true });
for (const path of ['index.html', 'app.js', 'images', 'media', 'fonts', '.nojekyll', 'CNAME']) {
  await cp(path, `dist/${path}`, { recursive: true });
}
console.log('Built site with validated scripts, images, video, fonts, and custom domain.');
