import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores([
    '.codex-ref',
    'dist',
    'src/assets',
    'src/components',
    'src/context',
    'src/data',
    'src/hooks',
  ]),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': [
        'error',
        {
          // framer-motion: `motion.div` is not always counted as a use of `motion`
          varsIgnorePattern: '^[A-Z_]|^motion$',
          caughtErrorsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
])
