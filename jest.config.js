module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)',
    '!src/**/stories.ts(x)',
    '!src/screens/**/*.ts(x)',
    '!src/services/',
    '!src/App.tsx',
    '!src/main.tsx',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
};
