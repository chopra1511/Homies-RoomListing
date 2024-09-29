import React, { lazy, Suspense } from "react";
import loading from "/assets/loading.gif";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";

// Lazy-loaded components
const HomePage = lazy(() => import("./components/Homepage/HomePage"));
const RoomDetails = lazy(() => import("./components/RoomDetails/RoomDetails"));

// Loading fallback component
const loadingPic = (
  <div className="h-screen flex flex-col justify-center items-center">
    <img src={loading} alt="Loading..." className="w-24" />
  </div>
);

// Defining the routes with dynamic room details route
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={loadingPic}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: "/room-details", 
    element: (
      <Suspense fallback={loadingPic}>
        <RoomDetails />
      </Suspense>
    ),
  },
]);

// App component that provides the router
function App() {
  return <RouterProvider router={router} />;
}

export default App;
