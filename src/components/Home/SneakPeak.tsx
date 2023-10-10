import React from "react";
import { Container } from "../common/Container";
import Link from "next/link";
import Image from "next/image";

export const SneakPeak = () => {
  return (
    <Container>
      <div className="flex justify-between text-black py-20 px-10 items-center">
        <h2 className="capitalize text-5xl leading-[60px]">
          A Sneak Peek Into <br />
          The 3am Experience
        </h2>
        <div className="flex gap-10">
          <Link
            href="https://www.instagram.com/the3am_project/"
            target="_blank"
          >
            <Image
              src="/img/insta_img.jpg"
              alt="instagram"
              width={150}
              height={100}
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
            />
          </Link>
        </div>
      </div>
    </Container>
  );
};
