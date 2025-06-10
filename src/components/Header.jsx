import React from "react";
import { logo } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  console.log(user?.displayName);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="fixed z-10 top-0 left-0 w-full">
      <div className="flex justify-between items-center mx-auto px-14 py-3">
        {/* Logo */}
        <img className="w-32" alt="Netflix logo" src={logo} />

        {/* User Profile + Sign Out */}
        <div className="flex items-center gap-4">
          {user?.photoURL && (
            <img
              src={user?.photoURL}
              alt="User Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
          )}

          <div className=" flex items-center justify-center text-sm font-semibold text-white">
            {user?.displayName}
          </div>

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
