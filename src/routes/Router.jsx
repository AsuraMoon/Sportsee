import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom'

/*import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'*/
import Main from "../layout/Main";

import Home from '../pages/Home/home';
import Profil from '../pages/Profil/profil';
import Settings from '../pages/Settings/settings';
import Community from '../pages/Community/community';
import Error from '../pages/Error/error';

      /*<Header />
      <Sidebar />*/
const HeaderFooterLayout = () => {
  return (
    <>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export const Router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/profil",
        element: <Profil />
      },
      //profil/:userId
      {
        path: "/community",
        element: <Community />
      },
      {
        path: "/settings",
        element: <Settings />
      }
    ]
  }
]);