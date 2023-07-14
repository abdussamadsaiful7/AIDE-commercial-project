import React from 'react';
import { FaShapes, FaSwatchbook, FaUserCheck, FaUsers, FaUsersCog } from 'react-icons/fa';

const Admin = () => {
    return (
        <div className='mt-20 md:mx-10'>
            <div className='md:mx-10'>
                <div className=' md:ml-64'>

                </div>
                <h1 className='text-center text-xl font-bold my-4 text-blue-500'>ADMIN OVER VIEW PAGE</h1>
                <div className='grid md:grid-cols-4 gap-6 adminHome p-4 '>
                    <div className='p-5 shadow-lg'>
                        <h1 className='ml-14 text-5xl  text-blue-500'><FaSwatchbook /></h1>
                        <p>TOTAL PRODUCT: 1292</p>
                    </div>
                    <div className='p-5 shadow-lg'>
                        <h1 className='ml-14  text-5xl  text-blue-500'><FaUserCheck /></h1>
                        <p>TOTAL PAID USERS: $200000</p>
                    </div>
                    <div className='p-5 shadow-lg'>
                        <h1 className='ml-14  text-5xl  text-blue-500'><FaShapes /></h1>
                        <p>TOTAL REVENUE: $75000</p>
                    </div>
                    <div className='p-5 shadow-lg'>
                        <h1 className='ml-14  text-5xl  text-blue-500'><FaUsers /></h1>
                        <p>TOTAL USERS: 1292</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;