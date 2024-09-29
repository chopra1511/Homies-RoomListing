import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../../sample.json"

// Async thunk to fetch rooms 
export const fetchRooms = createAsyncThunk(
  "rooms/fetchRooms",
  async (page, { getState }) => {
    const pageSize = 10;
    // Simulate pagination by slicing the data
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    const newRooms = data.rooms_by_serial_no[0].rooms.slice(
      startIndex,
      endIndex
    );
    return newRooms;
  }
);

const roomsSlice = createSlice({
  name: "rooms",
  initialState: {
    rooms: [],
    roomDetails:[],
    page: 1,
    loading: false,
    error: null,
  },
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
    roomDetails: (state, action) => {
      const roomId = action.payload; 
      state.roomDetails = state.rooms.find(
        (room) => room.room_type_code === roomId
      );
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.rooms = [...state.rooms, ...action.payload];
        state.loading = false;
      })
      .addCase(fetchRooms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});

export const { incrementPage,roomDetails } = roomsSlice.actions;

export default roomsSlice.reducer;
