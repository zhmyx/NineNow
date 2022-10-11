module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@src/*': './src/*',
          '@components/*': ['./src/features/components/*'],
          '@navigators/*': ['./src/features/navigators/*'],
          '@reducers/*': ['./src/reducers/*'],
          '@utils/*': ['./src/utils/*'],
          '@features/*': ['./src/features/*'],
        },
      },
    ],
  ],
};
