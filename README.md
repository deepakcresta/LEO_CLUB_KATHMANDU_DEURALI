# Leo Club of Kathmandu Deurali - Website

A premium, fast, and accessible website built with React, Vite, TypeScript, and Tailwind CSS v4.

## Getting Started

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Build for production: `npm run build`

## Updating Content

All site content is stored in `src/content/`. To update the site, you **only** need to edit these files:

*   `site.ts`: Wordmark, navbar, hero text, statement, quote, join text, and footer details.
*   `pillars.ts`: The four core values (Leadership, Service, Integrity, Teamwork).
*   `events.ts`: Add or remove events. The "Upcoming/Recent" badge is computed automatically based on the `parsedDate`.
*   `team.ts`: Board members.
*   `focusAreas.ts`: The index of club projects and activities.

## Changing Colours (Theming)

The entire color scheme is controlled by CSS variables in **`src/styles/theme.css`**. 

To re-theme the site, open `src/styles/theme.css` and modify the hex values under `:root`. 
Tailwind CSS v4 automatically picks up these variables via the `@theme inline` block.

```css
:root {
  --paper: #F6F0E2; /* Change this for a different light background */
  --ink: #0B1B3F;   /* Change this for a different dark background */
  --accent: #C9A24B; /* Change this for a different accent color */
  /* ... */
}
```

## Replacing Photos

Ship your photos to the `public/images/` directory. Ensure they match the filenames referenced in the content files (e.g., `hero.jpg`, `field.jpg`, `event-1.jpg`).

**Performance Tips for Images:**
*   Compress heavily: Keep full-bleed images under 250KB.
*   Use modern formats like WebP or AVIF if possible.
*   Ensure the dimensions roughly match their display size (e.g., max 1600px wide for full bleed).

## Running a Lighthouse Check

To ensure performance remains strictly at 90+:
1. Build the project: `npm run build`
2. Preview the production build: `npm run preview`
3. Open the preview URL in an Incognito window in Google Chrome.
4. Open Developer Tools (F12) -> Lighthouse tab -> Generate report (Mobile).
