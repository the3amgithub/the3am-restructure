"use client";
import { contactQuery } from "@/graphql/query";
import { useQuery } from "@apollo/client";
import React from "react";
import { Banner } from "./Banner";
import { ContactSect } from "./ContactSect";
import { Loader } from "../common/Loader";

export const Contact = () => {
  const { data, loading } = useQuery(contactQuery);
  const contactData = data?.contacts?.data[0]?.attributes;

  return (
    <div>
      {data && (
        <div className="flex flex-col gap-10">
          <Banner img={contactData?.banner?.data?.attributes?.url} />
          <ContactSect data={contactData.information} />
        </div>
      )}
      {loading && <Loader />}
    </div>
  );
};
