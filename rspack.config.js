/** @type {import('@rspack/cli').Configuration} */
const config = {
  entry: {
    main: './src/index.jsx', // Configure the project entry file
  },
  builtins: {
    html: [
      {
        template: './index.html', // Align CRA to generate index.html
      },
    ],
    copy: {
      patterns: [
        {
          from: 'public',
        },
      ],
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};

module.exports = config;
