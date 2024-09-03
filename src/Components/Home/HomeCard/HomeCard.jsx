import Lottie from 'lottie-react';
import React, { useEffect } from 'react';
import card1 from "./Animation - 1724960870276.json"
import card2 from "./Animation - 1724959398942.json"
import card3 from "./Animation - 1724960224499.json"
import card4 from "./Animation - 1724960541266.json"
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeCard = () => {
    useEffect(()=>{
        AOS.init()
    } , [])
    return (
        <div className='grid max-w-3xl gap-10 mx-auto mt-20 md:grid-cols-2'>
            <div
            data-aos="zoom-in-down"
            data-aos-duration="2000"
            className='h-full bg-[#FABC3F] rounded-md py-7'>
                <Lottie animationData={card3}/>
                <h3 className='mt-10 ml-10 text-xl font-bold text-white '>Free Shipping</h3>
                <p className='ml-10 font-bold text-white'>Free Shipping On All Order</p>
            </div>


            <div 
           data-aos="zoom-in-down"
            data-aos-duration="2000"
            className='bg-[#FABC3F] rounded-md'>
            <Lottie animationData={card2}/>
            <h3 className='ml-10 text-xl font-bold text-white'>Money Guarantee</h3>
            <p className='ml-10 font-bold text-white'>30 Day Money Back Guarantee</p>
            </div>


            <div 
            data-aos="zoom-in-down"
            data-aos-duration="2000"
            className='bg-[#FABC3F] rounded-md py-7'>
            <Lottie animationData={card1}/>
            <h3 className='mt-5 ml-10 text-xl font-bold text-white'>Online Support 24/7</h3>
            <p className='ml-10 font-bold text-white'>Technical Support 24/7</p>
            </div>

            
            <div 
            data-aos="zoom-in-down"
            data-aos-duration="2000"
            className='bg-[#FABC3F] rounded-md'>
            <Lottie animationData={card4}/>
            <h3 className='text-xl font-bold text-white mt-14 ml-14'>Member Discount</h3>
            <p className='ml-10 font-bold text-white'>Upto 40% Discount All Products</p>
            </div>
        </div>
    );
};

export default HomeCard;