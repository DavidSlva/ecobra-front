import React from 'react';
import { Button, Card, Image, Space } from 'antd';
// import LiftLogicLogo from '../../../assets/app_config/lift_logic_logo.png';
// import { APP_VERSION } from 'config';

function Footer() {
  return (
    <Card className="mt-2">
      <div className=" flex flex-row justify-center align-bottom items-center">
        <Space direction="horizontal">
          {/* <Image src={LiftLogicLogo} width={100} /> */}
          <Space direction="vertical">
            <p>Desarrollado por STIL</p>
            <p>david.silva@liftlogic.cl</p>
          </Space>
        </Space>
        <p className="font-subtitle">Versión: 1</p>
      </div>
    </Card>
  );
}

export default Footer;
