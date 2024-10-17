module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        alias: {
          src: './src',
          '@assets': './src/assets',
          '@components': './src/components',
          '@common': './src/common',
          '@hooks': './src/hooks',
          '@screens': './src/screens',
          '@services': './src/services',
          '@utils': './src/utils',
          '@validations': './src/validations',
        },
      },
    ],
  ],
};
