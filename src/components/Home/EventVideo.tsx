import Image from "next/image";
import Link from "next/link";

export const EventVideo = () => {
  const img = "/img/video1.jpg";
  return (
    <div
      className="h-[200px] md:h-[400px] lg:h-[600px] -no-repeat bg-cover flex flex-col items-center bg-black opacity-80"
      style={{ backgroundImage: `url(${img})` }}
    >
      <h1 className=" mt-10 text-2xl md:text-4xl lg:text-6xl font-semibold opacity-100">
        <span>Our</span>{" "}
        <span className="font-bold text-3xl md:text-4xl lg:text-6xl text-[#ebcc60eb]">
          Event
        </span>{" "}
        <span>Video</span>
      </h1>
      <Link target="_blank" href="https://www.youtube.com/watch?v=jaMaZ9WnEUU">
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
