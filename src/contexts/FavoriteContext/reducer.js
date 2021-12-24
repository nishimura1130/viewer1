import { weekdaysShort } from "moment";

export default (state, action) => {
  switch (action.type) {
    //NAME: switch
    //WHAT: switchコンポーネントの動作は複数の条件分岐に利用する。
    // WHY: Routeに一致するものはすべてレンダリングされる。
    // HOW: レンダリングさせるものが一つの場合、URLに/:~ と記載することでエラーページを返すことができる。

    // NAME: switch構文
    //WHAT: 対象となる値が、いずれの値と一致するかどうか調べ、処理を分けること。
    // WHY: ===演算子を使用しなければならない。
    // HOW: switchの後に()記述した式を評価し、その後がcaseの後に書かれたいずれか値と一致させるかどうか調べる。

    //NAME: state
    //WHAT: ユーザーの動きに合わせて変わる値のことをstateという。そのコンポーネントが持っている状態のこと。
    //WHY: stateはコンポーネント自体によって保持され、コンポーネントかコンポーネントには渡されないため。
    // HOW: stateの値はthis.更新関数()をコンポーネントに呼び出すことによって、更新される。その後()のrenderメソッドが呼ばれる。

    // NAME: 初期化
    // WHAT: 使い始める値に初期値をを設定する行為を指して変数の初期化という。
    // WHY: 変数の初期値はゴミデータになってしまうためそのまま使用するとバグの原因になってしまうため。
    //HOW: 変数を宣言し、その値に代入すること。
    

    case 'init': {
      // お気に入りリストの初期化
      const { ids } = action;
      // actionに渡されたidsで初期化する
      // また、initialized:trueを設定して初期化されたことを設定しておく
      return { ids, initialized: true };
    }
    case 'add': {
      // お気に入りリストへの追加
      // actionに渡された動画IDを追加する
      const { ids } = state;
      const { id } = action;
      const index = ids.indexOf(id);
      if (index !== -1) {
        // 既に存在するidならstateを変更しない
        return state;
      }
      ids.push(id);
      return { ...state, ids };
    }
    case 'remove': {
      // お気に入りリストから削除
      // actionに渡された動画IDを削除する
      const { ids } = state;
      const { id } = action;
      const index = ids.indexOf(id);
      if (index === -1) {
        // 存在しないidならstateを変更しない
        return state;
      }
      ids.splice(index, 1);
      return { ...state, ids };
    }
    default:
      throw new Error(`${action.type} is not defined.`);
  }
};

