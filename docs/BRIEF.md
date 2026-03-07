# Product Brief — HN Redesign

<!-- Produced by: Steve (PM) -->
<!-- Approved by: Pending -->

## Problem Statement

Hacker News is one of the most valuable content communities on the internet, but its interface hasn't meaningfully changed since 2007. The table-based layout, tiny tap targets, and zero visual hierarchy make it actively hostile to modern browsing habits — especially on mobile. Power users have Stockholm syndrome; everyone else bounces.

We're building a **modern, read-only Hacker News frontend** that reimagines the browsing and reading experience while respecting the mental model HN users already have. This is a design and front-end engineering challenge, not a backend one.

**V1 is a multi-page web application** with client-side routing, multiple views, and meaningful user workflows that exercise real architectural and design complexity.

## Target Users

| User Type | Description | Key Needs |
|-----------|-------------|-----------|
| Daily HN reader | Checks HN 3-10x/day on desktop and mobile | Fast scanning, clear hierarchy, comfortable reading |
| Casual tech browser | Visits HN occasionally via shared links | Intuitive navigation, doesn't need to "learn" HN conventions |
| Mobile-first reader | Primarily browses on phone during commute/breaks | Touch-friendly targets, responsive layout, fast load |

## Scope

### In Scope (v1) — Pages & Routes

This is a **6-page app** with client-side routing (`react-router`). Each page exercises different UI patterns and architectural concerns.

#### 1. Home / Story Lists — `/`, `/top`, `/new`, `/best`, `/ask`, `/show`
- Default landing page showing Top Stories
- Tab/nav-based switching between story types (Top, New, Best, Ask HN, Show HN)
- Each story card: title, domain, points, author (clickable → profile), time, comment count (clickable → thread)
- "Ask HN" and "Show HN" cards render differently (Ask has no external link; Show highlights the project URL)

#### 2. Story Detail / Comment Thread — `/story/:id`
- Full story header with metadata
- Nested comment tree (at least 4 levels deep, visually distinct)
- Comment metadata: author (clickable → profile), time, collapse/expand toggle
- "OP" badge on comments by the story author
- Breadcrumb navigation back to the originating list

#### 3. User Profile — `/user/:username`
- User info: username, karma, account age, about/bio
- Tabbed view: **Submissions** (their stories) and **Comments** (their comments)
- Each item links back to the relevant story/thread
- This page creates **cross-linking workflows**: click any username anywhere → land here → click their submissions → go to those stories
- **Why this matters:** It's a new data entity, a new layout pattern, and it creates graph-like navigation between stories ↔ users ↔ comments

#### 4. Submit Story — `/submit`
- Form UI: title, URL, and text fields (Ask HN style = text only, link post = URL only)
- Client-side validation (required fields, URL format, character limits)
- Live preview of how the story card will look
- Submit button shows a "success" toast/modal (no actual backend — purely UI)
- **Why this matters:** Completely different page structure (form vs. feed), exercises form design, validation states, and a different interaction model

#### 5. Search — `/search?q=`
- Persistent search bar in the global nav/header
- Dedicated search results page with query in URL params
- Results show stories and comments matching the query (client-side filter over mock data)
- Filter controls: by date, by points, story vs. comment
- **Why this matters:** URL-driven state (query params), filtering UI, a layout distinct from the feed, and it connects to every other page (results link to stories/profiles)

#### 6. Bookmarks — `/bookmarks`
- Bookmark/save button on every story card and story detail page
- Dedicated bookmarks page showing saved stories
- Persisted in `localStorage`
- Empty state design when no bookmarks exist
- Remove bookmark action
- **Why this matters:** Client-side state management, persistence across sessions, empty states, and a user workflow that spans multiple pages (browse → save → revisit)

### Global Elements
- **Navigation header** — Logo, story type tabs, search bar, bookmarks icon (with count badge), submit link
- **Responsive layout** — Desktop and mobile, single codebase
- **Page transitions** — Smooth route transitions (not just hard swaps)
- **Back navigation** — Browser back/forward works correctly with all routes
- **404 page** — For invalid routes, with a redirect to home

### In Scope (non-page)
- **Mock data layer** — Rich dataset: 50+ stories, 200+ comments, 20+ users with cross-references. Tony designs the schema to make the graph navigable.
- **Modern visual design** — Fresh, creative, but functionally familiar (Natasha's mandate)
- **Local dev build** — `npm start` and evaluate

### Out of Scope (v1)

- **Authentication / login / user accounts** — Per Ako's direction
- **Real upvoting or commenting** — Write operations to a backend; excluded
- **Live HN API integration** — Mock data only; API hookup is v2
- **Dark mode** — Unless Natasha builds it cheaply into the design system
- **Pagination / infinite scroll** — Defer to v2 when real data requires it
- **Performance optimization (lazy loading, SSR, etc.)** — Premature for a local eval build
- **Notification system** — No auth means no personalized notifications

### Steve's Rationale — Why These 6 Pages

Here's my reasoning for what exercises real complexity vs. padding:

**Story Lists + Comments (Pages 1–2)** — The core HN flow. These were always in scope. But now they need proper routing, URL-driven state, and breadcrumb navigation.

**User Profile (Page 3)** — This is the highest-value addition. It introduces a **second entity type** (users, not just stories), creates **cross-linking navigation** (any username → profile → their stories → back), and forces a **different layout pattern** (tabbed content). It stress-tests the data model (mock data needs user→story and user→comment relationships), the router (dynamic params), and the design system (new components).

**Submit (Page 4)** — A form page in an app that's otherwise all feeds. This is intentionally different — it exercises **form design, validation, and state management** that no amount of list views would test. It's also a great design challenge for Natasha (how do you make a submit form feel cohesive with a reading app?).

**Search (Page 5)** — Adds **URL-driven state via query params**, **filter controls**, and a **distinct results layout**. It also ties the app together — search is the one feature that connects to every other page. For Tony, it means designing client-side search/filter logic. For Natasha, it's a new page pattern. For Vision, it's query param management + filter state.

**Bookmarks (Page 6)** — This is the only feature with **persistent client-side state** (localStorage). It tests state management across pages (bookmark on list, see it on /bookmarks), empty states, and a "personal" feature without auth. Small but architecturally meaningful.

**What I rejected:**
- *Settings page* — No auth = nothing to set. Would be a dead-end.
- *Trending/analytics page* — Interesting but doesn't add architectural complexity, just another list view.
- *Story comparison view* — Cool concept but too speculative for v1.

## User Workflows

These are the key page-to-page flows the app must support:

1. **Browse → Read → Explore author**
   Home → Click story → Story detail → Click comment author → User profile → Click their submission → Story detail

2. **Search → Discover → Save**
   Search bar → Search results → Filter by points → Click story → Bookmark it → Continue browsing

3. **Submit → Preview → Browse**
   Nav → Submit page → Fill form → See preview → "Submit" → Toast → Navigate to home

4. **Curate → Revisit**
   Browse stories → Bookmark several → Navigate to /bookmarks → Click saved story → Read comments

5. **Filter by type → Deep read**
   Home → Switch to "Ask HN" tab → Click Ask thread → Read comments → Click "Show HN" tab → Different story type

## Success Criteria

- [ ] App has 6 distinct pages/routes with client-side routing
- [ ] User can navigate between all pages using in-app links (no full page reloads)
- [ ] Browser back/forward buttons work correctly across all routes
- [ ] User can view Top, New, Best, Ask HN, and Show HN story lists
- [ ] User can click a story to view its comment thread with visible nesting (at least 4 levels deep)
- [ ] User can click any username to view that user's profile, submissions, and comments
- [ ] User can use the submit form with client-side validation and live preview
- [ ] User can search stories/comments and filter results by type and date
- [ ] User can bookmark stories and view them on a dedicated bookmarks page (persisted in localStorage)
- [ ] Layout is usable on 375px mobile viewport (iPhone SE) through 1440px desktop
- [ ] Design feels distinctly modern — a stranger shouldn't confuse it with the original HN
- [ ] 404 route displays a styled error page
- [ ] Page loads in under 2 seconds locally
- [ ] Code runs with `npm install && npm start` — no extra setup

## Constraints

- **Tech stack:** React + React Router (Tony makes final call on bundler, state management, etc.)
- **Data:** Mock/static only — no API calls in v1. But mock data must be relational (stories ↔ users ↔ comments) to support cross-page navigation.
- **Deployment:** Local build only — no hosting, CI/CD, or deployment pipeline
- **Timeline:** Focused sprint — scope is deliberately bounded to 6 pages, no more
- **Team:** Fully autonomous agent pipeline (Tony → Natasha → Vision → Thor)

## Assumptions

- HN's information architecture (story types, comment threading model, user profiles) is well-understood
- React Router v6+ handles all routing needs
- Mock data can be structured as a relational graph (users have stories, stories have comments, comments have authors)
- localStorage is sufficient for bookmark persistence in v1
- Client-side search over 50–100 mock stories is fast enough without a search library

## Open Questions

None blocking. Agents should flag issues as they arise — Steve will route them.

## Priority

| Priority | Feature/Requirement |
|----------|-------------------|
| P0 (Must) | Client-side routing with 6 pages |
| P0 (Must) | Story list view with type switching (Top, New, Best, Ask, Show) |
| P0 (Must) | Story detail / comment thread with nested replies |
| P0 (Must) | User profile page with submissions + comments tabs |
| P0 (Must) | Responsive layout (mobile + desktop) |
| P0 (Must) | Global navigation header |
| P0 (Must) | Modern, creative visual design |
| P1 (Should) | Search with filters |
| P1 (Should) | Bookmarks with localStorage persistence |
| P1 (Should) | Submit story form with validation + preview |
| P1 (Should) | Mock data as relational graph (50+ stories, 20+ users) |
| P1 (Should) | Page transitions / route animations |
| P2 (Nice) | 404 error page |
| P2 (Nice) | Loading/skeleton states |
| P2 (Nice) | Dark mode (if design system supports it cheaply) |

---

**Status:** Draft v2 — Awaiting Approval (expanded scope per user feedback)
**Approved by:** —
**Date:** 2026-03-08
