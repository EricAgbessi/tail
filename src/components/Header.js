import React from "react";

import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-white flex flex-row justify-around mt-6">
    <div className="flex flex-row text-xl font-bold ">
      Lan<p className="text-blue-600">der</p>
    </div>
    <div>
      <ul className="flex flex-row ">
        <li className="m-3">
          <a>Home</a>
        </li>
        <li className="m-3">
          <a>Porperties</a>
        </li>
        <li className="m-3">
          <a>Features</a>
        </li>
        <li className="m-3">
          <a>Review</a>
        </li>
      </ul>
    </div>
    <div>
      <button className="bg-black text-white p-2">Contact</button>
    </div>
  </header>
);

export default Header;
