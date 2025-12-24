import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import { lazy } from "react";
import Home from "../pages/home";
import ContactUS from "../pages/contact";
import { appRoutes } from "./app-routes";

// const NotFoundPage = lazy(() => import('../shared/pages/not-found-page'))
const homeRoutes = [
  {
    path: appRoutes.home,
    element: <Home />,
  },
];
const contactRoutes = [
  {
    path: appRoutes.contact,
    element: <ContactUS />,
  },
];
const routes = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      ...homeRoutes,
      ...contactRoutes,
      // {
      //     path: '*',
      //     element: (
      //         <BlankLayout>
      //             <NotFoundPage />
      //         </BlankLayout>
      //     ),
      // }
    ],
  },
];

const router = createBrowserRouter(routes);

export function AppRouterProvider() {
  return <RouterProvider router={router} />;
}
