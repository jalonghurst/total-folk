Basic monorepo structure:
```
total-folk/
├── apps/
│   ├── main-directory-web-app/
│   │   ├── frontend/
│   │   │   ├── index.tsx
│   │   │   ├── app/ (Next.js named directory)
│   │   │   │   ├── layout.tsx (Next.js config file which will automatically wrap around all page route files, here we can include navigation)
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
