import { style } from '@vanilla-extract/css';

import '@wcm/lunar/global-styles.css';

export const systemColorScheme = style({
  colorScheme: 'light dark',
});

export const lightColorScheme = style({
  colorScheme: 'light',
});

export const darkColorScheme = style({
  colorScheme: 'dark',
});
