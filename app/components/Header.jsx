"use client"
import { useEffect, useState } from "react";
import { themeRoundedBtn } from "./Button.jsx";
import HamburgerButton from "./HamburgerButton.jsx";
import MobileNavbar from "./MobileNavbar.jsx";
import Navbar from "../components/NavBar.jsx";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Events",
    href: "/events",
  },
  {
    id: 3,
    name: "Success Stories",
    href: "/success-stories",
  },
  {
    id: 5,
    name: "About Us",
    href: "/about",
  },
  {
    id: 5,
    name: "Our BODs",
    href: "/bods",
  },
  {
    id: 5,
    name: "Blogs",
    href: "/blogs",
  },
  {
    id: 5,
    name: "Contact us",
    href: "/contact",
  },
];

export default function Header({children}) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <>
    {children}
    <header className="max-w-screen w-full mx-auto pt-7 pb-3 flex items-center gap-[103px] py-3 h-[84px] min-[1440px]:h-fit min-h-fit px-4 md:px-8 min-[1440px]:px-28 mb-4">
    <Link href={"/"}>
    <Image
        src="/logo.svg"
        alt="Al Zehra Perfumes"
        width={90}
        height={90}
        priority={true}
        draggable={false}
        className="select-none "
        />
        </Link>
      <Navbar links={links} />
      <div className="flex justify-center items-center gap-4 ml-auto">
        <Link className="p-3 px-4 rounded-full bg-blue-700 text-white font-bold hover:bg-blue-900 transition-all flex-nowrap text-nowrap" href="/donate">Donate now</Link>
        <HamburgerButton onClick={() => setIsMobileOpen(!isMobileOpen)} />
      </div>
      <MobileNavbar
        links={links}
        isMobileOpen={isMobileOpen}
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      />
    </header>
    </>
  );
}
