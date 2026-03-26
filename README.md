# Java Script Template TOP
# 🚀 Webpack Starter Template

A minimal, production-ready starting template for any frontend JavaScript project using **Webpack 5**.

This repository comes pre-configured with:

- ✅ Webpack 5  
- ✅ Webpack Dev Server  
- ✅ HTML template injection  
- ✅ CSS support  
- ✅ Source maps  
- ✅ ES Modules  
- ✅ GitHub Pages deployment support  

Perfect for quickly bootstrapping new projects without reconfiguring Webpack every time.

---

## 📦 Features

- Development mode configuration
- Auto-generated HTML via `html-webpack-plugin`
- CSS support via `style-loader` + `css-loader`
- HTML imports via `html-loader`
- Live reloading dev server
- Clean `dist/` builds
- GitHub Pages deployment using subtree

---

## 📁 Project Structure

```text
project-name/
│
├── dist/               # Production build output (auto-generated)
├── src/
│   ├── index.js        # Entry point
│   └── template.html   # HTML template
│
├── webpack.config.js
├── package.json
└── README.md
```

---

## 🛠 Installation

Clone the repository:

```bash
git clone https://github.com/wadhwashivam/JSTemplateTOP.git
cd your-repo
```

Install dependencies:

```bash
npm install
```

---

## 💻 Development

Start the development server:

```bash
npm run dev
```

This runs:

```bash
webpack serve
```

- Opens a local dev server
- Enables live reloading
- Uses `eval-source-map` for debugging
- Watches `template.html` for changes

---

## 🏗 Build for Production

```bash
npm run build
```

This runs:

```bash
webpack
```

- Outputs files to `dist/`
- Cleans `dist/` before each build
- Bundles all JS and CSS into `main.js`

---

## 🌍 Deploy to GitHub Pages

This template supports deployment using:

```bash
npm run deploy
```

Which runs:

```bash
git subtree push --prefix dist origin gh-pages
```

Make sure:

1. Your repository has a `gh-pages` branch.
2. GitHub Pages is configured to deploy from that branch.

---

## ⚙️ Webpack Configuration Overview

### Entry

```js
entry: "./src/index.js"
```

### Output

- File: `main.js`
- Directory: `dist/`
- Auto-clean enabled

### Loaders

- CSS → `style-loader`, `css-loader`
- HTML → `html-loader`

### Plugins

- `HtmlWebpackPlugin` injects the bundle into `template.html`

### Dev Server

- Watches `./src/template.html`
- Live reload enabled

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build project |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm test` | Placeholder test script |

---

## 🧠 How to Use This Template for a New Project

1. Click **"Use this template"** on GitHub  
2. Rename the project  
3. Update:
   - `package.json` → `name`, `homepage`, `repository`
   - README project title  
4. Start building inside `src/index.js`

---

## 🧩 Tech Stack

- Webpack 5
- Webpack Dev Server
- ES Modules
- HTML + CSS loaders
- ESLint
- Prettier

---

## 📌 Notes

- This config runs in **development mode** by default.
- You can extend it using `webpack-merge` for separate dev and prod configs.
- Add Babel or TypeScript if needed.

---

## 📄 License

No License
