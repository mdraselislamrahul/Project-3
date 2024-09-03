import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Aos from "aos";

const Product = ({ product }) => {
  const { _id, images, name, rating, price, list } = product;

  const [elapsedTime, setElapsedTime] = useState(0);
  useEffect(()=>{
    Aos.init()
  } ,[])

  useEffect(() => {
    
    // Check if there's already a start time in localStorage
    let startTime = localStorage.getItem('startTime');
    if (!startTime) {
      // If not, set the current time as the start time
      startTime = Date.now();
      localStorage.setItem('startTime', startTime);
    }

    const updateElapsedTime = () => {
      const now = Date.now();
      const timeElapsed = Math.floor((now - startTime) / 1000);
      setElapsedTime(timeElapsed);
    };

    // Update the elapsed time every second
    const interval = setInterval(updateElapsedTime, 1000);

    return () => clearInterval(interval);
  }, []);

  

  const formatTime = () => {
    const days = Math.floor(elapsedTime / (24 * 60 * 60));
    const hours = Math.floor((elapsedTime % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((elapsedTime % (60 * 60)) / 60);
    const seconds = elapsedTime % 60;

    return `${days} Day ${hours} Hrt ${minutes} Min ${seconds} Sec`;
  };



  return (
    <div
    data-aos="zoom-in-down"
    data-aos-duration="2000"
    className="md:flex">
      
      <div className="md:w-1/2 imgDiv">
        <img className="img1" src={images[0]} alt="" />
        <img className="img2" src={images[1]} alt="" />
      </div>
      <div className="mt-5 md:w-1/2">
        <h1 className="text-lg font-bold">{name}</h1>
        <h1 className="mt-5 text-lg font-bold text-orange-400">Rating: {rating}</h1>
        <span className="mt-2 text-lg font-bold text-red-600">$ {price}</span>
        {/* <span className="mt-2 ml-5 text-lg font-bold text-gray-400 line-through">$ 269.99</span> */}
        <ul className="mt-5 ml-5 font-bold text-gray-500 list-disc">
            <li>{list[0]}</li>
            <li>{list[1]}</li>
            <li>{list[2]}</li>
            <li>{list[3]}</li>
        </ul>

        <p className="mt-5 text-xl font-bold">{formatTime()}</p>


       <Link to={`/product/${_id}`}>
       <button to="/product" className="w-full mt-8 Button">Vew Product</button>
       </Link>
      </div>
    </div>
  );
};

export default Product;
