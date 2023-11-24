import React from "react";
import { Container } from "../common/Container";
import Image from "next/image";
import { PrimaryButton } from "../common/Buttons/PrimaryButton";

interface UpcomingEvent {
  name: string;
  location: string;
  date: string;
}
export const UpcomingEvents = ({ data }: { data: UpcomingEvent[] }) => {
  const eventsList = [
    {
      name: "Carl Cox",
      date: "26 Nov,23",
      location: "Goa",
    },
    {
      name: "Korolova ",
      date: "20 Dec,23",
      location: "Mumbai",
    },
    {
      name: "Stephan Bodzin",
      date: "31 Dec,23",
      location: "Delhi",
    },
  ];
  const img = "/img/event-bg.jpg";
  return (
    <div className="relative w-full h-[500px] md:h-[800px]">
      <Image src={img} layout="fill" objectFit="cover" alt="Home" />

      <Container>
        <div className="w-full mt-16 md:mt-32">
          <h2 className="relative text-4xl">
            Upcoming <span className="font-bold">Events</span>
          </h2>
          <div className="relative mt-8 md:m-24 flex flex-col items-center">
            {data.map((item) => (
              <div
                className="border-t border-b grid grid-cols-3 w-[100%] md:p-8 md:text-2xl text-center p-4 items-center"
                key={item.name}
              >
                <span>{item.date}</span>
                <h2 className="font-bold">{item.name}</h2>
                <h3 className="font-semibold">{item.location}</h3>
              </div>
            ))}
            <div className="mt-8">
              <PrimaryButton label="CHECK ALL" link="/event" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
