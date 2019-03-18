module.exports = wallaby => ({
  files: [
    'src/**/*.js?(x)',
    '!src/**/*.test.js?(x)',
    'config/jest/*.js',
  ],
  tests: [
    'src/**/*.test.js?(x)',
  ],

  env: {
    type: 'node',
    runner: 'node',
  },

  compilers: {
    '**/*.js?(x)': wallaby.compilers.babel(),
  },

  testFramework: 'jest',

  debug: true,
});
