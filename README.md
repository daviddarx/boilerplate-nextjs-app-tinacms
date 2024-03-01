This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) (app router) and using [TinaCMS](https://github.com/tinacms/tinacms) (Tina Cloud).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Add your Tina Cloud ID & Token in `cp .env.example .env`.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Open [http://localhost:3000/admin/](http://localhost:3000/admin/) to see the admin.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdaviddarx%2Fboilerplate-nextjs-tinacms&env=TINA_CLIENT_ID,TINA_TOKEN,VERCEL_GIT_COMMIT_REF&envDescription=API%20Keys%20for%20Tina%20Cloud)
