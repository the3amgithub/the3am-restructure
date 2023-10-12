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
          <h1 className="absolute top-4 lg:top-10 text-2xl lg:text-4xl font-semibold">
            GET IN TOUCH
          </h1>
        </div>
      </Container>
    </div>
  );
};
