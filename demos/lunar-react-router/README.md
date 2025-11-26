# Lunar React Router Demo

A full-featured React Router application demonstrating real-world usage of Lunar components in a modern web application.

## Overview

This demo application showcases how to integrate Lunar components into a React Router application, demonstrating routing
patterns, component composition, and theming in a practical context.

## Quick Start

From the project root:

```bash
# Install dependencies (if not already done)
pnpm install

# Start development with Lunar
pnpm dev:lunar-react-router
```

Or run directly from this directory:

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

The application will be available at `http://localhost:5173` in development mode.

## What's Demonstrated

### Application Features

- **Multi-page routing** with React Router v7
- **Server-side rendering** (SSR) capabilities
- **Responsive navigation** using Lunar components
- **Theme switching** between light and dark modes
- **Form handling** with Lunar input components
- **Layout patterns** using Lunar's Card and Typography components

### React Router Integration

- **File-based routing** configuration
- **Nested routes** and layouts
- **Data loading** patterns
- **Error boundaries** and error pages
- **SEO-friendly** server-side rendering

### Lunar Components Usage

- **ThemeProvider** setup and configuration
- **Component composition** patterns
- **Responsive design** with Lunar's breakpoint system
- **Accessible navigation** using semantic components
- **Form components** integration

## Application Structure

```
src/
├── pages/              # Page components
├── routes/             # Route definitions
├── root.tsx            # Root application component
└── routes.ts           # Route configuration
```

### Pages

- **Home Page** (`src/pages/Home.tsx`) - Landing page with component showcase
- **Additional routes** can be added in the `src/routes/` directory

## Development Features

### Hot Module Replacement

- **Fast refresh** for instant development feedback
- **Component state preservation** during updates
- **CSS updates** without page reload

### Type Safety

- **Full TypeScript** support with React Router type generation
- **Lunar component types** integration
- **Route parameter** type safety

### Build Optimization

- **Code splitting** by route
- **Tree shaking** for optimal bundle size
- **Asset optimization** with Vite

## Available Scripts

- `pnpm dev` - Start development server with HMR
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm typecheck` - Run TypeScript type checking

## Configuration

### React Router Configuration

- **Route Config**: `react-router.config.ts` - React Router setup
- **Routes**: `src/routes.ts` - Route definitions and data loading

### Vite Configuration

- **Build Config**: `vite.config.ts` - Development and build settings
- **TypeScript**: `tsconfig.json` - TypeScript compiler options

## Extending the Demo

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add route configuration in `src/routes.ts`
3. Update navigation if needed

```typescript
// Example new route
import { type RouteConfig } from '@react-router/dev/routes';

export const routes: RouteConfig = [
  {
    path: '/new-page',
    file: './pages/NewPage.tsx',
  },
];
```

### Customizing Themes

```tsx
// Example theme customization
import { ThemeProvider } from '@wcm/lunar';

function App() {
  return (
    <ThemeProvider defaultColorScheme="dark">
      <YourAppContent />
    </ThemeProvider>
  );
}
```

## Deployment

### Build for Production

```bash
pnpm build
```

### Deploy Static Files

The built application includes both client and server bundles:

- **Client**: `build/client/` - Static assets for CDN
- **Server**: `build/server/` - Server-side rendering bundle

### Environment Setup

For production deployment, ensure:

- Node.js 24+ runtime
- Proper environment variables
- Static file serving configuration
