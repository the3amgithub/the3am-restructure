"use client";
import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { twMerge } from "tailwind-merge";
import { motion, useAnimation } from "framer-motion";
import { Timer } from "../Timer";
import { useGetEventsQuery } from "@/graphql/generated/schema";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const controls = useAnimation();
  const { data, loading } = useGetEventsQuery();
  const upcomingEvents = data?.getEvents?.upcomingEvents;
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);

      const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
      };

      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };

      const debounceScroll = debounce(handleScroll, 50);

      window.addEventListener("scroll", debounceScroll, { passive: true });
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("scroll", debounceScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    let threshold = 1400; // default threshold

    if (screenWidth < 640) {
      threshold = 600;
    } else if (screenWidth < 1024) {
      threshold = 1000;
    }

    if (scrollPosition < threshold) {
      controls.start({
        backgroundImage:
          "linear-gradient(to right top, #000000, #150e12, #20181f, #29212e, #2e2c3f, #2c3247, #27394e, #224054, #1d4251, #1d434d, #204448, #254543)",
        transition: { duration: 0.8, ease: "easeInOut" },
      });
    } else {
      controls.start({
        backgroundImage:
          "linear-gradient(to right top, #254543, #12484f, #004a5e, #004b6d, #1c4978, #1c4978, #1c4978, #1c4978, #004b6d, #004a5e, #12484f, #254543)",
        transition: { duration: 0.8, ease: "easeInOut" },
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
        {upcomingEvents && upcomingEvents?.length > 0 && <Timer />}
        <Header />
      </div>
      <div className={twMerge(upcomingEvents&&upcomingEvents.length>0&& "mt-32")}>{children}</div>
      <Footer />
    </motion.div>
  );
};

// Debounce function
function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(args), wait);
  };
}
