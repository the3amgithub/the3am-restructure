import React from "react";
import { Container } from "../common/Container";
import { Card, CardFooter, Image } from "@nextui-org/react";
import { CustomSlider } from "../common/Slider";
import { arrData } from "./UpcomingEvents";
import { motion } from "framer-motion";

interface BoilerRoom {
  name: string;
  img: string;
}
const boilerData = [
  {
    name: "Monolink",
    img: "/img/Monolink.jpeg",
  },
];
export const BoilerRoom = ({ data }: { data: BoilerRoom[] }) => {
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl">
          Boiler <span className="font-bold text-primary">Room</span>
        </h2>
        <p className="text-sm text-gray-400 capitalize">
          Unleash the energy with our Boiler Room lineup.
          <br /> Dive into the sounds of the artists who fuel our nights with
          unforgettable live performances. <br />
          Feel the heat, hear the beats.
        </p>
        <CustomSlider>
          {arrData.map((item, i) => (
            <div key={i}>
              <Card
                isFooterBlurred
                className="lg:w-[300px] md:w-[280px] h-[300px] bg-black/20 text-white "
              >
                <motion.span
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.2 }}
                >
                  <Image
                    alt="Woman listing to music"
                    className="z-0 w-full h-full object-cover"
                    src="/img/korolova1.jpg"
                  />
                </motion.span>
                <CardFooter className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <p className="text-white/80 font-bold">Korolova</p>
                </CardFooter>
              </Card>
            </div>
          ))}
        </CustomSlider>
      </div>
    </Container>
  );
};
