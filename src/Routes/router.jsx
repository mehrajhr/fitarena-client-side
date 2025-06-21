import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainPageLayouts from '../Layouts/MainPageLayouts';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AllEvents from '../Pages/AllEvents';
import Contact from '../Pages/Contact';
import AboutUs from '../Pages/AboutUs';
import FAQ from '../Pages/FAQ';

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
          path: '/contact',
          Component: Contact
        },
        {
          path: '/aboutus',
          Component: AboutUs
        },
        {
          path: '/faq',
          Component: FAQ
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