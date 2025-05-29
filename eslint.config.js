const path = require('path');
const js = require('@eslint/js');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
const reactPlugin = require('eslint-plugin-react');
const reactPluginHooks = require('eslint-plugin-react-hooks');
const prettierPlugin = require('eslint-plugin-prettier');
const globals = require('globals');
const typescriptParser = require('@typescript-eslint/parser');

// 移除 __filename 和 __dirname 的声明，直接使用 Node.js 内置变量

module.exports = [
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        React: 'readonly',
      },
    },
  },
  js.configs.recommended,
  {
    files: ['**/*.jsx', '**/*.tsx'],
    plugins: { react: reactPlugin, 'react-hooks': reactPluginHooks },
    settings: { react: { version: 'detect' } },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-console': 'error',
      'no-debugger': 'error',
      'react-hooks/rules-of-hooks': 'error', // 启用 Hooks 规则
      'react-hooks/exhaustive-deps': 'warn', // 可选：检查依赖项
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: path.resolve(__dirname, 'tsconfig.json'), // 直接使用内置 __dirname
        tsconfigRootDir: __dirname,
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: { '@typescript-eslint': typescriptPlugin },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'off',
      // 若想关闭该规则
      '@typescript-eslint/no-this-alias': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
    },
  },
  {
    plugins: { prettier: prettierPlugin },
    rules: {
      'arrow-parens': 'off',
      'prettier/prettier': [
        'error',
        { singleQuote: true, trailingComma: 'es5' },
      ],
    },
  },

  {
    rules: { 'jsx-quotes': ['error', 'prefer-double'] },
  },

  { ignores: ['node_modules', 'dist', 'build', 'coverage', '**/*.min.js'] },
];
