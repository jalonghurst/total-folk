Basic monorepo structure:

```
total-folk/
├── apps/
│   ├── main-directory-web-app/
│   │   ├── frontend/
│   │   │   ├── index.tsx
│   │   │   ├── app/ (Next.js named directory)
│   │   │   │   ├── layout.tsx (Next.js named file which will automatically wrap around all page route files, here we can include navigation)
│   │   │   │   ├── page.tsx (Next.js named file for what is displayed on home page route "/")
│   │   │   │   ├── about/ (Directory names in app directory automatically sets route names: /about)
│   │   │   │   │   ├── page.tsx (determines what will be displayed on /about route)
│   │   │   │   ├── signin/
│   │   │   │   │   ├── page.tsx
│   │   │   ├── next.config.js
│   │   │   ├── package.json
├── packages/
│   ├── typescript-config/
│   ├── eslint-config/
│   ├── tailwind-config/
│   ├── ui/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Menu/
│   │   │   │   ├── Nav/
│   │   │   ├── styles.css
│   │   ├── tailwind.config.ts
│   │   ├── tsconfig.json
├── package.json
```

## Getting Started

### Prerequisites

Node.js
pnpm (a fast, disk space-efficient package manager)

## Installation

Clone the repository:

```
git clone https://github.com/jalonghurst/total-folk.git
cd total-folk
```

Install pnpm globally if you haven't already:

```
npm install -g pnpm
```

Install dependencies using pnpm:

```
pnpm install
```

## Running the Web Application

Navigate to the main-directory:

```
cd apps/main-directory/frontend
```

Start the frontend development server:

```
pnpm dev
```

Open your browser and go to http://localhost:3000.

## Run watch to automatically rebuild ui package when changes are made

(Any changes made to the ui package components automatically triggers a rebuild, and changes are reflected in the frontend server)
Open another terminal at root of monorepo and run:

```
pnpm run watch
```

## Running Checks

To run checks such as linting and formatting, use the following commands from root of monorepo:

Linting:

```
pnpm lint
```

Formatting with Prettier:

```
pnpm format
```

Running all build commands:

```
pnpm build
```

Command for running all three before making a commit:
"check": "turbo run lint && pnpm run format && turbo run build",

```
pnpm check
```
