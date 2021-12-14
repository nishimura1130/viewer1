const express = require('express');
const { google } = require('googleapis');

// NAME: express
//WHAT: node.jsのフレームワーク。
// WHY: 開発のスピードを上げる。
// HOW: expressをinstall後node_modules,package.json,package.lock.jsonがダウンロードされる。
/* 先ほど取得したAPIキーを設定する */
const YOUTUBE_API_KEY = 'AIzaSyAdFLOdZKkPD-G2996SXwkeVqfb3OUDNxk';

const youtube = google.youtube({
  version: 'v3',
  auth: YOUTUBE_API_KEY,
});
// NAME: api
// WHAT: なにかとなにかをつなぐもの。ソフトウェア同士をつなぐもの。ソフトウェアという外部のやりとりする窓口作り、外部アプリとコミュニケーションや連携ができる状態にすること。
//WHY: 主にコスト削減やセキュリティー対策、最新情報の取得があげられる。
// HOW: 外部apiキーを取得後、apiフォルダの中のindex.jsにapiキーを設定する。

const router = express.Router();
router.get('/videos/search/:keyword', (req, res, next) => {
//NAME: reqについて
  // WHAT: req=router.getの第一引数で指定されたパスに入ってきたHTTPリクエストを表すオブジェクト。
  //WHY: router.getはGETメソッドでリクエスト受け付けます。
  //HOW: 情報で取得したHTTPリクエストに関する様々な情報取得することができる。

//resについて
  //WHAT: 指定されたパスに入ってきたリクエストに対するHTTPレスポンスを構成するためのオブジェクト。
  //WHY: レスポンスをクライアントに送信してリクエストとレスポンスサイクルを終了できるため。
  //HOW: ルートハンドラーが呼び出されていない場合、クライアントリクエストはフリーズ状態になってしまう。

  //nextについて
  //WHAT: 

//NAME: ミドルウェア
  //WHAT: 共通のサービスと機能をアプリケーションに提供するソフトウェア。
  //WHY: アプリケーション、データ、ユーザーを繋ぐ手段として機能する。特定の処理や動作や処理が行えるようになる。
  //HOW: サーバーやデータベースのやりとりはすべてミドルウェアが行う。

  //ルートハンドラーについて
    //WHAT: 指定したURLアドレスをリクエストするとコールバックされる。
    //WHY: routing.getの第一パラメータの/videos/search/:keywordはこのURL部分はreq変数へ変換される?
    // WHY: 
    // 引数とパラメータとで違うところがある。？？？


//NAME: get
  // WHAT: サーバーとの通信を行い、任意のデータを取得することができる。ブラウザからはPOSTメソッドがよく使われる。HTTP通信でブラウザにファイルにリクエストさせる。
  // WHY: サーバー側でデータを保持している場合、get()で情報を取得してブラウザに表示する。
  // HOW: クライアントがリクエストして、サーバーの情報を持ってきて、ブラウザに表示させること。
  const { keyword } = req.params;
  // NAME: params
  // WHAT: 関数の定義の中で関数に渡す値として定義される値。
  //WHY: 送られてきた値を受け取るためのメソッド。
  //HOW: 関数を定義するときに使用する。

//NAME: 引数
//WHAT: 関数を呼び出すときに渡す値。
// WHY: 渡された側はその値に従って処理を行い、結果を返す。
//HOW: 関数を使うとき。

  // NAME: req.params
  // WHAT: URL内の指定された値を取得するために使用される。
  // WHY: 
  const { pageToken } = req.query;
  (async () => {
    // 検索結果を動画IDで取得
    const { data: { items: idItems, nextPageToken } } = await youtube.search.list({
      part: 'id',
      q: keyword,
      type: 'video',
      maxResults: 20,
      pageToken,
    });
    // 動画の情報を取得
    const ids = idItems.map(({ id: { videoId } }) => videoId);
    const { data: { items } } = await youtube.videos.list({
      part: 'statistics,snippet',
      id: ids.join(','),
    });
    res.json({ items, nextPageToken });
    // NAME: res.json
    //WHY: jsonレスポンスを送信する。

  })().catch(next);

});

module.exports = router;
