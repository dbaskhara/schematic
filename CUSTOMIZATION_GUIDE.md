# Portfolio Customization Guide

## Your Schematic Portfolio is Ready! 🚀

You now have a stunning technical-themed portfolio that showcases your projects with a unique schematic/circuit board aesthetic.

## Quick Customization Steps

### 1. **Update Your Projects**
Edit `src/App.jsx` to replace the example projects with your actual work:

```javascript
<div className="feature-card">
  <div className="feature-icon">⬡</div>
  <h3>Your Project Name</h3>
  <p>
    Description of your project. What technologies did you use?
    What problem does it solve?
  </p>
  <button
    onClick={() => handleContactClick('Your Project Name')}
    className="btn btn-primary"
    style={{ marginTop: 'var(--space-md)', width: '100%' }}
  >
    View Project
  </button>
</div>
```

### 2. **Update Contact Email**
In `src/App.jsx`, line 16, change the email:

```javascript
window.location.href = `mailto:YOUR_EMAIL@example.com?subject=${encodeURIComponent(subject)}`
```

### 3. **Update Page Title** 
Edit `index.html` to change the page title and meta description:

```html
<title>Your Name - Portfolio</title>
<meta name="description" content="Your portfolio description">
```

### 4. **Change the Brand Name**
Replace "Schematic" with your name/brand in:
- `src/App.jsx` (navigation logo, footer)
- Footer copyright text

### 5. **Add Your Social Links**
Add a new footer section in `App.jsx`:

```javascript
<div className="footer-section">
  <h4>Connect</h4>
  <ul className="footer-links">
    <li><a href="https://github.com/yourusername">GitHub</a></li>
    <li><a href="https://linkedin.com/in/yourusername">LinkedIn</a></li>
    <li><a href="https://twitter.com/yourusername">Twitter</a></li>
  </ul>
</div>
```

## Geometric Icons You Can Use

The portfolio uses geometric shapes as icons. Here are some alternatives:

- ⬡ ⬢ ⬣ (Hexagons)
- ◈ ◇ ◆ ◊ (Diamonds)
- ▣ ▢ ▦ ▧ (Squares)
- ⬬ ◬ (Geometric patterns)
- ◧ ◨ ◩ ◪ (Triangles/Mixed)
- ⚡ ⚙ ⚛ (Technical symbols)

Copy-paste these into your project cards!

## Color Customization

To change the color scheme, edit `src/index.css`:

```css
:root {
  --color-primary: hsl(195, 100%, 45%);    /* Main accent color */
  --color-secondary: hsl(45, 100%, 50%);   /* Secondary accent */
  --color-accent: hsl(160, 100%, 40%);     /* Success/highlight */
}
```

Try these alternatives:
- **Purple theme**: `hsl(270, 70%, 50%)`
- **Green theme**: `hsl(150, 70%, 45%)`
- **Red theme**: `hsl(0, 70%, 50%)`
- **Orange theme**: `hsl(30, 90%, 50%)`

## Adding More Projects

Simply copy a feature-card div and paste it before the closing `</div>` of `.features-grid`:

```javascript
<div className="features-grid">
  {/* Existing projects... */}
  
  {/* Your new project */}
  <div className="feature-card">
    {/* ... */}
  </div>
</div>
```

The grid will automatically adjust to accommodate more projects!

## Going Live

### Option 1: GitHub Pages (Free)
```bash
npm run build
npm run deploy
```

### Option 2: Netlify (Free)
1. Push to GitHub
2. Connect to Netlify
3. Deploy automatically

### Option 3: Vercel (Free)
1. Import from GitHub
2. Deploy with one click

## Advanced Customizations

### Add Project Links
Replace the `handleContactClick` button with direct links:

```javascript
<a 
  href="https://your-project-url.com"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-primary"
  style={{ marginTop: 'var(--space-md)', width: '100%' }}
>
  View Live Demo →
</a>
```

### Add Project Images
Add images to your project cards:

```javascript
<div className="feature-card">
  <img 
    src="/path/to/project-image.jpg" 
    alt="Project preview"
    style={{ 
      width: '100%', 
      borderRadius: '8px', 
      marginBottom: 'var(--space-md)' 
    }}
  />
  <div className="feature-icon">⬡</div>
  {/* Rest of card... */}
</div>
```

### Add Technologies/Tags
```javascript
<div className="feature-card">
  <div className="feature-icon">⬡</div>
  <h3>Project Name</h3>
  <p>Project description...</p>
  
  <div style={{ 
    display: 'flex', 
    gap: '0.5rem', 
    flexWrap: 'wrap',
    marginTop: 'var(--space-sm)' 
  }}>
    <span style={{
      padding: '0.25rem 0.75rem',
      background: 'rgba(0, 174, 239, 0.1)',
      border: '1px solid var(--color-primary)',
      borderRadius: '4px',
      fontSize: '0.75rem',
      color: 'var(--color-primary)'
    }}>React</span>
    <span style={{...}}>Node.js</span>
    <span style={{...}}>MongoDB</span>
  </div>
  
  <button>View Project</button>
</div>
```

## Need Help?

- Check `README.md` for technical details
- Review `THEME_CHANGES.md` for design documentation
- The dev server auto-refreshes when you save changes

## Development Server

Your portfolio is running at: **http://localhost:5173**

Happy customizing! 🎨⚡
