# VividGallery 🌌 | Premium Visual Exploration Platform

VividGallery is a modern, responsive, and highly interactive visual exploration platform that combines curated local photography collections with a global search engine powered by the Pexels API. 

The application is built completely standalone using vanilla frontend technologies (HTML, CSS, JavaScript) and is fully optimized for Git source control and one-click Vercel hosting.

---

## ✨ Features

- **Global Explore Mode (Pexels API)**: Type any keyword to search and load millions of high-resolution images. Features attribution badges linking directly to photographer profiles.
- **Pinterest-Style Masonry Layout**: A dynamic column layout that automatically rearranges items based on viewport sizes (Desktop, Tablet, Mobile).
- **Gamified Achievements**: Floating drawer showing badges (e.g., *Nature Explorer*, *Cosmic Traveler*) that track and unlock based on user activity.
- **Interactive Particle Backgrounds**: Toggles animated canvas layers (twinkling starfields, falling autumn leaves, motion vectors, floating clouds) matching active image filters.
- **Image of the Day**: Highlights a daily featured image based on date hash algorithms.
- **3D Tilt Hover Effects**: Immersive, cursor-responsive card perspective shifting.
- **"Did You Know?" Fact Box**: Inline card showing category-specific facts inside the lightbox.
- **Direct Blob Downloads**: Prompts browser save-file downloads for high-resolution sources without cross-origin redirects.
- **Persistent Settings**: LocalStorage storage syncs favorites board state, theme overrides (Dark/Light mode), unlocked badge histories, and Pexels credentials.
- **Easter Eggs**: Secret "Explorer Mode" rainbow visual filters triggered by clicking the logo 5 times.

---

## 🛠️ Technology Stack

- **Structure**: Semantic HTML5 markup
- **Styling**: Vanilla CSS3 Custom Variables (Utility-free, fluid layouts, glassmorphism filters, keyframe loops)
- **Logic**: Vanilla ES6+ JavaScript (Dynamic DOM nodes creation, fetch calls, canvas render updates)

---

## 🚀 Local Installation & Run

Since the application has no build dependencies or npm requirements, you can run it instantly using any of the following methods:

### Method A: Single File (No Installation)
Just open `index.html` directly in any modern browser by double-clicking the file in your explorer.

### Method B: Python HTTP Server (Recommended)
Navigate to the project root and run:
```bash
python -m http.server 8085
```
Open **[http://localhost:8085](http://localhost:8085)** in your web browser.

---

## 🔑 Pexels API Key Configuration

To unlock the **Global Explore** search mode:
1. Obtain a free Pexels developer key in 30 seconds by registering at [Pexels API Portal](https://www.pexels.com/api/new/).
2. Open the application, toggle **Global Explore** next to the search bar.
3. Click the **Key icon (🔒)** in the search actions row.
4. Paste your key and click **Save & Apply Settings**. The credential will be securely stored inside your browser's local sandbox (`localStorage`).

---

## 📦 GitHub and Vercel Deployment Instructions

### Part 1: Push to GitHub
1. Initialize git in your project root:
   ```bash
   git init
   ```
2. Stage and commit files:
   ```bash
   git add .
   git commit -m "Initial commit: VividGallery Visual exploration platform"
   ```
3. Create a repository on GitHub, map the remote url, and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

### Part 2: Deploy to Vercel (Fastest & Free)
1. Go to [Vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **Add New...** > **Project**.
3. Import your `VividGallery` repository from the list.
4. Keep the default settings (Vercel automatically detects the static `index.html` at the root directory and configures hosting).
5. Click **Deploy**. Your app will be live on a secure HTTPS `vercel.app` domain in under 10 seconds!
