import React, { useRef, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReactToPrint from 'react-to-print';

const AllEmployee = () => {
    const ref = useRef();
    const loadAllEmployee = useLoaderData();
    const [allEmployee, setAllEmployee] = useState(loadAllEmployee)
    console.log(allEmployee)


    const [visibleColumns, setVisibleColumns] = useState({
        name: true,
        email: true,
        plan: true,
        role: true,
        status: true
    });

    const toggleColumnVisibility = (columnKey) => {
        setVisibleColumns(prevState => ({
            ...prevState,
            [columnKey]: !prevState[columnKey]
        }));
    };

    return (
        <div className='md:px-10 px-8'>
            <h1 className='text-center font-serif text-3xl font-semibold pt-8'>ALL EMPLOYEE</h1>
            <div className='flex items-center justify-between mt-5 px-10'>
                <div className='space-x-4 md:pl-4'>
                    <ReactToPrint trigger={() => <button className='border border-1 border-blue-500 p-1 rounded text-slate-500 hover:bg-blue-500 hover:text-white'>PDF</button>} content={() => ref.current} />
                    {/* <button className='border border-1 border-blue-500 p-1 rounded text-slate-500 hover:bg-blue-500 hover:text-white'>SHOW/HIDE COLUM</button> */}

                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-sm  py-1 border border-1 border-blue-500  rounded text-slate-500 hover:bg-blue-500 hover:text-white">SHOW/HIDE COLUM</label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32">
                            <li><a onClick={() => toggleColumnVisibility('name')}>Name</a></li>
                            <li><a onClick={() => toggleColumnVisibility('email')} >Email</a></li>
                            <li><a onClick={() => toggleColumnVisibility('plan')} >Plan</a></li>
                            <li><a onClick={() => toggleColumnVisibility('role')} >Role</a></li>
                            <li><a onClick={() => toggleColumnVisibility('status')} >Status</a></li>
                        </ul>
                    </div>


                </div>
                <Link to='/dashBoard/addEmployee'> <button className='border border-1 border-blue-500 p-1 rounded text-slate-500 hover:bg-blue-500 hover:text-white'>+ ADD NEW PRODUCT</button></Link>
            </div>

            <div className='print'>
                <div className='sss'>
                    <dir ref={ref} className="a">
                        <table className="table w-full my-6 border">
                            <thead>
                                <tr>
                                    {/* <th>IMAGE</th>
                                    <th>NAME</th>
                                    <th>Email</th>
                                    <th>PLAN</th>
                                    <th>ROLE</th>
                                    <th>STATUS</th> */}
                                    {<th>IMAGE</th>}
                                    {visibleColumns.name && <th>NAME</th>}
                                    {visibleColumns.email && <th>Email</th>}
                                    {visibleColumns.plan && <th>PLAN</th>}
                                    {visibleColumns.role && <th>ROLE</th>}
                                    {visibleColumns.status && <th>STATUS</th>}
                                </tr>
                            </thead>
                            {
                                allEmployee.map(employee =>

                                    <tbody employee={employee} key={employee._id} className='cursor-pointer 
                                         hover:scale-[0.95] duration-300 hover:bg-blue-500 hover:text-white' >
                                        <tr className='my-4'>
                                            <td>

                                                <div className="avatar">
                                                    <div className=" lg:w-14 lg:h-14 w-6 h-6">
                                                        <img src={employee.imageURL} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>

                                            </td>
                                            {/* <td>{employee.name} <br /> {employee.mobile}</td>
                                            <td>{employee.email}</td>
                                            <td>{employee.plan}</td>
                                            <td>{employee.role}</td>
                                            <td>{employee.status}</td> */}

                                            {visibleColumns.image && (
                                                <td>
                                                    <div className="avatar">
                                                        <div className="lg:w-14 lg:h-14 w-6 h-6">
                                                            <img src={employee.imageURL} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                </td>
                                            )}
                                            {visibleColumns.name && <td>{employee.name} <br /> {employee.mobile}</td>}
                                            {visibleColumns.email && <td>{employee.email}</td>}
                                            {visibleColumns.plan && <td>{employee.plan}</td>}
                                            {visibleColumns.role && <td>{employee.role}</td>}
                                            {visibleColumns.status && <td>{employee.status}</td>}
                                        </tr>

                                    </tbody>

                                )
                            }

                        </table>
                    </dir>
                </div>
            </div>
        </div>
    );
};

export default AllEmployee;