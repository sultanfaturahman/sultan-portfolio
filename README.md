# Muhamad Sultan Faturahman — Portfolio

Personal portfolio for Muhamad Sultan Faturahman, an Informatics graduate and full-stack web developer focused on React, backend services, API integration, databases, debugging, and technical documentation.

## What this portfolio highlights

- Experience maintaining and extending existing production applications.
- Frontend and backend work across membership, e-commerce, and MSME operations.
- Business workflows including authentication, payments, validation, inventory, transactions, and reporting.
- Selected case studies with explicit scope, technical contributions, and public evidence.
- Responsive, accessible presentation with reduced-motion support.

## Featured work

- **Teelite Club** — React, Vite, TypeScript, Tailwind CSS, and Supabase storefront.
- **SiNaik Finance** — React and TypeScript financial management product using Supabase Auth, PostgreSQL, Edge Functions, and TanStack Query.
- **The Blue Economist** — React membership platform with Midtrans payment and digital certification workflows.

## Tech stack

- React 19 and TypeScript
- Create React App
- Tailwind CSS
- Framer Motion
- React Testing Library
- Netlify

## Run locally

```bash
npm install
npm start
```

The development site runs at [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm test -- --watchAll=false
npm run build
```

## Project structure

```text
src/
├── components/     # Page sections and shared motion primitives
├── App.tsx         # Page composition
├── App.test.tsx    # Core content smoke tests
└── index.css       # Tailwind layers and shared design tokens

public/
├── images/         # Profile, project, and social preview assets
├── index.html      # Metadata and structured data
└── manifest.json   # Installable web app metadata
```

## Deployment

The project includes `netlify.toml` for Netlify builds, SPA redirects, caching, and security headers. The production build is generated in `build/`.

## Links

- [Live portfolio](https://sultan-portfolio.netlify.app/)
- [GitHub](https://github.com/sultanfaturahman)
- [LinkedIn](https://www.linkedin.com/in/sultanfaturahman/)
