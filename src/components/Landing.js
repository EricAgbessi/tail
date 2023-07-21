import React from "react";
import Tab from "./components/Tab";
import { motion } from "framer-motion";
import { IconName } from "react-icons/ai";

//AiOutlineShoppingCart

export default function Landing() {
  return (
    <div className="flex flex-col bg-blue-100 py-5 pb-20">
      <div className="flex flex-row pt-8 pl-8 pr-8  justify-center mb-0">
        <div
          className="pr-10  "
          style={{ minWidth: "40%", maxWidth: "40%", height: "400px" }}
        >
          <h1 className="font-bold text-4xl mb-5">
            The moderne way to find you dream Porperties
          </h1>
          <p className="text-base text-gray-700 mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div
            className=" relative "
            style={{ right: "-200px", left: "0px", width: "650px" }}
          >
            <Tab />
          </div>
        </div>

        <div
          className=" p-0  "
          style={{ minWidth: "40%", maxWidth: "40%", height: "400px" }}
        >
          <motion.div
            className="bg-[url('/img/land-1.jpg')] relative bg-center bg-cover shadow-xl"
            style={{
              width: "400px",
              height: "250px",
              backgroundImage: `url('/img/land-1.jpg')`,
            }}
            animate={{
              top: ["0px", "20px", "20px", "0px"],
              right: ["0px", "-10px", "-10px", "0px"],
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
          ></motion.div>
          <motion.div
            className="bg-center bg-cover relative shadow-xl"
            style={{
              width: "400px",
              height: "250px",
              left: "180px",

              bottom: "100px",
              backgroundImage: `url('/img/land-2.jpg')`,
            }}
            animate={{
              bottom: ["100px", "120px", "120px", "100px"],
              left: ["180px", "170px", "170px", "180px"],
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
          ></motion.div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
