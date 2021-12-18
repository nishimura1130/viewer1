const path = require('path');
const express = require('express');

const app = express();
const router = express.Router();

/* 3000番ポートで待ち受け */
const server = app.listen(3000, () => {
  console.log(`Node.js is listening to PORT: ${server.address().port}`);
});

// app.use('/api', require('./api')); // 追加
app.use('/api', require('./api')); // 追加

// 静的ファイルのルーティング
router.use(express.static('public'));
// NAME:  routerについて
// WHAT:  全てのリクエストを受けて、public/index.htmlを返して、ブラウザに表示させてreactを画面に出す処理
// WHY:  ウェブアプリはサーバーがリクエスト、レスポンスするようにできているため、そのリクエストを受け取るroutingのために
// HOW:   インスタンス化したapp, routerのgetメソッドを読んで引数にパス名、コールバックを描く。
router.get('*', (req, res, next) => {
  // NAME: コールバックについて
  // WHAT:  無名関数。ここでしか使わない処理
  // WHY:  関数にすることで、毎回インスタンスを使い分ける。メモリを非同期で処理させるため。
  // HOW:   アロー関数を書いて、中に処理を描く。ちなみにrouter.getの第二引数は関数を受け取るためコールバックを渡せる。
  res.sendFile(path.join(__dirname, './public/index.html'));
//NAME: インスタンス化
//WHAT: クラス(設計図)からインスタンス(実態)を生成すること。
//WHY: 一つのクラスから複数のインスタンスを作ることができ、それぞれのインスタンスは違った値を持つことができる。
//HOW: クラスを用意して、インスタンスを実行する。

});

app.use('/', router);
