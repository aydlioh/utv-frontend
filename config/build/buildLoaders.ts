import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { BuildOptions } from './types/config';

export const buildLoaders = ({
  isDev,
}: BuildOptions): webpack.RuleSetRule[] => {
  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /\.module\.(scss|sass)$/,
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
            namedExport: false,
            exportLocalsConvention: 'as-is',
          },
        },
      },
      'sass-loader',
    ],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [tsLoader, scssLoader];
};
