# ✅ Pre-Upload Checklist

## Files Present
- ✅ index.html
- ✅ style.css
- ✅ script.js
- ✅ .gitignore
- ✅ README.md (or README_GITHUB.md)
- ✅ GITHUB_UPLOAD.md
- ✅ profile/ folder with main.jpg
- ✅ certificates/ folder with all images

## Image Files Verified
### Profile
- ✅ profile/main.jpg

### Certificates
- ✅ certificates/certificate.jpg
- ✅ certificates/course.jpg
- ✅ certificates/LA2JDIMJZX.png
- ✅ certificates/oracle certified foundations associate_page-0001 (1).jpg
- ✅ certificates/Tata Data Analytics_page-0001.jpg
- ✅ certificates/1767246296795.jpg

## Before GitHub Upload

### Option A: Using Git (Recommended)
```powershell
cd d:\mv
git init
git add .
git commit -m "Initial commit: Modern portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/portfolio.git
git push -u origin main
```

### Option B: Manual Upload (No Git Needed)
1. Go to https://github.com/YOUR_USERNAME/portfolio
2. Click **"Add file"** → **"Upload files"**
3. Upload everything from d:\mv folder:
   - All .html, .css, .js files
   - .gitignore file
   - profile/ folder (drag and drop)
   - certificates/ folder (drag and drop)
4. Commit changes

## After Upload

1. Go to repository Settings → Pages
2. Select **main** branch, **/root** folder
3. Save
4. Wait 1-2 minutes
5. Your live site: `https://YOUR_GITHUB_USERNAME.github.io/portfolio/`

## Troubleshooting

**❌ Images not showing?**
- Make sure folders uploaded with images
- Check file paths in index.html use `profile/` and `certificates/`
- Wait 5-10 minutes for GitHub Pages to rebuild

**❌ Styles not working?**
- Clear browser cache (Ctrl+Shift+Delete)
- Wait for GitHub Pages to rebuild
- Check CSS file is in root directory

**❌ Git errors?**
- Install Git from https://git-scm.com/download/win
- Restart terminal/PowerShell after installation
- Verify GitHub repository is empty (no README checked)

## Success! 🎉

Your portfolio should be live at:
`https://YOUR_GITHUB_USERNAME.github.io/portfolio/`

Share it with everyone! 🚀
