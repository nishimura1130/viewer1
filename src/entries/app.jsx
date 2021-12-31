import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '~/routings/App';
import GlobalStyle from '~/style/GlobalStyle';

// 追加する
import { FavoriteProvider } from '~/contexts/FavoriteContext';

const rootEl = window.document.getElementById('root');

ReactDOM.render(
  <>
    <GlobalStyle />
    {/* FavoriteProviderでラップする */}
    <FavoriteProvider> {/* 追加する */}
      <App />
    </FavoriteProvider>　{/* 追加する */}
    {/* NAME: Provider
    // WHAT:  */}
  </>,
  rootEl,
);

// NAME routingがなぜふたつあるのか
// WHAT 画面遷移させるため。 
// WHY  入れ子構造のため、ファイルが多く、コンポーネントさせるため。
// HOW Reactのrenderメソッドを使って、表示させる?処理速度が早くなる。