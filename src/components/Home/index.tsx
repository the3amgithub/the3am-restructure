"use client";
import { useQuery } from "@apollo/client";
import { HomeQuery } from "@/graphql/query";
import { CustomSlider } from "../common/Slider";
import { Banner } from "./Banner";
import { Description } from "./Description";
import { Specification } from "./Specification";
import { OurArtists } from "./OurArtists";
import { SneakPeak } from "./SneakPeak";
import { Loader } from "../common/Loader";
import { useEffect, useState } from "react";
import { UpcomingEvents } from "./UpcomingEvents";
import Image from "next/image";
import { EventVideo } from "./EventVideo";
export const Home = () => {
  const { data, loading } = useQuery(HomeQuery);
  const homeData = data?.homes?.data[0]?.attributes;
  const img = "/img/banner.jpg";
  const [text, setText] = useState("join the techno revolution");

  const animationSpeed = 100; // Speed in milliseconds (adjust as needed)

  useEffect(() => {
    let currentIndex = 0;
    let isAnimating = true;

    const animateText = () => {
      if (isAnimating) {
        setText(text.slice(0, currentIndex + 1));
        currentIndex++;

        if (currentIndex === text.length) {
          isAnimating = false;
          setTimeout(() => {
            isAnimating = true;

            currentIndex = 0;
          }, 1000); // Delay before starting again (e.g., 1000ms or 1 second)
        } else {
          setTimeout(animateText, animationSpeed);
        }
      }
    };

    animateText();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="relative  h-screen">
        <Image src={img} layout="fill" objectFit="cover" alt="Home" />
        <h1 className="relative top-[20%] lg:top-[40%] left-10 lg:left-24 text-4xl md:text-6xl font-semibold leading-[50px] md:leading-[82px]">
          <span>{text.slice(0, 9)}</span>
          <br />
          <span className="font-bold text-4xl md:text-6xl text-primary">
            {text.slice(9, 15)}
          </span>
          <br />
          <span>{text.slice(15)}</span>
        </h1>
      </div>
      {/* {data && ( */}
      <div className="relative mt-10 flex flex-col gap-8 w-full">
        <Description img={homeData?.description?.data?.attributes.url || ""} />
        <UpcomingEvents />
        <EventVideo />
      </div>
      {/* )} */}
      {loading && <Loader />}
    </div>
  );
};
