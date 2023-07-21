import React from "react";
import Select from "./Select";
import { AiOutlineSearch } from "react-icons/ai";

export default function () {
  return (
    <div className=" w-full shadow-md">
      <div className="flex flex-row rounded-tl-lg rounded-tr-lg w-1/3 bg-white">
        <div className="p-2 w-1/2 text-blue-400 font-bold">Nest</div>
        <div className="p-2 w-1/2 font-bold">Buy</div>
      </div>
      <div className="bg-white w-full flex flex-row h-22 rounded-lg rounded-tl-none">
        <div className="flex flex-col p-2 w-1/4">
          <p>Location</p>
          <Select />
        </div>

        <div className="flex flex-col  p-2  w-1/4 ">
          <p>Location</p>
          <Select />
        </div>

        <div className="flex flex-col p-2  w-1/4">
          <p>Location</p>
          <Select />
        </div>

        <div className="flex flex-col p-2  w-1/4 justify-center">
          <button className=" bg-blue-600 h-10 border-none text-white flex flex-row justify-center items-center ">
            <AiOutlineSearch />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
