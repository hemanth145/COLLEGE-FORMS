# Meridian University — Admission Hub

A React + TypeScript rebuild of the original static "EduConnect Admission Hub" demo — now with
real, working registration storage backed by Supabase (Postgres), plus expanded content
(academics, campus gallery, admissions FAQ, stats) and an admin view of submitted applications.

**This is a fictional university built for a portfolio project. It is not a real institution.**

## Tech stack

- React 18 + TypeScript + Vite
- React Router (client-side routing, with a GitHub Pages SPA-routing workaround)
- Supabase (Postgres + `@supabase/supabase-js`) for the registration database

## Data & privacy design

- The `registrations` table has Row Level Security enabled. The `anon` role can **insert**
  (submit the form) but has **no read access** to the table at all — phone numbers and home
  addresses are never publicly queryable.
- The `/admin` page reads from a separate `public_registrations` **view** that only exposes
  first/last name, course, gender, and marks — never phone or address.
- The registration form displays a demo notice asking users not to submit real personal
  information, since this is a portfolio project with a public database.

## Running locally

Requires Node.js 18+.

```bash
npm install
cp .env.example .env   # then fill in your Supabase project URL + anon key
npm run dev
```

## Build

```bash
npm run build
```

## Deploying

Live at: https://hemanth145.github.io/COLLEGE-FORMS/

Pushes to `main` build and deploy automatically via `.github/workflows/deploy.yml`. The workflow
needs two repository **variables** (Settings → Secrets and variables → Actions → Variables):

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

(These are the public anon key and project URL — safe to expose in a client-side app, since all
access is governed by the RLS policies described above.)
