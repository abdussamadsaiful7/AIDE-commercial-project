import React, { useContext, useRef, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';
import ReactToPrint from 'react-to-print';


const AllProducts = () => {
    const loadProducts = useLoaderData();
    const [products, setProducts] = useState(loadProducts);
    const [search, setSearch] = useState('');
    console.log(products);

    const ref = useRef();

    return (
        <div className='md:mx-20 mx-10'>
            <div className="overflow-x-auto md:mx-20">
                <h1 className='text-2xl mt-4 font-extrabold text-center text-white'>ALL PRODUCTS</h1>
                <div className='text-center'>
                    <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search..." className=" input input-bordered input-primary w-full max-w-xs" />
                </div>
                <div className='flex items-center justify-between mt-5 px-3'>
                    <div className='space-x-4'>
                        <ReactToPrint trigger={() => <button className='border border-1 border-blue-500 p-1 rounded text-slate-500 hover:bg-blue-500 hover:text-white'>PDF</button>} content={() => ref.current} />
                        <button className='border border-1 border-blue-500 p-1 rounded text-slate-500 hover:bg-blue-500 hover:text-white'>SHOW/HIDE COLUM</button>
                    </div>
                    <Link to='/dashBoard/addProduct'> <button className=' hidden md:block border border-1 border-blue-500 p-1 rounded text-slate-500 hover:bg-blue-500 hover:text-white'>+ ADD NEW PRODUCT</button></Link>
                </div>


                <div className='print'>
                    <div className='sss'>
                        <div ref={ref} className='a'>
                            <table className="table w-full my-6 border">
                                <thead>
                                    <tr>
                                        <th>IMAGE</th>
                                        <th>NAME</th>
                                        <th>WIGHT</th>
                                        <th>QTY</th>
                                        <th>PRICE</th>
                                    </tr>
                                </thead>
                                {
                                    products.filter((item) => {
                                        return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
                                    }).map(product =>

                                        <tbody product={product} key={product._id} className='cursor-pointer 
                                        hover:scale-[0.95] duration-300 hover:bg-blue-500 hover:text-white' >
                                            <tr className='my-4'>
                                                <td>

                                                    <div className="avatar">
                                                        <div className=" lg:w-14 lg:h-14 w-6 h-6">
                                                            <img src={product.imageURL} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>

                                                </td>
                                                <td>{product.name}</td>
                                                <td>{product.weight} liter/kg</td>
                                                <td>{product.quantity}</td>
                                                <td>${product.price}</td>


                                            </tr>

                                        </tbody>

                                    )
                                }

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;