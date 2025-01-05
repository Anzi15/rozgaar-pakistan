"use client"
import { useState } from "react";
import HamburgerButton from "./HamburgerButton.jsx";
import MobileNavbar from "./MobileNavbar.jsx";
import Navbar from "./Navbar.jsx";
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
    name: "Blogs",
    href: "/blogs",
  },
  {
    id: 3,
    name: "Cities",
    href: "/cites",
  },
  {
    id: 4,
    name: "Contact Us",
    href: "/contact",
  },

];

export default function Header({children}) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <>
    {children}
    <header className="max-w-screen w-full mx-auto pt-7 pb-3 flex items-center gap-[103px] py-2 h-[84px] min-[1440px]:h-fit min-h-fit px-4 md:px-8 min-[1440px]:px-28 mb-4">
    <Link href={"/"}>
    <Image
        src="/logo.png"
        alt="Rozgaar pakistan"
        width={90}
        height={90}
        priority={true}
        draggable={false}
        className="select-none md:h-[8rem] h-[6rem] paspect-square object-cover"
        />
        </Link>
      <Navbar links={links} />
      <div className="flex justify-center items-center gap-4 ml-auto">
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
