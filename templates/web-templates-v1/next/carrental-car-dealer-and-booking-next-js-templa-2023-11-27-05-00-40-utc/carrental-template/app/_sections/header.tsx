"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import TopBar from "./top-bar";
import { PiShareNetwork } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

export default function Header() {
  const currentRoute = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  function toggleMenu() {
    setNavOpen(!navOpen);
  }

  const MainMenu = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Hot deals", href: "/hot-deals" },
    { label: "Cars", href: "/cars" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Contact us", href: "/contact" },
  ];

  return (
    <>
      <TopBar />
      <header className="header px-3 xl:px-0 py-5 lg:py-9 relative">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/logo.png" width={200} height={30} alt="Logo" />
          </Link>
          <div className="flex-grow"></div>
          <nav className="uppercase font-semibold absolute md:relative md:block z-20 top-[100%] md:top-auto w-full md:w-auto left-0">
            <div
              className={`grid w-full md:w-auto md:flex gap-2 lg:gap-6 2xl:gap-10 bg-gray-100 md:bg-transparent p-12 md:p-0 place-items-center 
              transition-all ease-in-out
              ${
                !navOpen &&
                "opacity-0 md:opacity-100 invisible md:visible h-0 md:h-full"
              }`}
            >
              {MainMenu.map((link, index) => (
                <Link
                  key={index}
                  className={`leading-5 pb-1 pt-1 hover:text-black relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-orange-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left
                  ${currentRoute === link.href && "after:scale-x-100"}
                  `}
                  href={link.href}
                  onClick={() => setNavOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
          <div className="flex-grow lg:block"></div>

          <div className="flex gap-1">
            <button
              className="px-3 block md:hidden"
              onClick={toggleMenu}
              aria-label="Mobile menu toggle"
            >
              <div className="flex p-2 bg-orange-500 w-[32px] h-[32px] items-center text-center">
                {navOpen ? (
                  <IoCloseSharp className="text-white" />
                ) : (
                  <GiHamburgerMenu className="text-white" />
                )}
              </div>
            </button>
            <div className="flex p-2 bg-orange-500 w-[32px] h-[32px] items-center">
              <Link href={"/hot-deals"}>
                <PiShareNetwork
                  className="text-white mx-auto"
                  aria-label="Social Links"
                  width={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
