// override base create-react-app webpack config
module.exports = function override(config) {
  // eslint-disable-next-line no-param-reassign
  config.resolve.fallback = {
    ...config.resolve.fallback,
    'process/browser': require.resolve('process/browser'),
  };

  console.log({ config });

  return config;
};
