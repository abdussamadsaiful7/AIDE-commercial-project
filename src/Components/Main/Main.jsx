import React from 'react';
import Home from '../HomePage/Home/Home';
import Navber from '../HomePage/Navbar/Navber';
import Footer from '../HomePage/Footer/Footer';
import Trending from '../HomePage/Trending/Trending';


const Main = () => {
    return (
        <div>
            <Navber/>
            <Home/>
            <Trending/>
            <Footer/>
        </div>
    );
};

export default Main;