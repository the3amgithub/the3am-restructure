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
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
const gradientStyles = {
  backgroundImage: "linear-gradient(-45deg, #c1089e 20%, #ff4e00 100%)",
};
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
            <div className="flex flex-col  mt-20 gap-8 lg:flex-row justify-between">
              <div className="flex flex-col gap-10">
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
                    <div className="flex gap-4 items-center">
                      <PrimaryButton
                        label="Book Ticket"
                        link={eventData?.bookingLink}
                        target="_blank"
                      />
                      <Link
                        href="https://wa.me/+917018505259"
                        target="_blank"
                        className="flex gap-2 items-center text-md md:text-lg px-3 md:px-6 py-2 rounded-full text-center font-bold w-[350px]"
                        style={gradientStyles}
                      >
                        Get In Touch
                        <Image
                          src="/img/whatsapp.png"
                          width={20}
                          height={20}
                          alt="whtsapp"
                          className="w-[20px] md:[w-25px]"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="text-2xl md:text-4xl">
                    About <span className="font-bold text-red-600">Event</span>
                  </h1>
                  <p>{eventData?.about}</p>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-2xl md:text-4xl">
                    About{" "}
                    <span className="font-bold text-primary">Artists</span>
                  </h1>
                  <div className="flex flex-col gap-2">
                    <li className="flex items-center gap-2">
                      Kahani{" "}
                      <Link href="https://www.instagram.com/kahanimusic?igsh=N2ViNmM2MDRjNw==" target="_blank">
                        <Image
                          src="/img/instagram.png"
                          width={20}
                          height={20}
                          alt="whtsapp"
                          className="w-[20px] md:[w-25px]"
                        />
                      </Link>
                    </li>
                    <li className="flex items-center gap-2">
                      Kunal Merchant{" "}
                      <Link href="https://www.instagram.com/kunalmerchant?igsh=N2ViNmM2MDRjNw==" target="_blank">
                        <Image
                          src="/img/instagram.png"
                          width={20}
                          height={20}
                          alt="whtsapp"
                          className="w-[20px] md:[w-25px]"
                        />
                      </Link>
                    </li>
                    <li className="flex items-center gap-2">
                      Ethyr{" "}
                      <Link href="https://www.instagram.com/ethyrmusic?igsh=N2ViNmM2MDRjNw==" target="_blank">
                        <Image
                          src="/img/instagram.png"
                          width={20}
                          height={20}
                          alt="whtsapp"
                          className="w-[20px] md:[w-25px]"
                        />
                      </Link>
                    </li>{" "}
                  </div>
                </div>
              </div>
              <div className="flex justify-center w-full h-full">
                {/* {!isLoaded ? (
                  <h1>Loading...</h1>
                ) : (
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                  />
                )} */}
                <Image
                  loader={() => myLoader(eventData?.tableImg || "")}
                  src={`${process.env.NEXT_PUBLIC_API_URL_FILE}${eventData?.tableImg}`}
                  width={500}
                  height={500}
                  alt="Home"
                  className="w-[500px] lg:h-[600px] object-contain lg:ml-10"
                />
              </div>
            </div>
          </Container>
        </Layout>
      )}
      {loading && <Loader />}
    </>
  );
};
