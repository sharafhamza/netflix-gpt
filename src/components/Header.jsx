import React, { useEffect, useState } from "react";
import { logo } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGptSearch = () => {
    navigate("/gpt-page");
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  };

  return (
    <div
      className={`fixed z-99 top-0 left-0 w-full ${
        isScrolled
          ? "bg-gray-800/70 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center mx-auto px-14 py-3">
        <img className="w-32" alt="Netflix logo" src={logo} />

        <div className="flex items-center gap-4">
          {user?.photoURL && (
            <img
              src={user.photoURL}
              alt="User Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
          )}
          <div className="text-sm font-semibold text-white">
            {user?.displayName}
          </div>
          <button
            onClick={handleGptSearch}
            className="text-white cursor-pointer bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm sm:text-base font-semibold rounded-md transition duration-200"
          >
            GPT Search
          </button>
          <button
            onClick={handleSignOut}
            className="text-white cursor-pointer bg-red-600 hover:bg-red-700 px-4 py-2 text-sm sm:text-base font-semibold rounded-md transition duration-200"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
