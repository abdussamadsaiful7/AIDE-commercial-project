import React, { useState } from 'react';
import { FaArrowCircleLeft, FaUserFriends, FaAddressBook, FaDochub, FaSearch, FaUserPlus, FaChevronDown } from "react-icons/fa";

const Admin = () => {

    const [open, setOpen] = useState(true);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const Menus = [
        {
            title: "All Employee",
            path: '/',
            icon: <FaUserFriends className='text-2xl text-blue-600 hover:text-white'/>,
            submenu: true,
            submenuItems: [
                { title: "SubMenu 1",  path: '/', },
                { title: "SubMenu 2",  path: '/', },
                { title: "SubMenu 3",  path: '/', }
            ],

        },
        {
            title: "Add Employee",
            path: '/',
            icon: <FaUserPlus className='text-2xl text-blue-600 hover:text-white'/>
        },
        {
            title: "All Products",
            path: '/',
            icon:  <FaAddressBook className='text-2xl text-blue-600 hover:text-white' />
        }

    ]
    return (
        <div className='flex mt-8'>
            <div className={`relative bg-slate-300 h-screen p-5 pt-8 ${open ? 'w-64' : 'w-20'} duration-300`}> <FaArrowCircleLeft className={`text-blue-500 text-2xl absolute -right-3 cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
                <div className='inline-flex items-center mb-4'>
                    <FaDochub className="text-4xl   text-white" />
                    <h1 className={`font-semibold text-lg duration-300 ${!open && 'scale-0'}`}>DashBoard</h1>
                </div>
                <div className='flex items-center rounded-md bg-white'>
                    <FaSearch className='pl-2 text-cyan-700 text-3xl block float-left cursor-pointer' />
                    <input type={"search"} placeholder="Search" className={`p-2 text-base bg-transparent w-full focus:outline-none ${!open && "hidden"}`} />
                </div>
                <ul>
                    {Menus.map((menu, index) =>
                        <div key={index}>
                            <li className='font-serif flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-500 rounded-md mt-2 ' 
                            key={index}>
                                <span>
                                    {menu.icon? menu.icon: <FaAddressBook />}
                                </span>
                                <span className={` duration-300 ${!open && 'hidden'}`}>{menu.title}</span>
                                {menu.submenu && open && (<FaChevronDown className={`${subMenuOpen && "rotate-180"}`} onClick={() => { setSubMenuOpen(!subMenuOpen) }} />)}
                            </li>
                            {menu.submenu && subMenuOpen && open && (
                                <ul>
                                    {
                                        menu.submenuItems.map((submenuItem, index)=>(
                                            <li key={index} className='ml-20 space-y-4'>
                                                {submenuItem.title}
                                            </li>
                                        ))
                                    }
                                </ul>
                                
                                )
                            }
                        </div>
                    )}
                </ul>
            </div>
            <div className='p-7'>
                <h1>Home page</h1>
            </div>
        </div>
    );
};

export default Admin;