import { access, cp, readFile, readdir, rm } from 'node:fs/promises';
import path from 'node:path';

const outputDirectory = path.join('dist', 'client');
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/^\/+|\/+$/g, '');

if (basePath) {
  const nestedAssetDirectory = path.join(outputDirectory, basePath, '_next');
  const publishedAssetDirectory = path.join(outputDirectory, '_next');

  try {
    await access(nestedAssetDirectory);
    await cp(nestedAssetDirectory, publishedAssetDirectory, {
      recursive: true,
      force: true,
    });
    await rm(path.join(outputDirectory, basePath), { recursive: true, force: true });
  } catch {
    await access(publishedAssetDirectory);
  }
}

const publicPrefix = basePath ? `/${basePath}/` : '/';
async function findHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const entryPath = path.join(directory, entry.name);
      return entry.isDirectory()
        ? findHtmlFiles(entryPath)
        : Promise.resolve(entry.name.endsWith('.html') ? [entryPath] : []);
    }),
  );
  return files.flat();
}

const htmlFiles = await findHtmlFiles(outputDirectory);
const checkedUrls = new Set();

for (const htmlFile of htmlFiles) {
  const html = await readFile(htmlFile, 'utf8');
  const localUrls = [...html.matchAll(/(?:href|src)="([^"#]+)"/g)]
    .map((match) => match[1])
    .filter((url) => url.startsWith(publicPrefix));

  for (const localUrl of new Set(localUrls)) {
    const pathname = localUrl.split(/[?#]/, 1)[0];
    const relativePath = pathname.slice(publicPrefix.length);
    const candidates = relativePath
      ? [
          path.join(outputDirectory, relativePath),
          path.join(outputDirectory, `${relativePath}.html`),
          path.join(outputDirectory, relativePath, 'index.html'),
        ]
      : [path.join(outputDirectory, 'index.html')];

    let found = false;
    for (const candidate of candidates) {
      try {
        await access(candidate);
        found = true;
        break;
      } catch {
        // Try the next static-hosting representation.
      }
    }

    if (!found) {
      throw new Error(`Missing published target for ${localUrl} referenced by ${htmlFile}`);
    }
    checkedUrls.add(localUrl);
  }
}

console.log(`Verified ${checkedUrls.size} published links and asset references across ${htmlFiles.length} pages.`);
