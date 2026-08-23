# Arthur Salmoria — Portfolio

Professional portfolio focused on backend engineering, blockchain infrastructure,
distributed systems, financial workflows, and security.

## Live site

[personalwebsite-tau-kohl.vercel.app](https://personalwebsite-tau-kohl.vercel.app/)

## Featured projects

- [Nexus Market Observer](https://github.com/salmoriadev/nexus-market-observer) —
  fault-tolerant Rust market-data service with PostgreSQL history and observability.
- [TrustWork](https://github.com/salmoriadev/TrustWork) — Base Sepolia milestone
  escrow, evidence digests, and an idempotent event indexer. Testnet only.
- [FinanceBuddy](https://github.com/salmoriadev/FinanceBuddy) — modular Node.js and
  NestJS backend for manually managed personal-finance workflows.

Additional project cards cover [AegisIR](https://github.com/salmoriadev/aegisir),
[IpeSign](https://github.com/salmoriadev/IpeSign), and a
[digital-signature implementation in Go](https://github.com/salmoriadev/aprendendo_go/tree/main/cripto).
Each displayed project includes a real product capture or a repository-based
implementation visual that is explicitly labeled when it is not a product screenshot.

## Technology

The site remains intentionally small: semantic HTML5, modern CSS, optimized WebP
assets, lightweight SVG diagrams, and a small vanilla JavaScript enhancement for the
mobile navigation. There is no client-side framework or runtime data dependency. The
visual system uses warm paper tones, deep blue, and a restrained clay accent with
system sans-serif typography and monospace reserved for technical tags.

## Local development

Serve the repository from its root so absolute and relative asset links behave like
the production deployment:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Accessibility and performance

- Semantic landmarks and a single page-level heading
- Skip link, visible focus states, keyboard-operable navigation, and 44 px controls
- Responsive layouts tested from 360 px through 1440 px
- Reduced-motion support and useful alternative text
- Width and height attributes on images to reduce layout shift
- No framework, icon font, analytics, or runtime API request

Lighthouse results measured from the production deployment on 2026-08-22:

| Profile | Performance | Accessibility | Best Practices | SEO |
| --- | ---: | ---: | ---: | ---: |
| Mobile | 99 | 100 | 100 | 100 |
| Desktop | 100 | 100 | 100 | 100 |

Scores are measurements, not guarantees; browser, network, and hosting conditions can
change them.

## Deployment

The repository is deployed as a static site on Vercel. No build command or server
runtime is required.

## License

The portfolio's personal copy and resume are not licensed for reuse.
Individual featured projects use the licenses declared in their own repositories.

Originally created as a static web-development project and later redesigned into a
professional engineering portfolio.
