import React, { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import reducer from './reducer';

// React Contextの作成
const FavoriteContext = createContext();

const initialState = {
  favoriteIds: [],
};

// コンテキストプロバイダーコンポーネント
export const FavoriteProvider = ({ api, children }) => {
  // useReducerでreducer関数と初期値をセット
  const [state, dispatch] = useReducer(reducer, { ids: [] });
  const value = { state, dispatch };
  useEffect(() => {
    //お気に入り動画一覧ページではこのコンテクストの初期化処理、つまりお気に入り動画ID一覧の取得が終わるまではお気に入り動画取得を待つようにしています。
    //お気に入り動画ID一覧が初期化されたら,useContextで取得しているidsが変更されるのでuseEffectに渡している処理が実行される。


    api.get().then(({ data }) => {
      dispatch({ type: 'init', ids: data });
      //お気に入り追加はadd、削除はremoveというtypeのアクションを受け取るように実装。
    });
  }, []);

  // NAME: Actionオブジェクト
  // WHAT: dispatchは元々関数であり、引数ではアクションオブジェクトを渡している。
  // WHY: サーバーの内容を変更したい内容を伝えるため、アクションを作成する。
  // HOW: 変数にactionの宣言を行い、内容を記述していく。

  return (
    // コンテキストプロバイダーとしてuseReducerのstateとdispatchをコンテキストに設定
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

FavoriteProvider.propTypes = {
  children: PropTypes.node.isRequired,
  api: PropTypes.shape({
    get: PropTypes.func,
  }),
};

FavoriteProvider.defaultProps = {
  api: {
    get: () => axios.get('/api/favorites'),
  },
};

export default FavoriteContext;
