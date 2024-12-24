"use client";

import React from "react";
import { auth } from "../../lib/firebase/config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const AdminUnAuthorized = () => {
  const router = useRouter();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        router.push("/admin/login");
      })
      .catch((error) => {
        console.error("Error logging out: ", error);
      });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-7">
      <h1 className="font-bold text-2xl text-blue-gray-800 ">
        Sorry buddy, you're not an admin
      </h1>

      <button
        className="bg-deep-orange-900 text-white p-7 py-4 font-bold text-2xl rounded-md"
        onClick={handleLogout}
      >
        Log out 👈
      </button>
    </div>
  );
};

export default AdminUnAuthorized;
