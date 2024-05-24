import { Button } from "@nextui-org/react";
import React from "react";
import CountdownTimer from "./CountdownTimer"

export const Timer = () => {
  return (
    <div className=" bg-custom-gradient w-full p-2 flex flex-col justify-center items-center gap-2 md:gap-12 md:flex-row">
      <h2 className="font-medium">Latest Event Starts</h2>
      <CountdownTimer />
      <Button className="hidden w-[143px] p-2 md:flex justify-center items-center rounded bg-primary/30 text-sm text-white font-semibold">
       Info
      </Button>
    </div>
  );
};
