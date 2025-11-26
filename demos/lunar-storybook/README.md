# Lunar Storybook

Interactive Storybook showcase demonstrating all Lunar design system components, patterns, and theming capabilities.

## Overview

This Storybook project serves as the primary documentation and testing environment for the Lunar component library. It
includes component examples, design tokens documentation, and interactive playground for exploring the design system.

## Quick Start

From the project root:

```bash
# Install dependencies (if not already done)
pnpm install

# Start Storybook development server
pnpm dev:lunar-storybook
```

Or run directly from this directory:

```bash
# Start development server
pnpm dev

# Build for production
pnpm build
```

Storybook will be available at `http://localhost:6006`

## What's Included

### Component Stories

- **Primitive Components**: Button, Input, Label, Text with all variants and states
- **Composite Components**: Card, Dialog with usage examples
- **Interactive Examples**: Live component playground with controls

### Design System Documentation

- **Design Tokens**: Colors, typography, spacing, borders, shadows
- **Theme System**: Light/dark mode examples and customization
- **Color Schemes**: Visual representation of the color palette
- **Responsive Behavior**: Breakpoint and layout demonstrations

### Development Tools

- **Accessibility Testing**: Built-in a11y addon for accessibility validation
- **Theme Switching**: Toggle between light and dark themes
- **Responsive Testing**: Viewport controls for testing different screen sizes
- **Documentation**: Auto-generated props documentation from TypeScript

## Available Stories

### Components

- `Button.stories.tsx` - All button variants, sizes, and states
- `Input.stories.tsx` - Form input examples and validation states
- `Label.stories.tsx` - Label component with form associations
- `Text.stories.tsx` - Typography examples with semantic variants
- `Card.stories.tsx` - Card layouts and compositions
- `Dialog.stories.tsx` - Modal dialog patterns and behaviors

### Design System

- `Colors.stories.tsx` - Color palette and semantic color usage
- `Typography.stories.tsx` - Font scales, weights, and line heights
- `Spacing.stories.tsx` - Spacing scale and layout examples
- `Borders.stories.tsx` - Border radius and width examples
- `Shadows.stories.tsx` - Box shadow examples and usage
- `Themes.stories.tsx` - Complete theme switching demonstration

## Development Workflow

### Adding New Stories

1. Create a new `.stories.tsx` file in the appropriate directory
2. Follow the existing story patterns for consistency
3. Include comprehensive examples and documentation

```typescript
// Example story structure
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentName } from '@wcm/lunar';

const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName',
  component: ComponentName,
  // ... configuration
};

export default meta;
```

### Testing Components

- **Visual Testing**: Use Storybook's visual regression testing
- **Accessibility**: Check a11y panel for accessibility violations
- **Interactions**: Test component behaviors with controls
- **Responsive**: Use viewport controls to test different screen sizes

### Building for Production

```bash
# Build static Storybook
pnpm build

# Serve built Storybook locally
npx serve storybook-static
```

## Available Scripts

- `pnpm dev` - Start development server on port 6006
- `pnpm build` - Build static Storybook for deployment
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm lint` - Run ESLint on all files
- `pnpm lint:fix` - Fix automatically fixable linting issues

## Configuration

### Storybook Configuration

- **Main Config**: `src/main.ts` - Storybook setup and addons
- **Preview Config**: `src/preview.ts` - Global decorators and parameters
- **Theme Decorator**: `src/components/decorators/ColorSchemeWrapper.tsx` - Theme switching

### Build Tools

- **Vite**: Fast development and build tooling
- **TypeScript**: Full type checking and IntelliSense
- **Vanilla Extract**: CSS-in-JS integration with Lunar themes

## Deployment

The built Storybook can be deployed to any static hosting service:

```bash
pnpm build
# Deploy contents of storybook-static/ directory
```
