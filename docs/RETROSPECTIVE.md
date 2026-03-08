# Retrospective — HN Redesign

<!-- Produced by: Bob (Coach) -->

## Project Summary

**Duration:** Single sprint (1 session)
**Verdict:** 🟢 PASS — All 7 pages, 45/48 spec items, 0 critical/major issues

## What Went Well

- **Steve's brief was excellent.** Clear problem statement, well-scoped 6-page app, realistic user personas. The scope was ambitious enough to exercise real architecture without being impossible.
- **Tony's architecture was clean.** CSS Modules, React Router v6, Context for state — all appropriate choices for the scale. Good "alternatives considered" reasoning.
- **Natasha's design system was thorough.** Full token definitions, component specs, responsive breakpoints, accessibility considerations. Mermaid user flows were a nice touch.
- **Vision shipped.** 7 pages, all functional, build clean. 291KB JS + 20KB CSS is reasonable.
- **Thor's QA was rigorous.** 45/48 items checked, clear issue categorization, good flow-based testing.

## What Needs Improvement

### 1. Vision: File Organization Drift
Thor caught 4 minor issues — all about Vision deviating from the architecture. BookmarkButton, SearchBar, hooks, and variables.css were inlined instead of separated per ARCHITECTURE.md. This isn't a bug, but it signals Vision isn't treating the architecture doc as a contract. **Fix: Vision should check architecture compliance before declaring done.**

### 2. Vision: Git Discipline (Repeat Finding)
Lesson #1 in LESSONS.md already covers this. One big initial commit instead of incremental ones. This is better than last time (at least there IS a commit), but the goal is meaningful milestones. **Fix: Commit after each page/feature, not at the end.**

### 3. Stephen: Missing in Action
No RESEARCH.md exists. Steve's brief didn't explicitly request research, but Stephen should have self-initiated — even a lightweight competitive analysis (how do Lobsters, Tildes, HN readers like Hackerweb handle this?) would have informed design decisions. **Fix: Stephen should proactively assess whether research adds value, even when not explicitly requested.**

### 4. Steve: No TASKS.md
The PM should have broken the brief into a trackable task list for Vision. Without it, we can't see progress or do incremental reviews. **Fix: Steve should produce TASKS.md after architecture is finalized, before development starts.**

### 5. Team: No Cross-Review
Agents worked sequentially but never challenged each other. Tony didn't push back on any design decisions. Natasha didn't question architectural choices. The pipeline was smooth but also frictionless — and healthy friction produces better products. **Fix: Each agent should include a "Questions/Concerns" section in their output that the next agent must address.**

### 6. Team: No Presentation/Demo Artifact
The team shipped code but didn't prepare anything to communicate the *why* behind the product. No stakeholder deck, no demo walkthrough. A shipped product without a story is just code. (See new process recommendation below.)

## Skills Gap Assessment

| Agent | Current Skill Level | Gap | Recommendation |
|-------|-------------------|-----|----------------|
| Steve | Strong briefs, weak tracking | No task breakdown, no stakeholder communication artifact | Add TASKS.md template to workflow. Own the project presentation. |
| Stephen | Unknown (didn't participate) | Needs to self-activate | Add a "Research Decision" step: Stephen reviews the brief and explicitly says "research needed" or "skipping research because X" |
| Tony | Solid architecture docs | No pushback on brief scope or design | Practice writing "Risks & Tradeoffs" section |
| Natasha | Thorough design system | No interaction prototypes or motion specs | Consider adding key interaction descriptions (hover states, transitions, loading states) |
| Vision | Ships working code | Architecture drift, git habits | Architecture compliance checklist before done. Incremental commits. |
| Thor | Rigorous QA | Only tested code against spec | Add usability heuristic evaluation (not just spec compliance) |

## New Skills Needed

1. **Deck Factory integration** — Steve needs to produce a project presentation deck (see process change below)
2. **Demo recording** — Vision or Thor should capture a brief screen recording of the working app
3. **Incremental review** — Team needs a mid-sprint checkpoint, not just end-of-pipeline QA

## Process Change: Project Presentation

**New rule:** Every completed project gets a presentation deck (via Deck Factory). **Steve (PM) owns this.**

The deck should cover:
1. **Problem & audience** — What are we solving, for whom? What assumptions are we validating?
2. **Product walkthrough** — What does it do? What user needs does it fulfill?
3. **Design rationale** — Why does it look/work this way? What principles guided us?
4. **Implementation & next steps** — How is it built? What's the roadmap?

Steve writes the deck content, pulling from existing docs (BRIEF, DESIGN, ARCHITECTURE). Vision provides screenshots. Natasha provides design rationale. This isn't extra work — it's synthesizing what already exists.

## Updated LESSONS.md Entries

### Lesson #2 — Architecture is a contract, not a suggestion
If Tony writes ARCHITECTURE.md, Vision follows it exactly. Deviations require a documented decision, not silent inlining.

### Lesson #3 — Every project gets a presentation
Steve produces a Deck Factory presentation for every completed project. The deck tells the product story: problem, solution, design rationale, implementation, next steps.

### Lesson #4 — Track tasks or lose visibility
Steve must produce TASKS.md. Without it, there's no way to do incremental reviews or measure progress.

---

**Coach:** Bob
**Date:** 2026-03-08
