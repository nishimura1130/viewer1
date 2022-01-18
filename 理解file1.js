// htmlのcode
// <!DOCTYPE html>
// <html lang="ja">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//   </head>
//   <body>
//     <div class="input-area">
//       <input id="add-text" place-holder="TODOを入力" />
//       <button id="add-button">追加する</button>
//     </div>
//     <div class="incomplete-area">
//       <p class="title">未完了のTODO</p>
//       <ul id="incomplete-list">
//       </ul>
//     </div>
//     <div class="complete-area">
//       <p class="title">完了したTODO</p>
//       <ul id="complete-list">
//       </ul>
//     </div>
//     <!-- <script src="index.js"></script> -->
//     <script src="src/index.js"></script>
//   </body>
// </html>





// cssのcode
// body {
//   font-family: sans-serif;
// }

// input {
//   border-radius: 16px;
//   border: none;
//   padding: 6px 16px;
//   outline: none;
// }

// button {
//   border-radius: 16px;
//   border: none;
//   padding: 4px 16px;
// }
// button:hover {
//   background-color: #ff7fff;
//   color: #fff;
//   cursor: pointer;
// }

// li {
//   margin-right: 8px;
// }
// .input-area {
//   background-color: #c1ffff;
//   width: 400px;
//   height: 30px;
//   padding: 8px;
//   margin: 8px;
//   border-radius: 8px;
// }
// .incomplete-area {
//   background-color: #c6ffe2;
//   width: 400px;
//   min-height: 200px;
//   padding: 8px;
//   margin: 8px;
//   border-radius: 8px;
// }
// .complete-area {
//   background-color: #ffffe0;
//   width: 400px;
//   min-height: 200px;
//   padding: 8px;
//   margin: 8px;
//   border-radius: 8px;
// }

// .title {
//   text-align: center;
//   margin-top: 0;
//   font-weight: bold;
//   color: #fff;
// }
// .list-row {
//   display: flex;
//   align-items: center;
//   padding-bottom: 4px;
// }






// jsのcode

// import "./styles.css";

// const onClickadd = () => {
//   const inputText = document.getElementById("add-text").value;
//   document.getElementById("add-text").value = "";

//    createIncompletelist(inputText);

//   // div生成
  
// };
// //未完了リストから指定の要素を削除
// const deleteFromIncompleteList = (target) => {
//   document.getElementById("incomplete-list").removeChild(target);
// };

// // 未完了リストに追加する関数
// const createIncompletelist = (text) => {
//   const div = document.createElement("div");
//   div.className = "list-row";
//   // liタグ生成
//   const li = document.createElement("li");
//   li.innerText = text;

//   // button(完了)タグの生成
//   const completeButton = document.createElement("button");
//   completeButton.innerText = "完了";
//   completeButton.addEventListener("click", () => {
//     //　押された削除ボタンの親タグ(div)を未完了リストから削除
//     deleteFromIncompleteList(deleteButton.parentNode);

//     //完了リストに追加する要素
//     const addTarget = completeButton.parentNode;
//     // TODO内容を取得
//     const text = addTarget.firstElementChild.innerText;

//     // div以下を初期化
//     addTarget.textContent = null;
    
//     // liタグ生成
//     const li = document.createElement("li");
//     li.innerText = text;
    
//     //buttonタグ生成
//     const backButton = document.createElement("button");
//     backButton.innerText = "戻す";
//     backButton.addEventListener("click", () => {
//       // 押された戻すボタンの親タグ(div)を完了リストから削除
//       const deleteTarget = backButton.parentNode;
//       document.getElementById("complete-list").removeChild(deleteTarget);

//       //テキスト取得
//       const text = backButton.parentNode.firstElementChild.innerText;
//       createIncompletelist(text);
//     });

//     // divタグの子要素に各要素wp設定する。
//     addTarget.appendChild(li);
//     addTarget.appendChild(backButton);
    
//     // 完了リストに追加
//     document.getElementById("complete-list").appendChild(addTarget);

//   });

//   // button(削除)タグの生成
//   const deleteButton = document.createElement("button");
//   deleteButton.innerText = "削除";
//   deleteButton.addEventListener("click", () => {
//     //　押された削除ボタンの親タグ(div)を未完了リストから削除
//     // deleteFromIncompleteList(deleteButton.parentNode);
//   });

//   //divタグの子要素に各要素を設定
//   div.appendChild(li);
//   div.appendChild(completeButton);
//   div.appendChild(deleteButton);

//   //未完了のリストに追加
//   document.getElementById("incomplete-list").appendChild(div);
// }

// document
//   .getElementById("add-button")
//   .addEventListener("click", () => onClickadd());

