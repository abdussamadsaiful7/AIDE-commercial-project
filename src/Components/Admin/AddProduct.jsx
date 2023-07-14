import React, { useContext } from 'react';
import { AuthContext } from '../AuthProviders/AuthProviders';
import toast from 'react-hot-toast';

const AddProduct = () => {
    const { user } = useContext(AuthContext);

    // const notify = () => toast('Add a Product successfully');

    const handleAddProduct = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const weight = form.weight.value;
        const imageURL = form.imageURL.value;
        const newProduct = { name, price, quantity, weight, imageURL };

        console.log(newProduct);

        fetch('http://localhost:5050/products', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success('Add a Product successfully!')
                }
                form.reset();
            })
    }

    return (
        <div>
            <form onSubmit={handleAddProduct} className="form-control px-20 py-20 ">
                <h1 className='text-center font-extrabold text-3xl'>Add  Product</h1>

                {/* name, price section */}
                <div className='lg:flex items-center justify-center lg:space-x-8'>
                    <div>
                        <label className="label">
                            <span className="label-text ml-4">Product Name</span>
                        </label>
                        <label className="input">
                            <input type="text" placeholder="product Name" name="name" className="input input-bordered w-96 rounded-md" />
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
                <div className='ml-24 mr-[110px] mx-auto'>
                    <label className="label">
                        <span className="label-text ml-4">Weight</span>
                    </label>
                    <label className="input">
                        <input type="number" placeholder="weight" name="weight" className="input input-bordered w-full" />
                    </label>
                </div>

                <div className='text-center my-4'>
                    <input className="btn btn-wide" type="submit" value="Add Product" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;