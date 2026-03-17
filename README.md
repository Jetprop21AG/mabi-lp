# MABI Landing Page

This is the marketing landing page for MABI — Moving Ahead by Innovation.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Runtime**: Bun

## Getting Started

1. Install dependencies:
   ```bash
   bun install
   ```

2. Run the development server:
   ```bash
   bun run dev
   ```

   Open [http://localhost:3003](http://localhost:3003) with your browser to see the result.

## Project Structure

- `src/app`: App Router pages and layout
- `src/components`: Reusable UI components
- `src/app/globals.css`: Global styles and Tailwind v4 configuration

## Deployment

The project is configured for Vercel deployment.

### Static Export vs API Routes

The project includes an API route for the contact form (`/api/contact`).
By default, `output: "export"` is commented out in `next.config.ts` to allow API routes to function.

If you need a purely static export (for hosting on S3, GitHub Pages, etc.), uncomment `output: "export"` in `next.config.ts`.
Note that API routes will NOT work in static export mode. You will need to handle form submissions via an external service or serverless functions deployed separately.
