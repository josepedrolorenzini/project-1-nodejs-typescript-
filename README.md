# project-1-nodejs-typescript

A full-stack web application built with **React**, **Node.js**, and **TypeScript**, using **Supabase** and **Neon Postgres** as the database layer. Deployed on AWS infrastructure.

---

## 📋 Tech Stack

### Frontend
- **React** – UI library for building interactive interfaces
- **Vite** – Next-generation frontend build tool with Hot Module Replacement (HMR)
- **TypeScript** – Statically typed JavaScript for better developer experience and fewer runtime errors
- **ESLint** – Code quality and linting

### Backend
- **Node.js** – JavaScript/TypeScript runtime environment for the server
- **Express.js** – Web framework for building RESTful APIs
- **TypeScript** – Type safety across the entire backend, not just the frontend
- **Nodemon** – Development utility that automatically restarts the server on file changes
- **Supabase** – Managed backend-as-a-service built on top of Postgres, handling authentication and real-time data
- **Neon** – Serverless Postgres database provider, used as the underlying database engine

### Infrastructure & Deployment
- **AWS EC2** – Elastic cloud computing for hosting
- **Nginx** – Web server and reverse proxy
- **Ubuntu Linux** – Server operating system

---

## 🗄️ Database Architecture

This project uses two complementary tools to handle data:

- **Neon** provides the actual Postgres database instance. It is a serverless Postgres provider, meaning it scales automatically and you only pay for what you use. Your connection string and credentials come from Neon.
- **Supabase** connects to that Neon Postgres database and adds a layer of features on top, including authentication, row-level security policies, and a clean API interface for querying data.

Together they give you a production-grade Postgres setup with minimal configuration.

---

## 🛠️ Prerequisites

Before you start, make sure you have the following installed on your machine:

| Tool | Version | Why You Need It |
|------|---------|-----------------|
| **Node.js** | v18 or higher | Runs the backend server and frontend build tools |
| **npm** | v9 or higher | Package manager, comes bundled with Node.js |
| **TypeScript** | Latest | Adds type checking to both frontend and backend code |

### How to Install TypeScript Globally

If you don't have TypeScript installed, run this once on your machine:

```bash
npm install -g typescript
```

You can verify it's installed by running:

```bash
tsc --version
```

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/project-1-nodejs-typescript.git
cd project-1-nodejs-typescript
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

This will install Node.js packages including Express, TypeScript, Nodemon, Supabase client, and everything else the backend needs. Nodemon is included here as a development dependency — it watches your server files and automatically restarts whenever you save a change, so you don't have to do it manually.

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

This will install React, Vite, TypeScript, ESLint, and all other frontend packages listed in the `frontend/package.json`.

### 4. Configure Environment Variables

The backend needs connection details for Supabase and Neon. Create a `.env` file inside the `backend/` folder:

```bash
# backend/.env

# Neon Postgres connection string (from your Neon dashboard)
DATABASE_URL=postgresql://your_user:your_password@your_neon_host/your_database

# Supabase credentials (from your Supabase project settings)
SUPABASE_URL=https://your_project_id.supabase.co
SUPABASE_KEY=your_supabase_anon_or_service_role_key

# Server port
PORT=5000
```

> ⚠️ **Never commit your `.env` file to Git.** Make sure `.env` is listed in your `.gitignore`.

---

## 🚀 Running the Project

### Backend (Node.js + TypeScript)

```bash
cd backend

# Development mode — uses Nodemon for automatic restarts
npm run dev

# Production mode — compiles TypeScript and runs the output
npm start
```

The API server will start on `http://localhost:5000` by default.

### Frontend (React + Vite)

```bash
cd frontend

npm run dev
```

The React app will start on `http://localhost:5173` with hot reload enabled.

### Production Build

```bash
# Build the React app for production
npm run build

# Preview the production build locally
npm run preview
```

---

## 📁 Project Structure

```
project-1-nodejs-typescript/
├── backend/                    # Node.js + TypeScript server
│   ├── dist/                  # Compiled JavaScript output (production build)
│   ├── node_modules/          # Installed backend dependencies
│   ├── php/                   # PHP utilities (if any legacy or auxiliary scripts)
│   ├── src/                   # TypeScript source files
│   │   ├── data/             # Data files, seeds, or static data helpers
│   │   ├── db/               # Database connection, queries, and Supabase/Neon config
│   │   ├── testDB/           # Database testing utilities and test data
│   │   └── types/            # TypeScript type and interface definitions
│   ├── server.ts              # Main server entry point (Express app)
│   ├── package.json           # Backend dependencies and scripts
│   ├── package-lock.json      # Locked dependency versions
│   ├── pnpm-lock.yaml         # pnpm lockfile (if using pnpm)
│   └── tsconfig.json          # Backend TypeScript configuration
├── frontend/                   # React + Vite frontend application
│   └── ...                    # React components, pages, assets, config
├── .gitignore                  # Files and folders excluded from Git
└── README.md                   # This file
```

---

## 🔌 Key Scripts Reference

### Backend (`backend/package.json`)

| Script | Command | What It Does |
|--------|---------|--------------|
| Dev | `npm run dev` | Starts the server with **Nodemon** — auto-restarts on file changes |
| Start | `npm start` | Compiles TypeScript and runs the production server |
| Build | `npm run build` | Compiles all `.ts` files into `.js` in an output folder |

### Frontend (`frontend/package.json`)

| Script | Command | What It Does |
|--------|---------|--------------|
| Dev | `npm run dev` | Starts the Vite dev server with HMR |
| Build | `npm run build` | Creates an optimized production build |
| Preview | `npm run preview` | Previews the production build locally |
| Lint | `npm run lint` | Runs ESLint across the codebase |

---

## 🖥️ Production Deployment

- React production build is served as static files via **Nginx**
- Nginx acts as a reverse proxy, forwarding API requests to the Node.js backend
- The backend connects to **Neon Postgres** through **Supabase** in production
- Server runs on **AWS EC2** with **Ubuntu Linux**

---

## 📌 Notes for Recruiters

- This is a fully deployed, production-ready application — not a tutorial project
- TypeScript is used across both frontend and backend for type safety and maintainability
- The database layer combines **Neon** (serverless Postgres) with **Supabase** (managed backend services)
- Nodemon is used during development for a fast, iterative workflow
- The project demonstrates end-to-end ownership: frontend, backend, database, and cloud deployment

---

## 📫 Contact

**Portfolio:** [https://joseplorenzini.com](https://joseplorenzini.com)

---

**Last Updated:** February 2026  
**Status:** ✅ Live and actively maintained
