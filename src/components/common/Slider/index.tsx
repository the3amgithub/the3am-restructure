import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { RightArrow } from "../icons/RightArrowIcon";
import { LeftArrow } from "../icons/LeftArrowIcon";

function Arrow(props: any) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow";
  const char =
    props.type === "next" ? (
      <div className="absolute cursor-pointer top-[45%] right-[-30px] w-10 h-10 bg-primary flex justify-center items-center rounded-full ">
        <RightArrow />
      </div>
    ) : (
      <div className="absolute cursor-pointer top-[45%] left-[-30px]  w-10 h-10 bg-primary flex justify-center items-center rounded-full ">
        <LeftArrow />
      </div>
    );
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}
export const CustomSlider = ({ children }: { children: React.ReactNode }) => {
  const settings = {
    infinite: false,
    slidesToShow: 3,
    speed: 500,
    centerPadding: "30px",
    className: "center",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
      
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Slider
      {...settings}
     arrows={false}
     dots={true}
    >
      {children}
    </Slider>
  );
};
