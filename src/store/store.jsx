import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from "../store/roomsSlice";

const store = configureStore({
  reducer: {
    rooms: roomsReducer,
  },
});

export default store;
