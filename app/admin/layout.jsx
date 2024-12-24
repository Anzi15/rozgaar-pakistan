"use client";

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { auth, db } from '../lib/firebase/config'; // Adjust your Firebase imports
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { getDocs, collection, query, where } from 'firebase/firestore';
import AdminDropdownMenu from '../components/AdminDropdownMenu';
import AdminSidebar from '../components/AdminSidebar';

const AdminLayout = ({ children }) => {
  const pathname = usePathname();
  const allowAnyone = ['/admin/login', '/admin/signup', '/admin/unauthorized'].includes(pathname);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [sideBarExpanded, setSideBarExpanded] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (!user) {
          if (!allowAnyone) {
            router.push('/admin/login');
          } else {
            setLoading(false);
          }
        } else {
          const userEmail = user.email;
          const adminsRef = collection(db, 'Admins');
          const q = query(adminsRef, where('Email', '==', userEmail));
          const querySnapshot = await getDocs(q);

          if (querySnapshot.empty) {
            router.push('/admin/unauthorized');
          } else {
            setUser(user);
            setLoading(false);
          }
        }
      });

      return () => unsubscribe();
    };

    checkUser();
  }, [router, allowAnyone]);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        toast("Signed out successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
        router.push('/admin/login');
      })
      .catch((error) => console.error("Error logging out: ", error));
  };

  if (allowAnyone) {
    return <div>{children}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={() => setSideBarExpanded(!sideBarExpanded)}
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <Link href="/admin" className="flex ms-2 md:me-24">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/005/544/770/small/profile-icon-design-free-vector.jpg" className="h-8 me-3" alt="Admin" />
                <span className="self-center text-xl sm:text-2xl dark:text-white">Admin Panel</span>
              </Link>
            </div>
            <AdminDropdownMenu
              userImg={user?.photoURL || ""}
              name={user?.displayName || "Admin"}
              email={user?.email || ""}
              signOutFunc={handleSignout}
            />
          </div>
        </div>
      </nav>

      <main className="flex pt-6">
        <AdminSidebar expanded={sideBarExpanded} />

        <div className={`p-4 mt-[3rem] md:w-[80vw] w-[100vw] flex justify-center items-center ${sideBarExpanded ? "bg-gray-300" : "bg-white"}`}>
          {children}
        </div>
      </main>
    </>
  );
};

export default AdminLayout;
