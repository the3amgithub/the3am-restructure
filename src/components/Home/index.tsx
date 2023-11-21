"use client";
import { useQuery } from "@apollo/client";
import { HomeQuery } from "@/graphql/query";
import { Description } from "./Description";
import { Loader } from "../common/Loader";
import { useEffect, useState } from "react";
import { UpcomingEvents } from "./UpcomingEvents";
import Image from "next/image";
import { EventVideo } from "./EventVideo";
import { BoilerRoom } from "./BoilerRoom";
import { myLoader } from "@/utils/ImgLoader";
export const Home = () => {
  const { data, loading } = useQuery(HomeQuery);
  const homeData = data?.homes?.data[0]?.attributes;
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
    <>
      {data && (
        <div className="flex flex-col">
          <div className="relative h-[400px] md:h-screen">
            <Image
              loader={() => myLoader(homeData?.banner || "")}
              src={`${process.env.NEXT_PUBLIC_API_URL_FILE}${homeData?.banner}`}
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              layout="fill"
              objectFit="cover"
              alt="Home"
            />
            <h1 className="relative top-[40%] left-10 lg:left-24 text-4xl md:text-6xl font-semibold leading-[50px] md:leading-[82px]">
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
            <Description img={homeData?.description || ""} />
            {homeData?.boilerRoom && <BoilerRoom data={homeData?.boilerRoom} />}
            {homeData?.upcomingEvents && (
              <UpcomingEvents data={homeData?.upcomingEvents} />
            )}
            {homeData?.video && <EventVideo data={homeData?.video} />}
          </div>
        </div>
      )}
      {loading && <Loader />}
    </>
  );
};
