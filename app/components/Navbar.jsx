"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();

  const linkClass = (path) =>
    router.pathname === path
      ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-between md:items-stretch md:justify-start">
            <Link href="/" className="flex items-center">
              <Image
                className="h-full w-auto"
                src={"/logo.png"}
                alt="React Jobs"
                width={40}
                height={40}
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Rozgaar Pakistan
              </span>
            </Link>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <Link href="/" className={linkClass("/")}>
                  Home
                </Link>
                <Link href="/jobs" className={linkClass("/jobs")}>
                  Jobs
                </Link>
                <Link href="/contact" className={linkClass("/add-job")}>
                  About us
                </Link>
                <Link href="/contact" className={linkClass("/add-job")}>
                  Collections
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
