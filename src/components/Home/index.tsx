"use client";
import { Description } from "./Description";
import { useEffect, useState } from "react";
import { UpcomingEvents } from "./UpcomingEvents";
import Image from "next/image";
import { BoilerRoom } from "./BoilerRoom";
import { Layout } from "../common/Layout";
export const Home = () => {
  const [text, setText] = useState("Join The Techno Revolution");

  const animationSpeed = 100; // Speed in milliseconds (adjust as needed)
  const boilerRoom = [
    {
      name: "Monolink",
      img: "/img/Monolink.jpeg",
    },
    {
      name: "Korolova",
      img: "/img/1-32.jpg",
    },
    {
      name: "Stephan",
      img: "/img/video.jpg",
    },
    {
      name: "Monolink",
      img: "/img/Monolink.jpeg",
    },
    {
      name: "Korolova",
      img: "/img/1-32.jpg",
    },
  ];

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
      <Layout>
        <div className="flex flex-col">
          <div className="relative h-[400px] md:h-screen">
            <Image
              src="/img/banner.jpg"
              fill
              objectFit="cover"
              alt="Home"
              priority
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

          <div className="relative mt-10 flex flex-col gap-8 w-full">
            <Description />
            <UpcomingEvents />
            <BoilerRoom data={boilerRoom} />
          </div>
        </div>
      </Layout>
    </>
  );
};
