import axios from "axios";
import React from "react";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
const ShowCard = ({ show }) => {
  // console.log(show)
  const { _id, Name, Image, Price, Quentity } = show;

  const handleDelete = () => {
    // console.log("kjhduiuu")
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://project-3-server-eta.vercel.app/orders/${_id}`).then((data) => {
          console.log(data.data);
          if (data.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });

        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });
      }
    });
  };
  return (
    <div className="flex items-center gap-10 text-left">
      <img className="w-[15%]" src={Image} alt="" />
      <h4 className="w-[50%] font-bold">{Name}</h4>
      <h4 className="w-[15%] text-xl font-bold">{Quentity}</h4>
      <h4 className="w-[10%] text-xl font-bold">${Price}</h4>
      <button onClick={() => handleDelete()} className="w-[10%]">
        <MdDelete className="text-2xl text-red-500" />
      </button>
    </div>
  );
};

export default ShowCard;
