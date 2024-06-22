module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            'last 2 chrome versions',
            'last 2 firefox versions',
            'last 2 edge versions',
            'last 2 safari versions',
          ],
        },
        useBuiltIns: 'entry',
        corejs: '3.37',
        debug: false,
      },
    ],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ];
  const plugins = [
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false,
        helpers: true,
        regenerator: true,
      },
    ],
    '@babel/plugin-proposal-export-default-from',
  ];

  const babelrcRoots = ['.'];

  return {
    presets,
    plugins,
    babelrcRoots,
  };
};
