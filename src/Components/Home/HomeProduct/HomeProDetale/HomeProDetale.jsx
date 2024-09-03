import React, { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { HiOutlinePlusSm } from "react-icons/hi";
import { FaMinus } from "react-icons/fa6";
import AllProduct from "./AllProduct/AllProduct";
import Aos from "aos";
import { MdOutlineZoomInMap } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import axios from "axios";
import Swal from "sweetalert2";

// Install Swiper modules
// SwiperCore.use([Navigation, Thumbs]);

const HomeProDetale = () => {
  const data = useLoaderData();
  // console.log(data)
  const { images, name, rating, price, list, detail } = data;

  const [elapsedTime, setElapsedTime] = useState(0);
  const [alldata, setAllData] = useState([]);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);



  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    axios.get("https://project-3-server-eta.vercel.app/products")
    .then(data=>{
      setAllData(data.data)
    })
    // fetch("https://project-3-server-eta.vercel.app/products")
    //   .then((response) => response.json())
    //   .then((json) => setAllData(json));
  }, []);

  useEffect(() => {
    // Check if there's already a start time in localStorage
    let startTime = localStorage.getItem("startTime");
    if (!startTime) {
      // If not, set the current time as the start time
      startTime = Date.now();
      localStorage.setItem("startTime", startTime);
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

  const [count, setCount] = useState(1);
  const [newprice, setNewPeice] = useState(price);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    setNewPeice((prevCount) => prevCount + price);
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
    setNewPeice((prevCount) =>
      prevCount > price ? prevCount - price : prevCount
    );
  };


  const handleAddCard=()=>{
    // console.log("djiojdhh")
    const Name=name;
    const Image=images[0];
    const Price=newprice;
    const Quentity=count;
    const alldatas={Name, Image, Price, Quentity,}
    console.log(alldatas)

    axios.post("https://project-3-server-eta.vercel.app/orders", alldatas)
    .then(data=>{
      console.log(data.data)
      if (data.data.insertedId) {
        Swal.fire({
          title: "Product Added",
          text: "Your Product has been Added.",
          icon: "success"
        });
      }
    })
  }

  return (
    <div className="px-5">
      <div className="px-5 md:flex">
        <div
          //   data-aos="zoom-in-down"
          //   data-aos-duration="2000"
          data-aos="fade-right"
          data-aos-duration="2000"
          className="md:w-1/2"
        >
          <img src={images[0]} alt="" />

          <div className="">
           
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              <MdOutlineZoomInMap className="text-3xl" />
            </button>
            <dialog
              id="my_modal_5"
              className="h-full max-w-4xl mx-auto modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                
              <Swiper
        // style={{
        //   '--swiper-navigation-color': '#fff',
        //   '--swiper-pagination-color': '#fff',
        // }}
        spaceBetween={10}
        navigation={true}
        thumbs={thumbsSwiper?{ swiper: thumbsSwiper }:null}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={images[0]} alt="Comming soon"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[1]} alt="Comming soon"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[2]} alt="Comming soon" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[3]} alt="Comming soon"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[4]}alt="Comming soon"/>
        </SwiperSlide>
        
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={images[0]} alt="Comming soon"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[1]} alt="Comming soon"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[2]} alt="Comming soon"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[3]}alt="Comming soon" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[4]} alt="Comming soon"/>
        </SwiperSlide>
        
      </Swiper>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>

            
          </div>
        </div>
        <div
          //   data-aos="zoom-in-down"
          //   data-aos-duration="2000"
          data-aos="fade-left"
          data-aos-duration="2000"
          className="relative md:w-1/2"
        >
          <h1 className="mt-10 mb-5 text-2xl font-bold">{name}</h1>
          <span className="text-lg font-bold text-orange-400 ">
            Rating: {rating}
          </span>
          <span className="ml-16 text-lg font-bold text-gray-600">
            15 sold in last 24 hours
          </span>
          <hr className="mt-10 mb-7" />
          <span className="text-4xl font-bold ">$ {newprice}</span>

          <ul className="mt-8 ml-5 font-bold text-gray-500 list-disc">
            <li>{list[0]}</li>
            <li>{list[1]}</li>
            <li>{list[2]}</li>
            <li>{list[3]}</li>
          </ul>
          <div className="absolute right-0 w-32 h-32 bg-orange-400 rounded-full lg:right-20 top-60">
            <p className="mt-12 text-xl font-bold text-center text-white ">
              $ {price}
            </p>
          </div>

          <p className="px-10 py-3 mt-5 text-xl italic font-bold text-center text-white bg-orange-400 rounded-md">
            {formatTime()}
          </p>

          <div className="flex mt-8">
            <div className="flex gap-5 px-5 border-4 border-gray-200">
              <button onClick={handleDecrement}>
                <FaMinus className="text-2xl font-bold" />
              </button>
              <p className="mt-2 text-2xl font-bold">{count}</p>
              <button onClick={handleIncrement}>
                <HiOutlinePlusSm className="text-4xl font-bold" />
              </button>
            </div>
            <div className="w-full ml-10 card-actions">
              <button onClick={()=>handleAddCard()} className="w-full Button">Add To Card</button>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-10 font-bold text-gray-400">{detail}</p>

      <div>
        <h1 className="py-3 mt-10 text-3xl font-bold border-2 border-b-orange-400">
          Related Products
        </h1>
        <div className="grid gap-5 mt-10 md:grid-cols-3">
          {alldata.map((product) => (
            <AllProduct product={product} key={product._id}></AllProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProDetale;
