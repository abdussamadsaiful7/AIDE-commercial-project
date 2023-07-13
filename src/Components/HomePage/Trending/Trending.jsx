import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";

const Trending = () => {
    const [products, setProducts] = useState([]);
    const [seeAll, setSeeAll] = useState(false);
   
    
    const seeAllHandler = (stop) => {
        setSeeAll(true);
        
    }

    const seeLessHandler = (start) => {
        setSeeAll(false);
    }

    useEffect(() => {
        fetch("product.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    //onClick="document.getElementById('marquee1').stop()
    //onClick="document.getElementById('marquee1').start()

    return (
        <div className='pt-10 px-10'>

            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-bold'>TRENDING NOW</h1>
                {
                    !seeAll && (<Link><a onClick={seeAllHandler}  >See all</a></Link>)
                }
                {
                    seeAll && (<Link> <a onClick={seeLessHandler} >See less</a> </Link>)
                }
            </div>
            <Marquee>
                <div className='grid grid-cols-4 gap-4 pt-2'>
                    {
                        products.slice(0, seeAll ? 10 : 4).map(product => <ProductCard 
                            product={product} key={product.name} />)
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default Trending;