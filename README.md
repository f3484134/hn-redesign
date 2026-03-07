# HN Redesign

A modern, read-only Hacker News frontend built with React 18 and React Router v6. Features 6 pages with client-side routing, a relational mock data layer, and localStorage-based bookmarks.

## Prerequisites

- Node.js 18+
- npm 9+

## Install

```bash
npm install
```

## Run

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Pages

| Route | Page |
|-------|------|
| `/top`, `/new`, `/best`, `/ask`, `/show` | Story Lists |
| `/story/:id` | Story Detail + Comments |
| `/user/:username` | User Profile |
| `/submit` | Submit Story |
| `/search?q=...` | Search |
| `/bookmarks` | Bookmarks |

## Tech Stack

- React 18
- React Router v6
- Vite 5
- CSS Modules
- Lucide React (icons)
