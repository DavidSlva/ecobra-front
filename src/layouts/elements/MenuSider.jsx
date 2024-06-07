import {
  AppstoreOutlined,
  AuditOutlined,
  CalendarOutlined,
  DashboardOutlined,
  DatabaseFilled,
  DotChartOutlined,
  FileAddFilled,
  FileDoneOutlined,
  FileMarkdownOutlined,
  FilePdfFilled,
  FilePdfOutlined,
  FileProtectOutlined,
  FolderFilled,
  HomeFilled,
  HomeOutlined,
  OrderedListOutlined,
  PoweroffOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const menu = Object.freeze({
  especialista: [
    {
      label: (
        <>
          <Link to="/specialist" />
          Inicio
        </>
      ),
      icon: <HomeOutlined />,
      key: 'home',
    },
    {
      label: (
        <>
          <Link to="/specialist/AttentionVoucher" />
          Comprobantes
        </>
      ),
      icon: <FileProtectOutlined />,
      key: 'users',
    },
    {
      label: (
        <>
          <Link to="/specialist/order" />
          ODT
        </>
      ),
      icon: <OrderedListOutlined />,
      key: 'order',
    },
    {
      label: (
        <>
          <Link to="/specialist/MaintanceReports" />
          Informes de Mantención
        </>
      ),
      icon: <FilePdfFilled />,
      key: 'MaintanceReports',
    },
    // {
    //   label: (
    //     <>
    //       <Link to="/specialist/lista-mantenciones" />
    //       Mantenciones (Nueva)
    //     </>
    //   ),
    //   icon: <AuditOutlined />,
    //   key: 'listaMantenciones',
    // },
  ],
  ejecutivo: [
    {
      label: (
        <>
          <Link to="/admin" />
          Home
        </>
      ),
      icon: <HomeOutlined />,
      key: 'home',
    },

    {
      label: (
        <>
          <Link to="/admin/administradores" />
          Administradores
        </>
      ),
      icon: <TeamOutlined />,
      key: 'administradores',
    },
    {
      label: (
        <>
          <Link to="/admin/mantenciones" />
          Mantenciones
        </>
      ),
      icon: <HomeOutlined />,
      key: '/admin/mantenciones',
    },
    {
      label: (
        <>
          <Link to="/admin/mantenciones/actividades" />
          Actividades de Mantención
        </>
      ),
      icon: <HomeOutlined />,
      key: '/admin/mantenciones/actividades',
    },
    {
      label: (
        <>
          <Link to="/admin/users" />
          Usuarios
        </>
      ),
      icon: <UserOutlined />,
      key: 'users',
    },
    {
      label: (
        <>
          <Link to="/admin/client" />
          Clientes
        </>
      ),
      icon: <AppstoreOutlined />,
      key: 'clients',
    },
    {
      label: (
        <>
          <Link to="/admin/budget" />
          Presupuestos
        </>
      ),
      icon: <FileDoneOutlined />,
      key: 'budget',
    },
    {
      label: (
        <>
          <Link to="/admin/maintanceReports" />
          Informes de mantención
        </>
      ),
      icon: <FileMarkdownOutlined />,
      key: 'maintanceReports',
    },
    // {
    //   label: 'Mantención',
    //   icon: <FileAddFilled />,
    //   key: 'maintance-key',
    //   children: [
    //     {
    //       label: (
    //         <>
    //           <Link to="/admin/maintance" />
    //           Informes
    //         </>
    //       ),
    //       key: 'maintance',
    //     },
    //     {
    //       label: (
    //         <>
    //           <Link to="/admin/maintance/asignations" />
    //           Asignaciones
    //         </>
    //       ),
    //       key: 'maintance/asignations',
    //     },
    //     {
    //       label: (
    //         <>
    //           <Link to="/admin/maintance/activities" />
    //           Actividades
    //         </>
    //       ),
    //       key: 'activities',
    //     },
    //   ],
    // },
    {
      label: (
        <>
          <Link to="/admin/certificacion" />
          ASIMET
        </>
      ),
      icon: <DatabaseFilled />,
      key: 'certificacion',
    },
    {
      label: (
        <>
          <Link to="/admin/folders" />
          Archivos
        </>
      ),
      icon: <FolderFilled />,
      key: 'folders',
    },
  ],
  administrador: [
    {
      label: (
        <>
          <Link to="/" />
          Inicio
        </>
      ),
      icon: <HomeOutlined />,
      key: 'inicio',
    },
  ],
  liftlogic: [
    {
      label: (
        <>
          <Link to="/" />
          Inicio
        </>
      ),
      icon: <HomeOutlined />,
      key: 'inicio',
    },
    {
      label: (
        <>
          <Link to="/ConstructorPdf" />
          Constructor
        </>
      ),
      icon: <FilePdfOutlined />,
      key: 'Constructor',
    },
  ],
});

const MenuSider = (props) => {
  const { type } = props;
  return <Menu mode="inline" items={menu[type]} />;
};

export default MenuSider;
