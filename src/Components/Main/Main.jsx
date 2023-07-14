import React from 'react';
import Home from '../HomePage/Home/Home';
import Footer from '../HomePage/Footer/Footer';
import Trending from '../HomePage/Trending/Trending';
import Navbar from '../HomePage/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';


const Main = () => {
    const location = useLocation();
    const noHeaderFooter =location.pathname.includes('login') || location.pathname.includes('signUp')
    return (
        <div>
            {/* <Navbar />
            <Outlet />
            <Footer /> */}
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;