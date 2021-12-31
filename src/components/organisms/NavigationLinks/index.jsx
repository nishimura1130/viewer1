import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import Typography from '~/components/atoms/Typography';

const LinkText = styled(Typography).attrs({
  size: 's',
  color: 'gray',
  align: 'center',
  display: 'inline-block',
})`
  margin: 0 10px;
`;

const links = [{
  pathRegExp: /^\/$/,
  path: '/',
  text: 'TOP',
}, {
  pathRegExp: /^\/favorites/,
  path: '/favorites',
  text: 'お気に入り',
}];

export const NavigationLinksPresenter = ({ className, currentPath }) => (
  <div className={className}>
    {links.map(({ pathRegExp, path, text }) => {
      const isCurrentPath = pathRegExp.test(currentPath);
      const Text = <LinkText underline={!isCurrentPath}>{text}</LinkText>;
      return (
        <React.Fragment key={path}>
          {isCurrentPath ? Text : <Link to={path}>{Text}</Link>}
        </React.Fragment>
      );
    })}
  </div>
);

// NAME: Fragment
// WHAT: コンポーネントが複数の要素を返すときに使う。
// WHY: DOMに余分のnodeを追加することなくこ要素をまとめることができる。
// HOW: <React.Fragment> とすることでkeyを持つことができる。keyはFragmentに渡すことができる唯一の属性。
// class Columns extends React.Component {
//   render() {
//     return (
//       <>
//         <td>Hello</td>
//         <td>World</td>
//       </>
//     );
//   }
// }
// 宮崎Teacher Comment = <></>で書くことが多いから、初めてこれがでてもFragmentの省略形だと認識すれば良いよ。

NavigationLinksPresenter.propTypes = {
  className: PropTypes.string,
  currentPath: PropTypes.string,
};

NavigationLinksPresenter.defaultProps = {
  className: '',
  currentPath: '',
};

const NavigationLinksContainer = ({ className, presenter }) => {
  // useLocationを使って現在のURLパスを取得
  const { pathname } = useLocation();
  return presenter({
    className,
    currentPath: pathname,
  });
};

NavigationLinksContainer.propTypes = {
  className: PropTypes.string,
  presenter: PropTypes.func.isRequired,
};

NavigationLinksContainer.defaultProps = {
  className: '',
};

export default (props) => (
  <NavigationLinksContainer
    presenter={NavigationLinksPresenter}
    {...props}
  />
);
