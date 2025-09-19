# MyFavoriteSeen — Masterpiece (Neon)

This is the final, complete project bundle with full styling, interactions, newsletter, scene grid, and a working Markdown blog.

Quick local setup (copy & paste in terminal):

```bash
# unzip to a folder (adjust path if needed)
unzip ~/Downloads/myfavoriteseen_masterpiece_final.zip -d ~/myfavoriteseen
cd ~/myfavoriteseen

# install dependencies
npm install

# verify locally
npm run dev
# open http://localhost:3000 in your browser
```

Upload to GitHub and deploy to Vercel (replace USERNAME):

```bash
cd ~/myfavoriteseen
git init
git branch -M main
git remote add origin https://github.com/USERNAME/myfavoriteseen.git
git add .
git commit -m "Initial commit — masterpiece"
git push -u origin main
```

Then import the repo on https://vercel.com — Vercel will install dependencies and deploy automatically.
