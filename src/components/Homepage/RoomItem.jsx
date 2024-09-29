import React, { useState, memo } from "react";
import "@flaticon/flaticon-uicons/css/all/all.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import Skeleton from "@mui/material/Skeleton";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { roomDetails } from "../../store/roomsSlice";

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
            srcSet={`${image}?w=400&h=400&fit=crop 400w, ${image}?w=800&h=800&fit=crop 800w, ${image}?w=1200&h=1200&fit=crop 1200w`}
            alt="Room"
            className={`object-cover w-full h-[22rem] lg:w-full lg:h-72 rounded-2xl transition-opacity duration-500 ${
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
        className={`object-cover w-full h-full rounded-2xl transition-opacity duration-500 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoadedData={() => setVideoLoaded(true)}
      ></video>
    </div>
  );
};



const RoomItem = ({ room }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [imageLoaded, setImageLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleViewDetails = (id) => {
      dispatch(roomDetails(id)); // Dispatch action to filter room by id
      navigate(`/room-details`); // Navigate to room details page
    };

  return (
    <div ref={ref} className="mt-10">
      <div className="w-fit">
        <div className="w-[22rem] h-[22rem] lg:w-72 lg:h-72 rounded-2xl text-center overflow-hidden drop-shadow-xl">
          {room.properties.room_images && (
            <ImageSlider
              images={room.properties.room_images[0].image_urls}
              imageLoaded={imageLoaded}
              setImageLoaded={setImageLoaded}
            />
          )}
          {inView && room.properties.video_url && (
            <VideoPlayer
              videoUrl={room.properties.video_url.med}
              videoLoaded={videoLoaded}
              setVideoLoaded={setVideoLoaded}
            />
          )}
        </div>
        <div className="w-[22rem] lg:w-72 p-2 font-Poppins">
          <div className="flex justify-between">
            <h1 className="w-2/3 text-sm font-medium text-ellipsis overflow-hidden whitespace-nowrap">
              {room.name}
            </h1>
            <h1 className="text-sm font-medium">⭐4.91</h1>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[12px] text-gray-600 font-medium">
              Variants: {room.variants_count}
            </p>
            <p
              className="text-[12px] text-gray-800 hover:underline font-medium cursor-pointer"
              onClick={() => handleViewDetails(room.room_type_code)}
            >
              View details
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(RoomItem);
