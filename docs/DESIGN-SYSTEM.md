# Design System — HN Redesign

<!-- Produced by: Natasha (Designer) -->

## Design Principles

1. **Scannable over decorative** — Content density is a feature for HN readers. Visual hierarchy should accelerate scanning, not slow it down with ornament.
2. **Warm neutrality** — The palette leans warm (cream, soft orange accents) as a nod to HN's identity, but with modern contrast and refinement. Not cold/corporate.
3. **Generous touch, tight grid** — Tap targets are generous (44px+) and spacing is breathable, but the underlying grid is tight and information-dense on desktop.
4. **Progressive disclosure** — Show essential info first. Comments collapse, metadata is secondary, filters reveal on interaction. Don't overwhelm.
5. **System-native feel** — Use native font stack, respect OS-level preferences, feel like a well-built tool — not a marketing site.

## Tokens

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#FF6600` | Primary accent — links, active tabs, upvote arrows. Classic HN orange, refined. |
| `--color-primary-hover` | `#E55C00` | Hover state for primary |
| `--color-primary-subtle` | `#FFF4EB` | Light primary tint — active tab background, badges |
| `--color-secondary` | `#6366F1` | Secondary accent — bookmarks, special badges |
| `--color-background` | `#FAFAF8` | Page background — warm off-white |
| `--color-surface` | `#FFFFFF` | Card/panel background |
| `--color-surface-hover` | `#F5F5F3` | Card hover state |
| `--color-text-primary` | `#1A1A1A` | Headings, story titles |
| `--color-text-secondary` | `#6B7280` | Metadata, timestamps, muted text |
| `--color-text-tertiary` | `#9CA3AF` | Least important text |
| `--color-border` | `#E5E5E3` | Borders, dividers |
| `--color-border-light` | `#F0F0EE` | Subtle separators |
| `--color-error` | `#DC2626` | Error states, destructive actions |
| `--color-success` | `#16A34A` | Success toasts, valid form fields |
| `--color-warning` | `#F59E0B` | Warning states |
| `--color-comment-depth-0` | `#FF6600` | Comment nesting indicator L0 |
| `--color-comment-depth-1` | `#6366F1` | Comment nesting indicator L1 |
| `--color-comment-depth-2` | `#06B6D4` | Comment nesting indicator L2 |
| `--color-comment-depth-3` | `#8B5CF6` | Comment nesting indicator L3 |

### Typography

| Token | Value | Usage |
|-------|-------|-------|
| `--font-family` | `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | System-native stack with Inter as first choice |
| `--font-family-mono` | `'JetBrains Mono', 'SF Mono', 'Fira Code', monospace` | Code blocks in comments |
| `--font-size-xs` | `0.75rem` (12px) | Timestamps, tertiary labels |
| `--font-size-sm` | `0.8125rem` (13px) | Metadata, comment meta |
| `--font-size-base` | `0.9375rem` (15px) | Body text, comments |
| `--font-size-lg` | `1.125rem` (18px) | Story titles in list |
| `--font-size-xl` | `1.5rem` (24px) | Page headings, story detail title |
| `--font-size-2xl` | `2rem` (32px) | Hero/large headings |
| `--font-weight-normal` | `400` | Body text |
| `--font-weight-medium` | `500` | Story titles, nav items |
| `--font-weight-semibold` | `600` | Page headings, bold emphasis |
| `--font-weight-bold` | `700` | Strong emphasis only |
| `--line-height-tight` | `1.3` | Headings |
| `--line-height-normal` | `1.6` | Body/comment text |

### Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2xs` | `0.25rem` (4px) | Icon-to-label gap |
| `--space-xs` | `0.5rem` (8px) | Tight internal padding |
| `--space-sm` | `0.75rem` (12px) | Within components |
| `--space-md` | `1rem` (16px) | Between components |
| `--space-lg` | `1.5rem` (24px) | Section gaps |
| `--space-xl` | `2rem` (32px) | Page padding (mobile) |
| `--space-2xl` | `3rem` (48px) | Page padding (desktop) |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `6px` | Buttons, badges |
| `--radius-md` | `10px` | Cards, panels |
| `--radius-lg` | `16px` | Modals, large containers |
| `--radius-full` | `9999px` | Avatars, pills |

### Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle card lift |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.08)` | Card hover, dropdowns |
| `--shadow-lg` | `0 12px 32px rgba(0,0,0,0.12)` | Modals, toasts |

### Transitions

| Token | Value | Usage |
|-------|-------|-------|
| `--transition-fast` | `150ms ease` | Hover states, color changes |
| `--transition-normal` | `250ms ease` | Layout changes, expand/collapse |
| `--transition-slow` | `400ms ease` | Page transitions, modals |

### Breakpoints

| Name | Value | Description |
|------|-------|-------------|
| Mobile | `< 640px` | Single column, full-width cards |
| Tablet | `640px – 1024px` | Comfortable reading width, slight padding |
| Desktop | `> 1024px` | Max content width 720px, centered |

## Component Library

### Header

- **Purpose:** Global navigation bar. Fixed to top. Contains logo, story type tabs, search bar, bookmarks icon with count badge, submit link.
- **Variants:** Default (desktop), compact (mobile — hamburger or horizontal scroll for tabs)
- **States:** Default, search-focused (search bar expands), tab-active (current tab highlighted)
- **Responsive:**
  - Desktop: Full horizontal layout — Logo | Tabs (Top, New, Best, Ask, Show) | SearchBar | BookmarkIcon | SubmitLink
  - Mobile: Logo + hamburger icon on left row. Below or in drawer: tabs as horizontal scrollable pills. Search bar full-width below. Bookmarks + Submit as icons.
- **Anatomy:**
  ```
  ┌─────────────────────────────────────────────────────────────────┐
  │  🔶 HN    Top  New  Best  Ask  Show    [🔍 Search...]  🔖 3  ✏️ │
  └─────────────────────────────────────────────────────────────────┘
  ```
- **Acceptance Criteria:**
  - [ ] Active tab visually distinct (primary color bottom border + subtle background)
  - [ ] Search bar expands on focus, collapses on blur (desktop)
  - [ ] Bookmark icon shows count badge when > 0
  - [ ] All navigation links work with React Router (no page reloads)
  - [ ] Sticky/fixed to top on scroll

### StoryCard

- **Purpose:** Displays a single story in list views. Primary interaction unit.
- **Variants:** `default` (link story), `ask` (no external URL, shows "Ask HN" badge), `show` (shows project URL prominently + "Show HN" badge)
- **States:** Default, hover (subtle lift + background change), bookmarked (filled bookmark icon)
- **Responsive:**
  - Desktop: Single row — rank number | content block (title, domain, meta row) | bookmark button
  - Mobile: Stacked — title on top, meta below, bookmark icon top-right
- **Anatomy:**
  ```
  ┌──────────────────────────────────────────────────────────┐
  │  1.  Story Title Goes Here                          🔖   │
  │      (example.com) · 142 points · by username · 3h ago   │
  │      💬 87 comments                                       │
  └──────────────────────────────────────────────────────────┘
  ```
- **Acceptance Criteria:**
  - [ ] Title links to `/story/:id`
  - [ ] Domain extracted and displayed for link stories
  - [ ] "Ask HN" / "Show HN" badges shown for respective types
  - [ ] Username links to `/user/:username`
  - [ ] Comment count links to `/story/:id`
  - [ ] Bookmark button toggles state
  - [ ] Hover state provides visual feedback

### CommentTree

- **Purpose:** Recursively renders nested comments for a story. Supports 4+ levels of depth.
- **Variants:** N/A (recursive, depth-based styling)
- **States:** Default, collapsed (children hidden, "[+]" indicator shown)
- **Responsive:**
  - Desktop: Left-border color coding per depth + indentation (20px per level)
  - Mobile: Reduced indentation (12px per level), same color coding
- **Anatomy:**
  ```
  │ username · 2h ago                              [−]
  │ Comment text goes here. Can be multiple lines
  │ and include formatting.
  │
  │   │ reply_user · 1h ago  [OP]                  [−]
  │   │ Reply text here
  │   │
  │   │   │ another_user · 45m ago                 [−]
  │   │   │ Nested reply
  ```
- **Acceptance Criteria:**
  - [ ] Renders at least 4 levels of nesting
  - [ ] Each depth level has a distinct left border color
  - [ ] Collapse/expand toggle works per comment
  - [ ] "OP" badge shown when comment author = story author
  - [ ] Usernames link to `/user/:username`

### Comment

- **Purpose:** Single comment within a CommentTree.
- **Variants:** `default`, `op` (story author's comment — shows OP badge)
- **States:** Default, collapsed (body hidden, shows "[+] N children" text)
- **Responsive:**
  - Desktop: Full width minus indentation
  - Mobile: Same, with reduced indentation
- **Acceptance Criteria:**
  - [ ] Shows author, relative time, collapse toggle
  - [ ] OP badge visible and styled distinctly
  - [ ] Text renders with paragraph breaks preserved

### UserLink

- **Purpose:** Clickable username that navigates to user profile.
- **Variants:** `default`, `op` (shows with OP badge beside it)
- **States:** Default (primary color), hover (underline)
- **Responsive:** Inline element, no breakpoint changes
- **Acceptance Criteria:**
  - [ ] Navigates to `/user/:username`
  - [ ] Visually distinguishable as a link

### SearchBar

- **Purpose:** Text input for searching stories and comments. Lives in Header.
- **Variants:** `compact` (icon only, expands on click — desktop), `full` (always visible — mobile)
- **States:** Default, focused (expanded, border highlight), with-value (shows clear button)
- **Responsive:**
  - Desktop: Starts as compact icon, expands to ~300px on focus
  - Mobile: Full-width below nav row
- **Acceptance Criteria:**
  - [ ] Enter key navigates to `/search?q=<query>`
  - [ ] Clear button resets input
  - [ ] Focus state visually distinct

### BookmarkButton

- **Purpose:** Toggle bookmark on/off for a story.
- **Variants:** `icon-only` (in story cards), `with-label` (on story detail)
- **States:** Default (outline icon), bookmarked (filled icon, secondary color), hover (scale up)
- **Responsive:** Same at all breakpoints. Min touch target 44×44px on mobile.
- **Acceptance Criteria:**
  - [ ] Toggles bookmark in context/localStorage
  - [ ] Visual state reflects current bookmark status
  - [ ] Animation on toggle (subtle scale pulse)

### StoryForm

- **Purpose:** Form for submitting a new story (title, URL, text).
- **Variants:** `link` (URL field shown, text hidden), `ask` (text field shown, URL hidden) — toggled by user
- **States:** Default, field-focused, validation-error, submitting, success
- **Responsive:**
  - Desktop: Form centered, max-width 600px, preview beside form
  - Mobile: Form full-width, preview below form
- **Anatomy:**
  ```
  ┌──────────────────────────────────────────────┐
  │  Submit Story                                │
  │                                              │
  │  Type:  [Link Post] [Ask HN]                 │
  │                                              │
  │  Title: [________________________]            │
  │  URL:   [________________________]            │
  │                                              │
  │  Preview:                                    │
  │  ┌──────────────────────────────────────┐    │
  │  │  (Live StoryCard preview)            │    │
  │  └──────────────────────────────────────┘    │
  │                                              │
  │  [Submit Story]                              │
  └──────────────────────────────────────────────┘
  ```
- **Acceptance Criteria:**
  - [ ] Title is required, 1–300 chars
  - [ ] URL validated (must be valid URL format)
  - [ ] Either URL or Text required (not both)
  - [ ] Live preview updates as user types
  - [ ] Submit shows success toast
  - [ ] Error states shown inline below fields

### FilterBar

- **Purpose:** Filter controls on the Search page.
- **Variants:** N/A
- **States:** Default, filter-active (active filters highlighted)
- **Responsive:**
  - Desktop: Horizontal row of filter chips/selects
  - Mobile: Horizontal scrollable row
- **Anatomy:**
  ```
  ┌──────────────────────────────────────────────┐
  │  Type: [All ▾]  Sort: [Relevance ▾]  Date: [All time ▾] │
  └──────────────────────────────────────────────┘
  ```
- **Acceptance Criteria:**
  - [ ] Filter by type (all, stories, comments)
  - [ ] Sort by date or points
  - [ ] Active filter state visually highlighted
  - [ ] Filters update URL query params

### Toast

- **Purpose:** Temporary notification for success/error messages.
- **Variants:** `success` (green), `error` (red), `info` (neutral)
- **States:** Entering (slide in from top), visible, exiting (fade out)
- **Responsive:** Centered top of viewport, max-width 400px, full-width on mobile with margins
- **Anatomy:**
  ```
  ┌─────────────────────────────┐
  │  ✓  Story submitted!    ✕   │
  └─────────────────────────────┘
  ```
- **Acceptance Criteria:**
  - [ ] Auto-dismisses after 3 seconds
  - [ ] Can be manually dismissed via close button
  - [ ] Stacks if multiple appear

### EmptyState

- **Purpose:** Shown when a page/section has no content (no bookmarks, no search results).
- **Variants:** `bookmarks` (bookmark icon + CTA), `search` (search icon + suggestion), `generic`
- **States:** Default only
- **Responsive:** Centered vertically and horizontally, responsive text size
- **Anatomy:**
  ```
  ┌──────────────────────────────┐
  │                              │
  │          🔖                  │
  │    No bookmarks yet          │
  │    Save stories to find      │
  │    them here later.          │
  │                              │
  └──────────────────────────────┘
  ```
- **Acceptance Criteria:**
  - [ ] Icon, title, and description displayed
  - [ ] Vertically centered in available space

### Breadcrumb

- **Purpose:** Shows navigation path on detail pages (e.g., "Top Stories › Story Title").
- **Variants:** N/A
- **States:** Default. Items are links except last (current page).
- **Responsive:** Truncates long titles with ellipsis on mobile
- **Acceptance Criteria:**
  - [ ] Each breadcrumb item (except last) is a link
  - [ ] Uses "›" as separator
  - [ ] Last item is non-clickable, bold

### Badge

- **Purpose:** Small label for story types and comment author roles.
- **Variants:** `ask` (orange bg), `show` (blue bg), `op` (purple bg), `score` (neutral)
- **States:** Default only
- **Responsive:** Same at all breakpoints
- **Acceptance Criteria:**
  - [ ] Visually distinct per variant
  - [ ] Small enough to not dominate nearby text

### TabBar

- **Purpose:** Horizontal tab navigation for story type switching (header) and user profile tabs (submissions/comments).
- **Variants:** `nav-tabs` (in header), `content-tabs` (on profile page)
- **States:** Default, active (bottom border + color), hover
- **Responsive:**
  - Desktop: Full horizontal
  - Mobile: Horizontally scrollable, no wrapping
- **Acceptance Criteria:**
  - [ ] Active tab highlighted with bottom border in primary color
  - [ ] Smooth transition on tab switch
  - [ ] Content tabs update visible content without page navigation

---

**Status:** Complete
**Date:** 2026-03-08
