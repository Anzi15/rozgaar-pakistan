"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import {
  useCreateUserWithEmailAndPassword,
  useAuthState,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../../lib/firebase/config";

const AdminSignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpWithEmailAndPass, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading] = useSignInWithGoogle(auth);
  const [userAlreadyExist] = useAuthState(auth);
  const router = useRouter();

  const handleSubmission = async (e) => {
    e.preventDefault();
    try {
      await signUpWithEmailAndPass(email, password);
    } catch (error) {
      console.log("Firebase Authentication Error:", error.message);
    }

    if (!loading && !googleLoading) {
      if (user || googleUser) {
        router.push("/admin");
      }
    }
  };

  useEffect(() => {
    if (userAlreadyExist) {
      router.push("/admin");
    }
  }, [userAlreadyExist, googleUser, googleLoading]);

  return (
    <div className="font-[sans-serif]">
      <div className="flex gap-4 h-screen m-auto items-center justify-center">
        <div className="w-full p-6 max-w-[30rem]">
          <form onSubmit={handleSubmission}>
            <div className="mb-8">
              <h3 className="text-gray-800 text-3xl font-extrabold">Sign Up</h3>
              <p className="text-sm mt-4 text-gray-800">
                Already have an account?
                <Link
                  href="/admin/login"
                  className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                >
                  Login here
                </Link>
              </p>
            </div>

            <div>
              <label className="text-gray-800 text-[15px] mb-2 block">Email</label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="text"
                  required
                  className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                  placeholder="Enter email"
                  onInput={(e) => setEmail(e.target.value.trim())}
                />
                {/* Email icon */}
              </div>
            </div>

            <div className="mt-4">
              <label className="text-gray-800 text-[15px] mb-2 block">Password</label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  required
                  className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                  placeholder="Enter password"
                  onInput={(e) => setPassword(e.target.value.trim())}
                />
                {/* Password icon */}
              </div>
            </div>

            <div className="mt-8">
              <p className={`text-red-600 font-semibold ${error ? "" : "hidden"}`}>
                {error?.message}
              </p>
              <button
                type="submit"
                className="w-full py-3 px-6 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                {loading ? "signing up.." : "Sign Up"}
              </button>
            </div>

            <div className="my-4 flex items-center gap-4">
              <hr className="w-full border-gray-300" />
              <p className="text-sm text-gray-800 text-center">or</p>
              <hr className="w-full border-gray-300" />
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-4 py-3 px-6 text-sm tracking-wide text-gray-800 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none"
              onClick={() => signInWithGoogle()}
            >
              {googleLoading ? (
                "..."
              ) : (
                <>
                  <FaGoogle className="text-2xl" />
                  <span>Sign Up with Google</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminSignUpPage;
