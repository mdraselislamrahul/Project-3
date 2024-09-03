import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import axios from 'axios';

const HomeProduct = () => {
  const [allProduct, setAllProduct] = useState([]);
  useEffect(() => {

    // axios.get('https://project-3-server-eta.vercel.app/products')
    axios.get('https://project-3-server-eta.vercel.app/products')
    .then(data=>{
      setAllProduct(data.data)
    })
  }, []);
  return (
    <div className="px-5 mt-10">
      <h1 className="py-5 text-4xl font-bold border-2 border-b-orange-400">Top Deals Of The Day</h1>
      <div className="items-center w-full h-full gap-5 mt-10 md:flex">
        {allProduct.slice(0, 2).map((product) => (
          <Product product={product} key={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default HomeProduct;
