import { join } from 'path';
import { defineConfig } from 'windicss/helpers';
import { createGlobPatternsForDependencies } from '@nrwl/workspace/src/utilities/generate-globs';

export default defineConfig({
  extract: {
    include: [
      join(__dirname, 'src/**/*.{html,tsx}'),
      ...createGlobPatternsForDependencies(
        __dirname,
        '/**/!(*.stories|*.spec).{html,tsx}'
      ),
    ],
  },
  darkMode: 'class',
  safelist: '',
  theme: {},
  plugins: [],
});
