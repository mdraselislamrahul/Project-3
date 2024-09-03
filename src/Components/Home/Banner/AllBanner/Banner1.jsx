import React, { useEffect } from 'react';
import img from "./Image/banner_2_1.webp"
import Aos from 'aos';
import 'aos/dist/aos.css';

const Banner1 = () => {
    useEffect(()=>{
        Aos.init()
    } ,[])
    return (
        <div className='relative'>
            <img className='w-full' src={img} alt="" />
            <div
            data-aos="fade-down-right"
            data-aos-duration="1000"
            className='absolute ml-10 top-28 w-96 left-1'>
                <h1 className='mt-5 text-4xl font-bold'>Samsung Wireless Speakers Multi-Room Audio</h1>
                <p 
                data-aos="fade-down-right"
            data-aos-duration="2000"
                className='mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae cupiditate vero corrupti quasi, illum sint voluptatum error non suscipit ea reiciendis ut odit </p>
                <button className='mt-5 Button'>Get It Now</button>
            </div>
        </div>
    );
};

export default Banner1;