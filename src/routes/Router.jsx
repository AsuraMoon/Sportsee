import { createBrowserRouter, Outlet } from 'react-router-dom'

import Header from '../layout/Header/Header'
import Sidebar from '../layout/SideBar/Sidebar'
import Main from "../layout/Main/Main";

import Home from '../pages/Home/Home';
import Profil from '../pages/Profil/Profil';
import Settings from '../pages/Settings/Settings';
import Community from '../pages/Community/Community';
import Error from '../pages/Error/Error';

const HeaderFooterLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />
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
        path: "/Sportsee/",
        element: <Home />
      },
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/profil/:id",
        element: <Profil />
      },
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