import { IconButton } from "@mui/material";
import React from "react";

// Reusable component for individual search sections
const SearchSection = ({ title, subtitle, borderRight }) => (
  <div className={`${borderRight ? "border-r-2" : ""}`}>
    <div
      className={`py-5 px-10 rounded-full hover:bg-[#f4f4f4] cursor-pointer`}
    >
      <h1 className="text-sm font-medium">{title}</h1>
      <h1 className="text-[12px] text-gray-400">{subtitle}</h1>
    </div>
  </div>
);

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-fit font-Poppins flex bg-white border-2 justify-center items-center rounded-full drop-shadow-lg">
        <SearchSection
          title="Where"
          subtitle="Search destination"
          borderRight
        />
        <SearchSection title="Check in" subtitle="Add dates" borderRight />
        <SearchSection title="Check out" subtitle="Add dates" borderRight />
        <SearchSection title="Who" subtitle="Add guests" />

        <IconButton
          sx={{
            background: "#ff385c",
            "&:hover": {
              background: "#e3314f",
            },
            marginLeft: 2,
            marginRight: 2,
          }}
        >
          <i className="fi fi-br-search text-xl text-white pt-1 px-2"></i>
        </IconButton>
      </div>
    </div>
  );
};

export default SearchBar;
