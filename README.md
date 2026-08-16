# How to use this package

This zip mirrors your Next.js project's folder structure exactly, so you can
drag-and-drop it in rather than typing files by hand.

## Steps

1. Unzip this file.
2. Open the unzipped folder side-by-side with your `asridge-nextjs` project
   folder (e.g. two Finder/Explorer windows, or two panes in VS Code).
3. Drag the **`src`** folder from this package into your project root,
   choosing **"merge"** (not replace) when prompted. This will:
   - Add `Header.jsx` and `Footer.jsx` into `src/components/`
   - Overwrite `src/app/layout.jsx` (wires up Header/Footer + fonts)
   - Overwrite `src/app/page.jsx` (home stub)
   - Add stub pages for every route: `about/`, `services/`, `passive-house/`,
     `projects/`, `projects/featured/`, `insights/`, `contact/`, and a
     `not-found.jsx`
4. Drag `tailwind.config.js` into your project root, replacing the existing
   one.

## Things to check after merging

- **Do NOT drag/replace `globals.css`** — this package doesn't include one,
  since your existing one (with the Tailwind `@import` directives) is still
  correct and should stay as-is.
- **Logo file**: Header.jsx expects a file at `public/logo.svg`. Add your
  actual logo file there (rename it to `logo.svg`, or update the `src` prop
  in `Header.jsx` if you're using a `.png`).
- **Brand colors**: `tailwind.config.js` has placeholder hex values (`#1B3A5C`
  brand, `#C9A25D` accent) marked `TODO`. Swap these for the real values from
  the current asridge.com site.
- If your existing `src/app/page.jsx` (or any other file) already had content
  you wrote, merging will overwrite it — check your file diffs before
  confirming the merge if you're unsure.

## What's in here

```
src/
├── components/
│   ├── Header.jsx       (logo, nav, Projects dropdown, mobile menu)
│   └── Footer.jsx        (address, contact, company links, back-to-top)
└── app/
    ├── layout.jsx         (wires Header + Footer + fonts into every page)
    ├── page.jsx           (Home stub)
    ├── not-found.jsx      (custom 404)
    ├── about/page.jsx
    ├── services/page.jsx
    ├── passive-house/page.jsx
    ├── projects/page.jsx           → "/projects" (Our Projects)
    ├── projects/featured/page.jsx  → "/projects/featured" (Featured Projects)
    ├── insights/page.jsx
    └── contact/page.jsx

tailwind.config.js         (brand color + font tokens)
```
