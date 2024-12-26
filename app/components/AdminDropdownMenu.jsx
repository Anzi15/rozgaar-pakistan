"use client";

import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../lib/firebase/config";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const AdminDropdownMenu = ({ userImg, name, email, signOutFunc }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const indicateSignout = () => {
    toast("🦄 signed out successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    // Programmatic refresh with Next.js router
    router.refresh();
  };

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        indicateSignout();
      })
      .catch((error) => {
        console.error("Error logging out: ", error);
      });
  };

  return (
    <div className="relative">
      <img
        id="avatarButton"
        type="button"
        onClick={toggleDropdown}
        className="w-10 h-10 rounded-full cursor-pointer"
        src={
          userImg.length
            ? userImg
            : "https://cdn-icons-png.flaticon.com/128/1077/1077114.png"
        }
        alt="User dropdown"
      />

      {/* Dropdown menu */}
      {isOpen && (
        <div
          id="AdminDropdownMenu"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 text-black fixed right-0"
        >
          <div className="px-4 py-3 text-sm text-gray-900 ">
            <div>{name}</div>
            <div className="font-medium truncate">{email}</div>
          </div>

          <div className="py-1">
            <button onClick={handleSignout} className="w-full text-left px-4 py-2 text-gray-900">
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDropdownMenu;
