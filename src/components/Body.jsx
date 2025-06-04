import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginSignUp from "./LoginSignUp";
import Browse from "./Browse";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginSignUp />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
