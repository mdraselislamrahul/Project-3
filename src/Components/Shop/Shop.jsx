import React from "react";
import HomeSlider from "../Home/HomeSlider/HomeSlider";
import { NavLink } from "react-router-dom";
import { Outlet } from 'react-router-dom'
import "./style.css"

const Shop = () => {
  return (
    <div className="px-5">
      <section className="mt-10">
        <HomeSlider></HomeSlider>
      </section>
      <section className="mt-20">
        <div className="flex ">
          <div className="navber w-[30%]">
            <h1 className="text-2xl font-bold">Product Categories</h1>
            <ul className="mt-10">
              <li>
                <NavLink to="/shop"
                 style={({ isActive, }) => {
                    return {
                      // color: isActive ? "#FABC3F" : "white",
                    };
                  }}
                >Clothing & Apparel</NavLink>
              </li>
              <li>
                <NavLink to="/shop/computer"
                style={({ isActive, }) => {
                    return {
                      color: isActive ? "#FABC3F" : "",
                    };
                  }}
                >Computers & Technologies</NavLink>
              </li>
              <li>
                <NavLink to="/shop/consumer"
                style={({ isActive, }) => {
                    return {
                      color: isActive ? "#FABC3F" : "",
                    };
                  }}
                >Consumer Electrics </NavLink>
              </li>
              <li>
                <NavLink to="/shop/decor"
                style={({ isActive, }) => {
                    return {
                      color: isActive ? "#FABC3F" : "",
                    };
                  }}
                >Decor & Furniture</NavLink>
              </li>
              <li>
                <NavLink to="/shop/furniture"
                style={({ isActive, }) => {
                    return {
                      color: isActive ? "#FABC3F" : "",
                    };
                  }}
                >Furniture & Acessories </NavLink>
              </li>
              <li>
                <NavLink to="/shop/kitchen"
                style={({ isActive, }) => {
                    return {
                      color: isActive ? "#FABC3F" : "",
                    };
                  }}
                >Kitchen & Tableware </NavLink>
              </li>
              <li>
                <NavLink to="/shop/phone"
                style={({ isActive, }) => {
                    return {
                      color: isActive ? "#FABC3F" : "",
                    };
                  }}
                >Phones & Accessories </NavLink>
              </li>
            </ul>
          </div>
          <div className="w-[70%]">
          <Outlet></Outlet>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
