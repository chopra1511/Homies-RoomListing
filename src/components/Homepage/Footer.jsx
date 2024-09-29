import React from "react";

const GetAways = ({ lable1, lable2 }) => (
  <div>
    <h1 className="text-sm font-Poppins font-medium">{lable1}</h1>
    <h1 className="text-[12px] font-Poppins font-medium text-gray-500">
      {lable2}
    </h1>
  </div>
);

const Footer = () => {
  return (
    <footer className="pb-20">
      <div className="container font-Poppins bg-[#f4f4f4] px-20 py-10">
        <h1 className="text-xl font-semibold">
          Inspiration for future getaways
        </h1>
        <div className="pb-10 border-b-2">
          <div className="flex gap-5 mt-5 pb-3 border-b-2">
            <h1 className="text-sm font-medium font-Poppins">Popular</h1>
            <h1 className="text-sm font-medium font-Poppins">Arts & Culture</h1>
            <h1 className="text-sm font-medium font-Poppins">Outdoors</h1>
            <h1 className="text-sm font-medium font-Poppins">Mountains</h1>
            <h1 className="text-sm font-medium font-Poppins">Beach</h1>
            <h1 className="text-sm font-medium font-Poppins">Unique Stays</h1>
            <h1 className="text-sm font-medium font-Poppins">Categories</h1>
            <h1 className="text-sm font-medium font-Poppins">Things to do</h1>
          </div>

          <div className="mt-5 grid grid-cols-5 gap-5">
            {Array.from({ length: 20 }).map((_, index) => (
              <GetAways
                key={index}
                lable1={"Canmore"}
                lable2={"Pet-friendly rentals"}
              />
            ))}
          </div>
        </div>

        <div className="mt-2 flex justify-between items-center">
          <div className="flex text-[12px] font-Poppins font-medium gap-3">
            <h1 className="cursor-pointer">© 2024 Airbnb, Inc.</h1>•
            <h1 className="cursor-pointer">Privacy</h1>•
            <h1 className="cursor-pointer">Terms</h1>•
            <h1 className="cursor-pointer">Company details</h1>
          </div>

          <div className="flex gap-5">
            <i className="fi fi-brands-instagram"></i>
            <i className="fi fi-brands-twitter"></i>
            <i className="fi fi-brands-facebook"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
