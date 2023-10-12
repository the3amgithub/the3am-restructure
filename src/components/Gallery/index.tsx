"use client";
import { galleyQuery } from "@/graphql/query";
import { useQuery } from "@apollo/client";
import { Banner } from "./Banner";
import { GallerySect } from "./GallerySect";
import { Loader } from "../common/Loader";

export const Galley = () => {
  const { data, loading } = useQuery(galleyQuery);
  const galleryData = data?.galleries?.data[0]?.attributes;

  return (
    <div>
      {data && (
        <div className="flex flex-col gap-10">
          <Banner img={galleryData?.banner?.data?.attributes.url} />
          <GallerySect data={galleryData?.eventsList?.data} />
        </div>
      )}
      {loading && <Loader />}
    </div>
  );
};
