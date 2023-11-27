"use client";
import { galleyQuery } from "@/graphql/query";
import { useQuery } from "@apollo/client";
import { Layout } from "../common/Layout";

export const Galley = () => {
  const { data, loading } = useQuery(galleyQuery);
  const galleryData = data?.galleries?.data[0]?.attributes;

  return (
    <Layout>
      <div>
        <h2 className="absolute top-[40%] left-[25%] lg:left-[45%] text-center text-2xl font-bold">
          Coming Soon !!!!!!
        </h2>
      </div>
    </Layout>
  );
};
