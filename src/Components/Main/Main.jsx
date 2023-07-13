import React from 'react';
import Home from '../HomePage/Home/Home';
import Navber from '../HomePage/Navbar/Navber';
import Footer from '../HomePage/Footer/Footer';


const Main = () => {
    return (
        <div>
            <Navber/>
            <Home/>
            <Footer/>
        </div>
    );
};

export default Main;