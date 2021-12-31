import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// 追加する
import useOnScrollEnd from '~/utils/useOnScrollEnd';
// fetchメソッド＝データを取りに行って持ち帰ってくる。撮りに行って戻ってくる。

// NAME: useEffect
//WHAT: APIやデータベースから非同期通信(ネットワーク越しに別の場所にあるデータを取得・送信する場合に使用される)でデータを取得すること。
//WHY: 関数コンポーネント内で副作用を実行するたものHookです。
// HOW: 第二引数を指定しない場合は、副作用は前レンダリング後に実行されます。

const Root = styled.div`
  width: 100%;
  height: 100%;
`;

const HeaderWrapper = styled.div`
  max-width: 720px;
  margin: auto;
  border-bottom: 1px solid #ccc;
`;

const TitleWrapper = styled.div`
  max-width: 720px;
  margin: auto;
`;


const SearchFormWrapper = styled.div`
  max-width: 720px;
  margin: auto;
`;

const VideosListWrapper = styled.div`
  max-width: 720px;
  margin: auto;
`;

const VideosListTemplate = ({
  headerContents,
  titleContents,
  searchFormContents,
  videosListContents,
  onScrollEnd,
}) => {
  // 修正する
  useOnScrollEnd(onScrollEnd);
  return (
    //NAME: return
    // WHAT: 関数の実行を終了して、関数の呼び出し元に返す値をしてする。関数の返り値。
    // WHY: return文を呼び出すと関数の実行が止まるから。
    // HOW: onScrollEndが返り値になる。無限にスクロールできるUI。
    <Root>
    <HeaderWrapper>
      {headerContents}
    </HeaderWrapper>
    <TitleWrapper>
      {titleContents}
    </TitleWrapper>
    <SearchFormWrapper>
      {searchFormContents}
    </SearchFormWrapper>
    <VideosListWrapper>
      {videosListContents}
    </VideosListWrapper>
  </Root>
);
};

VideosListTemplate.propTypes = {
  headerContents: PropTypes.node,
  titleContents: PropTypes.node,
  searchFormContents: PropTypes.node,
  videosListContents: PropTypes.node.isRequired,
  onScrollEnd: PropTypes.func,
};

VideosListTemplate.defaultProps = {
  headerContents: null,
  titleContents: null,
  searchFormContents: null,
  onScrollEnd: null,
};

export default VideosListTemplate;

// NAME: イベントハンドラ
// WHY: イベント処理とは、ユーザが「クリック」や「入力」などの操作が発生したときにプログラム側が行う処理のことを言います。
//WHAT: 文字列でなく、関数を渡すから。
//HOW: <button onClick={activateLasers}>Activate Lasers</button>のように関数を渡す処理を書く。











