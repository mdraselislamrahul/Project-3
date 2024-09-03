import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const AllProduct = ({ product }) => {
  // console.log(product);
  const { _id, name, images, price, rating } = product;
  return (
    <div
     data-aos="zoom-in-down"
    data-aos-duration="2000"
    >
      <div className="w-full h-full shadow-xl card card-compact bg-base-100">
        <figure className="imgDiv">
          <img src={images[0]} />
          <img className="img2" src={images[1]} />
        </figure>
        <div className="card-body">
          <h2 className="card-title lg:text-xl md:text-lg">{name}</h2>
          <div className="flex">
            <p className="text-xl font-bold text-gray-500">${price}</p>
            <p className="text-xl font-bold text-gray-500">Rating: {rating}</p>
          </div>
          <div className="mt-5">
          <Link to={`/product/${_id}`}>
            <button className="w-full Button">Vew Product</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
