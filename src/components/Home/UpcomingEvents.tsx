import React from "react";
import { Container } from "../common/Container";
import Link from "next/link";
import { PrimaryButton } from "../common/Buttons/PrimaryButton";

export const UpcomingEvents = () => {
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
    <div
      className="w-full h-[500px] md:h-[800px] bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${img})` }}
    >
      <Container>
        <div className="w-full mt-16 md:mt-32">
          <h2 className="text-4xl ">
            Upcoming <span className="font-bold">Events</span>
          </h2>
          <div className="mt-8 md:m-24 flex flex-col items-center">
            {eventsList.map((item) => (
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
              <PrimaryButton label="CHECK ALL" link="/" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
