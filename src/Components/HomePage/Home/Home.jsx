import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import banner1 from '../../../assets/pic1.jpg';
import banner2 from '../../../assets/banner2.jpg';
import banner3 from '../../../assets/banner3.jpg';
import banner4 from '../../../assets/banner4.jpg';
import banner5 from '../../../assets/banner5.png';
import banner6 from '../../../assets/banner6.png';
import banner7 from '../../../assets/banner7.jpg';
import Trending from '../Trending/Trending';

const Home = () => {
    return (
        <div>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide><img className='h-[471px] w-full' src={banner7} alt="photo" /></SwiperSlide>
                <SwiperSlide><img className='h-[471px] w-full' src={banner1} alt="photo" /></SwiperSlide>
                <SwiperSlide><img className='h-[471px] w-full' src={banner2} alt="photo" /></SwiperSlide>
                <SwiperSlide><img className='h-[471px] w-full' src={banner3} alt="photo" /></SwiperSlide>
                <SwiperSlide><img className='h-[471px] w-full' src={banner4} alt="photo" /></SwiperSlide>
                <SwiperSlide><img className='h-[471px] w-full' src={banner5} alt="photo" /></SwiperSlide>
                <SwiperSlide><img className='h-[471px] w-full' src={banner6} alt="photo" /></SwiperSlide>
            </Swiper>
            <Trending/>
        </div>
    );
};

export default Home;