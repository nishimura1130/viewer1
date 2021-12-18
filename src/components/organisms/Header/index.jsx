import React from 'react';
import PropTypes from 'prop-types';
//NAME: prop-types
//WHAT: propsという任意の値を受け取る役割。
// WHY: 受け取ったコンポーネント側でこのpropsの値を使い、レンダリング内容に変化をつけたり、ロジックを作る。
// HOW: ライブラリをimportし、props名: propTypes.型定義で出力。
import styled from 'styled-components';
import Typography from '~/components/atoms/Typography';

const Root = styled.div`
  width: 100%;
`;

const Header = ({ className }) => (
  <Root className={className}>
    <Typography size="title" color="red" align="center">
      Original Viewer
    </Typography>
  </Root>
);

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};

export default Header;

