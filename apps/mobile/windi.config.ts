import { join } from 'path';
import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  extract: {
    include: [join(__dirname, 'src/**/*.tsx')],
  },
  darkMode: 'class',
  safelist: '',
  theme: {},
  plugins: [],
});
