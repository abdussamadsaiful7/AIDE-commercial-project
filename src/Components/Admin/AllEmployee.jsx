import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AllEmployee = () => {
    const loadAllEmployee = useLoaderData();
    const [allEmployee, setAllEmployee] = useState(loadAllEmployee)
    console.log(allEmployee)
    //const { name, email, mobile, imageURL, plan, role, status } = employee;
    return (
        <div className='md:px-10'>
            <h1 className='text-center font-serif text-3xl font-semibold pt-8'>ALL EMPLOYEE</h1>
            <table className="table w-full my-6 border">
                <thead>
                    <tr>
                        <th>IMAGE</th>
                        <th>NAME</th>
                        <th>Email</th>
                        <th>PLAN</th>
                        <th>ROLE</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                {
                    allEmployee.map(employee =>

                        <tbody employee={employee} key={employee._id} >
                            <tr className='my-4' data-aos="flip-up">
                                <td>

                                    <div className="avatar">
                                        <div className=" lg:w-14 lg:h-14 w-6 h-6">
                                            <img src={employee.imageURL} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </td>
                                <td>{employee.name} <br/> {employee.mobile}</td>
                                <td>{employee.email}</td>
                                <td>{employee.plan}</td>
                                <td>{employee.role}</td>
                                <td>{employee.status}</td>
                               


                            </tr>

                        </tbody>

                    )
                }

            </table>
        </div>
    );
};

export default AllEmployee;