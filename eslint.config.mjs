import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import hermesESLintParser from 'hermes-eslint';
import pluginFtFlow from 'eslint-plugin-ft-flow';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: { 'ft-flow': pluginFtFlow },
    rules: pluginFtFlow.configs.recommended.rules,
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
        ...globals.mocha,
      },

      parser: hermesESLintParser,
    },

    settings: {
      react: {
        version: '19.1.0',
      },
    },

    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    },
  },
];
