import React from "react";
import { Container } from "../common/Container";
import Image from "next/image";

export const ContactSect = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-col gap-4 py-10">
      {data.moreInfo && (
        <div className="flex w-full items-center">
          <div className="bg-black w-full p-12 flex flex-col items-end hover:transition-width hover:scale-110 transition-transform">
            <h2 className="flex gap-2 items-center text-xs lg:text-lg">
              {data.moreInfo.email}
              <span>
                <Image
                  src="/img/icon_msg.svg"
                  width={20}
                  height={20}
                  alt="email"
                  className="w-[15px] md:[w-2px]"
                />
              </span>
            </h2>
            <h2 className="flex gap-2 items-center text-xs lg:text-lg">
              {data.moreInfo.phone}
              <span>
                <Image
                  src="/img/whatsapp_red.png"
                  width={20}
                  height={20}
                  alt="email"
                  className="w-[15px] md:[w-25px]"
                />
              </span>
            </h2>
          </div>
          <div className="text-xs lg:text-2xl text-red-500 font-semibold w-full text-center p-2">
            <h2> {data.moreInfo.label}</h2>
          </div>
        </div>
      )}
      {data.bookingQuery && (
        <div className="flex w-[100%] items-center ">
          <div className="text-xs lg:text-2xl text-red-500 font-semibold w-full p-2 text-center">
            <h2> {data.bookingQuery.label}</h2>
          </div>
          <div className="bg-black w-full p-10 flex flex-col items-start hover:scale-110 transition-transform">
            <h2 className="text-xs lg:text-lg flex gap-2 items-center ">
              {data.bookingQuery.email}
              <span>
                <Image
                  src="/img/icon_msg.svg"
                  width={20}
                  height={20}
                  alt="email"
                  className="w-[15px] md:[w-2px]"
                />
              </span>
            </h2>
          </div>
        </div>
      )}
      {data.conversation && (
        <div className="flex w-full items-center">
          <div className="bg-black w-full p-12 flex flex-col items-end hover:scale-110 transition-transform">
            <h2 className="text-xs lg:text-lg flex gap-2 items-center">
              {data.conversation.email1}
              <span>
                <Image
                  src="/img/icon_msg.svg"
                  width={20}
                  height={20}
                  alt="email"
                  className="w-[15px] md:[w-2px]"
                />
              </span>
            </h2>
            <h2 className="text-xs lg:text-lg flex gap-2 items-center">
              {data.conversation.email2}
              <span>
                <Image
                  src="/img/whatsapp_red.png"
                  width={20}
                  height={20}
                  alt="email"
                  className="w-[15px] md:[w-2px]"
                />
              </span>
            </h2>
          </div>
          <div className="text-xs lg:text-2xl text-red-500 font-semibold w-full text-center p-2">
            <h2>{data.conversation.label}</h2>
          </div>
        </div>
      )}
    </div>
  );
};
