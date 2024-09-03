import React from 'react';
import img1 from "./Image/2_1.avif"
import img2 from "./Image/2_2.avif"
import img3 from "./Image/2_3.avif"

const Featured = () => {
    return (
        <div className='mt-10'>
            <div className='justify-between gap-5 px-3 md:flex'>
                <div className='relative w-full'>
                    <img className='w-full imgZoom' src={img1} alt="" />
                    <div className='absolute text-white top-10 left-6'>
                        <h3 className='text-xl font-bold'>Featured Products</h3>
                        <h5 className='text-2xl font-bold'>Big Sale Up To 40% Off</h5>
                        <p className='mt-5 font-bold'>Laptop Tablet & Accessories</p>
                    </div>
                </div>
                <div className='relative w-full'>
                    <img className='w-full imgZoom' src={img2} alt="" />
                    <div className='absolute text-white top-10 left-6'>
                        <h3 className='text-xl font-bold'>
                            Hot Deales Of The Week
                        </h3>
                        <h5 className='text-2xl font-bold'>Best Quality Of Music</h5>
                        <p className='mt-5 font-bold'>Free Shiping 60km</p>
                    </div>
                </div>
                <div className='relative w-full'>
                    <img className='w-full imgZoom' src={img3} alt="" />
                    <div className='absolute text-white top-10 left-6'>
                        <h3 className='text-xl font-bold'>Featured Products</h3>
                        <h5 className='text-2xl font-bold'>Big Sale Up To 40% Off</h5>
                        <p className='mt-5 font-bold'>Laptop Tablet & Accessories</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;