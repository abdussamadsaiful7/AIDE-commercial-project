import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProviders/AuthProviders';
import { toast } from 'react-hot-toast';

const Order = () => {
    const { user } = useContext(AuthContext);
    const [myOrder, setMyOrder] = useState([]);
    const { _id, name, price, quantity, imageURL, weight } = myOrder;

    const url = `http://localhost:5050/order?email=${user?.email}&${myOrder?.price}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrder(data))
    }, [])

    const handleDelete = id => {
        const process = confirm("Are you sure?")
        if (process) {
            fetch(`http://localhost:5050/order/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.error('Delete successfully!')
                        const remaining = myOrder.filter(item => item._id !== id)
                        setMyOrder(remaining);
                    }
                })
        }
    }

    return (
        <div className='md:px-10'>
            <h1 className='text-center font-serif text-3xl font-semibold pt-8'>ALL ORDERS</h1>
            <table className="table w-full my-6 border">
                {
                    myOrder.map(order =>

                        <tbody order={order} key={order._id} >
                            <tr className='my-4' data-aos="flip-up">
                                <td>

                                    <div className="avatar">
                                        <div className=" lg:w-14 lg:h-14 w-6 h-6">
                                            <img src={order.imageURL} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </td>
                                <td>{order.name}</td>
                                <td>{order.weight}</td>
                                <td>{order.quantity}</td>
                                <td>{order.price}</td>
                                <td>

                                    <label>
                                        <button onClick={() => handleDelete(order._id)} className="btn btn-circle btn-outline btn-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </label>

                                </td>
                            </tr>

                        </tbody>

                    )
                }

            </table>
        </div>
    );
};

export default Order;