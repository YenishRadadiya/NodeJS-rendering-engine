
# 🧩 Node.js EJS Dashboard Renderer

This is a simple Node.js project demonstrating **Server-Side Rendering (SSR)** using the **EJS** templating engine. The project serves a TailwindCSS-based dashboard through an HTTP server built with Node.js.

---

## 📁 Project Structure

```
├── index.ts                # Main server file
├── views/
│   └── dashboard.ejs       # EJS template for dashboard page
├── styles/
│   └── dashboard.css       # Optional CSS file
├── package.json
├── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Clone the repository

### 2. Install dependencies

```bash
npm install ejs
```

If you're using TypeScript, also install the types:

```bash
npm install --save-dev typescript @types/node @types/ejs
```

### 3. Compile TypeScript (if applicable)

```bash
npx tsc
```

### 4. Start the server

```bash
node dist/index.js  # or ts-node index.ts if using ts-node
```

---

## 🌐 Access the Dashboard

Open your browser and go to:

```
http://localhost:3000
```

You will see a responsive eCommerce admin dashboard rendered using EJS.

---

## 🛠 Features

- ✅ Pure Node.js HTTP server (no Express)
- ✅ EJS Templating Engine
- ✅ TailwindCSS styling
- ✅ Static file serving for custom CSS
- ✅ Responsive Admin Dashboard UI

---

## 📦 Dependencies

| Package | Purpose |
|--------|---------|
| `ejs` | Templating engine |
| `typescript` | Language (if you're using `.ts`) |
| `@types/node`, `@types/ejs` | Type definitions |

---

## 📌 Notes

- Static files like CSS are served manually by checking URL paths.
- TailwindCSS is used via CDN in the EJS template.
- The project avoids frameworks like Express to keep things minimal and educational.

---
