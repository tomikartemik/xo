# Xouston Redesign (Next.js)

## Run

```bash
npm install
npm run dev
```

## Environment

Create `.env.local` from `.env.example`:

```bash
cp .env.example .env.local
```

Set:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

Without these vars, lead form submissions return an error by design.

## Implemented

- RU/EN localized routes: `/ru`, `/en`
- Auto locale redirect by cookie -> geo header -> `Accept-Language`
- Homepage with service grid, trust blocks, estimate form, and lead form
- Blog section and post pages
- Legal pages: Privacy, Terms, Cookies
- Lead API route posting to Telegram Bot API

## Editing Price Ranges

Adjust estimate ranges and multipliers in:

- `src/content/pricing.ts`
