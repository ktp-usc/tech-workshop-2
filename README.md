# KTP Tech Workshop #2 – Git, Zustand, and React Query

## Overview

This workshop builds on **Workshop #1**, focusing on deploying projects to GitHub and introducing two new tools in the KTP Tech Stack: **Zustand** for global state management and **React Query** for server state management. Attendees also learn about Git and GitHub workflows, how KTP manages project contributions, and how to upload new projects to GitHub.

## Slides

The slides that were used during the workshop can be found [here](Tech%20workshop%202.pdf).

## URL

The live URL of the web app that this repository creates can be found [here](https://ktp-usc.github.io/tech-workshop-2/).

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
* View [`app/page.tsx`](/app/page.tsx) and [`app/page2/page.tsx`](/app/page2/page.tsx) to see how the store is used in multiple React components.

---

## React Query

This will be covered in Tech Workshop #3!

---

## Deploying to GitHub

1. Edit `next.config.js` (set base path if deploying to repo pages)
2. Create GitHub Actions workflow (`deploy.yml`)
3. Go to Settings → Actions → General → enable Read/Write
4. Go to Settings → Pages → Build and deployment → set source to GitHub Actions
