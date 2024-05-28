/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container } from "../common/Container";
import { useGetEventsQuery } from "@/graphql/generated/schema";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
} from "@nextui-org/react";
import { CustomSlider } from "../common/Slider";
import { motion } from "framer-motion";
import { myLoader } from "@/utils/ImgLoader";
import Image from "next/image";
import Link from "next/link";
export const arrData = [
  {
    name: "Monolink",
    img: "/img/Monolink.jpeg",
    venue: "Goa",
    date: "25 Jun, 2024",
  },
  {
    name: "Abc",
    img: "/img/video.jpg",
    venue: "Goa",
    date: "25 Jul, 2024",
  },
  {
    name: "zyx",
    img: "/img/events.jpg",
    venue: "Goa",
    date: "25 Jul, 2024",
  },
  {
    name: "Monolink",
    img: "/img/Monolink.jpeg",
    venue: "Goa",
    date: "25 Jul, 2024",
  },
  {
    name: "Abc",
    img: "/img/video.jpg",
    venue: "Goa",
    date: "25 Jul, 2024",
  },
  {
    name: "zyx",
    img: "/img/events.jpg",
    venue: "Goa",
    date: "25 Jul, 2024",
  },
];
export const UpcomingEvents = () => {
  const { data, loading } = useGetEventsQuery();
  const upcomingEvents = data?.getEvents?.upcomingEvents;

  return (
    <Container>
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl">
          Upcoming <span className="font-bold text-primary">Events</span>
        </h2>
        <p className="text-sm text-gray-400 capitalize">
          Dive into the pulsating world of techno with our curated lineup of
          <br />
          upcoming events. From underground raves to electrifying club nights,
          <br />
          immerse yourself in the beats that ignite the dance floor.
        </p>
      </div>
      {upcomingEvents && upcomingEvents?.length > 0 ? (
        <CustomSlider>
          {upcomingEvents.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 0.8 }}
              whileTap={{ scale: 0.8 }}
            >
              <Card className="lg:w-[300px] md:w-[280px] h-[300px] bg-black/20 text-white p-2 mt-4">
                <CardHeader className="flex-col items-start">
                  <h2 className="uppercase font-bold">{item?.name}</h2>
                  <small>{item?.location}</small>
                  <small>{item?.date}</small>
                </CardHeader>
                <CardBody className="overflow-hidden">
                  <Image
                    alt="Card background"
                    className="w-[300px] h-[160px] object-cover rounded-xl pb-6 rounded "
                    loader={() => myLoader(item?.banner || "")}
                    src={`${process.env.NEXT_PUBLIC_API_IMG_URL}/${item?.banner}`}
                    width={300}
                    height={160}
                  />
                </CardBody>
                <CardFooter className="flex gap-4 items-center">
                  <Link href={`/event/${item?._id}`}>
                    <Button className="text-tiny text-white bg-primary/40 border w-20 h-[25px]">
                      Info
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </CustomSlider>
      ) : (
        <h1 className="relative flex justify-center text-2xl md:text-3xl font-semibold gap-3 mt-10">
          <span>Events Updating</span>
          <span className="text-primary">Soon</span>
        </h1>
      )}
    </Container>
  );
};
