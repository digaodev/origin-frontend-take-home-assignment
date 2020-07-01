module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.{ts,tsx}',
    'src/pages/**/*.{ts,tsx}',
    '!**/node_modules/**'
  ],
  moduleNameMapper: {
    '\\.(svg|jpg|png|css)$': '<rootDir>/spec/empty-module.js'
  },
  setupFilesAfterEnv: ['<rootDir>spec/setup.ts'],
  moduleDirectories: ['node_modules', 'src']
};
