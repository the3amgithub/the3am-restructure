"use client";
import { useState, useEffect } from "react";
import { Container } from "../common/Container";
import { EventCard } from "./EventCard";

export const Event = () => {
  const img = "/img/events.jpg";
  const [text, setText] = useState("Welcome To The Revolution");

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
    <div className="flex flex-col ">
      <div
        className="h-[400px] md:h-[800px]  lg:h-screen bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${img})` }}
      >
        <h1 className="relative top-[40%] left-10 lg:left-24 text-4xl md:text-6xl font-semibold leading-[50px] md:leading-[82px]">
          <span>{text.slice(0, 8)}</span>
          <br />
          <span>{text.slice(8, 15)}</span>
          <br />
          <span className="font-bold text-4xl md:text-6xl text-primary">
            {text.slice(15)}
          </span>
        </h1>
      </div>

      <Container>
        <div className="mt-8 flex flex-col gap-8">
          <h2 className="text-4xl text-black">
            Events <span className="font-bold text-red-600">List</span>
          </h2>
          <div className="flex flex-col items-center gap-10 md:flex-row md:flex-wrap justify-around">
            <EventCard />
            <EventCard /> <EventCard /> <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
      </Container>
    </div>
  );
};
