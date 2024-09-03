import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import {  Autoplay, Navigation } from "swiper/modules";
import axios from "axios";
const HomeSlider = () => {
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    axios.get("https://project-3-server-eta.vercel.app/products").then((data) => {
      setSlider(data.data);
    });
  }, []);
  return (
    <div className="px-5 mt-10">
      <h1 className="mb-5 text-3xl font-bold border-2 border-b-[#FABC3F] py-5">Onsale Products</h1>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {slider.map((e) => (
          <SwiperSlide key={e._id}>
            <img src={e.images[0]} alt="" />
            <h1 className="font-bold text-[15px]">{e.name}</h1>
            <div className="flex gap-5 mt-5">
              <h1 className="font-bold text-[15px] text-[#FABC3F]">
                Rating: {e.rating}
              </h1>
              <h1 className="font-bold text-[15px] text-[#FABC3F]">
                ${e.price}
              </h1>
            </div>
            <button className="w-full mt-5 Button">
                <Link to={`/product/${e._id}`}>Vew Product </Link>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
