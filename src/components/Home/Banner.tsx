"use client";
import { myLoader } from "@/utils/ImgLoader";
import Image from "next/image";
import { Container } from "../common/Container";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export const Banner = ({ img }: { img: string }) => {
  const [largeImage, setLargeImage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLargeImage(true);
    }, 1000);
  }, []);

  return (
    <div className="bg-black">
      <Container>
        <div className="absolute top-0 left-0 flex justify-center">
          <Image
            // loader={() => myLoader(img)}
            src='/img/banner.jpg'
            width={300}
            height={500}
            alt="banner"
            className="w-full"
          />
        </div>
      </Container>
    </div>
  );
};
