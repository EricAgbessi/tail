import React from "react";

export default function Popular() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="text-3xl font-bold">Our popular property</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
      </p>
      <div className="flex flex-row w-full  justify-around">
        <div
          className="w-1/4 bg-no-repeat bg-center bg-cover flex flex-col justify-end items-center "
          style={{ height: "350px", backgroundImage: `url('/img/land-1.jpg')` }}
        ></div>
        <div
          className="w-1/4  bg-no-repeat bg-center bg-cover flex flex-col justify-end items-center "
          style={{ height: "350px", backgroundImage: `url('/img/land-1.jpg')` }}
        ></div>
        <div
          className="w-1/4  bg-no-repeat bg-center bg-cover flex flex-col justify-end items-center "
          style={{ height: "350px", backgroundImage: `url('/img/land-1.jpg')` }}
        ></div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
