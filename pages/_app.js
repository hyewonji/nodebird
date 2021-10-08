import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import wrapper from '../store/configureStore';

const App = ({Component}) => (
  // next-redux-wrapper v6이상은 App을 provider로 감싸지 않는다.
  // 자체적으로 provider로 감싸주기 때문에 한번더 감쌀 필요가 없다.
  <>
    <Component />
  </>
)

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(App);