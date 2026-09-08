# Micron Competitive Intelligence Dashboard

POC implementation of the Micron CI brief, using the supplied September 2026 dev pack, seed corpus and corrected geospatial research pack.

## Run locally

```bash
npm run prepare-data
npm install
npm run dev
```

`prepare-data` expands the supplied archives into a local staging directory and writes `data/coverage.json`. Run it again whenever the source archives change. `npm install` is only needed once.

The app is intentionally precomputed for the POC: it renders the evidence-backed sample insight set and does not call external APIs at runtime. The production architecture should keep this boundary—ingest and grade evidence in a pipeline, then render static issue JSON and source drill-downs.

## Evidence contract

- Primary build contract: `Micron_CI_Dev_Pack_2026-09-07_v2.zip/01_brief/2026-09-07-micron-ci-dashboard-brief.md`
- Raw evidence registry: `MANIFEST.json` and `dataset_registry.csv`
- Corrected plant registry: `Micron_CI_Geo_Research_2026-09-07.zip/geo_research/plant_registry_v2.csv`
- Satellite availability probe: `geo_research/stac_availability_probe.json`
- All published insight cards show an evidence state and link to the relevant source family. Exact matched-text and atom-level source rows are the next ingestion milestone.

The corrected geo registry supersedes the dev-pack plant registry. In particular, YMTC Wuhan is moved by approximately 3 km and Solidigm Dalian by approximately 75 km.

## Deploy on Railway

This repository includes `railway.json` with the build and start commands Railway needs. The app has no runtime secrets or database requirements.

1. Push this folder to a GitHub repository, then create a new Railway project from that repository.
2. Railway will detect the Next.js app and use `npm run build` followed by `npm run start`.
3. In Railway, open the service's **Settings → Networking**, choose **Generate Domain**, and share the resulting `*.up.railway.app` URL.

For a local Railway CLI deploy instead, run `railway login`, `railway init`, `railway up`, and then `railway domain` from this folder.
