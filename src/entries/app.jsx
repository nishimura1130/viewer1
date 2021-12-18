import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '~/routings/App';
import GlobalStyle from '~/style/GlobalStyle';  

const rootEl = document.getElementById('root');

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  rootEl,
);

// NAME routingがなぜふたつあるのか
// WHAT 画面遷移させるため。 
// WHY  入れ子構造のため、ファイルが多く、コンポーネントさせるため。
// HOW Reactのrenderメソッドを使って、表示させる?処理速度が早くなる。