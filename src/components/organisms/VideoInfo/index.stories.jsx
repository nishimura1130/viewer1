import React from 'react';
import { VideoInfoPresenter as VideoInfo } from '.';

export default { title: 'organisms/VideoInfo' };

const props = {
  title: '猫と学ぶ宇宙のこと100',
  description: '動画説明サンプルです。動画説明サンプルです。動画説明サンプルです。\n'.repeat(10),
  publishedAt: '2020/05/05',
  viewCount: '10000',
};

export const videoInfo = () => <VideoInfo {...props} />;

import React from 'react';
import { VideoInfoPresenter as VideoInfo } from '.';

export default { title: 'organisms/VideoInfo' };

const props = {
  title: '猫と学ぶ宇宙のこと100',
  description: '動画説明サンプルです。動画再生サンプルです。動画説明サンプルです。\n'.repeat(10),
  publishedAt: '2020/05/05',
  // NAME: publishedAt
  //WHAT: 動画のアップロード日時。
  // WHY: （YYYY-MM-DDThh:mm:ss.sZ)形式で指定するため。
  // HOW:  ブラウザに動画のアップロードの日時を表示させるため。YOUTUBEのAPIの仕様。

  viewCount: '10100',
}
export const videoInfo = () => <VideoInfo {...props} />;

