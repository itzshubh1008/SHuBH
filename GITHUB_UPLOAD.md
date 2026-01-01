# 📘 GitHub Upload Instructions

## Project Structure
```
shubham-portfolio/
├── index.html                  (Main HTML file)
├── style.css                   (All styling)
├── script.js                   (JavaScript interactions)
├── .gitignore                  (Files to ignore in Git)
├── README.md                   (Project overview)
├── profile/
│   └── main.jpg               (Your profile picture)
├── certificates/
│   ├── certificate.jpg
│   ├── course.jpg
│   ├── LA2JDIMJZX.png
│   ├── oracle certified foundations associate_page-0001 (1).jpg
│   ├── Tata Data Analytics_page-0001.jpg
│   └── 1767246296795.jpg
└── (Documentation files)
    ├── CUSTOMIZATION.md
    ├── DEPLOYMENT.md
    ├── GUIDE.md
    └── INDEX.md
```

## Step-by-Step GitHub Upload

### 1️⃣ Install Git
- Download from: https://git-scm.com/download/win
- Run installer, choose defaults
- Restart your computer after installation

### 2️⃣ Create GitHub Account (if you don't have one)
- Go to: https://github.com/signup
- Create account with your email
- Verify your email

### 3️⃣ Create New Repository on GitHub
1. Go to https://github.com
2. Click **"+"** icon (top right) → **"New repository"**
3. Repository name: `portfolio` (or `shubham-portfolio`)
4. Description: `Modern Portfolio Website - Built with HTML, CSS, JavaScript`
5. Choose **Public** (so everyone can see it)
6. **DO NOT** initialize with README (we already have one)
7. Click **"Create repository"**

### 4️⃣ Configure Git Locally (First Time Only)
Open PowerShell and run:
```powershell
git config --global user.name "Shubham Nale"
git config --global user.email "shubhamnale1008@gmail.com"
```

### 5️⃣ Upload Your Project
In PowerShell, navigate to your project folder:
```powershell
cd d:\mv
```

Then run these commands one by one:
```powershell
git init
git add .
git commit -m "Initial commit: Portfolio website with profile, certificates, and animations"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/portfolio.git
git push -u origin main
```

**Replace `YOUR_GITHUB_USERNAME`** with your actual GitHub username!

### 6️⃣ Enable GitHub Pages (Make it Live)
1. Go to your repository: `https://github.com/YOUR_GITHUB_USERNAME/portfolio`
2. Click **⚙️ Settings** (top right)
3. Scroll down to **"Pages"** section (left sidebar)
4. Under **"Source"**, select **main** branch
5. Select **/root** folder
6. Click **Save**
7. Wait 1-2 minutes for deployment
8. Your live website: `https://YOUR_GITHUB_USERNAME.github.io/portfolio/`

### ✅ Verify Everything Uploaded
1. Go to your repository on GitHub
2. You should see:
   - ✅ index.html
   - ✅ style.css
   - ✅ script.js
   - ✅ profile/ folder
   - ✅ certificates/ folder
   - ✅ All documentation files

### 🚀 After Live
- Edit files locally, then `git add .` → `git commit -m "message"` → `git push`
- Changes appear on live site within seconds!

## Alternative: Simpler Method (Without Git)
If you're having issues with Git:
1. Go to your repository on GitHub
2. Click **"Add file"** → **"Upload files"**
3. Drag and drop all your files/folders
4. Commit changes
5. Enable Pages (same as Step 6)

## Need Help?
If you get any errors:
1. Check your GitHub username spelling
2. Ensure Git is properly installed
3. Make sure you're in the correct folder: `d:\mv`
4. Verify you created an empty repository on GitHub

Good luck! 🎉
