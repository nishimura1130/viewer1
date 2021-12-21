const fs = require('fs');

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
// NAME: require
// WHAT: モジュールやファイルをインポートする関数。
// WHY: requireをプログラムの最初に記述することで指定したモジュールやファイルをNode.jsで扱えるようになるため。
//HOW: requireはエクスポートされたモジュールを戻り値として、返すので、変数に代入してその変数を使うことでモジュールを扱えるようになる。
//NAME: module
//WHAT: 

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