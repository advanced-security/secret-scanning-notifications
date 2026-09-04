import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';

export default [
  {
    ignores: ['dist/', 'lib/', 'node_modules/', 'jest.config.js']
  },
  js.configs.recommended,
  ...tseslint.configs['flat/recommended']
];
