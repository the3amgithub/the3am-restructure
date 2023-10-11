"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../Container";

const navLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Gallery",
    url: "/gallery",
  },
  {
    name: "Explore",
    url: "/explore",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];
export const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <header className="bg-black">
      <Container>
        <div className="flex justify-between items-center text-white">
          <Image
            src="/img/logo_white.png"
            width={120}
            height={100}
            alt="logo"
            className="w-[80px] md:w-[120px] lg:w-[120px]"
          />
          <div className="hidden lg:flex gap-32 font-semibold">
            {navLinks.map((item) => (
              <Link href={item.url} key={item.name}>
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
                  className="w-[80px] md:w-[120px] lg:w-[120px]"
                />
                <Image
                  src="/img/close.png"
                  width={20}
                  height={20}
                  alt="logo"
                  className="absolute right-6 md:right-10 top-12 cursor-pointer"
                  onClick={() => setMenuActive(false)}
                />
                {navLinks.map((item) => (
                  <Link href={item.url} key={item.name}>
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};
