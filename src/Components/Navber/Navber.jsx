import React, { useEffect, useState } from "react";
import { HiOutlineBars4 } from "react-icons/hi2";
import img from "./Image/logo.png";
import { RxCross2 } from "react-icons/rx";
import "./Style.css"
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
const Navber = () => {
    const [navManu, setNavManu]=useState(false)
    const [product, setProduct]=useState([])
    useEffect(()=>{
      axios.get("https://project-3-server-eta.vercel.app/orders")
      .then(data=>{
        setProduct(data.data)
      })
    } ,[])
    const handleNavber=()=>{
        setNavManu(!navManu)
    }
  return (
    <div className="flex items-center justify-between px-10 mt-5 maindiv">
      <div>
        <button onClick={handleNavber}>
            {
               navManu? <RxCross2 className="text-4xl"/>:<HiOutlineBars4 className="text-4xl" />
            }
        </button>
        <div className={`manu ${navManu? "manu2":""}`}>
            <ul>
                <li><NavLink to="/login"
                  style={({ isActive, }) => {
                    return {
                      color: isActive ? "red" : "white",
                    };
                  }}
                >Login/Register</NavLink></li>
                <li><NavLink to="/"
                style={({ isActive, }) => {
                    return {
                      color: isActive ? "red" : "white",
                    };
                  }}
                >Home</NavLink></li>
                <li><NavLink to="/shop"
                style={({ isActive, }) => {
                    return {
                      color: isActive ? "red" : "white",
                    };
                  }}
                >Shop</NavLink></li>
                <li><NavLink to="/page"
                style={({ isActive, }) => {
                    return {
                      color: isActive ? "red" : "white",
                    };
                  }}
                >Page</NavLink></li>
                <li><NavLink to="/blogk"
                style={({ isActive, }) => {
                    return {
                      color: isActive ? "red" : "white",
                    };
                  }}
                >Block</NavLink></li>
            </ul>
        </div>
      </div>
      <div>
        <img className="h-14" src={img} alt="" />
      </div>
      <div>
        <Link to="/order" className="ml-5">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="text-lg font-bold text-red-500 badge badge-sm indicator-item">{product.length}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navber;
