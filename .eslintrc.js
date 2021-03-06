module.exports = {
  devServer: {
    overlay: false
  },
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        printWidth: 80,
        bracketSpacing: true,
        endOfLine: 'auto',
      },
    ],
  },
  parserOptions: {
    parser: ['babel-eslint'],
    sourceType: 'module',
  },
};
