import { access, cp, readFile, rm } from 'node:fs/promises';
import path from 'node:path';

const outputDirectory = path.join('dist', 'client');
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/^\/+|\/+$/g, '');

if (basePath) {
  const nestedAssetDirectory = path.join(outputDirectory, basePath, '_next');
  const publishedAssetDirectory = path.join(outputDirectory, '_next');

  await access(nestedAssetDirectory);
  await cp(nestedAssetDirectory, publishedAssetDirectory, {
    recursive: true,
    force: true,
  });
  await rm(path.join(outputDirectory, basePath), { recursive: true, force: true });
}

const html = await readFile(path.join(outputDirectory, 'index.html'), 'utf8');
const publicPrefix = basePath ? `/${basePath}/` : '/';
const referencedAssets = [
  ...html.matchAll(/(?:href|src)="([^"#?]+\.(?:css|js|png|webp|svg))"/g),
].map((match) => match[1]);

for (const assetUrl of new Set(referencedAssets)) {
  if (!assetUrl.startsWith(publicPrefix)) continue;

  const artifactPath = path.join(
    outputDirectory,
    assetUrl.slice(publicPrefix.length),
  );
  await access(artifactPath);
}

console.log(`Verified ${new Set(referencedAssets).size} published asset references.`);
