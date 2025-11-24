import type {
  BREAKPOINT__LG,
  BREAKPOINT__MD,
  BREAKPOINT__SM,
  COLOR_SCHEME__DARK,
  COLOR_SCHEME__LIGHT,
  COLOR_SCHEME__SYSTEM,
} from '../constants/theming.js';

type ColorScheme = typeof COLOR_SCHEME__SYSTEM | typeof COLOR_SCHEME__DARK | typeof COLOR_SCHEME__LIGHT;

type Breakpoint = typeof BREAKPOINT__SM | typeof BREAKPOINT__MD | typeof BREAKPOINT__LG;

export type { ColorScheme, Breakpoint };
