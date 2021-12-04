//NAME: routingsについて
// WHAT: ブラウザからサーバーにリクエストを受けて、サーバーからブラウザに表示させる処理
//WHY: サーバーがリクエスト、レスポンスするようにできるために、そのリクエストを受け取るroutingのため。
// HOW:   インスタンス化したapp, routerのgetメソッドを読んで引数にパス名、コールバックを描く。
// HOW:   router直下に使用したいアプリケーションのコンポーネントを配置する。


import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TopPage from '~/components/pages/TopPage';
import PlayerPage from '~/components/pages/PlayerPage';
import NotFoundPage from '~/components/pages/NotFoundPage';

const AppRouting = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact title="トップ" component={TopPage} />
      <Route path="/play/:videoId" title="動画再生" component={PlayerPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouting;

//Route path="/play/:videoId"の部分はパラメーターとして扱う。