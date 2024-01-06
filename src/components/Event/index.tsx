"use client";
import { useState, useEffect } from "react";
import { Container } from "../common/Container";
import Image from "next/image";
import Link from "next/link";
import { EventsQuery } from "@/graphql/query";
import { useQuery } from "@apollo/client";
import { myLoader } from "@/utils/ImgLoader";
import { Loader } from "../common/Loader";
import { Layout } from "../common/Layout";
import moment from "moment";
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
  const { data, loading } = useQuery(EventsQuery);
  const eventsData = data?.events?.data[0]?.attributes;
  const animationSpeed = 100; // Speed in milliseconds (adjust as needed)
  const upcomingEvents = eventsData?.event_details?.data?.filter(
    (item: EventList) =>
      moment(item.attributes.date).format() >= moment().format()
  );
  const pastEvents = eventsData?.event_details?.data
    ?.filter(
      (item: EventList) =>
        moment(item.attributes.date).format() < moment().format()
    )
    .sort((a:EventList, b:EventList) =>
      moment(a.attributes.date).format() > moment(b.attributes.date).format() ? -1 : 1
    );

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
              loader={() => myLoader(eventsData?.banner || "")}
              src={`${process.env.NEXT_PUBLIC_API_URL_FILE}${eventsData?.banner}`}
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
                {upcomingEvents?.map((item: EventList) => (
                  <Link
                    className="border-[#6a60604d] border-b grid grid-cols-3 w-[100%] md:p-8 md:text-2xl text-center p-4 items-center hover:scale-110 transition-transform hover:border-red-400"
                    key={item.id}
                    href={{
                      pathname: `/event/${item.attributes.name}`,
                      query: { a: item.id },
                    }}
                    aria-label={`navigate to ${item.attributes.name} event`}
                  >
                    <span>{item.attributes.date}</span>
                    <h2 className="font-bold">{item.attributes.name}</h2>
                    <h3 className="font-semibold">
                      {item.attributes.location}
                    </h3>
                  </Link>
                ))}
              </div>
              <h2 className="text-xl md:text-4xl text-center">
                Past <span className="font-bold text-secondary">Events</span>
              </h2>
              <div className="flex flex-col items-center">
                {pastEvents?.map((item: EventList) => (
                  <div
                    className="border-[#6a60604d] border-b grid grid-cols-3 w-[100%] md:p-8 md:text-2xl text-center p-4 items-center opacity-[.3]"
                    key={item.id}
                    // href={{
                    //   pathname: `/event/${item.attributes.name}`,
                    //   query: { a: item.id },
                    // }}
                    aria-label={`navigate to ${item.attributes.name} event`}
                  >
                    <span>{item.attributes.date}</span>
                    <h2 className="font-bold">{item.attributes.name}</h2>
                    <h3 className="font-semibold">
                      {item.attributes.location}
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
