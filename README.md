# TBSP website

The first public website for TBSP, built as a static Vinext application.

## Local development

```bash
pnpm install
pnpm dev
```

## Production build

```bash
pnpm build
```

The GitHub Pages workflow sets `NEXT_PUBLIC_BASE_PATH` from the repository name, builds the static site into `dist/client`, and deploys that directory whenever `main` is updated.

## Content sources

The homepage narrative follows the approved information architecture and brand direction maintained in the parent TBSP workspace under `plans/current`.
