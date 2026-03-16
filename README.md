# Angular Native Federation + Taiga UI Demo

This repository contains a demo micro-frontend setup with one host and two remotes:

- `host` — shell app with navigation.
- `child-products` — products remote.
- `child-profile` — profile remote.

## Stack and conventions

- Angular 19 standalone components.
- Signals + computed state.
- `ChangeDetectionStrategy.OnPush`.
- Native Federation via `@angular-architects/native-federation`.
- Prettier config from `@taiga-ui/configs`.

## Architecture

The host app loads remotes with `loadRemoteModule`:

- `/products` loads `child-products` (`./Component`)
- `/profile` loads `child-profile` (`./Component`)

Remote mapping:

- `apps/host/federation.manifest.json`

Federation config files:

- `apps/host/federation.config.js`
- `apps/child-products/federation.config.js`
- `apps/child-profile/federation.config.js`

## Local development

```bash
npm install
npm run start:products
npm run start:profile
npm run start:host
```

Open `http://localhost:4200`.

## Validation

```bash
npm run format:check
npm run build
npm run e2e
```

## CI

GitHub Actions workflow is available at `.github/workflows/ci.yml` and runs:

1. dependency installation,
2. formatting check,
3. build for all apps,
4. Playwright E2E tests.
