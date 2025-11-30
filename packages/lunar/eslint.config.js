import { baseReactESLintConfig, ERROR } from '@lunar-js/boiler-room/eslint';

export default [
  ...baseReactESLintConfig,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    rules: {
      'react/forbid-dom-props': [ERROR, { forbid: ['style'] }],
      'react/forbid-component-props': [ERROR, { forbid: ['style'] }],
    },
  },
];
