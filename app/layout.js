"use client";
import "./globals.css";
import Header from "./components/Header"
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
// import ToastProvider from "./components/ToastProvider"

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideHeaderFooter = pathname === '/checkout' || pathname.startsWith('/admin');
  useEffect(() => {
    if (typeof window !== "undefined" && window.trustedTypes) {
      if (typeof window.trustedTypes.getPolicy === "function" && !window.trustedTypes.getPolicy("default")) {
        window.trustedTypes.createPolicy("default", {
          createHTML: (input) => input,
          createScript: (input) => input,
          createScriptURL: (input) => input,
        });
      }
    }
  }, []);
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
       <link rel="icon" href="/logo.png" type="image/gif" sizes="16x16" />
      </head>
      <body
        className={` antialiased`}
      >
     {
          hideHeaderFooter ? (
            <div className="w-full max-w-screen">
              {children}
            </div>
          ) : (
            <>
              <Header />
              {children}
              <Footer/>
            </>
          )
        }
      </body>
    </html>
  );
}