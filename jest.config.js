module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|my-project|react-navigation|@react-native|@react-navigation))',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
  collectCoverage: true,  // Ativa a coleta de cobertura de testes
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',  // Arquivos de onde o Jest deve coletar cobertura
    '!src/**/*.d.ts',  // Exclui arquivos de declaração de tipo (TypeScript)
  ],
  coverageReporters: ['text', 'lcov'],
};
