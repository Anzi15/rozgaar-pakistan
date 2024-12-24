"use client";

import Link from "next/link";
import { Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiBookOpen, HiChartPie, HiInbox, HiMail, HiShoppingBag } from "react-icons/hi";
import { AiFillMoneyCollect } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";

export function AdminSidebar({ expanded = false }) {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowHeight(window.innerHeight);
    }
  }, []);

  return (
    <Sidebar
      aria-label="Admin sidebar"
      className={`md:block md:sticky top-0 ${expanded ? 'block' : 'hidden'} justify-start fixed z-20 h-full pt-8`}
      style={{ height: windowHeight }}
    >
      <Sidebar.Items classNam="flex justify-start">
        <Sidebar.ItemGroup>
          <Link href="/admin" className="flex justify-start">
            <Sidebar.Item icon={HiChartPie}>Dashboard</Sidebar.Item>
          </Link>
          <Link href="/admin/volunteers-requests    " className="flex justify-start">
            <Sidebar.Item icon={HiInbox}>Volunteers</Sidebar.Item>
          </Link>
          <Link href="/admin/inbox    " className="flex justify-start">
            <Sidebar.Item icon={HiMail}>Inbox</Sidebar.Item>
          </Link>
          <Link href="/admin/blogs" className="flex justify-start">
            <Sidebar.Item icon={HiBookOpen}>Blogs</Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default AdminSidebar;
