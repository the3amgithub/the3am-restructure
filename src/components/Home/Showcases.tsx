/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container } from "../common/Container";
import { CustomSlider } from "../common/Slider";
import { Card, CardHeader, Image } from "@nextui-org/react";
import { motion } from "framer-motion";

export const arrData = [
  {
    name: "IhateModels",
    img: "/img/hate.jpg",
  },
  {
    name: "Korolova",
    img: "/img/korolova.jpg",
  },
  {
    name: "Monolink",
    img: "/img/monolink.jpg",
  },
  {
    name: "Stephan",
    img: "/img/video1.jpg",
  },
  {
    name: "IhateModels",
    img: "/img/hate.jpg",
  },
  {
    name: "Korolova",
    img: "/img/korolova.jpg",
  },
];
export const Showcases = () => {
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl">
          Line <span className="font-bold text-primary">Up</span>
        </h2>
        <p className="text-sm text-gray-400 capitalize">
          Explore our diverse artist list!
          <br />
          From legendary icons to fresh new talent, find out who's performing
          and <br /> get ready for an unforgettable musical journey
        </p>
        <CustomSlider>
          {arrData.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 0.9 }}
            >
              <Card className="col-span-12 sm:col-span-4 lg:w-[300px] md:w-[280px] h-[300px]">
                <CardHeader className="absolute z-10 flex-col bg-black/20 h-full">
                  <h4 className="text-white font-medium text-large text-center">
                    {item.name}
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src={item.img}
                />
              </Card>
            </motion.div>
          ))}
        </CustomSlider>
      </div>
    </Container>
  );
};
