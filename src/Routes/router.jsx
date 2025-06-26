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
import PrivateRouts from '../Layouts/PrivateRouts.jsx';
import CreateEvent from '../Pages/CreateEvent.jsx';
import MyBooking from '../Pages/MyBooking.jsx';
import ManageEvents from '../Pages/ManageEvents.jsx';
import EventDetails from '../Pages/EventDetails.jsx';
import axios from 'axios';

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
          path: '/event/:id',
          element: <PrivateRouts><EventDetails></EventDetails></PrivateRouts>,
          loader: ({params}) => {
            return fetch(`http://localhost:5000/event/${params.id}`).then(res => res.json());
          }
        },
        {
          path: '/create-event',
          element : <PrivateRouts><CreateEvent></CreateEvent></PrivateRouts>
        },
        {
          path: '/myBookings',
          element : <PrivateRouts><MyBooking></MyBooking></PrivateRouts>
        },
        {
          path: '/manageEvents',
          element : <PrivateRouts><ManageEvents></ManageEvents></PrivateRouts>
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