module.exports = {
  globalSetup: './src/environment/setup.ts',
  globalTeardown: './src/environment/teardown.ts',
  verbose: true,
  testTimeout: 30000,
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
}
