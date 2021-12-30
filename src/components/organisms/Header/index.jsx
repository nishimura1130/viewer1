import React from 'react';
import PropTypes from 'prop-types';
//NAME: prop-types
//WHAT: propsという任意の値を受け取る役割。
// WHY: 受け取ったコンポーネント側でこのpropsの値を使い、レンダリング内容に変化をつけたり、ロジックを作る。
// HOW: ライブラリをimportし、props名: propTypes.型定義で出力。
import styled from 'styled-components';
import NavigationLinks from '~/components/organisms/NavigationLinks';
import Typography from '~/components/atoms/Typography';

const Root = styled.div`
  width: 100%;
`;

const StyledNavigationLinks = styled(NavigationLinks)`
  margin-left: auto;
`;

const Header = ({ className }) => (
  <Root className={className}>
    {/* 修正する。タイトルを左寄せにする */}
    <Typography size="title" color="red" align="left">
      Original Viewer
    </Typography>
    {/* 追加する */}
    <StyledNavigationLinks />
  </Root>
);

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};

export default Header;

// NAME: className
//WHAT: HTMLのclassがclassNameになるだけ。
//WHY: コンポーネントのstateやpropsを元にCSSクラスを割り当てる。
// HOW: クラス名を文字列としてclassNameプロパティを与える。