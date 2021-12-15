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
  //WHAT: nextの処理を書かない場合、keywordの処理が継続しないため。
  //WHY: 一度だけの処理しか行われないため。リクエストの処理のみになってしまうため。next()関数によって、次の処理の制御を渡すことができる。
  //HOW: 連続処理の場合はリクエスト、レスポンス、nextの順で書くと処理が継続する。

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
  // WHY: ルートパラメータのみを取得する。リクエストされたパラメータを使用するにはreq.paramsを使用。
  // HOW: router.getの第一引数により、ルートを文字列にで指定し、第二引数の関数でそのルートにアクセスされた時の処理を記述する。const { keyword } = req.params;が取得できるようになる。
  const { pageToken } = req.query;
// NAME: pageToken
//WHAT: ここからデータ取得するというパラメータ( 関数の定義の中で関数に渡す値として定義される値)。defaultはnullで設定されている。
//WHY: データの位置情報を教えてくれるため。
//HOW: 空のデータを代入して設定する。

// NAME: query;
// WHAT: データベース管理システムにに対する問い合わせ。処理要求。
// WHY: データの抽出や更新などの処理要求を文字列で表す。
// HOW: リレーショナルデータベースではSQL使って記述する。

// NAME: リレーショナルデータベース(Oracle Database, MySql, SQLServer, PostgreSQL)
// WHAT: SQLを使い、登録、検索、更新、削除ができるようになる。`
// WHY: ユーザーの情報がリレーショナルデータベースに格納されている。(メッセージ、フォロワー、フォロー、プロフィール)を使用するため。
//HOW: 表形式で使い管理する。

  (async () => {
    // NAME: async/await(非同期関数)宣言名
    // WHAT: 処理を一度バックグラウンドに移すこと。
    // WHY:  関数の呼び出しの前にawaitをつけるとdataの値の結果が返ってくるまで待ってくれるため。
    // HOW: 関数の前にasyncをつけることで、非同期関数の宣言になる。

    //NAME: Promise
    // WHAT: 後で値を返すという約束。
    // WHY:  連続した非同期処理をフラットに書ける。
    // HOW: new(resolve)と書くことで完了したという状態の保持になる。

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

//NAME: npm i axios
//WHAT: axiosというパッケージ
//WHY: フロントからexpressサーバーへのAjax通信のためにaxiosというパッケージをダウンロードする。
//HOW// フロントエンドからリクエストを受け取り、バックエンドにつなぐための役割?
