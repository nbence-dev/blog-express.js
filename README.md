# 🚀 Root.log

> Documenting the journey through homelabs, full-stack development, and the beautiful chaos of the command line.

**Root.log** is a high-performance, responsive personal blog engine. It features a dark-mode terminal aesthetic, glassmorphism UI elements, and a dynamic modal-based workflow for a seamless "single-page" feel.

---

## 🛠️ Installation & Setup

Follow these steps to deploy the environment locally:

### 1. Initialize Dependencies

Clone the repository and install the required Node.js packages:

```bash
npm install
```

---

### 2. Patch Vulnerabilities

If any security issues are flagged by npm, apply the necessary patches:

```bash
npm audit fix
```

---

### 3. Compile Styles (Tailwind CSS v4)

This project uses the Tailwind JIT engine. You must run the compiler to generate the browser-ready CSS. Keep this process running in the background:

```bash
npx @tailwindcss/cli -i ./public/css/input.css -o ./public/css/style.css --watch
```

---

### 4. Boot the System

In a separate terminal window, launch the Express server:

```bash
node app.js
```

Access the local node at:

```
http://localhost:3000
```

---

## 📂 Project Architecture

```
.
├── public/
│   ├── css/
│   │   ├── input.css       # Source Tailwind directives
│   │   └── style.css       # Compiled CSS (Target)
│   └── images/             # System assets & icons
├── views/
│   ├── partials/           # Modular EJS components
│   │   ├── hero.ejs        # Hero section with server-rack backdrop
│   │   ├── posts.ejs       # Responsive grid & post logic
│   │   └── footer.ejs      # System status footer
│   └── index.ejs           # Root view
├── app.js                  # Express server & API routes
└── package.json            # Project manifest
```

---

## ⚡ Automation Scripts

To simplify your workflow, update the `scripts` object in your `package.json`:

```json
"scripts": {
  "start": "node app.js",
  "dev:css": "npx @tailwindcss/cli -i ./public/css/input.css -o ./public/css/style.css --watch"
}
```

Run with:

```bash
npm run dev:css
npm start
```

---

## 🛠️ Core Features

- **SUDO_NEW_ENTRY**: Create posts via a custom-styled modal interface.  
- **VIEW_ENTRY**: Read full logs without page reloads using dynamic data injection.  
- **SYSTEM_DELETE**: Destructive action handling via POST routes and red-glow UI feedback.  
- **RESPONSIVE_GRID**: Fluid layout transitions from mobile (1-col) to desktop (3-col).  
- **GLASSMORPHISM**: Modern UI depth using backdrop blurs and subtle borders.

---

## 📡 System Status

- **Backend**: Node.js / Express  
- **Frontend**: EJS / Tailwind CSS v4  
- **Database**: Local Array (Volatile — Reset on restart)  
- **Status**: OPERATIONAL  
