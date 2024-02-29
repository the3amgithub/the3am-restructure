import React, { useEffect, useState } from "react";
import { Container } from "../common/Container";
import Image from "next/image";
import { PrimaryButton } from "../common/Buttons/PrimaryButton";
import Link from "next/link";
import { useGetEventsQuery } from "@/graphql/generated/schema";
import { text } from "stream/consumers";

export const UpcomingEvents = () => {
  const { data, loading } = useGetEventsQuery();
  const upcomingEvents = data?.getEvents?.upcomingEvents;
  const img = "/img/event-bg.jpg";

  return (
    <div className="relative w-full min-h-[300px] md:min-h-[500px] h-auto py-6">
      <Image src={img} layout="fill" objectFit="cover" alt="Home" />

      <Container>
        <div className="w-full mt-16 md:mt-32">
          <h2 className="relative text-4xl">
            Upcoming <span className="font-bold">Events</span>
          </h2>
          {upcomingEvents && upcomingEvents?.length > 0 ? (
            <div className="relative mt-8 md:m-24 flex flex-col items-center">
              {upcomingEvents?.map((item) => (
                <Link
                  className="border-t border-b grid grid-cols-3 w-[100%] md:p-8 md:text-2xl text-center p-4 items-center"
                  key={item?._id}
                  href={{
                    pathname: `/event/${item?._id}`,
                  }}
                >
                  <span>{item?.date}</span>
                  <h2 className="font-bold">{item?.name}</h2>
                  <h3 className="font-semibold">{item?.location}</h3>
                </Link>
              ))}
              {upcomingEvents && upcomingEvents?.length > 0 && (
                <div className="mt-8">
                  <PrimaryButton label="CHECK ALL" link="/event" />
                </div>
              )}
            </div>
          ) : (
            <h1 className="relative flex justify-center text-2xl md:text-3xl font-semibold gap-3 mt-10">
              <span>Updating</span>
              <span className="text-primary">Soon</span>
            </h1>
          )}
        </div>
      </Container>
    </div>
  );
};
