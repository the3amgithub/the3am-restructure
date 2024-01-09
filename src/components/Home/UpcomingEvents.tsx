import React from "react";
import { Container } from "../common/Container";
import Image from "next/image";
import { PrimaryButton } from "../common/Buttons/PrimaryButton";
import { EventsQuery } from "@/graphql/query";
import { useQuery } from "@apollo/client";
import { EventList } from "../Event";
import Link from "next/link";
import moment from "moment";
import { useGetEventsQuery } from "@/graphql/generated/schema";

export const UpcomingEvents = () => {
  const { data, loading } = useGetEventsQuery();
  const upcomingEvents = data?.getEvents?.upcomingEvents;
  const img = "/img/event-bg.jpg";
  return (
    <div className="relative w-full h-[500px] h-auto">
      <Image src={img} layout="fill" objectFit="cover" alt="Home" />

      <Container>
        <div className="w-full mt-16 md:mt-32">
          <h2 className="relative text-4xl">
            Upcoming <span className="font-bold">Events</span>
          </h2>
          <div className="relative mt-8 md:m-24 flex flex-col items-center">
            {upcomingEvents?.map((item) => (
              <Link
                className="border-t border-b grid grid-cols-3 w-[100%] md:p-8 md:text-2xl text-center p-4 items-center"
                key={item?._id}
                href={{
                  pathname: `/event/${item?.name}`,
                  query: { a: item?._id },
                }}
              >
                <span>{item?.date}</span>
                <h2 className="font-bold">{item?.name}</h2>
                <h3 className="font-semibold">{item?.location}</h3>
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
