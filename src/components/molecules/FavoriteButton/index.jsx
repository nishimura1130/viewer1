import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';
import FavoriteContext from '~/contexts/FavoriteContext';
import StartIcon from '~/components/atoms/StarIcon';
import Button from '~/components/atoms/Button';

export const FavoriteButtonPresenter = ({
  className,
  isFavorite,
  onClick,
}) => (
  <Button
    className={className}
    onClick={onClick}
    size="s"
  >
    <StartIcon on={isFavorite} />
    お気に入り
  </Button>
);

FavoriteButtonPresenter.propTypes = {
  className: PropTypes.string,
  isFavorite: PropTypes.bool,
  onClick: PropTypes.func,
};

FavoriteButtonPresenter.defaultProps = {
  className: '',
  isFavorite: false,
  onClick: null,
};

const FavoriteButtonContainer = ({
  className,
  videoId,
  api,
  presenter,
}) => {
  const { state: { ids: favoriteIds }, dispatch } = useContext(FavoriteContext);
  if (!favoriteIds) {
    //NAME: dispatch
    //WHAT: stateの値を変更するときに使用する。
    //WHY: actionの前にdispatchで受け取る処理を入れないとサーバーに情報が届かないため。
    //HOW: dispatchというメソッドを用意し、引数でアクションを受けとるようにする。

    // お気に入りリストが未設定(取得前)であればお気に入りボタンは表示しない
    return null;
    // NAME: useContext:
    //WHAT: 親コンポーネントからpropsで渡されていないのにContextに収容されているデータにアクセスできること。
    //WHY: propsで一つ一つ情報を渡さなくてもContextを使うことでまたいで情報にアクセスできるため。
    // HOW: ファイルに階層を書き、アロー関数で宣言し、情報を取得する。
  }
  const isFavorite = favoriteIds.indexOf(videoId) !== -1;

  const onClickHandler = (e) => {
    e.stopPropagation();
    // サーバーにお気に入りの追加または削除するリクエストを送る
    api[isFavorite ? 'delete' : 'post'](videoId);
    // サーバーからのレスポンスを待たずにお気に入り状態を変更する
    dispatch({ type: isFavorite ? 'remove' : 'add', id: videoId });
  };

  return presenter({
    className,
    isFavorite,
    onClick: onClickHandler,
  });
};

FavoriteButtonContainer.propTypes = {
  className: PropTypes.string,
  videoId: PropTypes.string.isRequired,
  presenter: PropTypes.func.isRequired,
  api: PropTypes.shape({
    post: PropTypes.func,
    delete: PropTypes.func,
  }),
};

FavoriteButtonContainer.defaultProps = {
  className: '',
  api: {
    post: (videoId) => axios.post(`/api/favorites/${videoId}`),
    delete: (videoId) => axios.delete(`/api/favorites/${videoId}`),
  },
};

export default (props) => (
  <FavoriteButtonContainer
    {...props}
    presenter={FavoriteButtonPresenter}
  />
);