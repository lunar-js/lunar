import { createContext, PropsWithChildren, use } from 'react';

interface ThemeProviderProps extends PropsWithChildren {
  theme: string;
  colorMode?: 'dark' | 'light' | 'system';
}

const ThemeContext = createContext(null);

const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  return <ThemeContext value={null}>{children}</ThemeContext>;
};

const useTheme = () => {
  const themeContext = use(ThemeContext);
  if (!themeContext) {
    throw new Error('ThemeProvider is uninitialized');
  }

  return themeContext;
};

const Test = () => {
  return (
    <ThemeProvider theme="test">
      <div>yo</div>
      <div>hi</div>
    </ThemeProvider>
  );
};

export default ThemeProvider;
export { useTheme };
