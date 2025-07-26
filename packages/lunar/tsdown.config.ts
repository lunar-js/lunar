import { defineConfig } from 'tsdown';

export default defineConfig({
  tsconfig: './tsconfig.esm.json',
  dts: {
    sourcemap: true,
  },
});
