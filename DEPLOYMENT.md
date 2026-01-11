# GitHub Pages Deployment Guide

## ✅ Your Site is Now Live!

**URL:** https://dbaskhara.github.io/schematic

## 🔗 How URLs Work on GitHub Pages

Your site now uses **HashRouter**, which means URLs will look like this:

- **Home:** https://dbaskhara.github.io/schematic/#/
- **Schematic:** https://dbaskhara.github.io/schematic/#/schematic
- **Discipline:** https://dbaskhara.github.io/schematic/#/discipline
- **Self-Improvement:** https://dbaskhara.github.io/schematic/#/self-improvement
- **Practice:** https://dbaskhara.github.io/schematic/#/practice

The `#` in the URL is normal for HashRouter and makes the routing work perfectly with GitHub Pages!

## 🚀 Deployment Commands

### Deploy to GitHub Pages
```bash
npm run deploy
```

This command will:
1. Build the production version (`npm run build`)
2. Deploy to GitHub Pages (`gh-pages -d dist`)

### Testing Locally Before Deploy
```bash
# Development mode (with hot reload)
npm run dev

# Build and preview production version locally
npm run build
npm run preview
```

## 🔄 Update Your Site

Whenever you make changes:

1. **Edit your files** (pages, components, styles)
2. **Test locally:** `npm run dev`
3. **Deploy:** `npm run deploy`
4. **Wait 1-2 minutes** for GitHub Pages to update
5. **Visit:** https://dbaskhara.github.io/schematic

## 📝 Configuration Explained

### vite.config.js
```javascript
base: process.env.NODE_ENV === 'production' ? '/schematic/' : '/'
```
- **Development:** Uses `/` (localhost:5173/)
- **Production:** Uses `/schematic/` (GitHub Pages subdirectory)

### App.jsx
```javascript
import { HashRouter as Router } from 'react-router-dom'
```
- **HashRouter** instead of BrowserRouter
- Works perfectly with GitHub Pages static hosting
- No server-side configuration needed

## 🎯 Why HashRouter?

GitHub Pages is a **static file hosting service**. It doesn't have a server to handle routes like `/discipline` or `/practice`.

**Options:**
1. ✅ **HashRouter** (Current solution)
   - URLs: `/#/schematic`, `/#/discipline`
   - Pros: Works perfectly, no configuration needed
   - Cons: Has `#` in URL

2. ❌ **BrowserRouter** (Doesn't work on GitHub Pages)
   - URLs: `/schematic`, `/discipline`
   - Problem: GitHub Pages returns 404 for these paths

## 🔧 Troubleshooting

### Site not updating after deploy?
- Wait 1-2 minutes for GitHub Pages cache
- Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Clear browser cache

### Seeing old version?
- Clear browser cache
- Check deployment was successful: `Published` message
- Verify on GitHub: Settings → Pages → Your site is live

### Links not working?
- Make sure you're using `<Link to="/page">` from react-router-dom
- NOT `<a href="/page">`  (this will cause full page reload)

### 404 Error on GitHub Pages?
- Make sure vite.config.js has correct base path
- Ensure you deployed after changes: `npm run deploy`

## 📊 Sharing Your Site

Share these links with users:

**Main site:**
```
https://dbaskhara.github.io/schematic
```

**Specific pages:**
```
https://dbaskhara.github.io/schematic/#/schematic
https://dbaskhara.github.io/schematic/#/discipline
https://dbaskhara.github.io/schematic/#/self-improvement
https://dbaskhara.github.io/schematic/#/practice
```

## 🎨 Custom Domain (Optional)

Want a custom domain like `schematic.com`?

1. Buy domain from registrar (Namecheap, GoDaddy, etc.)
2. Add `CNAME file` to public folder with your domain
3. Configure DNS settings at your registrar
4. Update in GitHub repo settings

## ✅ Quick Reference

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local development |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Deploy to GitHub Pages |

---

**Last deployed:** Auto-updates with each `npm run deploy`  
**Hosting:** GitHub Pages  
**URL:** https://dbaskhara.github.io/schematic
