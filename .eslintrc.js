module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
      'prettier', 
      'eslint:recommended', 
      'plugin:prettier/recommended', 
      'plugin:react/recommended', 
      'prettier', 
      'plugin:react-hooks/recommended', 
      'plugin:storybook/recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'prettier', 'react-hooks', 'jest'],
  rules: {
    'react/display-name': 'off',
    'prettier/prettier': 'error',
    'react/prop-types': 0,
    'linebreak-style': ['error', 'unix'],
    quotes: ['warn', 'double'],
    semi: ['warn', 'always'],
    'comma-dangle': ['warn', 'always-multiline'],
  },
  overrides: [{
    files: ['webpack.config.js'],
    rules: {
      '@typescript-eslint/no-var-requires': ['off'],
      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': ['error', {'allow': []}],
    }
  }]
};