import path from 'path';
import { IgnorePlugin } from 'webpack';

export default (env, args) => {
  const isProduction = args.mode === 'production';
  const devtool = !isProduction && 'inline-source-map';
  const rules = [
    {
      test: /\.jsx?$/,
      use: ['babel-loader'],
    },
  ];
//エイリアス=>関数に別名をつけることができる。
  return {
    devtool,
    entry: './src/entries/app.jsx',
    output: {
      path: path.join(__dirname, './public/js/'),
      filename: 'app.js',
    },
    module: { rules },
    resolve: {
      modules: ['node_modules'],
      alias: {
        '~': path.join(__dirname, './src/'),
      },
      extensions: ['.js', '.jsx'],
    },
    plugins: [
      // Ignore all locale files of moment.js
      new IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
// NAME: plugins
//WHAT: アプリケーションの機能を拡張するソフトウェア。
//WHY: 個別に追加してバージョンアップが可能で不要になればアプリケーションに影響を与えることなく削除できる。
// HOW: プラグインをWebブラウザに追加すろと、動画や音声をWebブラウザで再生したり、PDFファイルを表示できたりできる。

  };
};

  // NAME: webpack.config.babel.jsについて
  // WHAT:  productionモードでない場合はソースマップを出力する。
  // WHY:  jsファイル、jsxファイルはbabel-loaderを使って変換するため。
  // HOW:   /src/entries/sample.jsxを./output/sample.jsに出力する

