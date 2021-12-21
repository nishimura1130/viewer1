const fs = require('fs');
const { weekdaysShort } = require('moment');

//からのファイルの読み込み
const FAVORITE_IDS_FILE = './favoriteIds.json';

// お気に入りリストの読み込み
module.exports.readFavoriteIds = () => new Promise((resolve, reject) => {
  fs.readFile(FAVORITE_IDS_FILE, 'utf-8', (err, data) => {
    if (err) {
      reject(err);
      return;
    }
    resolve(data ? JSON.parse(data) : []);
  });
});
//NAME: JSON.parse
//WHAT: parseメソッドは文字列をJSONとして解析し文字列によって記述されているJavaScriptのオブジェクトや値を構築する。
//WHY: 文字列やJSONを変換するために使用するため。
// HOW: JSON.parse();とすることで変換したい値を入れる。



// NAME: require
// WHAT: モジュールやファイルをインポートする関数。
// WHY: requireをプログラムの最初に記述することで指定したモジュールやファイルをNode.jsで扱えるようになるため。
//HOW: requireはエクスポートされたモジュールを戻り値として、返すので、変数に代入してその変数を使うことでモジュールを扱えるようになる。

//NAME: 返り値
//WHAT: 関数などの処理でかえされる値。
//WHY: returnを使うことである関数で算出された値を別の関数の計算に使うことができる。
//HOW: 複数の値をreturnで返すことができることやreturnを配列で使うことができる。


//NAME: module
//WHAT: 単なる一つのファイル。
//WHY: exportとimportを使用することでmodule内のファイルを使用することがでモジュール間の相互の機能のやりとりができる。
//HOW: npmを使ってexpressをインストールしたとしたら、jsファイルにimportしてmoduleを使うことができる。


// お気に入りリストへの書き込み
module.exports.writeFavoriteIds = (favoriteIds) => new Promise((resolve, reject) => {
  fs.writeFile(FAVORITE_IDS_FILE, JSON.stringify(favoriteIds), (err) => {
    if (err) {
      reject(err);
      return;
    }
    resolve();
  });
});