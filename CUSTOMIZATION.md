# Portfolio Customization Guide

## Quick Start - What to Change Immediately

### 1. Update Your Name & Title
**File: index.html, Lines 30-31**
```html
<h1 class="hero-title">Building Bold Digital Experiences</h1>
<p class="hero-subtitle">I design and develop elegant, high-performance web solutions...</p>
```
Replace with your own tagline and description.

### 2. Update About Section
**File: index.html, Lines 39-48**
Replace the three paragraphs with your personal story. Keep the first-person confident tone.

### 3. Customize Your Skills
**File: index.html, Lines 62-83**
Each skill card has:
- Emoji icon (can use any emoji)
- Title (your skill/expertise)
- Description (what you do with it)

Example:
```html
<div class="skill-card">
    <div class="skill-icon">🚀</div>
    <h3>Product Management</h3>
    <p>Building products users love...</p>
</div>
```

### 4. Add Your Projects
**File: index.html, Lines 87-210**
Update the three example projects or add more. Each needs:
- Title
- Year
- Description
- 3-4 tech tags
- Link to project

### 5. Update Contact Info
**File: index.html, Line 254**
```html
<a href="mailto:hello@yourname.com" class="contact-button email">
```
Change email to yours.

**Lines 269-272 - Social Links**
Update Twitter, LinkedIn, GitHub, Dribbble links.

---

## Color Customization

### Change Accent Color

All colors in **style.css, Lines 7-8**:

```css
:root {
  --color-accent: #6366f1;      /* Change this to your color */
}
```

### Popular Color Alternatives

**Pink/Magenta**: `#ec4899` or `#f472b6`
**Purple**: `#8b5cf6` or `#a78bfa`
**Cyan**: `#06b6d4` or `#22d3ee`
**Green**: `#10b981` or `#34d399`
**Blue**: `#3b82f6` or `#60a5fa`
**Red**: `#ef4444` or `#f87171`
**Orange**: `#f97316` or `#fb923c`

### How to Change:
1. Find `--color-accent: #6366f1` in style.css (line 8)
2. Replace hex code with your color
3. The entire site will automatically update!

---

## Content Examples

### Good About Section
```
I'm a passionate builder obsessed with creating digital products that blend 
aesthetic excellence with technical precision. With [X] years of experience 
in [field], I approach every project as an opportunity to push boundaries 
and innovate.

I believe great digital experiences come from understanding the user, 
respecting their time, and delivering solutions that feel effortless. 
My work is driven by curiosity, attention to detail, and a commitment 
to continuous improvement.

When I'm not [work], you'll find me [hobby], [hobby], and [hobby].
```

### Good Project Description
```
A full-featured e-commerce platform built with React and Node.js, 
featuring real-time inventory, payment processing, and admin dashboard.
```
(Keep it concise: title, tech, key features)

### Good Skill Description
```
Modern, performant front-end and full-stack solutions using React, Vue, 
and Node.js that prioritize user experience and code quality.
```

---

## Advanced Customization

### Change Fonts

**In index.html, update <head> section:**
```html
<link href="https://fonts.googleapis.com/css2?family=NEWFONT:wght@400;700&display=swap" rel="stylesheet">
```

**Then in style.css:**
```css
body {
  font-family: 'NEWFONT', sans-serif;
}

h1, h2, h3 {
  font-family: 'NEWFONT', sans-serif;
}
```

### Change Dark Background to Different Tone

In **style.css, line 7**:
```css
--color-bg: #0a0e27;      /* Very dark blue - change this */
```

Options:
- Darker: `#000000` or `#0d0d0d`
- Navy: `#0f172a` or `#1e293b`
- Dark Blue: `#1e3a8a` or `#1e40af`
- Dark Gray: `#1f2937` or `#111827`

### Add Gradient Background to Hero

In **style.css, around line 145**:
```css
.hero-background {
  background: linear-gradient(135deg, #6366f1 0%, #3b82f6 100%);
}
```

### Make Text Larger

In **style.css, h1/h2/h3 sections:**
```css
h1 {
  font-size: clamp(2.5rem, 7vw, 6rem);  /* Increase first and third value */
}
```

---

## SEO & Meta Tags

**File: index.html, <head> section**

### Update Page Title
```html
<title>Your Name - Portfolio | Designer & Developer</title>
```

### Update Description
```html
<meta name="description" content="I'm a [role] specializing in [skills]. 
Check out my recent work in [field].">
```

### Add More Meta Tags
```html
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Description here">
<meta property="og:image" content="https://yoursite.com/preview.jpg">
<meta name="twitter:card" content="summary_large_image">
<meta name="author" content="Your Name">
<meta name="keywords" content="designer, developer, web, portfolio">
```

---

## Animation & Performance Tweaks

### Make Animations Faster
**In style.css, line 25:**
```css
--transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);  /* was 0.3s */
```

### Make Animations Slower
```css
--transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);  /* was 0.3s */
```

### Disable Animations (for older devices)
Add to **style.css** at the end:
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Adding New Sections

### Template for New Section
```html
<section class="new-section" id="section-id">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Section Title</h2>
            <div class="title-line"></div>
        </div>
        <!-- Your content here -->
    </div>
</section>
```

### Add to Navigation
**In navbar (line 20):**
```html
<a href="#section-id" class="nav-link">Section</a>
```

---

## Mobile Responsive Tips

The site is already fully responsive! But if you want to adjust:

**Tablet Breakpoint: 768px**
```css
@media (max-width: 768px) {
  /* Adjustments here */
}
```

**Mobile Breakpoint: 480px**
```css
@media (max-width: 480px) {
  /* Adjustments here */
}
```

---

## Testing Checklist

- [ ] Desktop view (1920px+)
- [ ] Tablet view (768px)
- [ ] Mobile view (375px - 480px)
- [ ] All links work
- [ ] Email link works
- [ ] Smooth scroll works
- [ ] Navbar highlights correct section
- [ ] Hover effects work on desktop
- [ ] Page loads fast (< 3 seconds)
- [ ] No console errors

---

## Common Mistakes to Avoid

❌ **Too much text** - Keep descriptions concise
❌ **Outdated projects** - Remove old work regularly
❌ **Broken links** - Test all links before deploying
❌ **Poor grammar** - Proofread everything
❌ **Fake projects** - Only show real work you've done
❌ **Too many colors** - Stick to the color scheme
❌ **Slow images** - Optimize all images
❌ **Too many animations** - Keep it subtle

---

## Final Touches

1. **Add a favicon** - Put favicon.ico in root folder
2. **Test on phone** - Use mobile device or Chrome DevTools
3. **Spell check** - Verify all text is correct
4. **Grammar** - Use a tool like Grammarly
5. **Link check** - Make sure all URLs work
6. **Load test** - Check website speed with Lighthouse
7. **Browser test** - Check on Chrome, Firefox, Safari, Edge

---

**You're all set! Your portfolio is ready to customize and deploy.** 🚀
