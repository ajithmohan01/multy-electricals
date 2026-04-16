# CI/CD Integration Guide — Vercel + GitHub Actions
## MULTY ELECTRICALS SOLAR Website

---

## Table of Contents

1. [Overview](#1-overview)
2. [Prerequisites](#2-prerequisites)
3. [Step 1 — Push Code to GitHub](#3-step-1--push-code-to-github)
4. [Step 2 — Deploy to Vercel](#4-step-2--deploy-to-vercel)
5. [Step 3 — Get Vercel Tokens & IDs](#5-step-3--get-vercel-tokens--ids)
6. [Step 4 — Add GitHub Secrets](#6-step-4--add-github-secrets)
7. [Step 5 — How the CI/CD Pipeline Works](#7-step-5--how-the-cicd-pipeline-works)
8. [Step 6 — Test the Pipeline](#8-step-6--test-the-pipeline)
9. [Custom Domain Setup](#9-custom-domain-setup)
10. [Troubleshooting](#10-troubleshooting)
11. [Pipeline Flow Diagram](#11-pipeline-flow-diagram)

---

## 1. Overview

This project uses **GitHub Actions** as the CI/CD platform and **Vercel** as the hosting platform.

| Event | Action |
|---|---|
| Push to `main` branch | Auto-build + deploy to **production** |
| Pull Request to `main` | Auto-build + deploy to **preview URL** |
| PR comment | Automatic preview URL posted |

**Pipeline Summary:**
```
Developer pushes code
        ↓
GitHub Actions triggers
        ↓
  Build Check (npm run build)
        ↓
    ┌───┴───┐
    │       │
  PR?    Push to main?
    │       │
Preview  Production
Deploy    Deploy
    │       │
    └───┬───┘
        ↓
   Vercel Hosting
```

---

## 2. Prerequisites

Before starting, make sure you have:

- [x] **Git** installed on your computer
- [x] A **GitHub account** — [github.com](https://github.com)
- [x] A **Vercel account** — [vercel.com](https://vercel.com) (free tier is fine)
- [x] **Node.js 18+** installed
- [x] The project code ready (this folder)

---

## 3. Step 1 — Push Code to GitHub

### 3.1 Create a new GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `multy-electricals-solar`
3. Set it to **Public** or **Private** (your choice)
4. Do **NOT** initialize with README (we already have code)
5. Click **Create repository**

### 3.2 Push your local code

Open your terminal in the project folder and run:

```bash
# Initialize git (skip if already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: MULTY ELECTRICALS SOLAR website"

# Connect to your GitHub repository
# Replace YOUR_USERNAME and YOUR_REPO_NAME
git remote add origin https://github.com/YOUR_USERNAME/multy-electricals-solar.git

# Push code
git branch -M main
git push -u origin main
```

After this, your code is on GitHub.

---

## 4. Step 2 — Deploy to Vercel

### Option A — Deploy via Vercel Dashboard (Recommended for First Time)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"**
3. Connect your GitHub account if not already connected
4. Find and select your `multy-electricals-solar` repository
5. Vercel will auto-detect it as a **Vite** project
6. Leave all settings as default (Framework: Vite, Build Command: `npm run build`, Output: `dist`)
7. Click **Deploy**
8. Wait ~60 seconds — your site is live!

You will get a URL like: `https://multy-electricals-solar.vercel.app`

### Option B — Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project folder
vercel

# Follow the prompts:
# - Set up and deploy: Y
# - Which scope: (select your account)
# - Link to existing project: N
# - Project name: multy-electricals-solar
# - Directory: ./
# - Override settings: N

# Deploy to production
vercel --prod
```

---

## 5. Step 3 — Get Vercel Tokens & IDs

The GitHub Actions workflow needs 3 secrets from Vercel.

### 5.1 Get Vercel Token

1. Go to [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Click **"Create Token"**
3. Name it: `GitHub Actions`
4. Scope: **Full Account**
5. Expiration: **No Expiration** (or set a date)
6. Click **Create**
7. **Copy the token** — you won't see it again!

### 5.2 Get Vercel Org ID

```bash
# Install Vercel CLI if not done
npm install -g vercel

# Login
vercel login

# Run this in your project folder
vercel link

# Then check the .vercel folder created
cat .vercel/project.json
```

You'll see output like:
```json
{
  "orgId": "team_xxxxxxxxxxxxxxxxx",
  "projectId": "prj_xxxxxxxxxxxxxxxxx"
}
```

**Alternative:** Go to your Vercel dashboard:
- **Org ID**: Go to [vercel.com/account](https://vercel.com/account) → Settings → General → "Your ID"
- **Project ID**: Open your project → Settings → General → "Project ID"

---

## 6. Step 4 — Add GitHub Secrets

GitHub Secrets keep your tokens safe — they are never visible in logs.

### How to add secrets:

1. Go to your GitHub repository
2. Click **Settings** tab
3. In the left sidebar: **Secrets and variables** → **Actions**
4. Click **"New repository secret"** for each secret below:

| Secret Name | Value | Where to Find |
|---|---|---|
| `VERCEL_TOKEN` | Your Vercel token | Step 5.1 above |
| `VERCEL_ORG_ID` | `team_xxxx` or `xxx` | Step 5.2 above |
| `VERCEL_PROJECT_ID` | `prj_xxxx` | Step 5.2 above |

### Adding each secret:

```
Name:  VERCEL_TOKEN
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...  (paste your token)
→ Click "Add secret"

Name:  VERCEL_ORG_ID
Value: team_abc123xyz
→ Click "Add secret"

Name:  VERCEL_PROJECT_ID
Value: prj_abc123xyz
→ Click "Add secret"
```

After adding all 3 secrets, your Secrets page should show:

```
✓ VERCEL_ORG_ID        Updated X minutes ago
✓ VERCEL_PROJECT_ID    Updated X minutes ago
✓ VERCEL_TOKEN         Updated X minutes ago
```

---

## 7. Step 5 — How the CI/CD Pipeline Works

The pipeline is defined in `.github/workflows/deploy.yml`.

### Triggers

```yaml
on:
  push:
    branches: [main]       # Runs on every push to main
  pull_request:
    branches: [main]       # Runs on every PR targeting main
```

### Job 1: Build Check (Always runs)

```
1. Checkout the code
2. Setup Node.js 20
3. npm ci (clean install)
4. npm run build (Vite build)
5. Upload dist/ as artifact
```

This ensures the code **always compiles** before deploying. If the build fails, deployment is cancelled.

### Job 2: Preview Deploy (Only on Pull Requests)

```
1. Runs after Build Check passes
2. Installs Vercel CLI
3. Pulls Vercel preview environment settings
4. Builds for preview
5. Deploys to Vercel preview URL
6. Posts the preview URL as a comment on the PR
```

Example PR comment:
```
🌞 Preview deployed!
🔗 URL: https://multy-electricals-solar-git-feature-branch.vercel.app
```

### Job 3: Production Deploy (Only on push to main)

```
1. Runs after Build Check passes
2. Installs Vercel CLI
3. Pulls Vercel production environment settings
4. Builds for production
5. Deploys to production URL
```

---

## 8. Step 6 — Test the Pipeline

### Test 1: Production Deploy

```bash
# Make a small change (e.g., edit src/App.jsx)
# Then push to main

git add .
git commit -m "Test: CI/CD pipeline"
git push origin main
```

Then:
1. Go to your GitHub repo
2. Click **Actions** tab
3. Watch the **"Deploy to Vercel"** workflow run
4. All 3 jobs should show green checkmarks ✓

### Test 2: Preview Deploy

```bash
# Create a new branch
git checkout -b feature/test-preview

# Make any change
echo "/* test */" >> src/App.css

# Push and create PR
git add .
git commit -m "Test preview deployment"
git push origin feature/test-preview
```

Then create a Pull Request on GitHub — the workflow will run and post a preview URL as a comment.

---

## 9. Custom Domain Setup

To use a custom domain like `multyelectricalssolar.com`:

### Step 1: Add domain in Vercel

1. Go to your Vercel project dashboard
2. Click **Settings** → **Domains**
3. Type your domain and click **Add**
4. Vercel will show you DNS records to add

### Step 2: Configure DNS

Go to your domain registrar (GoDaddy, Namecheap, Google Domains, etc.) and add:

| Type | Name | Value |
|---|---|---|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

### Step 3: SSL

Vercel automatically provisions a **free SSL certificate** (HTTPS) via Let's Encrypt. This happens within minutes after DNS propagation.

---

## 10. Troubleshooting

### Problem: "VERCEL_TOKEN is not defined"

**Cause:** GitHub secret is not set or named incorrectly.

**Fix:**
```
Go to: GitHub Repo → Settings → Secrets → Actions
Check that VERCEL_TOKEN, VERCEL_ORG_ID, VERCEL_PROJECT_ID all exist
Names must match exactly (case-sensitive)
```

### Problem: Build fails with "vite: command not found"

**Cause:** Dependencies not installed.

**Fix:** Make sure `npm ci` runs before `npm run build` in the workflow. Check `package.json` has vite in `devDependencies`.

### Problem: "Project not found" Vercel error

**Cause:** Wrong `VERCEL_PROJECT_ID` or `VERCEL_ORG_ID`.

**Fix:**
```bash
# In your project folder
cat .vercel/project.json
# Copy the exact values to GitHub Secrets
```

### Problem: Deployment succeeds but site shows old content

**Cause:** Browser or CDN cache.

**Fix:** Hard refresh with `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac). Wait 1–2 minutes for Vercel's CDN to propagate.

### Problem: White screen after deployment

**Cause:** Build output path mismatch.

**Fix:** Make sure `vercel.json` has `"outputDirectory": "dist"` and Vite's `vite.config.js` is correct.

---

## 11. Pipeline Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    DEVELOPER WORKFLOW                       │
└─────────────────────────────────────────────────────────────┘

Developer
   │
   ├─── git commit + git push origin main
   │              │
   │              ▼
   │    ┌─────────────────┐
   │    │   GitHub Repo   │
   │    └────────┬────────┘
   │             │ triggers
   │             ▼
   │    ┌─────────────────────────────────┐
   │    │     GitHub Actions Workflow      │
   │    │                                 │
   │    │  Job 1: Build Check             │
   │    │  ├── npm ci                     │
   │    │  ├── npm run build              │
   │    │  └── ✓ or ✗                     │
   │    │                                 │
   │    │  if push to main:               │
   │    │  Job 3: Production Deploy       │
   │    │  ├── vercel pull --prod         │
   │    │  ├── vercel build --prod        │
   │    │  └── vercel deploy --prod       │
   │    │              │                  │
   │    └──────────────┼──────────────────┘
   │                   │
   │                   ▼
   │    ┌─────────────────────────────────┐
   │    │         VERCEL CDN              │
   │    │   multyelectricalssolar.vercel  │
   │    │          .app                  │
   │    └─────────────────────────────────┘
   │                   │
   └───────────────────┘ (user visits site)


┌─────────────────────────────────────────────────────────────┐
│                    PR PREVIEW WORKFLOW                      │
└─────────────────────────────────────────────────────────────┘

Developer
   │
   ├─── git checkout -b feature/new-section
   ├─── git commit + git push origin feature/new-section
   ├─── Creates Pull Request on GitHub
   │              │
   │              ▼
   │    ┌─────────────────────────────────┐
   │    │     GitHub Actions Workflow      │
   │    │                                 │
   │    │  Job 1: Build Check             │
   │    │  Job 2: Preview Deploy          │
   │    │  ├── vercel pull --preview      │
   │    │  ├── vercel build               │
   │    │  └── vercel deploy              │
   │    │              │                  │
   │    └──────────────┼──────────────────┘
   │                   │
   │                   ▼
   │    ┌─────────────────────────────────┐
   │    │    PR Comment Auto-Posted       │
   │    │  "🌞 Preview deployed!"         │
   │    │  "URL: https://...vercel.app"   │
   │    └─────────────────────────────────┘
   │
   └─── Review preview → Merge PR → Production deploys
```

---

## Quick Reference

| Command | Purpose |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `vercel` | Deploy preview via CLI |
| `vercel --prod` | Deploy production via CLI |
| `vercel env add` | Add environment variable |
| `vercel logs` | View deployment logs |

---

## Contact for Deployment Help

For issues with this website deployment, contact the development team.

For solar energy inquiries:
- **MULTY ELECTRICALS SOLAR**
- 📞 +91 70255 23226
- 📱 +91 94466 33289
- 📍 Nilambur, Kerala, India
