import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import HomeProDetale from "./Components/Home/HomeProduct/HomeProDetale/HomeProDetale.jsx";
import AddCard from "./Components/AddCard/AddCard.jsx";
import Shop from "./Components/Shop/Shop.jsx";
import Clothing from "./Components/Shop/Clothing/Clothing.jsx";
import Compurer from "./Components/Shop/Computer/Compurer.jsx";
import ProductDetales from "./Components/ProductDetales/ProductDetales.jsx";
import ComputerDetales from "./Components/ComputerDetales/ComputerDetales.jsx";
import Consumer from "./Components/Shop/Consumer/Consumer.jsx";
import ConsumerDetales from "./Components/ConsumerDetales/ConsumerDetales.jsx";
import Decor from "./Components/Shop/Decor/Decor.jsx";
import DecorDetales from "./Components/DecorDetales/DecorDetales.jsx";
import Furniture from "./Components/Shop/Furniture/Furniture.jsx";
import FurnitureDetales from "./Components/FurnitureDetales/FurnitureDetales.jsx";
import Kitchen from "./Components/Shop/Kitchen/Kitchen.jsx";
import KitchenDetales from "./Components/KitchenDetales/KitchenDetales.jsx";
import Phone from "./Components/Shop/Phone/Phone.jsx";
import PhoneDetales from "./Components/PhoneDetales/PhoneDetales.jsx";
import Page from "./Components/Page/Page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/product/:id",
        loader: ({ params }) => {
          return fetch(`https://project-3-server-eta.vercel.app/products/${params.id}`);
        },
        element: <HomeProDetale></HomeProDetale>,
      },
      {
        path: "/order",
        element: <AddCard></AddCard>,
        loader: () => {
          return fetch("https://project-3-server-eta.vercel.app/orders");
        },
      },
      {
        path: "/page",
        element: <Page></Page>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
        children: [
          {
            path: "/shop",
            element: <Clothing></Clothing>,
            loader: () => {
              return fetch("https://project-3-server-eta.vercel.app/clothing");
            },
          },
          {
            path: "/shop/computer",
            element: <Compurer></Compurer>,
            loader: () => {
              return fetch("https://project-3-server-eta.vercel.app/computers");
            },
          },
          {
            path: "/shop/consumer",
            element: <Consumer></Consumer>,
            loader: () => {
              return fetch("https://project-3-server-eta.vercel.app/consumer");
            },
          },
          {
            path: "/shop/decor",
            element: <Decor></Decor>,
            loader: () => {
              return fetch("https://project-3-server-eta.vercel.app/decor");
            },
          },
          {
            path: "/shop/furniture",
            element: <Furniture></Furniture>,
            loader: () => {
              return fetch("https://project-3-server-eta.vercel.app/furniture");
            },
          },
          {
            path: "/shop/kitchen",
            element: <Kitchen></Kitchen>,
            loader: () => {
              return fetch("https://project-3-server-eta.vercel.app/kitchen");
            },
          },
          {
            path: "/shop/phone",
            element: <Phone></Phone>,
            loader: () => {
              return fetch("https://project-3-server-eta.vercel.app/phone");
            },
          },
        ],
      },
      {
        path: "/productDetales/:id",
        element: <ProductDetales></ProductDetales>,
        loader: ({ params }) => {
          return fetch(`https://project-3-server-eta.vercel.app/clothing/${params.id}`);
        },
      },
      {
        path: "/computerDetales/:id",
        element: <ComputerDetales></ComputerDetales>,
        loader: ({ params }) => {
          return fetch(`https://project-3-server-eta.vercel.app/computers/${params.id}`);
        },
      },
      {
        path: "/consumerDetales/:id",
        element: <ConsumerDetales></ConsumerDetales>,
        loader: ({ params }) => {
          return fetch(`https://project-3-server-eta.vercel.app/consumer/${params.id}`);
        },
      },
      {
        path: "/decorDetailes/:id",
        element: <DecorDetales></DecorDetales>,
        loader: ({ params }) => {
          return fetch(`https://project-3-server-eta.vercel.app/decor/${params.id}`);
        },
      },
      {
        path: "/furnitureDetailes/:id",
        element: <FurnitureDetales></FurnitureDetales>,
        loader: ({ params }) => {
          return fetch(`https://project-3-server-eta.vercel.app/furniture/${params.id}`);
        },
      },
      {
        path: "/kitchenDetailes/:id",
        element: <KitchenDetales></KitchenDetales>,
        loader: ({ params }) => {
          return fetch(`https://project-3-server-eta.vercel.app/kitchen/${params.id}`);
        },
      },
      {
        path: "/phoneDetailes/:id",
        element: <PhoneDetales></PhoneDetales>,
        loader: ({ params }) => {
          return fetch(`https://project-3-server-eta.vercel.app/phone/${params.id}`);
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
