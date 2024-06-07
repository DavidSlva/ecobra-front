import React, { useEffect, useState } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
// import {

//   routesAuth,

// } from './assets/routes/routes';
// import useAuth from 'hooks/useAuth';

// import administradorRoutes from 'assets/routes/administrador.routes';
// import whitAdministradorProvider from 'HOCs/whitAdministradorProvider';
import { routesAdmin } from './administrador';


const SecureRouter = () => {
//   const { user, isLoading } = useAuth();
const isLoading = false
const user = {
    type: 'administrador',
}
  const { type } = user || {};
  const [routes, setRoutes] = useState(null);
  useEffect(() => {
    if (!isLoading) {
      switch (type) {
        case 'administrador':
          setRoutes(
            routesAdmin.map((route) => ({
              ...route,
              element: route.element,
            }))
          );
          break;
      }
    }
  }, [isLoading, type]);

  return (
    <HashRouter>
      {routes ? (
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={toString(index)}
              path={route.path}
              element={
                <route.layout>
                  <route.element />
                </route.layout>
              }
            />
          ))}
        </Routes>
      ) : null}
    </HashRouter>
  );
};

export default SecureRouter;
