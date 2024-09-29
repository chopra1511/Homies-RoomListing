import React, { memo } from "react";
import RoomItem from "./RoomItem";

// List of rooms
const RoomList = ({ rooms }) => {
    // console.log(rooms);
    
  return (
    <div className="px-6 xl:px-20 pb-20 flex flex-wrap justify-center md:justify-between">
      {rooms.map((room, index) => (
        <RoomItem key={index} room={room} />
      ))}
    </div>
  );
};

// Memoized the RoomList to avoid unnecessary re-renders
export default memo(RoomList);
