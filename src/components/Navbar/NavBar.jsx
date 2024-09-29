import React from "react";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { IconButton } from "@mui/material";
import SearchBar from "./SearchBar";

// Reusable component for icons
const NavIcon = ({ iconClass }) => (
  <IconButton>
    <i className={`${iconClass} text-base lg:text-xl py-1 px-2 text-black`}></i>
  </IconButton>
);

const NavBar = () => {
  return (
    <nav className="relative pb-10 lg:border-b-2">
      <div className="py-5 px-5 lg:px-20 flex justify-between items-center relative">
        {/* Logo Section */}
        <div>
          <h1 className="text-sm lg:text-base font-Poppins font-medium">
            Homies
          </h1>
        </div>

        {/* Navigation Links*/}
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2  gap-5">
          <li className="list-none cursor-pointer px-3 py-2 hover:bg-[#f4f4f4] rounded-full">
            <h1 className="font-Poppins font-medium">Stays</h1>
          </li>

          <li className="list-none cursor-pointer px-3 py-2 hover:bg-[#f4f4f4] rounded-full">
            <h1 className="font-Poppins font-medium">Experiences</h1>
          </li>
        </div>

        {/* Icon Buttons */}
        <div className="flex lg:gap-5">
          <NavIcon iconClass="fi fi-rr-house-chimney-medical" />
          <NavIcon iconClass="fi fi-rr-world" />
          <NavIcon iconClass="fi fi-rr-user" />
        </div>
      </div>

      <div>
        <div className="hidden lg:block">
          <SearchBar />
        </div>
        <div className="block lg:hidden mx-6 flex gap-3 items-center bg-white border-[1px] py-2 px-2 lg:py-5 lg:px-10 rounded-full drop-shadow-xl">
          <i className="fi fi-br-search text-xl text-black py-1 px-2"></i>

          <div className={`cursor-pointer`}>
            <h1 className="text-[12px] font-Poppins font-medium">Where</h1>
            <h1 className="text-[10px] font-Poppins text-gray-400">
              Anywhere • Any week • Add guests
            </h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
