import React from "react";
import { useLoaderData } from "react-router-dom";
import ShowCard from "./ShowCard/ShowCard";

const AddCard = () => {
  const data = useLoaderData();
  // console.log(data)
  return (
    <div className="px-5 mt-20">
      <div className="flex gap-5 py-5 text-xl font-bold text-center border-4 border-b-orange-500">
        <h4 className="w-[15%]">Image</h4>
        <h4 className="w-[40%]">Name</h4>
        <h4 className="w-[15%]">Quentity</h4>
        <h4 className="w-[10%]">Price</h4>
        <h4 className="w-[10%]">Delete</h4>
      </div>
      <div className="mt-10">
        {data.map((show) => (
          <ShowCard show={show} key={show.id}></ShowCard>
        ))}
      </div>
    </div>
  );
};

export default AddCard;
