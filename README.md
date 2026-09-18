# MSME Utkarsh — App Download Page

A static, frontend-only landing page for the **MSME Utkarsh** Android app
(Central Bank of India). It introduces the app, plays the product film,
walks through what the app does and how to sign in, and lets a visitor
download the APK. No backend, no database, no accounts, no forms — the
whole site is static HTML/CSS/JS served from `dist/` after a build.

Built with React + Vite + TypeScript + Tailwind CSS.

## Sections

- **Hero** (`id="watch"`) — the app pitch, the primary download button,
  and the embedded product film itself (see below) as the hero visual.
- **Highlights** — Simple / Fast / Accessible.
- **Features** — the four things the film demonstrates: role-based
  hierarchy, one-tap follow-ups, the full lead pipeline, and Voice AI
  updates.
- **How to Use** (`GettingStarted`) — the three-step log in → dashboard →
  work-your-leads flow.
- **Signing in** (`LoginGuide`) — the username-format convention
  (`BranchCode.BranchName` etc.), with illustrative examples only. It's
  explicit that these are not real credentials — actual accounts are
  issued by a branch/zonal administrator. Don't turn the examples into
  anything that looks like a real login without checking with whoever
  owns account provisioning.
- **How to Install** / **FAQ** / **Important note** — the original
  APK-sideloading guidance, unchanged.

## Getting started

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Static output is written to `dist/`. Deploy that folder as-is to Vercel,
Netlify, Cloudflare Pages, GitHub Pages, S3, or any static file host.

`npm run preview` serves the built `dist/` output locally if you want to
sanity-check it before deploying.

## Placing the APK

The download button links to `/msme-utkarsh.apk`, served from
[`public/msme-utkarsh.apk`](public/msme-utkarsh.apk).

**Before deploying, replace `public/msme-utkarsh.apk` with the actual
latest APK build.** The file currently in that path is a text placeholder,
not a real APK.

Also update the displayed version string in [`src/config.ts`](src/config.ts)
(`APP_VERSION`) to match the build you place there — it currently mirrors
the version in the mobile app's `app.json` (`0.1.0`) as a starting point.

## The embedded product film

The hero (`src/components/Hero.tsx`) embeds the product film as its main
visual, via an `<iframe src="/film/index.html">`. The film is a
**separate project** — the video repository — and is intentionally not
part of this codebase; nothing in this repo imports its source. Instead,
its production build output is copied into `public/film/` as static
files, the same way you'd vendor any other static asset.

If the film changes, regenerate the embed from the video project without
editing this repo's source:

```bash
# from the video project's own directory
rm -rf dist && npx vite build --base=/film/

# then, from this repo's directory
rsync -a --delete <path-to-video-project>/dist/ public/film/
```

The `--base=/film/` flag is required — it's what makes the film's own
`index.html` reference `/film/assets/...` instead of `/assets/...`, so it
resolves correctly once nested under this site instead of served from its
own root. It's passed on the command line, not written into the video
project's `vite.config`, so the video repo itself is never modified.

`public/film/` is regenerated output, not something to hand-edit — treat
it like `dist/`, not like source.

## Android install guidance

The "How to Install" section and FAQ describe the standard Chrome/Android
prompts people hit when installing an APK from outside the Play Store
("Download blocked", "Install blocked — allow from this source", Play
Protect warnings). These are generic, version-independent Android
behaviors, not specific to this app — update that copy in
[`src/components/HowToInstall.tsx`](src/components/HowToInstall.tsx) and
[`src/components/Faq.tsx`](src/components/Faq.tsx) if Android's flow
changes.

## Branding

The Central Bank of India logo and the MSME Utkarsh app icon used
throughout the site (`src/assets/`, `public/favicon.png`,
`public/og-image.png`) were copied from the existing MSME Utkarsh mobile
app repository (`mobile/src/assets/`). The color palette was derived from
that app's existing UI (banking blues, extracted from its component
styles) rather than invented. The hero's phone visual is an abstract,
non-representational mockup (brand color + logo + placeholder content
bars) — not a real app screenshot, since none exist in the source repo.

## What this site intentionally does not have

No database, API routes, authentication, user accounts, uploads, or any
server-side code. The APK is a static asset — deploying this project is
just "build and host the static files."

## Left for you to fill in / configure

- **The real APK** — see "Placing the APK" above.
- **`APP_VERSION`** in `src/config.ts` — update to match whatever APK you
  place in `public/`.
- No launch dates, eligibility criteria, or support contact details are
  shown, because none were confirmed as part of this project — add them
  yourself (e.g. in `src/components/Highlights.tsx` or `Faq.tsx`) if and
  when they're finalized.
- **The username format in `src/components/LoginGuide.tsx`** —
  `BranchCode.BranchName` (and the region/zone-code convention above it)
  is presented there as an illustrative example, not confirmed against
  the actual account-provisioning system. If the real convention differs,
  update the `usernameExamples` array and the surrounding copy before
  this goes live — don't let an invented format sit on a page real users
  might try to log in from.
# MSME-Utkarsh-Website
