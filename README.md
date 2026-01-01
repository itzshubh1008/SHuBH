# Modern Personal Portfolio

A high-performance, modern portfolio website inspired by premium design standards with a bold, minimal aesthetic.

## Features

✨ **Design & Aesthetics**
- Dark theme with high-contrast typography
- Minimal, premium look with lots of whitespace
- Bold headlines and confident tone
- Smooth animations and subtle motion effects
- Responsive mobile-first design

🚀 **Performance**
- Optimized for fast loading
- Semantic HTML structure
- Efficient CSS animations
- Lazy loading support for images
- Minimal JavaScript footprint

🎯 **Sections Included**

1. **Navigation** - Fixed header with smooth scroll indicators
2. **Hero** - Full-screen introduction with animated background
3. **About** - Personal story and key stats
4. **Skills** - Grid of expertise areas with icons
5. **Work** - Project showcase with descriptions and tech stacks
6. **Personal** - Hobbies and personality (humanizing touch)
7. **Contact** - Call-to-action with multiple contact methods
8. **Footer** - Minimal signature and quote

## Quick Customization

### Content Updates

**Hero Section** (index.html, lines 30-36)
```html
<h1 class="hero-title">Your Title Here</h1>
<p class="hero-subtitle">Your subtitle</p>
```

**About Section** (lines 39-58)
- Update the 3 paragraph blocks with your story
- Modify stats (10+, 5+, 100%) to match your experience

**Skills Section** (lines 62-83)
- Each skill card has: emoji icon, title, description
- Easy to add/remove cards in the grid

**Projects** (lines 87-210)
- Each project includes: title, year, description, tech stack, link
- Replace placeholder SVGs with real project images
- Add project links

**Personal Section** (lines 214-240)
- Update interests/hobbies cards
- Keep the emoji + title + description format

**Contact** (lines 244-272)
- Update email address: `mailto:hello@yourname.com`
- Update social media links
- Replace placeholder URLs with real profiles

### Color Scheme

All colors defined in `:root` variables in `style.css`:

```css
--color-accent: #6366f1;        /* Primary accent (indigo) */
--color-bg: #0a0e27;            /* Dark background */
--color-text: #ffffff;          /* White text */
--color-text-secondary: #b0b9d1; /* Secondary text */
```

Easy color swap examples:
- Change `#6366f1` to `#ec4899` for pink accent
- Change `#6366f1` to `#8b5cf6` for purple accent
- Change `#6366f1` to `#06b6d4` for cyan accent

### Typography

Using modern system fonts:
- **Headings**: Syne (bold, geometric)
- **Body**: Inter (clean, readable)

Both are imported from Google Fonts in `index.html`.

### Adding More Content

**New Skill Card:**
```html
<div class="skill-card">
    <div class="skill-icon">🔥</div>
    <h3>Your Skill</h3>
    <p>Description of what you do</p>
</div>
```

**New Project Card:**
```html
<article class="project-card">
    <div class="project-content">
        <div class="project-header">
            <h3 class="project-title">Project Title</h3>
            <span class="project-year">2024</span>
        </div>
        <p class="project-description">Description</p>
        <div class="tech-stack">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
        </div>
        <a href="#" class="project-link">Explore Project →</a>
    </div>
    <div class="project-preview">
        <!-- Add image or SVG here -->
    </div>
</article>
```

## JavaScript Features

- **Smooth Scrolling**: Click any nav link to smoothly scroll to sections
- **Active Nav Indicator**: Current section is highlighted in navigation
- **Parallax Background**: Subtle parallax effect on hero section
- **Fade-in on Scroll**: Elements animate in as they come into view
- **Project Card 3D Effect**: Subtle 3D rotation on hover
- **Counter Animation**: Stats numbers animate up from 0
- **Keyboard Shortcuts**: Press H, A, S, W, or C for quick navigation
- **Navbar Enhancement**: Background becomes opaque on scroll

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge). Includes fallbacks for older browsers.

## Performance Tips

1. **Images**: Replace placeholder SVGs with actual project images
2. **Optimization**: Compress images to <100KB each
3. **SEO**: Update meta tags in `<head>` (description, title)
4. **Analytics**: Add your Google Analytics or Plausible code
5. **CDN**: Host on Netlify, Vercel, or GitHub Pages for fast delivery

## Deployment

### Option 1: Netlify (Recommended)
- Connect your GitHub repo
- Automatic deployments on push
- Free HTTPS and custom domain

### Option 2: Vercel
- Push to GitHub
- Vercel auto-deploys
- Fast worldwide CDN

### Option 3: GitHub Pages
- Push to `gh-pages` branch
- Free hosting at yourusername.github.io
- Works great for portfolios

## File Structure

```
portfolio/
├── index.html      # Semantic HTML structure
├── style.css       # All styling and animations
├── script.js       # JavaScript interactions
└── README.md       # This file
```

## Customization Checklist

- [ ] Update name/title in hero section
- [ ] Update personal bio in about section
- [ ] Add your projects with descriptions
- [ ] Update skills/expertise
- [ ] Add personal interests
- [ ] Update contact email
- [ ] Add social media links
- [ ] Change accent color (optional)
- [ ] Update meta description
- [ ] Deploy to hosting platform

## Tips for Best Results

1. **Keep it Honest**: Your portfolio should reflect your actual work and skills
2. **Update Regularly**: Add new projects as you complete them
3. **Project Details**: Include challenge, solution, results for each project
4. **High Quality**: Use professional images and clear descriptions
5. **Mobile First**: Test on mobile devices frequently
6. **Fast Loading**: Optimize all images and assets
7. **Unique Voice**: Let your personality shine through the writing

## Support

Need help customizing? Refer to comments in the CSS and HTML files for guidance on specific sections.

---

**Built with:** Semantic HTML5, Modern CSS3, Vanilla JavaScript
**Design Inspiration:** Premium, minimal portfolio standards
**Year:** 2024
