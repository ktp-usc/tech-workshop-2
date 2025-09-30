# KTP Tech Workshops 2 & 3 – Git, Zustand, React Query, and GitHub Workflow

## Overview

These workshops build on **Workshop #1**, focusing first on deploying projects to GitHub and introducing two new tools in the KTP Tech Stack: **Zustand** for global state management and **React Query** for server state management. Attendees also learn about Git and GitHub workflows, how KTP manages project contributions, and how to upload and collaborate on projects using GitHub.

## Slides

* [Workshop #2 Slides](Tech%20workshop%202.pdf)
* [Workshop #3 Slides](Tech%20workshop%203.pdf)

## URL

* [https://ktp-usc.github.io/tech-workshop-2/](https://ktp-usc.github.io/tech-workshop-2/)

---

## Prerequisites

* GitHub account
* IntelliJ WebStorm (or VS Code)
* Node.js
* Git OR Git for Windows

---

## Zustand

* Lightweight, minimal boilerplate
* Easier alternative to Redux
* Built around hooks and `useState`
* Supports actions, reducers, and persistence

### Install

```bash
npm install zustand
```

### Usage

* View [`store.ts`](/store.ts) to see the Zustand store.
* View [`app/page2/page.tsx`](/app/page2/page.tsx) to see how the store is used in a React component.

---

## React Query

* Library for managing **server state**
* Simplifies API calls with minimal boilerplate
* Handles loading, error, and success states automatically
* Built-in caching prevents redundant fetches

### Why React Query?

* Without React Query:

  * Manually use `useEffect` and `fetch`
  * Handle loading/error logic yourself
  * Write repetitive caching code

* With React Query:

  * Data is fetched automatically when needed
  * Results are cached and reused
  * Loading and error states are managed for you

### Install

```bash
npm install @tanstack/react-query
```

### Usage

* View [`components/QueryProvider.tsx`](/components/QueryProvider.tsx) to see how we can implement React-Query's `QueryClientProvider` in our own, easy-to-use component.
* View [`app/layout.tsx`](/app/layout.tsx) to see where the `QueryProvider` component we created wraps the web app's children to provide full functionality.
* View [`app/page.tsx`](/app/page.tsx) to see how the `useQuery` hook is used to handle API calls.

---

## Deploying to GitHub

1. Edit `next.config.js` (set base path if deploying to repo pages)
2. Create GitHub Actions workflow (`deploy.yml`)
3. Go to Settings → Actions → General → enable Read/Write
4. Go to Settings → Pages → Build and deployment → set source to GitHub Actions

---

## KTP GitHub Workflow

### Merge Commit vs. Squash Merge

* **Merge Commit**

  * Preserves all commits, adds a merge commit
  * Pro: full history
  * Con: can get messy

* **Squash Merge**

  * Combines all PR commits into a single commit
  * Pro: clean history, easy revert
  * Con: loss of granular commit steps

### Pull Request Process

* Create a new branch with commits
* Open a pull request to merge changes into `main`
* Reviewers (project leads, Director of Technical Development) are notified
* A block is created until changes are approved
* **2 approvals required** to merge
* Reviewers ensure code is complete, error-free, and aligned with project goals
* All discussion and comments about changes should live in the PR chain
* Once approved, the pull request is squash merged into GitHub history

---

## Questions

If you have any questions, reach out to the Director of Technical Development or your project leads.
