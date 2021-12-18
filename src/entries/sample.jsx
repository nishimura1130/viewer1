import 'core-js/stable';
import 'regenerator-runtime/runtime';
//ブラウザで動くようにするために必要なパッケージを読み込むための記述。
import React from 'react';
//Reactを読み込む処理
import ReactDOM from 'react-dom';

const rootEl = document.getElementById('root');
// NAME: getElementByIdについて
// WHAT:  全てのリクエストを受けて、public/index.htmlを返して、ブラウザに表示させてreactを画面に出す処理
// WHY:  ウェブアプリはサーバーがリクエスト、レスポンスするようにできているため、そのリクエストを受け取るroutingのために
// HOW:   インスタンス化したapp, routerのgetメソッドを読んで引数にパス名、コールバックを描く。

// FIXED
// NAME: documentについて
// WHAT: JavaScriptのdocumentオブジェクトはHTMLドキュメントを表現するオブジェクトです。document変数にはhtmlの構成全てが詰まっていて操作が自在に可能。
// WHY: document以外画面操作する方法はないから必要
// HOW: サーバーサイドでは使えずに、フロントエンドでのみ使える。試しに検証ツールでconsoleにdocumentと打てばわかる。

// NAME: getElementByIdについて
// WHAT: documentの中からidが一致したdocument(DOM)を返す。
// WHY: これ以外idで検索する方法は存在しないから。
// HOW: document.getElementById("id")のようにメソッドとして読んで引数にidを入れる。

// NAME ReactDOM.render
// WHAT 

// NAME ReactDOM = インターフェイス
// WHAT: HTMLにアクセスする窓口になる処理を実行。
// WHY: ブラウザのレンダリングと別管理になるため。
// HOW: reactのrenderメソッドを使って、ブラウザに表示させる。

// NAME render


ReactDOM.render(
  <h1>Hello react.</h1>,
  rootEl,
);

//const 変数宣言
//document.getElementByIdについて
