import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
        ...globals.mocha,
      },
    },

    settings: {
      react: {
        version: '19.1.0',
      },
    },

    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
      'react/prop-types': 'off',
    },
  },
];
