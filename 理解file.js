//config 設定
// babel.config.jsの処理
// babel.config.js: について
// WHAT:  babelとはjavascriptのトランスパイラ。jsxファイルはbabelを使ってブラウザで表示
// できるようにトランスパイルする処理。
// WHY:  ブラウザに表示させるため。
// HOW:  

const { hasOwnMetadata } = require("core-js/fn/reflect");
const { weekdaysShort } = require("moment");

// const { hasOwnMetadata } = require("core-js/fn/reflect");
// const { pagespeedonline } = require("googleapis/build/src/apis/pagespeedonline");
// const { weekdaysShort } = require("moment");

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

// git push origin feature/review-4 -f
// git rebase --continue  「rebase」は、他のベースチップの上で、コミットを再適用
// git rebase master
// git cherry-pick [gitのlogID]
// git status

//NAME: プロパティ
//WHAT: 

// NAME: テンプレートリテラル
// WHAT: ES6では文字列の連結や定数の締結には「+」を用いていた。
// WHY: 文字列の中に定数（変数）埋め込むことができる。
// HOW: (``${ 変数名} ) バッククォテーションで囲み、ダラーと波括弧で記述が可能。
// const name = "はなくそ"; 
// console.log (`こんにちは、${ name } さん`);

// NAME: 条件分岐
//WHAT:  ある条件が成り立つ時だけ処理を行う。
//WHY: 処理を分けることができるため。
// HOW: if whileなどの構文を用いて使用される。

// NAME: if
// WHAT: もし〇〇ならば△△を行う。という条件分岐が可能になる。
// WHY: 処理を分けることができるため。
// HOW: ifの後ろに条件式を書き、それが成り立つ場合の処理を{ }で書く。if(numberが10よりも大きい場合) { console.log("numberは10より大きい"); }

// NAME: 真偽値
// WHAT: 条件式が成り立てばtrue、条件式が成り立たないのであればfalseになる。
// WHAT: trueとfalseの二つしか存在しない。
// HOW: 全ての条件分岐に使用される。

// NAME: 比較演算子
// WHAT: a < b            aはbより小さい。
//            a <= b          aの方が小さい、または等しい。
//            a > b            aはbより大きい。
//            a >= b          aの方が大きい、または等しい。
// WHY: 出力時にtrueかfalseで条件分岐をし、処理を実行させるため。
// HOW: >= , <=の使い方がいまいちわからない。

// NAME: 等価演算子
// WHAT: 左と右の値が等しいかを調べるもの。
// WHY: 左の値と右の値が等しいか調べるため。
// HOW: ==で表される。const number = 12; console.log(number == 12;)は等しいためtrueで処理が実行される。

// NAME: 動的型付け言語
// WHAT: Number(数値), String(文字列), boolean(真偽), Undefined(未定義), Null(空の値), Symbol(ES6から導入)
// WHY: 型を定義しない。格納する変数の型が格納した値によって変わるため。
// HOW: console.log(typeof 変数名);で型がわかる。

// NAME: 静的型付け言語
// WHAT: 変数の型を決定すること。intで変数宣言を行うとint型でしか主にJavaやGoが挙げられる。
// WHY: 大規模開発の際、厳密な型定義を行うため。
// HOW: TypeScriptなどで使用できる。

// NAME: 関数(function) 演算子
// WHAT: 与えられた値を元に、定められた独自の処理を実行し、その結果を返す命令のこと。
// WHY: 引数は複数取ることも可能であるため。
// HOW: (); の中に値を入れて、その変数が格納されて、関数の中で使用できる状態になる。

// NAME: 無名関数
// WHAT: 関数名を持たない関数のことを呼ぶ。関数名を記述せずに引数や代入を使用する関数のこと。
// WHY: 無名関数を変数に代入することで変数を使用することができるため。
// HOW: コールバック関数のところで使われる。

// NAME: プロパティ
// WHAT: 変数を設定すると名前の領域が与えられる。
// WHY: オブジェクトの状態や特製を表す情報のこと。
// HOW: console.log(変数名.プロパティ名); でその領域に格納されている、変数に関わる値を取得することができる。

// NAME: Objectについて
// WHAT: { }を使って初期化を行って、プロパティを格納する方法か、初期化するタイミングで{}の中にプロパティとに値を設定するやり方の二つがある。
// WHY: keyとvalueで値を設定するため。
// HOW: const person = { hello:(key) "DIC"(value)}; の設定が一般的。
//           []を使用する場合は文字列として扱う。変数を使用したい場合[]を使用する。
  //         .記号の場合は配列の中身と値が一致していないといけない。
  //         プロパティとして格納しているが、オブジェクトはメソッドも格納できる。

// NAME: かつ(&&)
// WHAT: 「条件１&& 条件2」は条件1かつ条件2という意味。複数の条件がすべてtrueならtrueになります。
// WHY: 複数の条件を組み合わせないといけないから。
// HOW: xが20の時、x > 10 && x < 30 true で条件式を定める。

// NAME: 仮想DOM(ドキュメントオブジェクトモデル)
// WHAT: JavaScriptのオブジェクトで仮想的に作られたDOM。HTML などを解釈し、木構造で表現したもの。
// WHY: いきなりDOMを操作せず、JS上で仮想DOMを操作し差分を出してからDOMに反映させるため。
// HOW: ブラウザの描画は行わず、プログラム上で描画する。

// NAME: package-look.json
// WHAT: パッケージのインストール時に自動に生成される。
// WHY: 直接編集してはいけない。削除してはいけない。
// HOW: 依存関係やバージョンの解決をしてくれる。packageファイルとpakage-lock.jsonファイルをインストールすると、他の人のパソコンでも同じ環境になる。

// NAME: Node_modules
// WHAT: 各モジュールの実態。jsファイル。
// WHY:  gitにはサイズが大きいためあげないこと。
// HOW: プログラムが動く時はここを見に行く。

// NAME: ECMAScript(欧州電算機工業会) 
// WHAT: JavaScriptの標準規格。（こうゆうルールで書くぜ！)
// WHY: let,constを用いた変数宣言。アローファンクション。Class構文。分割代入。テンプレート文字列。スプレッド構文。Promiseなどなど。

// NAME: webpack等のモジュールバンドラー
// WHAT: 複数のjs(css、image)ファイルを一つにまとめたもの。
// WHY: 本番用にビルドするために一つのファイルにまとめる必要があるため。
// HOW: 依存関係も判定して、まとめるようにする。

// NAME: テンプレート文字列
// WHAT: 文字列の中にjavascriptの変数を便利に埋め込むことができること。
// WHY: ``(バッククォート)を使用しなければならない。jsの変数を使いたい時は${ 変数名 }で使用が可能になる。
// HOW: const 変数名 = `私の名前は${変数名}です。年齢は${変数名}です。`;

// NAME: アロー関数
// WHAT: 引数を書いて、=>、その後{ }を書いて処理を書いていく。
// WHY:  returnを省略できる書き方がある。
// HOW: 宣言元のthisを参照する。thisはオブジェクトであり、どのオブジェクトであるかは、関数の呼ばれ方によって決定する。

// NAME: 分割代入
// WHAT: 処理の最初でオブジェクトから指定のプロパティを抜き出して、自由に使うことができる。
// WHY:  オブジェクトや配列ににも使用できるため。
// HOW: 変数宣言 変数 = `名前は${配列の中身}`; console.logで出力する。
