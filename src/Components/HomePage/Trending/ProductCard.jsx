import React from 'react';

const ProductCard = ({product}) => {
    //console.log(product)
    const {name, price, quantity, imageURL, weight} = product;
    return (
        <div>
            <div className='shadow-lg p-2 rounded'>
                <img className='w-60 h-60' src={imageURL} alt="" />
                <h1>Product Name: {name}</h1>
                <p>Weight: {weight} liter/kg</p>
                <p className='text-blue-500'>Price: ${price}</p>
                <button className='hover:bg-blue-500 hover:text-white rounded border border-1 border-blue-500 text-blue-500 w-full'>
                    Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;