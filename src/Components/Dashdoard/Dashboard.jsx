import React, { useState } from 'react';
import { FaArrowCircleLeft, FaUserFriends, FaAddressBook, FaDochub, FaSearch, FaUserPlus, FaLayerGroup, FaListUl, FaRegListAlt, FaHome } from "react-icons/fa";
import { Link, NavLink, Outlet } from 'react-router-dom';
import lottieDashboard from '../../assets/logo/dashBoard.json';
import Lottie from "lottie-react";

const Dashboard = () => {
    const [see, setSee] = useState(false);
    return (
        <div className='py-8'>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div className='flex item center justify-between pb-4'>
                        <label htmlFor="my-drawer" className="btn btn-primary rounded btn-sm drawer-button ml-4"><FaListUl className='text-2xl' /></label>
                        <h1 className='text-center text-2xl text-blue-600 font-semibold font-serif'>Welcome to Admin panel</h1>
                        <Link to='/'><button className='btn btn-xs btn-outline btn-primary rounded mr-4'>
                            Home</button></Link>
                    </div>
                    <hr />
                    <div className='text-center flex items-center md:mx-[460px]'>
                        <Lottie className='w-64 h-64' animationData={lottieDashboard} loop={true} />
                    </div>
                    {/* Page content here */}
                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu pt-20 p-4 w-64 h-full bg-base-200 text-base-content">
                        <div className='flex items-center justify-between'>
                            <div className='inline-flex items-center mb-4'>
                                <FaDochub className="text-4xl   text-blue-500" />
                                <h1 className="font-semibold text-lg duration-300">DashBoard</h1>
                            </div>
                            <div>
                                <label htmlFor="my-drawer" className="btn btn-outline btn-circle btn-xs drawer-button ml-4"><FaArrowCircleLeft className='text-xl text-blue-500' /></label>
                            </div>
                        </div>
                        {/* Sidebar content here */}
                        <li className='hover:bg-blue-500 rounded mb-2'><Link to='/dashBoard/allEmployee'> <FaUserFriends className='text-2xl' />All Employee</Link></li>
                        <li className='hover:bg-blue-500 rounded mb-2'><Link to='/dashBoard/AddEmployee'> <FaUserPlus className='text-2xl' /> Add Employee</Link></li>
                        <li className='hover:bg-blue-500 rounded mb-2'><Link to='/dashBoard/allProducts'> <FaLayerGroup className='text-2xl' />  All Products</Link></li>
                        <li className='hover:bg-blue-500 rounded mb-2'><Link to='/dashBoard/addProduct'> <FaRegListAlt className='text-2xl' /> Add Product</Link></li>
                        <li className='hover:bg-blue-500 rounded mb-2'><Link to='/'> <FaHome className='text-2xl' /> Home</Link></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;