import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdOutlineZoomInMap } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import './styles.css';

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

const KitchenDetales = () => {
    const prodect = useLoaderData();
    const {
      images,
      name,
      rating,
      current_price,
      before_price,
      discount_percentage,
      discount_price,
      availability,
      vendor,
      categories,
      tags,
      list,
    } = prodect;
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
    const [count, setCount] = useState(1);
    const [pricecount, setPriceCount] = useState(current_price);
  
    const handleIncrement = () => {
      setCount((prevCount) => prevCount + 1);
  
      setPriceCount((priceprevCount) => priceprevCount + current_price);
    };
  
    const handleDecrement = () => {
      setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
  
      setPriceCount((prevCount) =>
        prevCount > current_price ? prevCount - current_price : prevCount
      );
    };
  
    const handleAddCard = () => {
      // console.log("djiojdhh")
      const Name = name;
      const Image = images[0];
      const Price = pricecount;
      const Quentity = count;
      const alldatas = { Name, Image, Price, Quentity };
      console.log(alldatas);
  
      axios.post("https://project-3-server-eta.vercel.app/orders", alldatas).then((data) => {
        console.log(data.data);
        if (data.data.insertedId) {
          Swal.fire({
            title: "Product Added",
            text: "Your Product has been Added.",
            icon: "success",
          });
        }
      });
    };
    useEffect(() => {
      AOS.init();
    }, []);
    return (
        <div>
        <div className="mt-10 md:flex">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="md:w-1/2"
          >
            <button
              className="ml-10"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              <MdOutlineZoomInMap className="text-3xl" />
            </button>
            <dialog
              id="my_modal_5"
              className="h-full max-w-5xl mx-auto modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <Swiper
                  // style={{
                  //   '--swiper-navigation-color': '#fff',
                  //   '--swiper-pagination-color': '#fff',
                  // }}
                  spaceBetween={10}
                  navigation={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : null}
                  modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                  className="mySwiper2"
                >
                  <SwiperSlide>
                    <img src={images[0]} alt="Comming soon" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={images[1]} alt="Comming soon" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={images[2]} alt="Comming soon" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={images[3]} alt="Comming soon" />
                  </SwiperSlide>
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src={images[0]} alt="Comming soon" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={images[1]} alt="Comming soon" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={images[2]} alt="Comming soon" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={images[3]} alt="Comming soon" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={images[4]} alt="Comming soon" />
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
  
            <img src={images[0]} alt="" />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="mt-5 md:w-1/2"
          >
            <h1 className="text-3xl font-bold">{name}</h1>
            <h3 className="mt-3 mb-5 text-xl font-bold">Rating: {rating}</h3>
            <hr />
            <div className="flex gap-5 mt-5">
              <h1 className="text-4xl font-bold">${current_price}</h1>
              <h1 className="text-3xl font-bold text-gray-500 line-through">
                ${before_price}
              </h1>
            </div>
            <p className="mt-5 text-lg font-bold text-[#FABC3F]">
              Discount: ${discount_price} ({discount_percentage}%)
            </p>
            <ul className="mt-5 ml-5 text-lg font-bold list-disc">
              <li>{list[0]}</li>
              <li>{list[1]}</li>
              <li>{list[2]}</li>
            </ul>
            <h2 className="mt-8 text-2xl font-bold text-red-600">
              Total Proce: ${pricecount}
            </h2>
            <div className="flex mt-10">
              <div className="flex gap-5 px-5 border-4 border-gray-200">
                <button onClick={handleDecrement}>
                  <FaMinus className="text-2xl font-bold" />
                </button>
                <p className="mt-2 text-2xl font-bold">{count}</p>
                <button onClick={handleIncrement}>
                  <FaPlus className="text-2xl font-bold" />
                </button>
              </div>
              <div className="w-full ml-10 card-actions">
                <button onClick={() => handleAddCard()} className="w-full Button">
                  Add To Card
                </button>
              </div>
            </div>
            <div className="mt-10 text-xl font-bold">
              <p>
                Availability:{" "}
                <span className="ml-5 text-green-500">{availability}</span>
              </p>
              <p>
                Vendor: <span className="ml-14">{vendor}</span>
              </p>
              <p>
                Categories:{" "}
                <span className="ml-6">
                  {categories[0]}, {categories[1]}
                </span>
              </p>
              <p>
                Tags:{" "}
                <span className="ml-20">
                  {tags[0]}, {tags[1]}, {tags[2]}, {tags[3]}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default KitchenDetales;