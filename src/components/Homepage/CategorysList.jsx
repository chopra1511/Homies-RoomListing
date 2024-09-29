import React from "react";
import "@flaticon/flaticon-uicons/css/all/all.css";

// Reusable component for category items
const CategoryIcon = ({ iconClass, label }) => (
  <div className="text-gray-600 hover:text-black hover:border-b-2 hover:border-b-black cursor-pointer">
    <div className="w-full lg:w-fit flex flex-col items-center text-center">
      <i className={`${iconClass} text-xl`}></i>
      <h1 className="text-[8px] lg:text-[12px] font-Poppins font-semibold">{label}</h1>
    </div>
  </div>
);

// Category data
const categories = [
  { iconClass: "fi fi-rr-token", label: "Icons" },
  { iconClass: "fi fi-rr-farm", label: "Farms" },
  { iconClass: "fi fi-rr-swimming-pool", label: "Amazing Pools" },
  { iconClass: "fi fi-rr-mountains", label: "Amazing Views" },
  { iconClass: "fi fi-rr-bed-alt", label: "Rooms" },
  { iconClass: "fi fi-rr-camping", label: "Camping" },
  { iconClass: "fi fi-rr-cabin", label: "Cabins" },
  { iconClass: "fi fi-rr-house-flood", label: "Country Side" },
  { iconClass: "fi fi-rr-umbrella-beach", label: "Beach" },
  { iconClass: "fi fi-rr-house-turret", label: "Mansions" },
];

const CategorysList = () => (
  <div className="flex justify-between px-8 gap-10 lg:px-20 lg:mt-5 overflow-auto hide-scrollbar">
    {categories.map((category, index) => (
      <CategoryIcon
        key={index}
        iconClass={category.iconClass}
        label={category.label}
      />
    ))}
  </div>
);

export default CategorysList;
