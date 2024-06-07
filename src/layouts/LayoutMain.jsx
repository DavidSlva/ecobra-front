import React, { useEffect, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';
import { ConfigProvider, Drawer, Layout, Skeleton, Spin } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import MenuSider from './elements/MenuSider';

// import HeaderSide from './elements/HeaderSide';
import Footer from './elements/Footer';
// import Profile from 'components/global/Profile';

const defaultDrawer = {
  open: false,
  children: null,
};

function LayoutMain(props) {
  const { children } = props;

  // const { isLoading, user } = useAuth();
  const isLoading = false
  const user = {
    type: 'administrador'
  }

  const [hidden, setHidden] = useState(true);

  const [drawer, setDrawer] = useState(defaultDrawer);

  const siderRef = useRef(null);

  const handleClickOutside = (event) => {
    if (siderRef.current && !siderRef.current.contains(event.target)) {
      setHidden(true); // Esto ocultará el Sider
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // const openProfile = () => {
  //   setDrawer({
  //     open: true,
  //     children: <Profile user={user} />,
  //   });
  // };

  if (isLoading) {
    return <Spin />;
  }

  if (
    user &&
    (user.type === 'administrador' ||
      user.type === 'especialista' ||
      user.type === 'ejecutivo' ||
      user.type === 'liftlogic')
  ) {
    return (
      <Skeleton loading={isLoading}>
        <Drawer
          placement="left"
          closable={false}
          onClose={() => setDrawer(defaultDrawer)}
          key="left"
          width={300}
          {...drawer}
        />
        <ConfigProvider>
          <Layout className="min-h-screen ">
            <Header className="fixed shadow-md z-50 w-full h-16 px-1 md:px-5">
              {/* <HeaderSide
                hidden={hidden}
                setHidden={setHidden}
                openProfile={openProfile}
              /> */}
            </Header>
            <Sider
              collapsible
              ref={siderRef}
              defaultCollapsed
              className={`!fixed scroll h-full z-50 mt-16 transition-all duration-300  opacity-100 shadow-md md:translate-x-0 md:transform-none  ${
                hidden ? '-translate-x-full opacity-0' : 'opacity-100'
              } `}
            >
              <MenuSider type={user.type} />
            </Sider>
            <Layout className="mt-16 md:ml-20 px-2 md:px-5 py-3">
              <Content>{children}</Content>
              <Footer />
            </Layout>
          </Layout>
        </ConfigProvider>
      </Skeleton>
    );
  } else {
    return <Navigate to="/login" replace />;
  }
}

export default LayoutMain;
