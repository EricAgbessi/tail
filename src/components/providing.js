import React from "react";
import { AiOutlineShoppingCart, AiOutlineHome } from "react-icons/ai";
import { FaHandHolding, FaUserFriends } from "react-icons/fa";

export default function Providing() {
  return (
    <div className="flex flex-col justify-center items-center mt-20 w-full ">
      <div className=" align-middle w-1/4 text-center">
        <h1 className=" text-4xl mb-6 font-bold">What are providing</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
        </p>
      </div>
      <div className=" flex flex-row  w-full">
        <div
          style={{ height: "400px" }}
          className="w-1/4  m-10 flex flex-col items-center justify-around p-5 "
        >
          <div
            className=" text-white bg-black text-2xl flex flex-row justify-center items-center font-bold"
            style={{ width: "60px", height: "60px" }}
          >
            <AiOutlineShoppingCart />
          </div>

          <h1 className=" text-2xl font-bold">Buy Home</h1>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
          <button className="border-2 border-blue-600 text-blue-600 p-2 px-4 w-2/3">
            Learn More
          </button>
        </div>
        <div
          style={{ height: "400px" }}
          className="w-1/4 m-10 flex flex-col items-center justify-around p-5 shadow-2xl	"
        >
          <div
            className="flex flex-col justify-center items-center font-bold bg-blue-600 text-white"
            style={{ width: "60px", height: "60px" }}
          >
            <AiOutlineHome />
            <FaHandHolding />
          </div>

          <h1 className=" text-2xl font-bold">Rent a Home</h1>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
          <button className="border-2 bg-blue-600 border-blue-600 text-white  p-2 px-4 w-2/3">
            Learn More
          </button>
        </div>{" "}
        <div
          style={{ height: "400px" }}
          className="w-1/4 m-10 flex flex-col items-center justify-around p-5"
        >
          <div
            className=" text-white bg-black text-md flex flex-row justify-center items-center font-bold"
            style={{ width: "60px", height: "60px" }}
          >
            <FaUserFriends />
            <AiOutlineHome />
          </div>

          <h1 className=" text-2xl font-bold">Sell a Home</h1>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
          <button className="border-2 border-blue-600 text-blue-600 p-2 px-4 w-2/3">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
