module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts'],
  testMatch: ['**/*.test.ts'],
  moduleNameMapper: {
    '^@actions/core$': '<rootDir>/__tests__/mocks/actions-core.js',
    '^@actions/github$': '<rootDir>/__tests__/mocks/actions-github.js',
    '^@octokit/action$': '<rootDir>/__tests__/mocks/octokit-action.js'
  },
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  verbose: true
}