"use client";
import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { twMerge } from "tailwind-merge";
import { motion, useAnimation } from "framer-motion";
import { Timer } from "../Timer";

interface LayoutProp {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProp) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    // Only run this code on the client side
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
      const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
      };

      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    let threshold = 1200; // default threshold

    if (screenWidth < 640) {
      // small screens
      threshold = 600;
    } else if (screenWidth < 1024) {
      // medium screens
      threshold = 900;
    } // larger screens use the default threshold

    if (scrollPosition < threshold) {
      controls.start({
        backgroundImage:
          "linear-gradient(to right top, #000000, #150e12, #20181f, #29212e, #2e2c3f, #2c3247, #27394e, #224054, #1d4251, #1d434d, #204448, #254543)",
        transition: { duration: 0.4, ease: "easeInOut" },
      });
    } else {
      controls.start({
        backgroundImage:
          "linear-gradient(to right top, #254543, #1e3d40, #19343c, #172c36, #16242f, #16242f, #16242f, #16242f, #172c36, #19343c, #1e3d40, #254543)",
        transition: { duration: 0.4, ease: "easeInOut" },
      });
    }
  }, [scrollPosition, screenWidth, controls]);

  return (
    <motion.div
      initial={{
        backgroundImage:
          "linear-gradient(to right top, #000000, #150e12, #20181f, #29212e, #2e2c3f, #2c3247, #27394e, #224054, #1d4251, #1d434d, #204448, #254543)",
      }}
      animate={controls}
      className={twMerge(
        "min-h-[100vh] overflow-x-hidden flex flex-col justify-between"
      )}
    >
      <div className="fixed z-[999] w-full">
        <Timer />
        <Header />
      </div>
      <div className="mt-32">{children}</div>
      <Footer />
    </motion.div>
  );
};
