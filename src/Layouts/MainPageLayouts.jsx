import React from 'react';
import Navbar from '../Pages/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Pages/Footer';

const MainPageLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 mx-auto'>
                 <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainPageLayouts;