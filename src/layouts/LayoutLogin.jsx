import React from 'react';
import Layout, { Content } from 'antd/lib/layout/layout';
// import './LayoutLogin.scss';
import PropTypes from 'prop-types';
import SquareBackground from 'components/global/SquareBackground';

function LayoutLogin(props) {
  const { children } = props;
  return (
    <Layout className="layout-login-admin welcome min-h-screen">
      {/* <SquareBackground /> */}
      <Content className="layout-login-admin__content">{children}</Content>
    </Layout>
  );
}

LayoutLogin.propTypes = {
  children: PropTypes.isRequired,
};

export default LayoutLogin;
