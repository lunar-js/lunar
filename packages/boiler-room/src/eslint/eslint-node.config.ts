import globals from 'globals';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import typescript from 'typescript-eslint';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import type { Linter } from 'eslint';

import { WARN, ERROR } from './constants.js';

const baseNodeESLintConfig = [
  {
    ignores: ['build', 'coverage', 'dist', 'legacy-types', 'node_modules', 'storybook-static', '!.storybook'],
  },
  {
    languageOptions: {
      parser: typescript.parser,
      parserOptions: {
        project: true,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  js.configs.recommended,
  prettier,
  ...typescript.configs.strictTypeChecked,
  ...typescript.configs.stylisticTypeChecked,
  eslintPluginUnicorn.configs.recommended,

  /* Typescript files get extra Typescirpt rules */
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescript.parser,
      parserOptions: {
        project: true,
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': [WARN, { disallowTypeAnnotations: false }],
      'func-names': ERROR,
      '@typescript-eslint/no-empty-function': ERROR,
    },
  },
] as Linter.Config[];

export { baseNodeESLintConfig };
