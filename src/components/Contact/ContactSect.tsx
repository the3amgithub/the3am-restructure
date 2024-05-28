import React from "react";
import { Contact } from "@/graphql/generated/schema";

export const ContactSect = ({ data }: { data: Contact }) => {
  return (
    <div className="flex flex-col gap-4 py-10">
      {data.moreInfo && (
        <div className="flex w-full items-center">
          <div className="bg-black w-full p-12 flex flex-col items-end hover:transition-width hover:scale-110 transition-transform">
            {data.moreInfo.email &&
              data.moreInfo.email.map((item, i) => (
                <h2
                  className="text-xs lg:text-lg flex gap-2 items-center"
                  key={i}
                >
                  {item}
                </h2>
              ))}
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
            {data.bookingQuery.email &&
              data.bookingQuery.email.map((item, i) => (
                <h2
                  className="text-xs lg:text-lg flex gap-2 items-center"
                  key={i}
                >
                  {item}
                </h2>
              ))}
          </div>
        </div>
      )}
      {data.conversation && (
        <div className="flex w-full items-center">
          <div className="bg-black w-full p-12 flex flex-col items-end hover:scale-110 transition-transform">
            {data.conversation.email &&
              data.conversation.email.map((item, i) => (
                <h2
                  className="text-xs lg:text-lg flex gap-2 items-center"
                  key={i}
                >
                  {item}
                </h2>
              ))}
          </div>
          <div className="text-xs lg:text-2xl text-red-500 font-semibold w-full text-center p-2">
            <h2>{data.conversation.label}</h2>
          </div>
        </div>
      )}
    </div>
  );
};
