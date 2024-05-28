import Image from "next/image";
import React from "react";
import { TbCalendar, TbPin } from "react-icons/tb";

export const EventCard = () => {
  return (
    <div className="flex flex-col gap-2 text-black w-[300px] border-2 rounded-md hover:transition-width hover:scale-110 transition-transform">
      <Image src="/img/video.jpg" width={300} height={300} alt="event" />

      <div className="flex justify-around border-b-2 text-red-600 p-2">
        <span className="flex items-center gap-1">
          <h2 className="text-xl">
            <TbCalendar />
          </h2>
          <h2 className="text-lg"> October 26,2023</h2>
        </span>
        |
        <span className="flex items-center gap-1">
          <h2>
            <TbPin />
          </h2>
          <h1>Goa</h1>
        </span>
      </div>

      <h2 className="text-center font-semibold p-2">KOROLOVA</h2>
    </div>
  );
};
