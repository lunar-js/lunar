import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: {
    eslint: 'src/eslint/index.ts',
    prettier: 'src/prettier/index.ts',
  },
  tsconfig: './tsconfig.esm.json',
  hash: false, // Disable hash generation for consistent filenames
  dts: {
    sourcemap: true,
  },
});
