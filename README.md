# Next.js Affiliate Starter

## Setup
1. Copy files into a repo.
2. Create `.env` from `.env.example` and set env vars.
3. Install and run locally:

```bash
npm install
npm run dev
```

## Deploy to Vercel
1. Push to GitHub.
2. Import project in Vercel and set env vars: `AFFILIATE_ID`, `NEXT_PUBLIC_SITE_URL`, `CLICK_SALT`.
3. Deploy.

## Notes
- Clicks are logged to `click_logs.txt`. Do not store raw IPs.
- Add more products to `data/products.json` or build an admin.
