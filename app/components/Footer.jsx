"use client";
import Link from "next/link";
import WhatsAppLeadForm from "./WhatsAppLeadForm.jsx";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaWhatsappSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

// Array for quick links and top collections
const LINKS = [
  {
    title: "Quick Links",
    items: [
      { label: "Home", href: "/" },
      { label: "Donate", href: "/donate" },
      { label: "Who We Are", href: "/about" },
      { label: "Our Blogs", href: "/blogs" },
    ],
  },
  {
    title: "Sitemap",
    items: [
      { label: "Events", href: "/events" },
      { label: "Success Stories", href: "/success-stories" },
      { label: "Meet our Team", href: "/bods" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

// Array for social media links
const SOCIAL_LINKS = [
  {
    href: "https://wa.me/923360398419?text=AoA I am from your website",
    icon: <FaWhatsappSquare className="text-4xl transition-all hover:scale-105" />,
  },
  {
    href: "https://www.facebook.com/PHROPakistan",
    icon: <FaFacebookSquare className="text-4xl transition-all hover:scale-105" />,
  },
  {
    href: "https://x.com/PhroPakistan",
    icon: <FaTwitterSquare className="text-4xl transition-all hover:scale-105" />,
  },
  {
    href: "https://www.tiktok.com/@phro.org",
    icon: <AiFillTikTok className="text-[2.6rem] transition-all hover:scale-105" />,
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-black text-white z-10">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <WhatsAppLeadForm />
          </div>

          {/* Dynamically generate quick links and collections */}
          {LINKS.map((section, index) => (
            <div key={index}>
              <p className="font-semibold text-white text-left">{section.title}</p>
              <div className="flex flex-col items-start mt-5 space-y-2">
                {section.items.map((item, idx) => (
                  <Link key={idx} href={item.href}>
                    <p className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:cursor-pointer">
                      {item.label}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="font-sans p-8 text-start md:text-center md:text-lg md:p-4">
            © {currentYear} Protection & Human Rights Organization (PHRO). All rights reserved.
          </p>

          {/* Dynamically generate social media icons */}
          <div className="flex gap-4 hover:cursor-pointer items-center md:justify-normal justify-center">
            {SOCIAL_LINKS.map((social, idx) => (
              <Link key={idx} href={social.href} target="_blank">
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full text-center">
        <p>
          Designed And Developed By -{" "}
          <Link href="https://anziandco.com" className="underline font-bold" target="_blank">
            Anzi & CO
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
