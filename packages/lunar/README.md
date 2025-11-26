# Lunar

A modern React component library inspired by Radix UI and ShadCN, built with TypeScript and Vanilla Extract for
CSS-in-JS styling.

## Overview

Lunar provides a comprehensive set of accessible, customizable React components with a powerful theming system. It
combines the accessibility features of Radix UI with a clean design aesthetic and flexible styling approach.

## Installation

Install the package and its peer dependencies:

```bash
# Using pnpm (recommended)
pnpm add @wcm/lunar @vanilla-extract/css @vanilla-extract/recipes @vanilla-extract/sprinkles clsx react react-dom

# Using npm
npm install @wcm/lunar @vanilla-extract/css @vanilla-extract/recipes @vanilla-extract/sprinkles clsx react react-dom

# Using yarn
yarn add @wcm/lunar @vanilla-extract/css @vanilla-extract/recipes @vanilla-extract/sprinkles clsx react react-dom
```

## Quick Start

Wrap your application with the `ThemeProvider` and import the base styles:

```tsx
import { ThemeProvider } from '@wcm/lunar';
import '@wcm/lunar/styles.css';

function App() {
  return (
    <ThemeProvider>
      <YourAppContent />
    </ThemeProvider>
  );
}
```

### Basic Component Usage

```tsx
import { Button, Card, CardHeader, CardContent, Text } from '@wcm/lunar';

function Example() {
  return (
    <Card>
      <CardHeader>
        <Text variant="heading">Welcome to Lunar</Text>
      </CardHeader>
      <CardContent>
        <Text variant="body">Start building beautiful interfaces with Lunar components.</Text>
        <Button variant="primary">Get Started</Button>
      </CardContent>
    </Card>
  );
}
```

## Available Components

### Primitives

- **Button** - Flexible button component with multiple variants and sizes
- **Input** - Form input with consistent styling
- **Label** - Accessible label component
- **Text** - Typography component with semantic variants

### Composites

- **Card** - Container component with header, content, and footer sections
- **Dialog** - Modal dialog with accessibility features

### Utilities

- **ThemeProvider** - Context provider for theming
- **useTheme** - Hook for accessing theme state
- **useDialog** - Hook for dialog state management

## Theming System

Lunar includes a comprehensive theming system with:

- **Color Schemes**: Light, dark, and system modes
- **Design Tokens**: Consistent spacing, typography, colors, and shadows
- **Responsive Breakpoints**: Mobile-first responsive design
- **CSS Variables**: Runtime theme switching

### Theme Usage

```tsx
import { useTheme } from '@wcm/lunar';

function ThemeToggle() {
  const { colorScheme, setColorScheme } = useTheme();

  return <Button onClick={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')}>Toggle Theme</Button>;
}
```

## Development

### Prerequisites

- Node.js 24+
- pnpm

### Setup

```bash
# Install dependencies
pnpm install

# Start development mode
pnpm dev

# Build package
pnpm build

# Run type checking
pnpm typecheck

# Lint code
pnpm lint
```

### Project Structure

```
src/
├── components/          # React components
│   ├── primitives/     # Basic UI components
│   └── composite/      # Complex composed components
├── themes/             # Theme system and tokens
├── hooks/              # Custom React hooks
├── constants/          # Shared constants
└── types/              # TypeScript type definitions
```

## TypeScript Support

Lunar is built with TypeScript and provides full type definitions. All components export their prop types for better
development experience.

```tsx
import type { ButtonProps, TextProps } from '@wcm/lunar';
```
