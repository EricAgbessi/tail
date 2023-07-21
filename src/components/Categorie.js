import React from "react";

export default function Categorie() {
  return (
    <div className="flex flex-col w-full pt-20 justify-around pt-20 pb-20">
      <div className="px-6">
        <h1 className="text-3xl font-bold">Explore by Categorie</h1>
        <p>Lorem Ipsum is simply dummy text of the printing </p>
      </div>
      <div className="flex flex-row w-full justify-around pt-20 pb-20">
        <div
          className="w-1/5  bg-no-repeat bg-center bg-cover flex flex-col justify-end items-center "
          style={{ height: "300px", backgroundImage: `url('/img/land-1.jpg')` }}
        >
          <button className="border-2 border-blue-600 text-white p-2 px-4 w-2/3 bg-blue-600">
            Home
          </button>
        </div>

        <div
          className="w-1/5 bg-no-repeat bg-center bg-cover flex flex-col justify-end items-center "
          style={{ height: "300px", backgroundImage: `url('/img/land-2.jpg')` }}
        >
          <button className="border-2 text-black border-none p-2 px-4 w-2/3 bg-white">
            Challet
          </button>
        </div>
        <div
          className="w-1/5 bg-no-repeat bg-center bg-cover flex flex-col justify-end items-center "
          style={{ height: "300px", backgroundImage: `url('/img/cat-3.jpg')` }}
        >
          <button className="border-2 text-black border-none p-2 px-4 w-2/3 bg-white">
            Villa
          </button>
        </div>
        <div
          className="w-1/5 bg-no-repeat bg-center bg-cover flex flex-col justify-end items-center"
          style={{ height: "300px", backgroundImage: `url('/img/cat-4.jpg')` }}
        >
          <button className="border-2 text-black border-none p-2 px-4 w-2/3 bg-white">
            Hotel
          </button>
        </div>
      </div>
    </div>
  );
}
