"use client";
import { useState, useEffect } from "react";
import { Container } from "../common/Container";
import Image from "next/image";
import Link from "next/link";
import { Loader } from "../common/Loader";
import { Layout } from "../common/Layout";
import { useGetEventsQuery } from "@/graphql/generated/schema";
export interface EventList {
  id: string;
  attributes: {
    name: string;
    location: string;
    date: string;
    about: string;
    img: string;
    address: {
      lat: string;
      lng: string;
    };
  };
}
export const Event = () => {
  const [text, setText] = useState("Welcome To The Revolution");
  const { data, loading } = useGetEventsQuery()
  const animationSpeed = 100; // Speed in milliseconds (adjust as needed)
  const upcomingEvents = data?.getEvents?.upcomingEvents
  const pastEvents = data?.getEvents?.pastEvents

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
        <Layout>
          <div className="relative top-0 h-[400px] md:h-screen">
            <Image
              src='/img/events1.jpg'
              fill
              objectFit="cover"
              alt="Home"
            />
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
            <div className="flex flex-col gap-8 mt-20">
              <h2 className="text-2xl md:text-4xl">
                Events <span className="font-bold text-red-600">List</span>
              </h2>
              <h2 className="text-xl md:text-4xl text-center">
                Upcoming <span className="font-bold text-primary">Events</span>
              </h2>
              <div className="flex flex-col items-center">
                {upcomingEvents?.map((item) => (
                  <Link
                    className="border-[#6a60604d] border-b grid grid-cols-3 w-[100%] md:p-8 md:text-2xl text-center p-4 items-center hover:scale-110 transition-transform hover:border-red-400"
                    key={item?._id}
                    href={{
                      pathname: `/event/${item?._id}`,
                     
                    }}
                    aria-label={`navigate to ${item?.name} event`}
                  >
                    <span>{item?.date}</span>
                    <h2 className="font-bold">{item?.name}</h2>
                    <h3 className="font-semibold">
                      {item?.location}
                    </h3>
                  </Link>
                ))}
              </div>
              <h2 className="text-xl md:text-4xl text-center">
                Past <span className="font-bold text-secondary">Events</span>
              </h2>
              <div className="flex flex-col items-center">
                {pastEvents?.map((item) => (
                  <div
                    className="border-[#6a60604d] border-b grid grid-cols-3 w-[100%] md:p-8 md:text-2xl text-center p-4 items-center opacity-[.3]"
                    key={item?._id}
                    // href={{
                    //   pathname: `/event/${item.attributes.name}`,
                    //   query: { a: item.id },
                    // }}
                    aria-label={`navigate to ${item?.name} event`}
                  >
                    <span>{item?.date}</span>
                    <h2 className="font-bold">{item?.name}</h2>
                    <h3 className="font-semibold">
                      {item?.location}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Layout>
      )}
      {loading && <Loader />}
    </>
  );
};
