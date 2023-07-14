import React from 'react';
import { Link } from 'react-router-dom';
import { FaAlignJustify, FaSearch, FaShoppingCart, FaUserAlt, } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='pt-2 px-10'>
            <div className="navbar bg-base-100">
                <div className="navbar-start w-1/2">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to="/order"><a className=" flex items-center mr-2"><FaShoppingCart />Cart</a></Link>
                            <Link to='/login'><a className=" flex items-center mr-2"><FaUserAlt />Sign In</a></Link>
                            <Link to='/dashBoard'><a className=" flex items-center mr-2"><FaUserAlt />Admin</a></Link>
                        </ul>
                    </div>
                    <a href='/' className="normal-case text-xl text-blue-500">Abdus Samad Saiful</a>
                </div>


                <div className='flex items-center relative w-3/4'>
                    <i className='absolute left-1 text-blue-500'><FaSearch /></i>
                    <input type="text" placeholder="Search essential, groceries and more..." className=" text-sm pl-6  input input-bordered border-blue-500 input-group-lg w-full" />
                    <i className='absolute right-1 text-blue-500'><FaAlignJustify /></i>
                </div>


                <div className="navbar-end space-x-6">
                    <Link to='/order'><a className=" flex items-center"> <span className='mr-1 text-blue-500'><FaShoppingCart /></span>Cart</a></Link>


                    <Link to='/login'><button className=" flex items-center"> <span className='mr-1 text-blue-500'><FaUserAlt /></span>Sign In</button></Link>


                    <Link to='/dashBoard'><a className=" flex items-center"> <span className='mr-1 text-blue-500'><FaUserAlt /></span>Admin</a></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;