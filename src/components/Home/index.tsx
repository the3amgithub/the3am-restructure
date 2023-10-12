"use client";
import { useQuery } from "@apollo/client";
import { HomeQuery } from "@/graphql/query";
import { CustomSlider } from "../common/Slider";
import { Banner } from "./Banner";
import { Description } from "./Description";
import { Specification } from "./Specification";
import { OurArtists } from "./OurArtists";
import { SneakPeak } from "./SneakPeak";
import { Loader } from "../common/Loader";
export const Home = () => {
  const { data, loading } = useQuery(HomeQuery);
  const homeData = data?.homes?.data[0]?.attributes;

  return (
    <div>
      {data && (
        <div className="flex flex-col gap-10">
          <Banner img={homeData?.banner?.data?.attributes.url} />
          <Description img={homeData?.description?.data?.attributes.url} />
          <CustomSlider data={homeData?.carousel.data} />÷
          <Specification img={homeData?.specification?.data?.attributes.url} />
          <OurArtists data={homeData?.artists} />
          <SneakPeak />
        </div>
      )}
      {loading && <Loader />}
    </div>
  );
};
