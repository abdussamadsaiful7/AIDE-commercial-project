import React, { useContext } from 'react';
import { AuthContext } from '../AuthProviders/AuthProviders';

const AddProduct = () => {
    const { user } = useContext(AuthContext);

    const handleAddToy = (event) => {
        event.preventDefault();

        const form = event.target;
        const productName = form.productName.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const imageURL = form.imageURL.value;
        const newProduct = { productName, price, quantity, imageURL};

        console.log(newProduct);
    }

        return (
            <div>
                <form onSubmit={handleAddToy} className="form-control px-20 py-20 ">
                    <h1 className='text-center font-extrabold text-3xl'>Add  Product</h1>

                    {/* name, price section */}
                    <div className='lg:flex items-center justify-center lg:space-x-8'>
                        <div>
                            <label className="label">
                                <span className="label-text ml-4">Product Name</span>
                            </label>
                            <label className="input">
                                <input type="text" placeholder="Toy Name" name="productName" className="input input-bordered w-96 rounded-md" />
                            </label>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text ml-4">Price</span>
                            </label>
                            <label className="input">
                                <input type="number" placeholder="$Price" name="price" className="input 
                            input-bordered w-96 rounded-md" />
                            </label>
                        </div>
                    </div>

                    {/* seller name, seller email section */}
                    <div className='lg:flex items-center justify-center lg:space-x-8'>
                        <div>
                            <label className="label">
                                <span className="label-text ml-4">Quantity</span>
                            </label>
                            <label className="input">
                                <input type="number" placeholder="quantity" name="quantity" className="input input-bordered w-96 rounded-md" />
                            </label>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text ml-4">ImageURL</span>
                            </label>
                            <label className="input">
                                <input type="text" placeholder="URL" name="imageURL" className="input input-bordered w-96" />
                            </label>
                        </div>
                    </div>

                    <div className='text-center my-4'>
                        <input className="btn btn-wide" type="submit" value="Add Product" />
                    </div>
                </form>
            </div>
        );
    };

    export default AddProduct;