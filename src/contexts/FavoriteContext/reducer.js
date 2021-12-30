import { map } from "core-js/core/array";
// NAME: mapメソッド
// WHAT: キーと値を保持するコレクション(後からサイズを変更できる動的配列)。
// WHY: 値を追加するときにはキーを指定し、キーを使って値を検索したり、取り出すことができる。
// HOW: Mapの値を取得するには、getメソッドを使用してMapのキーを指定し、キーに紐づいた値を取得する。
import { hasOwnMetadata } from "core-js/fn/reflect";
import { weekdaysShort } from "moment";


export default (state, action) => {
  switch (action.type) {
    //NAME: switch
    //WHAT: switchコンポーネントの動作は複数の条件分岐に利用する。
    //WHY: switchは変数の条件分岐に特化しているから、if文を書くよりも簡単なときはswitchを書く。
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
      // NAME: ids.splice(index, 1); slice();メソッド
      // WHAT: 既存の要素を取り除いたり、置き換えたり、新しい配列の要素を追加することで、配列の内容を変更する。
      // WHY: 第二引数の1を忘れると中身が消えてしまうため。
      // HOW: 要素が一つだけ取り除かれた場合は要素数1が返される。要素が取り除かれない場合は、空の配列が返される。
      return { ...state, ids };
      // スプレットについて
    }
    default:
      throw new Error(`${action.type} is not defined.`);
  }
};

// NAME: store
// WHAT: アプリケーション全体で共有できるデータを保管する場所。storeの中に共有を行うデータstateの作成を行う。
// WHY; 更新関数でstateへのアクセスを許可する。
// HOW: createStore関数(更新関数)を使ってstoreの作成を行うようにする。
// git commit -m "fix mock api comment"

