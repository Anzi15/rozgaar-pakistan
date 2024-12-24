"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  useSignInWithEmailAndPassword,
  useAuthState,
  useSignInWithGoogle,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { auth } from "../../lib/firebase/config";

const AdminLoginPage = () => {
  const [sendPasswordResetEmail, passResetSending, passResetError] =
    useSendPasswordResetEmail(auth);
  const [userAlreadyExist, userExistLoading, userExistError] =
    useAuthState(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const MySwal = withReactContent(Swal);

  if (userAlreadyExist) router.push("/admin");

  const handleForgotPassword = async () => {
    const { value: email } = await MySwal.fire({
      iconHtml:
        '<img src="https://ouch-cdn2.icons8.com/CxA-vssAcYV5CC2p0DBW3-u6tDRNI5Ppppnnt1XOMZk/rs:fit:368:311/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDQ0/L2E1OWIzOGJjLWQ3/NzAtNDMzYS1hYzk3/LTkwMDdlYzAyODlk/My5zdmc.png">',
      customClass: {
        icon: "no-border",
      },
      input: "email",
      inputPlaceholder: "Enter your email address",
      confirmButtonText: "Send Recovery Email",
      confirmButtonColor: "blue",
    });

    if (email) {
      sendPasswordResetEmail(email);
      if (passResetError) {
        MySwal.fire({
          icon: "error",
          title: passResetError.message,
          confirmButtonText: "Done",
          confirmButtonColor: "red",
        });
      } else {
        MySwal.fire({
          iconHtml:
            '<img src="https://ouch-cdn2.icons8.com/Qij4124AsXem96Za5Vdf8k2wfo6GR6dA06iPlmXQm5Q/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNTMz/LzFlZGFiMWQ0LWMw/MzAtNGYwMy05Nzll/LWI4NmI2ZjI0N2U3/NS5zdmc.png">',
          customClass: {
            icon: "no-border",
          },
          title: "Check your inbox",
          confirmButtonText: "Done",
          confirmButtonColor: "blue",
        });
      }
    }
  };

  useEffect(() => {
    if (userAlreadyExist) {
      router.push("/admin");
    }
  }, [userAlreadyExist, router]);

  const handleSubmission = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log("Error signing in:", error.message);
    }

    if (error) {
      console.log("Firebase Authentication Error:", error.message);
    }
    if (!loading && !googleLoading) {
      if (user || googleUser) {
        router.push("/admin");
      }
    }
  };

  return (
    <div className="font-[sans-serif]">
      <div className="flex gap-4 h-screen m-auto items-center justify-center">
        <div className="w-full p-6 max-w-[30rem]">
          <form onSubmit={handleSubmission}>
            <div className="mb-8">
              <h3 className="text-gray-800 text-3xl font-extrabold">Log in</h3>
              <p className="text-sm mt-4 text-gray-800">
                Don't have an account?
                <Link
                  href="/admin/signup"
                  className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                >
                  Register here
                </Link>
              </p>
            </div>

            {/* Email input */}
            <div>
              <label className="text-gray-800 text-[15px] mb-2 block">
                Email
              </label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="email"
                  required
                  onInput={(e) => setEmail(e.target.value.trim())}
                  className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                  placeholder="Enter email"
                />
                {/* Email icon */}
              </div>
            </div>

            {/* Password input */}
            <div className="mt-4">
              <label className="text-gray-800 text-[15px] mb-2 block">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  required
                  onInput={(e) => setPassword(e.target.value.trim())}
                  className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                  placeholder="Enter password"
                />
                {/* Password icon */}
              </div>
            </div>

            {/* Remember me and Forgot Password */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-md"
                />
                <label htmlFor="remember-me" className="ml-3 block text-sm">
                  Remember me
                </label>
              </div>
              <div>
                <a
                  onClick={handleForgotPassword}
                  href="#"
                  className="text-blue-600 font-semibold text-sm hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            {/* Submit button */}
            <div className="mt-8">
              <p
                className={`text-red-600 font-semibold ${error ? "" : "hidden"}`}
              >
                {error?.message}
              </p>
              <button
                type="submit"
                className="w-full py-3 px-6 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                {loading ? "Loading.." : "Log In"}
              </button>
            </div>

            {/* Google sign-in */}
            <div className="my-4 flex items-center gap-4">
              <hr className="w-full border-gray-300" />
              <p className="text-sm text-gray-800 text-center">or</p>
              <hr className="w-full border-gray-300" />
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-4 py-3 px-6 text-sm tracking-wide text-gray-800 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none"
              onClick={signInWithGoogle}
            >
              {googleLoading ? (
                "..."
              ) : (
                <>
                  <FaGoogle className="text-2xl" />
                  <span>Sign in with Google</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
