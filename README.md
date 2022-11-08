# GamingRealm frontend
A web app built with [SvelteKit](https://kit.svelte.dev) and [TailwindCSS](https://tailwindcss.org).

## Developing

Install dependencies with the `yarn` package manager:
```bash
npm install
```

The backend server needs to be running as well to test the frontend:
Clone the repo:
```bash
git clone https://github.com/idkbrowby/gamingrealm-backend.git
```

Run with Docker:
```bash
docker compose up --build
```

For detailed instructions, read the [Backend Repo README](https://github.com/idkbrowby/gamingrealm-backend)

Run the development server with

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
