//config 設定
// babel.config.jsの処理
// babel.config.js: について
// WHAT:  babelとはjavascriptのトランスパイラ。jsxファイルはbabelを使ってブラウザで表示
// できるようにトランスパイルする処理。
// WHY:  ブラウザに表示させるため。
// HOW:  

const { pagespeedonline } = require("googleapis/build/src/apis/pagespeedonline");

//npm i express....node.jsで利用できるアプリケーションフレームワーク。railsと同じ。
//atomicデザインのデータの受け渡しがわからない。

// src 
//開発用ファイルの格納
//reactコンポーネントのjsxファイルをここに置く。

//public
//静的ファイルが格納される。
//htmlファイルや画像など

//build
// npm run build

// functional Comment

// NAME: module・・・部品（組み合わせて使用する）
// 進捗と相談することにする。



//コンポネーントの使い方
// import 輸入
// export 輸出
// react-domライブラリからReact-domという名前でモジュールをimportする。
// import React from "react";
// React では、コンポーネントをクラスまたは関数として定義できます。
// クラスとして定義されたコンポーネントは現在このページで詳細に説明されているより多くの機能を提供します。
// React コンポーネントクラスを定義するには、React.Component を継承する必要があります。


// state = 州
// Reactコンポーネントが再描画されるきかっけはstateが変更されるとき、propsが変更さえた時。

// react:rubyタグ的な。propsは変数を共有できる。

// hooks:stateは中だけで使うもの。state useはreact内部でしか使えない。
//useState 


//dotenvについて
//package.jsonのdevDependenciesのdotenv"^8.2.0を追加。
//apiファイルのindex.jsにrequire('dotenv').config();を追加する。


//子コンポーネントは親コンポーネントをimportできない。
// atomsはmoleculesをimportできない。小さいもの（使われるものが使う側）が大きいもの(使う側)を使用することができない。
// PagesやTemplateはatomsやmoleculesをimportできるがその逆はできない。