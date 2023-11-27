"use client";
import { PrimaryButton } from "@/components/common/Buttons/PrimaryButton";
import { Container } from "@/components/common/Container";
import { Layout } from "@/components/common/Layout";
import { Loader } from "@/components/common/Loader";
import { EventDetailQuery } from "@/graphql/query";
import { myLoader } from "@/utils/ImgLoader";
import { useQuery } from "@apollo/client";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export const DetailEvent = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("a");
  const { data, loading } = useQuery(EventDetailQuery, {
    variables: {
      eventDetailId: search,
    },
  });
  const eventData = data?.eventDetail?.data?.attributes;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDGjR7kqAFRiZ6hVluT9LhshR7_wvqOEug",
  });
  const center = useMemo(
    () => ({
      lat: parseFloat(eventData?.address?.lat),
      lng: parseFloat(eventData?.address?.lng),
    }),
    [eventData]
  );
  const containerStyle = {
    width: "100%",
    height: "500px",
  };

  return (
    <>
      {data && (
        <Layout>
          <div className="relative top-0 h-[400px] md:h-screen flex flex-col justify-center">
            <Image
              loader={() => myLoader(eventData?.img || "")}
              src={`${process.env.NEXT_PUBLIC_API_URL_FILE}${eventData?.img}`}
              fill
              objectFit="cover"
              alt="Home"
            />
            <h1 className="relative text-2xl md:text-4xl font-bold z-[20] text-center">
              {eventData?.name}
            </h1>
          </div>
          <Container>
            <div className="flex flex-col  mt-20 gap-8 lg:flex-row">
              <div className="flex-1 flex flex-col gap-10">
                <div className="flex flex-col gap-4 items-center lg:flex-row">
                  <Image
                    loader={() => myLoader(eventData?.img || "")}
                    src={`${process.env.NEXT_PUBLIC_API_URL_FILE}${eventData?.img}`}
                    width={200}
                    height={300}
                    alt="Home"
                    className="w-[300px] h-[200px] object-cover "
                  />
                  <div className="flex flex-col gap-6 w-full">
                    <h2 className="font-bold">{eventData?.name}</h2>
                    <div className="grid grid-cols-2 gap-6">
                      <span>Date</span>
                      <span>{eventData?.date}</span>
                      <span>Venue</span>
                      <span>{eventData?.location}</span>
                    </div>
                    <div>
                      <PrimaryButton label="Ticket" link="/" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="text-2xl md:text-4xl">
                    About <span className="font-bold text-red-600">Event</span>
                  </h1>
                  <p>{eventData?.about}</p>
                </div>
              </div>
              <div className="flex-1 w-full h-full">
                {!isLoaded ? (
                  <h1>Loading...</h1>
                ) : (
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                  />
                )}
              </div>
            </div>
          </Container>
        </Layout>
      )}
      {loading && <Loader />}
    </>
  );
};
