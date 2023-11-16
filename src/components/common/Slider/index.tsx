import Image from "next/image";
import { RightArrow } from "../icons/RightArrowIcon";
import { LeftArrow } from "../icons/LeftArrowIcon";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export function Arrow(props: any) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow";
  const char =
    props.type === "next" ? (
      <div className="absolute cursor-pointer top-[40%] md:top-[45%] lg:top-[48%] right-[20px] w-10 h-10 flex justify-center items-center">
        <RightArrow />
      </div>
    ) : (
      <div className="absolute cursor-pointer top-[40%] md:top-[45%] lg:top-[48%] left-[20px] w-10 h-10  flex justify-center items-center">
        <LeftArrow />
      </div>
    );
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}

export const CustomSlider = ({ data }: { data: any }) => {
  const settings = {
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    speed: 500,
    autoplay: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          infinite: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const myLoader = (src: string) => {
    return `${process.env.NEXT_PUBLIC_API_URL_FILE}${src}`;
  };
  return (
    <div className="w-full h-[50px] md:h-[200px] lg:h-[350px]">
      <Carousel
        infiniteLoop={false}
        transitionTime={1000}
        showArrows
        width="100%"
        showStatus={false}
        showIndicators={false}
      >
        {data.map((item: any) => (
          <div key={item.id}>
            <Image
              loader={() => myLoader(item.attributes.url)}
              src={`${process.env.NEXT_PUBLIC_API_URL_FILE}${item.attributes.url}`}
              width={800}
              height={200}
              alt="profile"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
