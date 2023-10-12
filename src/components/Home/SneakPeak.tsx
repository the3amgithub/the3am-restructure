import React from "react";
import { Container } from "../common/Container";
import Link from "next/link";
import Image from "next/image";

export const SneakPeak = () => {
  return (
    <Container>
      <div className="flex justify-between text-black items-center pb-10 lg:py-20 lg:px-10">
        <h2 className="capitalize md:text-3xl lg:text-5xl lg:leading-[60px]">
          A Sneak Peek Into <br />
          The 3am Experience
        </h2>
        <div className="flex lg:gap-10">
          <Link
            href="https://www.instagram.com/the3am_project/"
            target="_blank"
          >
            <Image
              src="/img/insta_img.jpg"
              alt="instagram"
              width={150}
              height={100}
              className="w-[80px] md:w-[100px] lg:w-[150px] hover:scale-110 transition-transform"
            />
          </Link>
          <Link
            href="https://www.youtube.com/@The3amProject_Studio"
            target="_blank"
          >
            <Image
              src="/img/yt_img.jpg"
              alt="youtube"
              width={150}
              height={100}
              className="w-[80px] md:w-[100px] lg:w-[150px] hover:scale-110 transition-transform"
            />
          </Link>
        </div>
      </div>
    </Container>
  );
};
