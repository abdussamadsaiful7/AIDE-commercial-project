import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProviders/AuthProviders';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductCard = ({ product }) => {
    //console.log(product)
    const { _id, name, price, quantity, imageURL, weight } = product;
    const { user } = useContext(AuthContext);
    const [cartQuantity, setCartQuantity] = useState(1);

    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = (it) => {
        console.log(it);
        if (user && user.email) {
            const totalPrice = price * cartQuantity; // Calculate totalPrice
            const cartItem = {
                itemId: _id,
                name,
                imageURL,
                price,
                quantity: cartQuantity, // Use cartQuantity instead of quantity
                weight,
                email: user.email,
                totalPrice, // Include totalPrice in the cartItem object
            };
            // if (user && user.email) {
            //     const cartItem = { itemId: _id, name, imageURL, price, quantity, weight, email: user.email }
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

    const handleIncreaseQuantity = () => {
        setCartQuantity(prevQuantity => prevQuantity + 1);
        // Implement the logic to increase the quantity in the cart
    };

    const handleDecreaseQuantity = () => {
        if (cartQuantity > 0) {
            setCartQuantity(prevQuantity => prevQuantity - 1);
            // Implement the logic to decrease the quantity in the cart
        }
    };

    const totalPrice = price * cartQuantity;


    return (
        <div>
            <div className='shadow-lg p-2 rounded'>
                <img className='w-60 h-60' src={imageURL} alt="" />
                <h1>Product Name: {name}</h1>
                <p>Weight: {weight} liter/kg</p>
                <p>Quantity: {quantity} </p>
                <p className='text-blue-500'>Price: ${price}</p>
                {/* <button onClick={() => handleAddToCart(product)} className='hover:bg-blue-500 hover:text-white rounded border border-1 border-blue-500 text-blue-500 w-full'>
                    Add to Cart</button> */}

                <div className='flex justify-between items-center mt-2'>
                    <button onClick={handleDecreaseQuantity} className='hover:bg-blue-500 hover:text-white rounded text-2xl px-2 text-blue-500'>
                        -
                    </button>
                    <span className='text-blue-500'>{cartQuantity} x ${price} = ${totalPrice}</span>
                    <button onClick={handleIncreaseQuantity} className='hover:bg-blue-500 hover:text-white rounded text-2xl px-2 text-blue-500'>
                        +
                    </button>
                </div>
                <button onClick={() => handleAddToCart(product)} className='hover:bg-blue-500 hover:text-white rounded border border-1 border-blue-500 text-blue-500 w-full'>
                    Add to Cart</button>
                {/* )
          //      } */}
            </div>
        </div>
    );
};

export default ProductCard;