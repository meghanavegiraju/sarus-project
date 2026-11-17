# SARUS Infrastructures — website (Next.js)

Next.js (App Router) version of the SARUS redesign. It is a fully static site: no API routes, no server code, no database. All content is in `lib/site.ts` and the page files.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to ./out
npm start          # serve ./out locally
```

`./out` can be deployed to any static host (Vercel, Netlify, GitHub Pages, S3, cPanel…).

## Structure

| Route        | File                     |
|--------------|--------------------------|
| `/`          | `app/page.tsx`           |
| `/about`     | `app/about/page.tsx`     |
| `/highways`  | `app/highways/page.tsx`  |
| `/urban`     | `app/urban/page.tsx`     |
| `/gallery`   | `app/gallery/page.tsx`   |
| `/careers`   | `app/careers/page.tsx`   |
| `/contact`   | `app/contact/page.tsx`   |

- `app/globals.css` — the design's styles, unchanged from the HTML version.
- `components/` — header/drawer, footer, carousel, project tabs, gallery + lightbox, forms, reveal-on-scroll.
- `lib/site.ts` — contact details, projects, carousel slides and gallery images.
- `public/images/hero.jpg` — the hero image (was inlined as base64 in the HTML).

## Forms

The Contact and Careers forms validate in the browser and then open the visitor's email app (`mailto:info@sarus.co.in`) with the message filled in. Nothing is sent to a server. To use a backend or form service later, change `openMail` in `lib/validate.ts` or the submit handlers in `components/ContactForm.tsx` and `components/CareerForm.tsx`.
