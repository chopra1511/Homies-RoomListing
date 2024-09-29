import React, { useState } from "react";
import NavBar from "../Navbar/NavBar";
import { useSelector } from "react-redux";
import { IconButton, Skeleton } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router";
import Slider from "react-slick";
import { roomDetails } from "../../store/roomsSlice";

// Component to display room variant details
const RoomVariant = ({ variant }) => {
  return (
    <div
      key={roomDetails.room_type_code}
      className="w-full p-5 flex justify-between font-Poppins rounded-2xl mt-5 bg-white drop-shadow-xl border-[1px]"
    >
      <div>
        <div className="flex items-center gap-2">
          <i className="fi fi-rr-home"></i>
          <h1 className="text-[12px]">{variant.display_properties[0].value}</h1>
        </div>
        <div className="flex items-center gap-2">
          <i className="fi fi-rr-bed-alt"></i>
          <h1 className="text-[12px]">{variant.display_properties[1].value}</h1>
        </div>
        <div className="flex items-center gap-2">
          <i className="fi fi-rr-people"></i>
          <h1 className="text-[12px]">{variant.display_properties[2].value}</h1>
        </div>
        <div className="flex items-center gap-2">
          <i className="fi fi-rr-soup"></i>
          <h1 className="text-[12px]">
            {variant.display_properties[0].display_name}
          </h1>
        </div>
        <div className="mt-5">
          <h1 className="text-[12px]">Cancellation policy:</h1>
          <h1 className="text-[12px]">
            {variant.cancellation_timeline.free_cancellation_description}
          </h1>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center">
        <div>
          <h1 className="font-semibold">
            <span>{variant.total_price.currency}</span>{" "}
            {variant.total_price.discounted_price_rounded}/-{" "}
            <span className="line-through text-gray-400">
              {variant.total_price.total_price_rounded}/-
            </span>
          </h1>
        </div>
        <div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

// Reusable component for Image Slider
const ImageSlider = ({ images, imageLoaded, setImageLoaded }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings} className="w-full h-full rounded-2xl">
      {images.map((image, index) => (
        <div key={index} className="h-full w-full">
          {!imageLoaded && (
            <Skeleton
              variant="rectangular"
              animation="wave"
              width="100%"
              height="100%"
              className="rounded-2xl"
            />
          )}
          <img
            src={image}
            alt="Room"
            className={`object-cover w-full h-[22rem] lg:w-1/2 lg:h-96 rounded-2xl transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      ))}
    </Slider>
  );
};

// Reusable component for Video Player with skeleton loading
const VideoPlayer = ({ videoUrl, videoLoaded, setVideoLoaded }) => {
  return (
    <div className="h-full w-full">
      {!videoLoaded && (
        <Skeleton
          variant="rectangular"
          animation="wave"
          width="100%"
          height="100%"
          className="rounded-2xl"
        />
      )}
      <video
        playsInline
        autoPlay
        muted
        loop
        src={videoUrl}
        className={`object-cover  w-full h-[22rem] md:w-1/2 md:h-96 rounded-2xl transition-opacity duration-500 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoadedData={() => setVideoLoaded(true)}
      ></video>
    </div>
  );
};

const RoomDetails = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const { roomDetails } = useSelector((state) => state.rooms);
  console.log(roomDetails);
  
  
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const navigate = useNavigate();

  if (!roomDetails) return <div>No room details available</div>;

  return (
    <div ref={ref} className="relative">
      <NavBar />
      <div className="container mx-auto px-5 xl:px-20">
        {/* Back Button */}
        <div className="absolute top-40 -left-2 md:left-5">
          <IconButton onClick={() => navigate(-1)}>
            <i className="fi fi-rr-arrow-small-left text-black text-2xl pt-1 px-2"></i>
          </IconButton>
        </div>

        {/* Room Images Section */}
        <div className="mt-5">
          <div className="">
            {roomDetails.properties.room_images && (
              <ImageSlider
                images={roomDetails.properties.room_images[0].image_urls}
                imageLoaded={imageLoaded}
                setImageLoaded={setImageLoaded}
              />
            )}
            {inView && roomDetails.properties.video_url && (
              <VideoPlayer
                videoUrl={roomDetails.properties.video_url.med}
                videoLoaded={videoLoaded}
                setVideoLoaded={setVideoLoaded}
              />
            )}
          </div>

          {/* Room Name and Rating */}
          <h1 className="mt-5 text-xl font-Poppins font-medium">
            {roomDetails.name}
          </h1>
          <h1 className="text-sm font-Poppins font-medium">⭐4.91</h1>

          {/* Room Info Section */}
          <div className="flex gap-5 mt-2 font-Poppins font-medium">
            <h1 className="flex items-center">
              <i className="fi fi-rr-people"></i>
              <span className="ml-2">
                {roomDetails.properties.room_capacity.max_adult}
              </span>
            </h1>
            <h1 className="flex items-center">
              <i className="fi fi-rr-child-head"></i>
              <span className="ml-2">
                {roomDetails.properties.room_capacity.max_adult_with_children}
              </span>
            </h1>
            <span>{roomDetails.properties.room_capacity.max_child_age}+</span>
          </div>
        </div>

        {/* Room Variants Section */}
        <div className="mt-10 pb-20">
          <h1 className="text-xl font-medium">Variants</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 flex-wrap">
            {roomDetails.variants &&
              roomDetails.variants.map((variant) => (
                <RoomVariant key={variant.room_type_code} variant={variant} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
