import path from 'path';

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


  };
};

  // NAME: webpack.config.babel.jsについて
  // WHAT:  productionモードでない場合はソースマップを出力する。
  // WHY:  jsファイル、jsxファイルはbabel-loaderを使って変換するため。
  // HOW:   /src/entries/sample.jsxを./output/sample.jsに出力する

