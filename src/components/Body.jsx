import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginSignUp from "./LoginSignUp";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/redux/userSlice";
import GptPage from "./GptPage";

const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL, // ✅ This should be photoURL, not photoUrl
          })
        );
      } else {
        dispatch(removeUser());
      }
    });

    // Clean up listener on unmount
    return () => unsubscribe();
  }, []);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginSignUp />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/gpt-page",
      element: <GptPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
