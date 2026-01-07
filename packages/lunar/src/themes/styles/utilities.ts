import { type CSSProperties, type StyleRule } from '@vanilla-extract/css';

import { COLORS__PURE } from '../tokens/primitives/colors.js';

/**
 * Helper function to create a motion-safe style object with custom CSS properties.
 * Returns a style object that wraps the provided styles in a `prefers-reduced-motion: no-preference` media query,
 * ensuring animations only run when users haven't requested reduced motion.
 *
 * This function returns a style object that must be used with vanilla-extract's `style()` function or `recipe()` function.
 *
 * @param styles - CSS properties object (e.g., { transition: 'opacity 0.3s ease', transform: 'scale(1.1)' })
 * @returns A style object that applies the CSS properties only when motion is preferred
 *
 * @example
 * import { style } from '@vanilla-extract/css';
 * import { withSafeTransition } from './utilities.css.ts';
 *
 * const fadeTransition = style([
 *   withSafeTransition({
 *     transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
 *     transform: 'translateY(0)'
 *   }),
 *   {
 *     // Additional styles can be added here
 *     padding: '16px'
 *   }
 * ]);
 */
const withSafeTransition = (styles: StyleRule): StyleRule => ({
  '@media': {
    '(prefers-reduced-motion: no-preference)': styles,
  },
});

/**
 * Helper function to create a custom focus outline style object.
 *
 * @param outlineColor - The color for the focus outline (e.g., '#0066cc', 'rgb(255, 0, 0)', CSS custom properties)
 * @param selector - Optional CSS selector for the outline state (e.g., ':focus-visible', '&:hover', '& > button:focus-visible', defaults to ':focus-visible')
 * @returns A style object with custom focus outline styling that uses the provided selector
 *
 * @example
 * import { style } from '@vanilla-extract/css';
 * import { recipe } from '@vanilla-extract/recipes';
 * import { withCustomOutline } from './utilities.css.ts';
 *
 * const redOutlineButton = style([
 *   withCustomOutline('#ff0000'),
 *   {
 *     padding: '8px 16px',
 *     background: 'white'
 *   }
 * ]);
 *
 * // Example with custom selector
 * const hoverOutlineButton = style([
 *   withCustomOutline('#00cc66', ':hover'),
 *   {
 *     padding: '8px 16px',
 *     background: 'white'
 *   }
 * ]);
 *
 * const buttonVariants = recipe({
 *   base: [
 *     withCustomOutline(themeContract.colors.shadow.interactive),
 *     {
 *       // other base styles
 *       padding: '12px 24px'
 *     }
 *   ],
 *   variants: {
 *     // variant styles
 *   }
 * });
 */
const withCustomOutline = (outlineColor: string, selector = ':focus-visible'): Record<string, CSSProperties> => ({
  [selector]: {
    boxShadow: `0px 0px 0px 0px, ${COLORS__PURE.transparent} 0px 0px 0px 0px, ${COLORS__PURE.transparent} 0px 0px 0px 0px, ${outlineColor} 0px 0px 0px 3px, ${outlineColor} 0px 1px 2px 0px`,
    outline: '2px solid transparent',
    outlineOffset: '2px',
  },
});

/**
 * Helper function to create a responsive style object with breakpoint media queries.
 *
 * @param breakpoint - The minimum viewport width for the media query (e.g., '768px', '1024px', '48rem')
 * @param styles - CSS properties object to apply at the breakpoint (e.g., { fontSize: '1.5rem', padding: '24px' })
 * @returns A style object that applies the CSS properties only when the viewport width meets the breakpoint
 *
 * @example
 * import { style } from '@vanilla-extract/css';
 * import { recipe } from '@vanilla-extract/recipes';
 * import { withBreakpoint } from './utilities.css.ts';
 *
 * const responsiveText = style([
 *   withBreakpoint('768px', {
 *     fontSize: '1.5rem',
 *     lineHeight: '1.4'
 *   }),
 *   {
 *     // Base styles
 *     fontSize: '1rem',
 *     lineHeight: '1.6'
 *   }
 * ]);
 *
 * const cardVariants = recipe({
 *   base: [
 *     withBreakpoint('1024px', {
 *       padding: '32px',
 *       maxWidth: '800px'
 *     }),
 *     {
 *       // base styles
 *       padding: '16px',
 *       maxWidth: '100%'
 *     }
 *   ],
 *   variants: {
 *     // variant styles
 *   }
 * });
 */
const withBreakpoint = (breakpoint: string, styles: CSSProperties): StyleRule => ({
  '@media': {
    [`(min-width: ${breakpoint})`]: styles,
  },
});

/**
 * Helper function to create a visually hidden style object for screen reader accessibility.
 * Returns a style object that hides content visually while keeping it accessible to screen readers.
 * This is useful for providing descriptive text, skip links, or other content that should only
 * be available to assistive technologies.
 *
 * @returns A style object that visually hides content while maintaining screen reader accessibility
 *
 * @example
 * import { style } from '@vanilla-extract/css';
 * import { recipe } from '@vanilla-extract/recipes';
 * import { withVisuallyHidden } from './utilities.css.ts';
 *
 * const skipLink = style([
 *   withVisuallyHidden(),
 *   {
 *     // Additional styles can be added here
 *     zIndex: 1000
 *   }
 * ]);
 *
 * const srOnly = style([
 *   withVisuallyHidden()
 * ]);
 *
 * const buttonWithHiddenText = recipe({
 *   base: [
 *     withVisuallyHidden(),
 *     {
 *       padding: '8px 12px',
 *       background: 'blue'
 *     }
 *   ],
 *   variants: {
 *     // variant styles
 *   }
 * });
 */
const withVisuallyHidden = (): StyleRule => ({
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  borderWidth: '0',
});

export { withSafeTransition, withCustomOutline, withBreakpoint, withVisuallyHidden };
