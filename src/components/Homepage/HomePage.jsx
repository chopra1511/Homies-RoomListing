import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Navbar/NavBar";
import CategorysList from "./CategorysList";
import Footer from "./Footer";
import RoomList from "./RoomList";
import FooterNav from "../Navbar/FooterNav";
import { fetchRooms, incrementPage } from "../../store/roomsSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  const { rooms, page, loading, error } = useSelector((state) => state.rooms);

  useEffect(() => {
    dispatch(fetchRooms(page));
  }, [page, dispatch]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 100 >=
      document.documentElement.scrollHeight
    ) {
      dispatch(incrementPage()); // Increment page when reaching the bottom
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <NavBar />
      <div>
        <CategorysList />

        <div>
          <RoomList rooms={rooms} />
          {loading && <div className="loading-spinner">Loading...</div>}
          {error && <div className="error">{error}</div>}
        </div>

        <div>
          <div className="hidden lg:block">
            <Footer />
          </div>
          <div className="lg:hidden fixed bottom-0 left-0 right-0 z-10">
            <FooterNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
