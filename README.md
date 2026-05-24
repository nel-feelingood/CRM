# CRM

Lightweight CRM starter for small teams.

## Stack

- Next.js
- TypeScript
- Google sign-in planned via Auth.js
- SQLite first, PostgreSQL later if needed
- Docker-ready deployment for Hostinger VPS

## Local env

Copy `.env.example` to `.env.local` for local development.

## Docker

- `docker-compose.yml` is ready for Hostinger VPS
- SQLite data is stored in `./data`

## Next step

1. Install dependencies
2. Add Auth.js with Google provider
3. Add user and role tables
4. Protect the dashboard
