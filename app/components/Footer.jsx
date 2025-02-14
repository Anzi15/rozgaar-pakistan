"use client";
import Link from "next/link";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaWhatsappSquare } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";

// Array for quick links and sitemap
const LINKS = [
  {
    title: "Quick Links",
    items: [
      { label: "Home", href: "/" },
      { label: "Blogs", href: "/blogs" },
      { label: "Cities", href: "/cities" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Sitemap",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Careers", href: "/careers" },
    ],
  },
];

// Array for social media links
const SOCIAL_LINKS = [
  {
    href: "https://wa.me/923360398419?text=Hello, I am contacting you from your website.",
    icon: <FaWhatsappSquare className="text-4xl transition-all hover:scale-105" />,
  },
  {
    href: "https://www.facebook.com/RozgaarPakistan/",
    icon: <FaFacebookSquare className="text-4xl transition-all hover:scale-105" />,
  },
  {
    href: "https://twitter.com/rozgarpakistan",
    icon: <FaTwitterSquare className="text-4xl transition-all hover:scale-105" />,
  },
  {
    href: "https://www.youtube.com/c/RozGaarPakistan",
    icon: <AiFillYoutube className="text-4xl transition-all hover:scale-105" />,
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white z-10">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          {/* Dynamically generate quick links and sitemap */}
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

        <hr className="my-6 border-gray-200 md:my-8 h-2" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="font-sans p-8 text-start md:text-center md:text-lg md:p-4">
            © {currentYear} Rozgaar Pakistan. All rights reserved.
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
          Designed and Developed By -{" "}
          <Link href="https://anziandco.com" className="underline font-bold" target="_blank">
            Anzi & CO
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
