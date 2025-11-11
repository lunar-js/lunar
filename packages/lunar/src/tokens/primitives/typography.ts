export const FONT_FAMILY = {
  sans: {
    primary: 'ui-sans-serif',
    system: 'system-ui',
    fallback: 'sans-serif',
    emoji: {
      apple: '"Apple Color Emoji"',
      segoeUI: '"Segoe UI Emoji"',
      segoeSymbol: '"Segoe UI Symbol"',
      noto: '"Noto Color Emoji"',
    },
  },
  serif: {
    primary: 'ui-serif',
    georgia: 'Georgia',
    cambria: 'Cambria',
    timesNewRoman: '"Times New Roman"',
    times: 'Times',
    fallback: 'serif',
  },
  mono: {
    primary: 'ui-monospace',
    sfMono: 'SFMono-Regular',
    menlo: '"Menlo"',
    monaco: '"Monaco"',
    consolas: '"Consolas"',
    liberation: '"Liberation Mono"',
    courierNew: '"Courier New"',
    fallback: 'monospace',
  },
} as const;

export const FONT_SIZE = {
  xs: '0.9375rem', // 15px
  sm: '1.09375rem', // 17.5px
  base: '1.25rem', // 20px
  lg: '1.40625rem', // 22.5px
  xl: '1.5625rem', // 25px
  '2xl': '1.875rem', // 30px
  '3xl': '2.34375rem', // 37.5px
  '4xl': '2.8125rem', // 45px
  '5xl': '3.75rem', // 60px
  '6xl': '4.6875rem', // 75px
  '7xl': '5.625rem', // 90px
  '8xl': '7.5rem', // 120px
  '9xl': '10rem', // 160px
} as const;

export const FONT_WEIGHT = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
} as const;

export const LINE_HEIGHT = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
  3: '.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
} as const;

export const LETTER_SPACING = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
} as const;
