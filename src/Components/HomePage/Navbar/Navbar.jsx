import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignJustify, FaHome, FaSearch, FaShoppingCart, FaSignOutAlt, FaUserAlt, } from "react-icons/fa";
import { AuthContext } from '../../AuthProviders/AuthProviders';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [show, setShow] = useState([]);
    // console.log("navbar", show.length)


    useEffect(() => {
        fetch(`https://aide-task-server-weld.vercel.app/order?email=${user?.email}&${show?.price}`)
            .then(res => res.json())
            .then(data => setShow(data))
    }, [show])

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch((error) => {
                console.log(error);
            })
    }


    return (
        <div className='pt-2 px-10'>
            <div className="navbar bg-base-100">
                <div className="navbar-start w-1/2">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" z-50 menu menu-sm dropdown-content mt-3 p-2 space-y-2 shadow bg-base-100 rounded-box w-36">

                            <Link to="/order"><a className=" flex items-center "><FaShoppingCart className='mr-1 text-blue-500' />
                                <span className='text-red-400'>+{show?.length || 0}</span>Cart</a></Link>


                            {/* <Link to='/login'><a className=" flex items-center mr-2"><FaUserAlt />Sign In</a></Link> */}
                            {
                                user ?
                                    <>
                                        <Link><button onClick={handleLogout} className=" flex items-center"> <span className='mr-1 text-blue-500'><FaSignOutAlt className='text-lg font-serif' /></span>
                                            Sign Out</button></Link>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'><button className="flex items-center"> <span className='mr-1 text-blue-500'><FaUserAlt className='text-xl font-serif' /></span>Sign In</button></Link>
                                    </>
                            }
                            <Link to='/dashBoard'><a className=" flex items-center mr-2"><FaUserAlt className='mr-1 text-blue-500' />Admin</a></Link>
                            <Link to='/'><a className=" flex items-center mr-2"><FaHome className='mr-1 text-blue-500' />Home</a></Link>
                        </ul>
                    </div>
                    <a href='/' className=" hidden md:block normal-case text-xl text-blue-500">Abdus Samad Saiful</a>
                </div>

                <div className=' hidden md:flex items-center relative w-3/4 mb-1'>
                    <i className='absolute left-1 text-blue-500'><FaSearch /></i>
                    <input type="text" placeholder="Search essential, groceries and more..."
                        className=" text-sm pl-6 py-1  input input-bordered border-blue-500 input-group-lg w-full" />
                    <i className='absolute right-1 text-blue-500'><FaAlignJustify /></i>
                </div>


                <div className=" relative navbar-end space-x-6">
                    <Link to='/order'><a className=" hidden md:flex items-center"> <span className='mr-1 text-blue-500'><FaShoppingCart className='text-2xl' /></span> <span className="badge 
                     badge-xs bg-blue-500 absolute 
                        right-0 left-20 -top-2 rounded-[60%] text-white">+{show?.length || 0}</span> Cart</a></Link>


                    <Link to='/dashBoard'><a className=" hidden md:flex items-center"> <span className='mr-1 text-blue-500'><FaUserAlt className='text-lg font-serif' /></span>Admin</a></Link>


                    {
                        user ?
                            <>
                                <Link><button onClick={handleLogout} className=" hidden md:flex items-center"> <span className='mr-1 text-blue-500'><FaSignOutAlt className='text-lg font-serif' /></span>
                                    Sign Out</button></Link>
                            </>
                            :
                            <>
                                <Link to='/login'><button className=" hidden  md:flex items-center"> <span className='mr-1 text-blue-500'><FaUserAlt className='text-xl font-serif' /></span>Sign In</button></Link>
                            </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;