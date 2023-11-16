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
    <div className="mt-[20%]">
      <h2 className="text-center text-2xl font-bold">Coming Soon !!!!!!</h2>
    </div>
  );
};
