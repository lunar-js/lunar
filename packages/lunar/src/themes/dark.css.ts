import { createTheme } from '@vanilla-extract/css';

import { themeContract } from '../tokens/tokens.css.js';
import {
  COLORS__PEARL,
  COLORS__GOLD,
  COLORS__GREEN,
  COLORS__YELLOW,
  COLORS__RED,
  COLORS__BLUE,
} from '../tokens/primitives/colors.js';
import { SPACING } from '../tokens/primitives/spacing.js';
import { FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT, LETTER_SPACING } from '../tokens/primitives/typography.js';
import { BORDER_RADIUS, BORDER_WIDTH } from '../tokens/primitives/borders.js';
import { BOX_SHADOW } from '../tokens/primitives/shadows.js';

const darkTheme = createTheme(themeContract, {
  colors: {
    // ACTION COLORS - Primary uses GOLD (brand), Secondary uses GOLD border, Destructive uses RED
    'action.primary': `oklch(${COLORS__GOLD[500]})`, // Gold background (same as light)
    'action.primary.hover': `color-mix(in oklch, oklch(${COLORS__GOLD[500]}) 90%, transparent)`, // 10% opacity reduction
    'action.primary.active': `color-mix(in oklch, oklch(${COLORS__GOLD[500]}) 80%, transparent)`, // 20% opacity reduction
    'action.primary.disabled': `color-mix(in oklch, oklch(${COLORS__GOLD[500]}) 40%, transparent)`, // 60% opacity reduction

    'action.secondary': `transparent`, // Transparent background with gold border
    'action.secondary.hover': `color-mix(in oklch, oklch(${COLORS__GOLD[900]}) 10%, transparent)`, // Dark gold tint
    'action.secondary.active': `color-mix(in oklch, oklch(${COLORS__GOLD[800]}) 20%, transparent)`, // Slightly more gold tint
    'action.secondary.disabled': `transparent`,

    'action.destructive': `oklch(${COLORS__RED[500]})`, // Red background
    'action.destructive.hover': `color-mix(in oklch, oklch(${COLORS__RED[500]}) 90%, transparent)`,
    'action.destructive.active': `color-mix(in oklch, oklch(${COLORS__RED[500]}) 80%, transparent)`,
    'action.destructive.disabled': `color-mix(in oklch, oklch(${COLORS__RED[500]}) 40%, transparent)`,

    'action.ghost': `transparent`, // Transparent background
    'action.ghost.hover': `color-mix(in oklch, oklch(${COLORS__PEARL[800]}) 50%, transparent)`,
    'action.ghost.active': `color-mix(in oklch, oklch(${COLORS__PEARL[700]}) 60%, transparent)`,
    'action.ghost.disabled': `transparent`,

    // BORDER COLORS - Interactive borders use GOLD
    'border.default': `oklch(${COLORS__PEARL[700]})`, // Subtle neutral border (lighter than light theme)
    'border.subtle': `oklch(${COLORS__PEARL[800]})`, // Very subtle border
    'border.strong': `oklch(${COLORS__PEARL[600]})`, // Strong neutral border

    'border.interactive': `oklch(${COLORS__GOLD[400]})`, // Lighter gold for dark theme
    'border.interactive.hover': `color-mix(in oklch, oklch(${COLORS__GOLD[400]}) 90%, transparent)`,
    'border.interactive.active': `color-mix(in oklch, oklch(${COLORS__GOLD[400]}) 80%, transparent)`,
    'border.focus': `oklch(${COLORS__GOLD[400]})`, // Gold focus ring

    'border.success': `oklch(${COLORS__GREEN[400]})`, // Lighter for dark theme
    'border.warning': `oklch(${COLORS__YELLOW[400]})`,
    'border.error': `oklch(${COLORS__RED[400]})`,
    'border.info': `oklch(${COLORS__BLUE[400]})`,

    'border.action.primary': `oklch(${COLORS__GOLD[400]})`, // Matches primary action
    'border.action.secondary': `oklch(${COLORS__GOLD[400]})`, // Gold border for secondary
    'border.action.destructive': `oklch(${COLORS__RED[400]})`,
    'border.action.disabled': `oklch(${COLORS__PEARL[700]})`,

    // TEXT COLORS - Primary hierarchy uses PEARL (inverted), Interactive uses GOLD
    'text.primary': `oklch(${COLORS__PEARL[50]})`, // High contrast light text
    'text.secondary': `oklch(${COLORS__PEARL[200]})`, // Medium contrast text
    'text.tertiary': `oklch(${COLORS__PEARL[300]})`, // Low contrast text

    'text.interactive': `oklch(${COLORS__GOLD[400]})`, // Lighter gold for links on dark
    'text.interactive.hover': `color-mix(in oklch, oklch(${COLORS__GOLD[400]}) 90%, transparent)`,
    'text.interactive.active': `color-mix(in oklch, oklch(${COLORS__GOLD[400]}) 80%, transparent)`,

    'text.success': `oklch(${COLORS__GREEN[300]})`, // Lighter for better contrast on dark
    'text.warning': `oklch(${COLORS__YELLOW[300]})`,
    'text.error': `oklch(${COLORS__RED[300]})`,
    'text.info': `oklch(${COLORS__BLUE[300]})`,

    'text.inverse': `oklch(${COLORS__PEARL[900]})`, // Dark text for light backgrounds
    'text.disabled': `oklch(${COLORS__PEARL[500]})`, // Muted text

    // SURFACE COLORS - Layered hierarchy with PEARL (inverted)
    'surface.bg.primary': `oklch(${COLORS__PEARL[950]})`, // Main background (darkest)
    'surface.bg.secondary': `oklch(${COLORS__PEARL[900]})`, // Cards, panels (lighter than primary)
    'surface.bg.tertiary': `oklch(${COLORS__PEARL[800]})`, // Elevated surfaces (lightest)

    'surface.bg.interactive': `transparent`, // Interactive surface base
    'surface.bg.interactive.hover': `color-mix(in oklch, oklch(${COLORS__GOLD[800]}) 20%, transparent)`,
    'surface.bg.interactive.active': `color-mix(in oklch, oklch(${COLORS__GOLD[700]}) 30%, transparent)`,

    'surface.bg.success': `color-mix(in oklch, oklch(${COLORS__GREEN[900]}) 30%, transparent)`,
    'surface.bg.warning': `color-mix(in oklch, oklch(${COLORS__YELLOW[900]}) 30%, transparent)`,
    'surface.bg.error': `color-mix(in oklch, oklch(${COLORS__RED[900]}) 30%, transparent)`,
    'surface.bg.info': `color-mix(in oklch, oklch(${COLORS__BLUE[900]}) 30%, transparent)`,

    'surface.bg.overlay': `color-mix(in oklch, oklch(${COLORS__PEARL[950]}) 80%, transparent)`, // Dark overlay
    'surface.bg.disabled': `oklch(${COLORS__PEARL[900]})`,
    'surface.bg.inverse': `oklch(${COLORS__PEARL[50]})`, // Light surface

    // ICON COLORS - Interactive icons use GOLD
    'icon.primary': `oklch(${COLORS__PEARL[200]})`, // Matches text.secondary
    'icon.secondary': `oklch(${COLORS__PEARL[300]})`, // Matches text.tertiary
    'icon.tertiary': `oklch(${COLORS__PEARL[400]})`, // Subtle icons

    'icon.interactive': `oklch(${COLORS__GOLD[400]})`, // Gold for interactive icons
    'icon.interactive.hover': `color-mix(in oklch, oklch(${COLORS__GOLD[400]}) 90%, transparent)`,
    'icon.interactive.active': `color-mix(in oklch, oklch(${COLORS__GOLD[400]}) 80%, transparent)`,

    'icon.success': `oklch(${COLORS__GREEN[400]})`,
    'icon.warning': `oklch(${COLORS__YELLOW[400]})`,
    'icon.error': `oklch(${COLORS__RED[400]})`,
    'icon.info': `oklch(${COLORS__BLUE[400]})`,

    'icon.inverse': `oklch(${COLORS__PEARL[700]})`, // Dark icons for light backgrounds
    'icon.disabled': `oklch(${COLORS__PEARL[600]})`,

    // INPUT COLORS
    'input.bg.default': `oklch(${COLORS__PEARL[900]})`, // Matches secondary background
    'input.bg.hover': `oklch(${COLORS__PEARL[800]})`,
    'input.bg.focus': `oklch(${COLORS__PEARL[900]})`, // Keep same as default
    'input.bg.disabled': `oklch(${COLORS__PEARL[900]})`,
    'input.bg.error': `color-mix(in oklch, oklch(${COLORS__RED[900]}) 20%, transparent)`,

    'input.border.default': `oklch(${COLORS__PEARL[700]})`,
    'input.border.hover': `oklch(${COLORS__PEARL[600]})`,
    'input.border.focus': `oklch(${COLORS__GOLD[400]})`, // Gold focus
    'input.border.error': `oklch(${COLORS__RED[400]})`,
    'input.border.disabled': `oklch(${COLORS__PEARL[800]})`,

    'input.text.default': `oklch(${COLORS__PEARL[50]})`, // High contrast light text
    'input.text.placeholder': `oklch(${COLORS__PEARL[500]})`, // Muted
    'input.text.disabled': `oklch(${COLORS__PEARL[600]})`,

    // SHADOW COLORS - Context-aware using darker tones
    'shadow.default': `color-mix(in oklch, oklch(${COLORS__PEARL[950]}) 40%, transparent)`,
    'shadow.subtle': `color-mix(in oklch, oklch(${COLORS__PEARL[950]}) 20%, transparent)`,
    'shadow.strong': `color-mix(in oklch, oklch(${COLORS__PEARL[950]}) 60%, transparent)`,
    'shadow.interactive': `color-mix(in oklch, oklch(${COLORS__GOLD[800]}) 30%, transparent)`,
    'shadow.focus': `color-mix(in oklch, oklch(${COLORS__GOLD[700]}) 40%, transparent)`,
    'shadow.success': `color-mix(in oklch, oklch(${COLORS__GREEN[800]}) 30%, transparent)`,
    'shadow.warning': `color-mix(in oklch, oklch(${COLORS__YELLOW[800]}) 30%, transparent)`,
    'shadow.error': `color-mix(in oklch, oklch(${COLORS__RED[800]}) 30%, transparent)`,
  },
  spacing: {
    0: SPACING[0],
    px: SPACING.px,
    0.5: SPACING[0.5],
    1: SPACING[1],
    1.5: SPACING[1.5],
    2: SPACING[2],
    2.5: SPACING[2.5],
    3: SPACING[3],
    3.5: SPACING[3.5],
    4: SPACING[4],
    5: SPACING[5],
    6: SPACING[6],
    7: SPACING[7],
    8: SPACING[8],
    9: SPACING[9],
    10: SPACING[10],
    11: SPACING[11],
    12: SPACING[12],
    14: SPACING[14],
    16: SPACING[16],
    20: SPACING[20],
    24: SPACING[24],
    28: SPACING[28],
    32: SPACING[32],
    36: SPACING[36],
    40: SPACING[40],
    44: SPACING[44],
    48: SPACING[48],
    52: SPACING[52],
    56: SPACING[56],
    60: SPACING[60],
    64: SPACING[64],
    72: SPACING[72],
    80: SPACING[80],
    96: SPACING[96],
  },
  fontSize: {
    xs: FONT_SIZE.xs,
    sm: FONT_SIZE.sm,
    base: FONT_SIZE.base,
    lg: FONT_SIZE.lg,
    xl: FONT_SIZE.xl,
    '2xl': FONT_SIZE['2xl'],
    '3xl': FONT_SIZE['3xl'],
    '4xl': FONT_SIZE['4xl'],
    '5xl': FONT_SIZE['5xl'],
    '6xl': FONT_SIZE['6xl'],
    '7xl': FONT_SIZE['7xl'],
    '8xl': FONT_SIZE['8xl'],
    '9xl': FONT_SIZE['9xl'],
  },
  fontWeight: {
    thin: FONT_WEIGHT.thin,
    extralight: FONT_WEIGHT.extralight,
    light: FONT_WEIGHT.light,
    normal: FONT_WEIGHT.normal,
    medium: FONT_WEIGHT.medium,
    semibold: FONT_WEIGHT.semibold,
    bold: FONT_WEIGHT.bold,
    extrabold: FONT_WEIGHT.extrabold,
    black: FONT_WEIGHT.black,
  },
  lineHeight: {
    none: LINE_HEIGHT.none,
    tight: LINE_HEIGHT.tight,
    snug: LINE_HEIGHT.snug,
    normal: LINE_HEIGHT.normal,
    relaxed: LINE_HEIGHT.relaxed,
    loose: LINE_HEIGHT.loose,
    3: LINE_HEIGHT[3],
    4: LINE_HEIGHT[4],
    5: LINE_HEIGHT[5],
    6: LINE_HEIGHT[6],
    7: LINE_HEIGHT[7],
    8: LINE_HEIGHT[8],
    9: LINE_HEIGHT[9],
    10: LINE_HEIGHT[10],
  },
  letterSpacing: {
    tighter: LETTER_SPACING.tighter,
    tight: LETTER_SPACING.tight,
    normal: LETTER_SPACING.normal,
    wide: LETTER_SPACING.wide,
    wider: LETTER_SPACING.wider,
    widest: LETTER_SPACING.widest,
  },
  borderRadius: {
    none: BORDER_RADIUS.none,
    sm: BORDER_RADIUS.sm,
    base: BORDER_RADIUS.base,
    md: BORDER_RADIUS.md,
    lg: BORDER_RADIUS.lg,
    xl: BORDER_RADIUS.xl,
    '2xl': BORDER_RADIUS['2xl'],
    '3xl': BORDER_RADIUS['3xl'],
    full: BORDER_RADIUS.full,
  },
  borderWidth: {
    0: BORDER_WIDTH[0],
    1: BORDER_WIDTH[1],
    2: BORDER_WIDTH[2],
    4: BORDER_WIDTH[4],
    8: BORDER_WIDTH[8],
  },
  boxShadow: {
    none: BOX_SHADOW.none,
    sm: BOX_SHADOW.sm,
    base: BOX_SHADOW.base,
    md: BOX_SHADOW.md,
    lg: BOX_SHADOW.lg,
    xl: BOX_SHADOW.xl,
    '2xl': BOX_SHADOW['2xl'],
    inner: BOX_SHADOW.inner,
  },
});

export { darkTheme };
