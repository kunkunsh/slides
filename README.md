# Slidev Monorepo Template

GitHub Pages Demo: https://huakunshen.github.io/slidev-monorepo/

Template for building and serving multiple slidev slides on a single website.

The template contains a website entrypoint written in vitepress in [./docs](./docs/).
You can add description and links for each slide.

## Usage

### Build

Build all slides and a vitepress entrypoint, artifact will be produced at `./dist`.

```bash
bun run build
bun run preview
```

### New Slide

```bash
cd slides
bunx create-slidev # don't install dependency, dependencies for this monorepo will be managed by bun
```

Modify the `build` script for each newly created slide like the following

```
slidev build --base /tutorial2/ --out ../../dist/tutorial2
```

## Deployment


> [!IMPORTANT]
> You will have to make changes to the base url config

The demo website is deployed to GitHub Pages at https://huakunshen.github.io/slidev-monorepo/

GitHub pages for a repo uses repo name as the base path, and can cause problems when deploying websites on it.
The base path for the demo website is `/slidev-monorepo`. For your own deployment you will have to change it to your repo name.

If you want to deploy the site to the root of a domain (e.g. slides.example.com), you will also have to make changes to the base url config in a few places

1. [./docs/.vitepress/config.ts](./docs/.vitepress/config.ts)
   1. The line `base: "/slidev-monorepo/",` will have to be changed to `base: "/",` or simply removed
2. In `package.json` of each slide package, the base path in build script needs to be updated
   ```bash
    slidev build --base /slidev-monorepo/slides/tutorial1/ --out ../../dist/slides/tutorial1
    slidev build --base /slides/tutorial1/ --out ../../dist/slides/tutorial1
   ```
