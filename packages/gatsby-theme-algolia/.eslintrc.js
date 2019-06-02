module.exports = {
  extends: 'algolia/react',
  overrides: [
    {
      files: ['gatsby-config.js'],
      rules: {
        'import/no-commonjs': 'off',
        camelcase: 'warn',
      },
    },
    {
      files: ['gatsby-node.js'],
      rules: {
        'import/no-commonjs': 'off',
      },
    },
  ],
  rules: {
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
