import React from "react";
import img from "./Image/banner_2_3.webp";

const Banner3 = () => {
  return (
    <div className="relative">
      <img className="w-full" src={img} alt="" />
      <div className="absolute ml-10 top-28 w-96 left-1">
        <h1
          data-aos="fade-down-right"
          data-aos-duration="1000"
          className="mt-5 text-4xl font-bold"
        >
          Samsung Wireless Speakers Multi-Room Audio
        </h1>
        <p data-aos="fade-down-right" data-aos-duration="2000" className="mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          cupiditate vero corrupti quasi, illum sint voluptatum error non
          suscipit ea reiciendis ut odit{" "}
        </p>
        <button className="mt-5 Button">Get It Now</button>
      </div>
    </div>
  );
};

export default Banner3;
