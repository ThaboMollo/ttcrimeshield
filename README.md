# TT Crimeshield Protection & Security

Single-page marketing site with a WhatsApp-driven service request builder.

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind v4 · TypeScript

```bash
npm run dev     # http://localhost:3000
npm run build
```

## How it is put together

Everything the page says about the business comes from two files, so content changes
never require touching components.

| File | Holds |
|---|---|
| `lib/site.ts` | Company name, taglines, phone, WhatsApp number, emails, PSIRA number |
| `lib/services.ts` | The service catalogue — names, descriptions, prices, and the questions each service asks |
| `lib/whatsapp.ts` | Builds the pre-filled WhatsApp message and the `wa.me` link |

### Adding or changing a service

Append to the `services` array in `lib/services.ts`. It will appear automatically in the
request builder, and — depending on its `category` — in the relevant page section.

```ts
{
  id: "residential",                 // unique, used as the selection key
  name: "Residential Guarding",
  tagline: "Eyes on your home",
  description: "24-hour static guarding for private residences.",
  category: "close-protection",      // see `categories`
  icon: "shield-user",               // see components/Icon.tsx
  price: "From R12 000 / month",     // optional
  highlights: ["Static guards", "Patrols"],
  fields: [f.startDate, f.area],     // questions the WhatsApp message will carry
}
```

Fields are declared once in the `f` object and reused. When a visitor selects several
services, the builder shows the **union** of their fields with duplicates removed, so
nobody is asked for the same date twice.

### Changing the WhatsApp number

`site.whatsapp.e164` in `lib/site.ts` — international format, no `+` or spaces
(`065 805 5466` → `27658055466`). `site.phone.href` is the separate voice line.

## How the request feature works

The builder is entirely client-side. It assembles a formatted message and opens
`https://wa.me/<number>?text=<encoded message>`, which pre-fills WhatsApp on mobile and
WhatsApp Web on desktop. The visitor presses send themselves.

Because nothing is stored server-side, a request that is built but never sent is not
recorded anywhere. If capturing those becomes important, add a route handler that emails
a copy before the link opens.

## Brand assets

`brand-source/` holds the original flyers. `public/logo-shield.png`, `public/badge-bounty.png`
and everything in `public/img/` were extracted from them. Replace `public/logo-shield.png`
and `app/icon.png` when the official logo files arrive — no code changes needed.
