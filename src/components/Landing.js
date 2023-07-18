import React from "react";
import Tab from "./components/Tab";
export default function Landing() {
  return (
    <div className="flex flex-col bg-blue-100 ">
      <div className="flex flex-row pt-8 pl-8 pr-8  justify-center mb-0 border-black border-2 ">
        <div
          className="pr-10 "
          style={{ minWidth: "40%", maxWidth: "40%", height: "400px" }}
        >
          <h1 className="font-bold text-4xl mb-5">
            The moderne way to find you dream Porperties
          </h1>
          <p className="text-base text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <Tab />
        </div>

        <div
          className=" p-0  "
          style={{ minWidth: "40%", maxWidth: "40%", height: "400px" }}
        >
          <div
            className="bg-[url('/img/land-1.jpg')] bg-center bg-cover "
            style={{
              width: "400px",
              height: "250px",
              backgroundImage: `url('/img/land-1.jpg')`,
            }}
          ></div>
          <div
            className="bg-center bg-cover relative"
            style={{
              width: "400px",
              height: "250px",
              left: "180px",
              bottom: "100px",
              backgroundImage: `url('/img/land-2.jpg')`,
            }}
          ></div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
