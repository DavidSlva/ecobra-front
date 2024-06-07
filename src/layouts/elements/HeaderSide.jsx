import React from 'react';
import { BarsOutlined } from '@ant-design/icons';
import { Avatar, Button, Space } from 'antd';
import useAuth from 'hooks/useAuth';
import Logo from 'components/Logo/Logo';

const HeaderSide = (props) => {
  const { hidden, setHidden, openProfile } = props;
  const { user } = useAuth();
  return (
    <div className="relative w-full flex">
      <div className="basis-2/5">
        <Button
          type="text"
          className="md:hidden z-50 inline-block rounded-md ml-5"
          icon={<BarsOutlined />}
          onClick={() => setHidden(!hidden)}
        />
      </div>
      <Logo simple />
      <div
        className="basis-2/5 text-right cursor-pointer"
        onClick={openProfile}
      >
        <Space>
          <p className="capitalize text-gray-500 my-0 inline-block text-sm">
            {' '}
            {user.fullname}
          </p>
          <Avatar />
        </Space>
      </div>
    </div>
  );
};

export default HeaderSide;
