import { type ReactNode, createContext, use, useMemo } from 'react';
import clsx from 'clsx';

import { darkColorScheme, lightColorScheme } from './styles/color-scheme.css.js';

interface ThemeProviderProps {
  children: (themeClassName: string) => ReactNode;
  theme: string;
  colorScheme?: 'dark' | 'light' | 'system';
}

const ThemeContext = createContext<null>(null);

const ThemeProvider = ({ children, theme, colorScheme = 'system' }: ThemeProviderProps) => {
  const colorSchemeOverrideClassName = useMemo(() => {
    switch (colorScheme) {
      case 'light':
        return lightColorScheme;
      case 'dark':
        return darkColorScheme;
      default:
        return undefined;
    }
  }, [colorScheme]);

  return <ThemeContext value={null}>{children(clsx(theme, colorSchemeOverrideClassName))}</ThemeContext>;
};

const useTheme = () => {
  const themeContext = use(ThemeContext);
  if (!themeContext) {
    throw new Error('ThemeProvider is uninitialized');
  }

  return themeContext;
};

export default ThemeProvider;
export { useTheme };
