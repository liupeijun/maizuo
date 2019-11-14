module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    // '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-sequences': 'off',
    'no-unused-expressions': 'off',
    'no-return-assign': 'off',
    'no-throw-literal': 'off',
    'new-cap': 'off',
    'eqeqeq': 'off',
    'no-mixed-operators': 'off',
    'no-undef': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
