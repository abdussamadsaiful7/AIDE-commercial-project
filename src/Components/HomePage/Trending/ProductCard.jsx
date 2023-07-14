import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProviders/AuthProviders';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductCard = ({ product }) => {
    //console.log(product)
    const { _id, name, price, quantity, imageURL, weight } = product;
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = (it) => {
        console.log(it);
        if (user && user.email) {
            const cartItem = { itemId: _id, name, imageURL, price, quantity, weight, email: user.email }
            fetch('http://localhost:5050/order', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Product added on the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'At first login, please!',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }


    return (
        <div>
            <div className='shadow-lg p-2 rounded'>
                <img className='w-60 h-60' src={imageURL} alt="" />
                <h1>Product Name: {name}</h1>
                <p>Weight: {weight} liter/kg</p>
                <p>Quantity: {quantity} </p>
                <p className='text-blue-500'>Price: ${price}</p>
                <button onClick={() => handleAddToCart(product)} className='hover:bg-blue-500 hover:text-white rounded border border-1 border-blue-500 text-blue-500 w-full'>
                    Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;