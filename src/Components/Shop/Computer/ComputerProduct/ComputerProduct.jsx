import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ComputerProduct = ({product}) => {
    // console.log(product)
    const {_id, images, name, rating, current_price, before_price, discount_percentage}=product;
    useEffect(()=>{
        AOS.init()
    }, [])
    return (
        <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        className='relative'>
        <div className="w-full h-full shadow-xl card card-compact bg-base-100">
          <figure className="imgDiv">
            <img
              src={images[0]}
              alt="Shoes"
            />
            <img
            className="img2"
              src={images[1]}
              alt="Shoes"
            />
          </figure>
            <p className='absolute top-5 px-3 font-bold text-white left-0 bg-[#FABC3F]'>-{discount_percentage}%</p>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p className="font-bold">Rating: {rating}</p>
            <div className="flex items-center gap-5">
              <h4 className="text-xl font-bold text-[#FABC3F]">${current_price}</h4>
              <h4 className="text-xl font-bold text-gray-500 line-through">${before_price}</h4>
            </div>
            
              <Link to={`/computerDetales/${_id}`}>
              <button className="w-full mt-3 Button">Vew Product</button>
              </Link>
          </div>
        </div>
      </div>
    );
};

export default ComputerProduct;