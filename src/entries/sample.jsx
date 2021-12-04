import 'core-js/stable';
import 'regenerator-runtime/runtime';
//ブラウザで動くようにするために必要なパッケージを読み込むための記述。
import React from 'react';
//Reactを読み込む処理
import ReactDOM from 'react-dom';

const rootEl = document.getElementById('root');
// NAME: について
// WHAT:  全てのリクエストを受けて、public/index.htmlを返して、ブラウザに表示させてreactを画面に出す処理
// WHY:  ウェブアプリはサーバーがリクエスト、レスポンスするようにできているため、そのリクエストを受け取るroutingのために
// HOW:   インスタンス化したapp, routerのgetメソッドを読んで引数にパス名、コールバックを描く。

ReactDOM.render(
  <h1>Hello react.</h1>,
  rootEl,
);

//const 変数宣言
//document.getElementByIdについて
