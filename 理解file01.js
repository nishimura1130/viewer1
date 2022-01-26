// NAME: state
// WHAT: それぞれのコンポーネントが持っている状態のこと。Stateが変更されると再レンダリングされる。
// WHY: 様々なデータを取得して画面を表示させるため、その際に動的に変わる部分をstateとして定義することで様々な状態を表示していくことができる。
// HOW: コンポーネント内で使用できる値のこと。値が変更されるとrenderが走る。

const { weekdaysShort } = require("moment");

// const hasOwnMetadata = require("core-js/library/fn/reflect/es7/has-own-metadata'");

// NAME: useState
// WHAT: reactの中に入っているので分割代入する。中身からuseStateを取り出す。
// WHY: useStateの中から使っていく変数を設定していくため。
// HOW: const [num(stateで使用していく変数名), setNum(stateを変更するための関数)] = useState(初期値);

// NAME: export
// WHAT: 通常のexportはimportする場合、分割代入を行う。
// WHY: 文頭にexportの場合、名称を指定していないためエラーになる。
//HOW: export defaultよりも exportしimportで分割代入を行うやり方の方が名称指定しているため、ファイルでのエラーが見つけやすいことがあるため。

// NAME: 再レンダリングされる条件
// WHAT: stateの値が更新された時にコンポーネントは再レンダリングされる。
// WHAT: 親のコンポーネントからpropsを受け取っているコンポーネントはそのpropsが変更されたら変更される。
// WHAT: デフォルトでリアクトは再レンダリングされたコンポーネント配下の子要素は再レンダリングされる。


// NAME: memo
// WHAT: 親のコンポーネントが再レンダリングされてもpropsに変更がない限りは再レンダリングしないようにするため。
// WHY: propsが変更しない限り再レンダリングさせないため。
// HOW: memoでコンポーネント全体を囲う。

// NAME: useCallback
// WHAT: 処理が変わらない場合は同じものを使い回す。再レンダリング
// WHY: 処理が変わらない場合は同じものを使い回す指示する。
// HOW: アロー関数をuseCallbackで囲う。useEffectと同じで第二引数に配列で値を設定できる。第二引数を空にすると最初に設定したものを使い回すという設定になる。

// NAME: CSS modules
// WHAT: コンポーネントに対応するような形でcssファイルを用意して、読み込んでコンポーネントの中で使っていくもの。
// WHY: 純粋なcssなためきゃめるケースや変換を行わず書くことができる。
// HOW: CssModules.jsxとCSSModules.module.scssを使用し、CSSModules.module.scssに普通のcss記法で記載していく。

// NAME: BrowserRouter
// WHAT: react-router-domの中にある。このコンポーネントで囲った配下にルーティングを有効にする。
// WHY:  reactルーターのルーティングの機能が有効化されないため。
// HOW: 関数のreturnないに <BrowserRouter>を記述する。

// NAME: Link
// WHAT: HTMLでいう<a>タグのようなもの。
// WHY: 画面遷移をさせるため。import時、必ずつけること。
// HOW: ページさせたい箇所に<Link to="/"></Link>を囲い、表現させる。ルートのパスになる。ホームの画面に戻れる。

// NAME: Switch
// WHAT: どのパスの場合にどのコンポーネントを出していくかを設定するため。
// WHY: Switchの中にルートにマッチしたものを表示していくという処理をしないといけないため。
// HOW: <Switch><Route path="page1"><Page1 /></Route></Switch>のようにPage1コンポーネントを表示するようにする。