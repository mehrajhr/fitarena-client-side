import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainPageLayouts from '../Layouts/MainPageLayouts';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AllEvents from '../Pages/AllEvents';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainPageLayouts,
    children: [
        {
            index: true,
            Component: Home
        },
        {
          path: '/events/all',
          Component: AllEvents
        },
        {
            path: '/login',
            Component: Login
        },
        {
            path: '/register',
            Component: Register
        }
    ]
  },
]);

export default router;