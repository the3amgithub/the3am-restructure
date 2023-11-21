import { myLoader } from "@/utils/ImgLoader";
import Image from "next/image";
import Link from "next/link";

export const EventVideo = ({
  data,
}: {
  data: { thumbnail: string; link: string };
}) => {
  return (
    <div className="relative h-[200px] md:h-[400px] lg:h-[600px] bg-no-repeat bg-cover flex flex-col items-center bg-black opacity-90">
      <Image
        loader={() => myLoader(data.thumbnail)}
        src={`${process.env.NEXT_PUBLIC_API_URL_FILE}${data.thumbnail}`}
        layout="fill"
        objectFit="cover"
        alt="Home"
      />
      <h1 className="relative mt-10 text-2xl md:text-4xl lg:text-6xl font-semibold opacity-100">
        <span>Our</span> <span>Latest</span>{" "}
        <span className="font-bold text-3xl md:text-4xl lg:text-6xl text-[#ebcc60eb]">
          Event
        </span>{" "}
        <span>Video</span>
      </h1>
      <Link target="_blank" href={data.link} className="relative" aria-label="opeb the new tab">
        <Image
          src="/img/play.png"
          width={90}
          height={30}
          alt="play"
          className="w-[60px] md:w-[70px] lg:w-[90px] mt-6 md:mt-32 lg:mt-60"
        />
      </Link>
    </div>
  );
};
