import React from "react";
import { Container } from "../common/Container";
import { BoilerCard } from "./BoilerCard";

interface BoilerRoom {
  name: string;
  img: string;
}
export const BoilerRoom = ({ data }: { data: BoilerRoom[] }) => {
  return (
    <div className="bg-[#24242f] py-4">
      <Container>
        <h2 className="relative text-4xl">
          Boiler <span className="font-bold">Room</span>
        </h2>
      </Container>

      <div className="flex">
        <div className="flex flex-col w-[200px] h-[400px] md:h-[500px] md:min-w-[300px] lg:h-[600px] lg:w-[34%]">
          <BoilerCard img={data[0].img} label={data[0].name} />
          <BoilerCard img={data[1].img} label={data[1].name} />
        </div>
        <div className="w-[200px] h-[400px] lg:h-[600px] md:h-[500px] md:min-w-[300px] lg:w-[34%]">
          <BoilerCard img={data[2].img} label={data[2].name} />
        </div>
        <div className="flex flex-col w-[200px] h-[400px] md:h-[500px] md:min-w-[300px] lg:h-[600px] lg:w-[34%]">
          <BoilerCard img={data[3].img} label={data[3].name} />
          <BoilerCard img={data[4].img} label={data[4].name} />
        </div>
      </div>
    </div>
  );
};
