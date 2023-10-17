import React from "react";
import { Container } from "../common/Container";
import Image from "next/image";
import { BoilerCard } from "./BoilerCard";

export const BoilerRoom = () => {
  return (
    <div className="bg-black py-4">
      <Container>
        <h2 className="relative text-4xl">
          Boiler <span className="font-bold">Room</span>
        </h2>
      </Container>
      <div className="flex">
        <div className="flex flex-col w-[200px] h-[400px] md:h-[500px] md:min-w-[300px] lg:h-[600px] lg:min-w-[500px]">
          <BoilerCard img="/img/1-12.jpg" label="Lamisa" />
          <BoilerCard label="Korolva" img="/img/1-32.jpg" />
        </div>
        <div className="w-[200px] h-[400px] lg:h-[600px] md:h-[500px] md:min-w-[300px]  lg:min-w-[500px]">
          <BoilerCard img="/img/video.jpg" label="Cark Cox" />
        </div>
        <div className="flex flex-col w-[200px] h-[400px] md:h-[500px] md:min-w-[300px] lg:h-[600px] lg:min-w-[500px]">
          <BoilerCard img="/img/1-12.jpg" label="Lamisa" />
          <BoilerCard label="Korolva" img="/img/1-32.jpg" />
        </div>
      </div>
    </div>
  );
};
