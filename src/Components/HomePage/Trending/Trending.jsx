import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import logo1 from '../../../assets/logo/logo1.png'
import logo2 from '../../../assets/logo/logo2.png'
import logo3 from '../../../assets/logo/logo3.png'
import logo4 from '../../../assets/logo/logo4.png'
import logo5 from '../../../assets/logo/logo5.png'
import logo6 from '../../../assets/logo/logo6.png'
import logo7 from '../../../assets/logo/logo7.png'
import logo8 from '../../../assets/logo/logo8.png'

const Trending = () => {
    const [products, setProducts] = useState([]);
    const [seeAll, setSeeAll] = useState(false);



    const seeAllHandler = () => {
        setSeeAll(true);
       
    }

    const seeLessHandler = () => {
        setSeeAll(false);
       
    }

    useEffect(() => {
        fetch('https://aide-task-server-weld.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])




    return (
        <div>
            <Marquee>
                <div className='grid grid-cols-8 gap-14 py-10'>
                    <img className='w-28 h-28' src={logo1} alt="logo" />
                    <img className='w-28 h-28' src={logo2} alt="logo" />
                    <img className='w-28 h-28' src={logo3} alt="logo" />
                    <img className='w-28 h-28' src={logo7} alt="logo" />
                    <img className='w-28 h-28' src={logo4} alt="logo" />
                    <img className='w-28 h-28' src={logo5} alt="logo" />
                    <img className='w-28 h-28' src={logo6} alt="logo" />
                    <img className='w-28 h-28' src={logo8} alt="logo" />
                </div>
            </Marquee>
            <div className='pt-10 px-14'>

                <div className='flex items-center justify-between'>
                    <h1 className='text-xl font-bold'>TRENDING NOW</h1>
                    {
                        !seeAll && (<Link><a onClick={seeAllHandler}  >See all</a></Link>)
                    }
                    {
                        seeAll && (<Link> <a onClick={seeLessHandler} >See less</a> </Link>)
                    }
                </div>

                <div className='grid sm:grid-cols-1 md:grid-cols-4 gap-4 pt-2'>
                    {
                        products.slice(0, seeAll ? 10000000 : 4).map(product => <ProductCard
                            product={product} key={product.name} />)
                    }
                </div>

            </div>
        </div>
    );
};

export default Trending;