import React from "react";
import { Container } from "../common/Container";
import Image from "next/image";
import { PrimaryButton } from "../common/Buttons/PrimaryButton";
import { EventsQuery } from "@/graphql/query";
import { useQuery } from "@apollo/client";
import { EventList } from "../Event";
import Link from "next/link";
import moment from "moment";

interface UpcomingEvent {
  name: string;
  location: string;
  date: string;
}
export const UpcomingEvents = () => {
  const { data, loading } = useQuery(EventsQuery);
  const eventsData = data?.events?.data[0]?.attributes;
  const upcomingEvents = eventsData?.event_details?.data?.filter(
    (item: EventList) =>
      moment(item.attributes.date).format() >= moment().format()
  );
  const img = "/img/event-bg.jpg";
  return (
    <div className="relative w-full h-[500px] md:max-h-[800px]">
      <Image src={img} layout="fill" objectFit="cover" alt="Home" />

      <Container>
        <div className="w-full mt-16 md:mt-32">
          <h2 className="relative text-4xl">
            Upcoming <span className="font-bold">Events</span>
          </h2>
          <div className="relative mt-8 md:m-24 flex flex-col items-center">
            {upcomingEvents?.map((item: EventList) => (
              <Link
                className="border-t border-b grid grid-cols-3 w-[100%] md:p-8 md:text-2xl text-center p-4 items-center"
                key={item.id}
                href={{
                  pathname: `/event/${item.attributes.name}`,
                  query: { a: item.id },
                }}
              >
                <span>{item.attributes.date}</span>
                <h2 className="font-bold">{item.attributes.name}</h2>
                <h3 className="font-semibold">{item.attributes.location}</h3>
              </Link>
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
