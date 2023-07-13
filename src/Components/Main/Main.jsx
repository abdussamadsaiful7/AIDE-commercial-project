import React from 'react';
import Home from '../HomePage/Home/Home';
import Footer from '../HomePage/Footer/Footer';
import Trending from '../HomePage/Trending/Trending';
import Navbar from '../HomePage/Navbar/Navbar';
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;