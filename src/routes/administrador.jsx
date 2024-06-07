import LayoutMain from "../layouts/LayoutMain";
import Home from "../pages/administrador/Home";

export const routesAdmin = [
    {
      path: '/',
      layout: LayoutMain,
      element: Home,
    },
]