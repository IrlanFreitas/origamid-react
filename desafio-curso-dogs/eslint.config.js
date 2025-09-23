import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    // files: ['**/*.{ts,tsx}'],
    // extends: [
    //   js.configs.recommended,
    //   tseslint.configs.recommended,
    //   reactHooks.configs['recommended-latest'],
    //   reactRefresh.configs.vite,
    // ],
    // languageOptions: {
    //   ecmaVersion: 2020,
    //   globals: globals.browser,
    // },
    env: {
      browser: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
        tsx: true, 
        ts: true, 
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: ['react-refresh'],
    rules: {
      'react-refresh/only-export-components': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-unsafe-finally': 'off',
      'no-unused-vars': 'off',
      'react/jsx-key': 'off',
    },
  },
])
