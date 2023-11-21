"use client";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../Container";
import { CMSModal } from "@/context";
import { twMerge } from "tailwind-merge";

const navLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Events",
    url: "/event",
  },
  {
    name: "Gallery",
    url: "/gallery",
  },
  // {
  //   name: "Tickets",
  //   url: "/ticket",
  // },
  {
    name: "Contact",
    url: "/contact",
  },
];
export const Header = () => {
  const { menuActive, setMenuActive } = useContext(CMSModal);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={twMerge(
        "fixed bg-transparent z-[999] opacity-[.8] w-full",
        scrollPosition > 30 && "bg-black"
      )}
    >
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/" aria-label="navigate to home page">
            <Image
              src="/img/logo_white.png"
              width={120}
              height={100}
              alt="logo"
              className="w-[80px] md:w-[120px] lg:w-[120px] h-[100px]"
            />
          </Link>
          <div className="hidden lg:flex gap-20 font-semibold">
            {navLinks.map((item) => (
              <Link
                href={item.url}
                key={item.name}
                aria-label={`navigate to ${item.name} page`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="lg:hidden ">
            <Image
              src="/img/hamburger.png"
              width={20}
              height={20}
              alt="logo"
              className="cursor-pointer"
              onClick={() => setMenuActive(true)}
            />
            {menuActive && (
              <div className="absolute w-full h-screen bg-black top-0 left-0 flex flex-col gap-6 p-4 z-[999]">
                <Image
                  src="/img/logo_white.png"
                  width={80}
                  height={80}
                  alt="logo"
                  className="w-[90px] md:w-[120px] lg:w-[120px]"
                />
                <Image
                  src="/img/close.png"
                  width={20}
                  height={20}
                  alt="logo"
                  className="absolute right-6 md:right-10 top-12 cursor-pointer"
                  onClick={() => setMenuActive(false)}
                />
                <div className="flex flex-col gap-6 p-2">
                  {navLinks.map((item) => (
                    <Link
                      href={item.url}
                      key={item.name}
                      aria-label={`navigate to ${item.name} page`}
                      onClick={() => setMenuActive(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};
