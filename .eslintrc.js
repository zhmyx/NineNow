module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort', 'import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        // 'simple-import-sort/sort': [
        //   'error',
        //   {
        //     groups: [
        //       ['^react', '^@?\\w'],
        //       ['^(@src|@components|@reducers|@utils|@features|@navigators)(/.*|$)'],
        //       ['^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],,
        //     ],
        //   },
        // ],
      },
    },
  ],
};
