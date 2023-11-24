"use client";
import { contactQuery } from "@/graphql/query";
import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { ContactSect } from "./ContactSect";
import { Loader } from "../common/Loader";
import { myLoader } from "@/utils/ImgLoader";
import Image from "next/image";
export const Contact = () => {
  const [text, setText] = useState("Get In Touch");
  const { data, loading } = useQuery(contactQuery);
  const contactData = data?.contacts?.data[0]?.attributes;
  const animationSpeed = 100; // Speed in milliseconds (adjust as needed)

  useEffect(() => {
    let currentIndex = 0;
    let isAnimating = true;

    const animateText = () => {
      if (isAnimating) {
        setText(text.slice(0, currentIndex + 1));
        currentIndex++;

        if (currentIndex === text.length) {
          isAnimating = false;
          setTimeout(() => {
            isAnimating = true;

            currentIndex = 0;
          }, 1000); // Delay before starting again (e.g., 1000ms or 1 second)
        } else {
          setTimeout(animateText, animationSpeed);
        }
      }
    };

    animateText();
  }, []);
  return (
    <>
      {data && (
        <>
          <div className="relative top-0 h-[400px] md:h-screen">
            <Image
              loader={() => myLoader(contactData?.banner || "")}
              src={`${process.env.NEXT_PUBLIC_API_URL_FILE}${contactData?.banner}`}
              fill
              objectFit="cover"
              alt="Home"
            />
            <h1 className="relative top-[40%] left-10 lg:left-24 text-4xl md:text-6xl font-semibold leading-[50px] md:leading-[82px]">
              <span>{text.slice(0, 6)}</span>
              <br />
              <span>{text.slice(7, 15)}</span>
              <br />
              <span className="font-bold text-4xl md:text-6xl text-primary">
                {text.slice(15)}
              </span>
            </h1>
          </div>
          <div className="flex flex-col gap-10">
            <ContactSect data={contactData.information} />
          </div>
        </>
      )}

      {loading && <Loader />}
    </>
  );
};
