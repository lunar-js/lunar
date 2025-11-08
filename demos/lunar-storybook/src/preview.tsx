import type { Preview } from '@storybook/react-vite';
import { withThemeByClassName } from '@storybook/addon-themes';

import { regalTheme } from '@wcm/lunar/src/index.js';
import { darkScheme, lightScheme } from './main.css.js';
import { withColorSchemeByClassName } from './utils/withColorSchemeByClassName.js';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  decorators: [
    withColorSchemeByClassName({
      colorScheme: {
        light: lightScheme,
        dark: darkScheme,
      },
    }),
    withThemeByClassName({
      themes: {
        regal: regalTheme,
      },
      defaultTheme: 'regal',
    }),
  ],
};

export default preview;
