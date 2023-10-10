import React from "react";
import { Container } from "../common/Container";

export const OurArtists = ({ data }: { data: string[] }) => {
  return (
    <div className="bg-black p-4 text-white text-xs lg:p-8 lg:text-lg">
      <h2 className="text-center font-bold text-2xl lg:text-4xl">Our Artists</h2>
     {/* <Container> */}
     <div className="grid grid-cols-3 mt-10 gap-8 text-left lg:text-center font-semibold">
        {data.map((item, i) => (
          <div key={i}>
            <h2>{item}</h2>
          </div>
        ))}
      </div>
     {/* </Container> */}
    </div>
  );
};
