//config 設定
// babel.config.jsの処理
// babel.config.js: について
// WHAT:  babelとはjavascriptのトランスパイラ。jsxファイルはbabelを使ってブラウザで表示
// できるようにトランスパイルする処理。
// WHY:  ブラウザに表示させるため。
// HOW:  

const { hasOwnMetadata } = require("core-js/fn/reflect");
const { pagespeedonline } = require("googleapis/build/src/apis/pagespeedonline");
const { weekdaysShort } = require("moment");

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

// NAME: 関数component
//WHAT: ReactはUIをコンポーネントという部品単位で構築する。
// WHY:  JSXを返すプレーンなjavascriptの関数。
// HOW: JSXを返す関数で、アロー関数で書かれる。

//NAME: クラスコンポーネント
//WHAT: React.componentを拡張するjavascriptのクラスです。
// WHY:  レンダリングの対象のJSXは、renderメソッド内で返される。
//HOW: JSXはrenderメソッド内で返される。render() {~で返される。}

// NAME: atoms(原子)
// WHAT: UIを構築する最小単位です。
// WHY: 汎用的コンポーネント。
// HOW: styled-componentを当てることで使用することができる。

// NAME: molecules(分子)
// WHAT: 具体的なインターフェイスになる。
// WHY: UIに具体性が出てくるから。
// HOW: お気に入りボタンのクリックしてお気に入りすることなどが具体的に使用できる。

// NAME: organisms(有機体)
// WHAT: AtomsやMoleculesが組み合わさって利用される。イメージとしてはmapなどを使って一覧を出すときなどのリストや、要素を陳列するHeader, Footerなどがここに当たる。
// WHY: moleculesやAtomsと違い、再利用はあまり求められない。
// HOW: リストやヘッダーやフッターなど要素を複数表示するもののときはこのフォルダに置く。

// NAME: Template
// WHAT: ワイヤーフレームと同じで、ページに画像や実際のデータが反映される前の状態のこと。
// WHY: 部分導入した範囲内のレイアウトを決める。ロジックをもたない。CSSファイルを持つ。
// HOW: pagesコンポーネントからのみ呼ばれる。1ページに一回呼ばれる。

// NAME: Pages
// WHAT: Routeコンポーネント直下で呼ばれる。APIリクエスト/レスポンスのハンドリングを行う。
// WHY: reduxやcontextに依存する値や関数を呼び出すため。
// HOW: templateやorganismsを呼び出す。CSSファイルを持たない。

// NAME: ロジックをも持たない
// WHAT: 状態や副作用を持たず、単に受け取ったpropsを元に子コンポーネントに割り振ったり、HTML,CSSに集中すること。
// WHY: propsから何らかの計算する処理を入ったとしても、そのコンポーネント内にstateの副作用を持たなければ良い。
