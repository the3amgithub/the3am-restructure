import { myLoader } from "@/utils/ImgLoader";
import Image from "next/image";
import { Container } from "../common/Container";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";

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
        <div className="relative flex justify-center">
          <Image
            loader={() => myLoader(img)}
            src={`${process.env.NEXT_PUBLIC_API_URL_FILE}${img}`}
            width={500}
            height={500}
            alt="banner"
            className={twMerge(
              "transition-width duration-500 ease-in-out ",
              largeImage ? "w-[85%]" : "w-[50%]"
            )}
          />
          <div className={twMerge("absolute text-center")}>
            {largeImage && (
              <>
                <h1 className="font-semibold text-xl md:text-2xl md:leading-[40px] lg:text-5xl lg:leading-[70px] mt-4 lg:mt-12">
                  WATCH EPIC MUSIC <br />
                  TRANSFORM INTO <br />
                  A WHOLE, NEW <br />
                  <span> EXPERIENCE </span> <br />
                </h1>
                <span className="lg:text-2xl ">OUR EVENT GALERY</span>
              </>
            )}
          </div>
        </div>
        {/* <Image
          loader={() => myLoader(img)}
          src={`${process.env.NEXT_PUBLIC_API_URL_FILE}${img}`}
          width={500}
          height={500}
          alt="banner"
          className="w-full py-10 lg:px-10"
        /> */}
        <div className="absolute top-[20%] left-[28%] md:left-[40%] lg:top-[30%] lg:left-[42%] text-center flex flex-col gap-4"></div>
      </Container>
    </div>
  );
};
