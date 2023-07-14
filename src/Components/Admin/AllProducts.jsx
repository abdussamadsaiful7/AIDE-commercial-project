import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const AllProducts = () => {
    const loadProducts = useLoaderData();
    const [products, setProducts] = useState(loadProducts);
    const [search, setSearch] = useState('');
    console.log(products)
    return (
        <div className='mx-20'>
            <div className="overflow-x-auto md:mx-20">
                <h1 className='text-2xl mt-4 font-extrabold text-center text-white'>ALL PRODUCTS</h1>
                <div className='text-center'>
                    <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search..." className=" input input-bordered input-primary w-full max-w-xs" />
                </div>
                <div className='flex items-center justify-between mt-5 px-3'>
                    <div className='space-x-4'>
                        <button className='border border-1 border-blue-500 p-1 rounded text-slate-500 hover:bg-blue-500 hover:text-white'>PDF</button>
                        <button className='border border-1 border-blue-500 p-1 rounded text-slate-500 hover:bg-blue-500 hover:text-white'>SHOW/HIDE COLUM</button>
                    </div>
                   <Link to='/dashBoard/addProduct'> <button className='border border-1 border-blue-500 p-1 rounded text-slate-500 hover:bg-blue-500 hover:text-white'>+ ADD NEW PRODUCT</button></Link>
                </div>
                <table className="table w-full my-6 border">
                    <thead>
                        <tr>
                            <th>IMAGE</th>
                            <th>NAME</th>
                            <th>WIGHT</th>
                            <th>PRICE</th>
                        </tr>
                    </thead>
                    {
                        products.filter((item) => {
                            return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
                        }).map(product =>

                            <tbody product={product} key={product._id} >
                                <tr className='my-4' data-aos="flip-up">
                                    <td>

                                        <div className="avatar">
                                            <div className=" lg:w-14 lg:h-14 w-6 h-6">
                                                <img src={product.imageURL} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.quantity} liter/kg</td>
                                    <td>${product.price}</td>

                                    {/* <td>
                                        {
                                            user && <Link onClick={notify} to={`/allToys/${toy._id}`}>
                                                <img className='md:w-6 md:h-6 w-1 h-1' src={details} alt="" />
                                            </Link>
                                        }
                                        {
                                            !user && <Link onClick={notify} to={`/allToys/${toy._id}`}>
                                                <img className='md:w-6 md:h-6 w-1 h-1' src={details} alt="" />
                                            </Link>
                                        }
                                    </td>
                                    <td className='md:hidden'>
                                        {
                                            user && <Link onClick={notify} to={`/allToys/${toy._id}`}>
                                                <button>Details</button>
                                            </Link>
                                        }
                                        {
                                            !user && <Link onClick={notify} to={`/allToys/${toy._id}`}>
                                                <button>Details</button>
                                            </Link>
                                        }
                                    </td> */}
                                </tr>
                                <tr />
                            </tbody>

                        )
                    }

                </table>
            </div>
        </div>
    );
};

export default AllProducts;