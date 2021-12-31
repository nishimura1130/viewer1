// NAME: routingsについて
// WHAT: ブラウザからサーバーにリクエストを受けて、サーバーからブラウザに表示させる処理
// WHY: サーバーがリクエスト、レスポンスするようにできるために、そのリクエストを受け取るroutingのため。
// HOW: インスタンス化したapp, routerのgetメソッドを読んで引数にパス名、コールバックを描く。
// HOW: router直下に使用したいアプリケーションのコンポーネントを配置する。

// FIXED VERSION
// NAME: routingsについて
// WHAT: ブラウザからサーバーにリクエストを受けて、サーバーからレスポンスを返す処理。レスポンスの型がhtmlならブラウザに表示したり、APIならjsonを受け取るなど様々な使い方ができる。
// WHY:  (HINT: index.jsでexpressを用いて、すでにroutingは書いてあるのになぜreact再度でも必要なのかを描くと良い )
// HOW: routerコンポーネントに直下に使用したいのコンポーネントやURLなどのPropsを配置する。

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopPage from '~/components/pages/TopPage';
import PlayerPage from '~/components/pages/PlayerPage';
import FavoritePage from '~/components/pages/FavoritePage';
import NotFoundPage from '~/components/pages/NotFoundPage';

const AppRouting = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact title="トップ" component={TopPage} />
      <Route path="/play/:videoId" title="動画再生" component={PlayerPage} />
      {/* 追加する */}
      <Route path="/favorites" title="お気に入り" component={FavoritePage} />d
      {/* ルーターについて 
      WHAT: React routerはUIとURLを同期させるライブラリ。
      WHY: アクセスしたときは住所を表紙するコンポーネントをレンダリングしたりといった操作が可能になる。
      HOW:  localhost:3000->localhost:3000/favoritesにすることでお気に入り機能のURLに行けることができる。
      */}
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouting;

//Route path="/play/:videoId"の部分はパラメーターとして扱う。
