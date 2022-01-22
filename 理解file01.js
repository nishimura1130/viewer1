// NAME: state
// WHAT: それぞれのコンポーネントが持っている状態のこと。Stateが変更されると再レンダリングされる。
// WHY: 様々なデータを取得して画面を表示させるため、その際に動的に変わる部分をstateとして定義することで様々な状態を表示していくことができる。
// HOW: コンポーネント内で使用できる値のこと。値が変更されるとrenderが走る。

// NAME: useState
// WHAT: reactの中に入っているので分割代入する。中身からuseStateを取り出す。
// WHY: useStateの中から使っていく変数を設定していくため。
// HOW: const [num(stateで使用していく変数名), setNum(stateを変更するための関数)] = useState(初期値);

// NAME: export
// WHAT: 通常のexportはimportする場合、分割代入を行う。
// WHY: 文頭にexportの場合、名称を指定していないためエラーになる。
//HOW: export defaultよりも exportしimportで分割代入を行うやり方の方が名称指定しているため、ファイルでのエラーが見つけやすいことがあるため。

// NAME: styleの当て方には様々なやりかたがある。
// 