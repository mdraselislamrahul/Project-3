import React from "react";
import img1 from "./Image/2_4 (1).webp"
import img2 from "./Image/2_5.webp"
const NewArryval = () => {
  return (
    <div className="gap-5 px-5 mt-10 md:flex">
      <div className="relative mt-5">
        <img className="h-[250px] w-full" src={img1} alt="" />
        <div className="absolute text-white top-16 left-7">
            <h1 className="font-bold text-[22px]">Sale 20% Off <br /> Satechi Aluminum Multy-Port Adapter <br /> 4k HDMI (30Hz)</h1>
            <p className="mt-5 font-bold">Lorem ipsum dolor sit amet consectetur,</p>
        </div>
      </div>
      <div className="relative mt-5">
        <img className="h-[250px] w-full" src={img2} alt="" />
        <div className="absolute text-white top-16 left-7">
            <h1 className="font-bold text-[22px]">New Arrvals <br /> Great Performance Costs Less <br /> Then You Think</h1>
            <p className="mt-5 font-bold">Lorem ipsum dolor sit amet consectetur,</p>
        </div>
      </div>


      
    </div>
  );
};

export default NewArryval;
