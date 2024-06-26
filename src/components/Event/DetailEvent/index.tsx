"use client";
import { Container } from "@/components/common/Container";
import { Layout } from "@/components/common/Layout";
import { Loader } from "@/components/common/Loader";
import { useGetEventQuery } from "@/graphql/generated/schema";
import { myLoader } from "@/utils/ImgLoader";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const DetailEvent = () => {
  const search = usePathname().split("/");

  const { data, loading } = useGetEventQuery({
    variables: {
      getEventId: search[2],
    },
  });
  const eventData = data?.getEvent;

  return (
    <>
      {data && (
        <Layout>
          <div className="relative top-0 h-[400px] md:h-screen flex flex-col justify-center mt-8">
            <Image
              loader={() => myLoader(eventData?.banner || "")}
              src={`${process.env.NEXT_PUBLIC_API_URL_FILE}/${eventData?.banner}`}
              fill
              objectFit="cover"
              alt="Home"
            />
        
          </div>
          <Container>
            <div className="flex flex-col  mt-20 gap-8 lg:flex-row justify-between">
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4 items-center lg:flex-row">
                  <Image
                    loader={() => myLoader(eventData?.banner || "")}
                    src={`${process.env.NEXT_PUBLIC_API_IMG_URL}/${eventData?.banner}`}
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
                      <Link href='https://wa.me/7409999071' target="_bank">
                        <Button color="secondary">
                          <Image
                            src="/img/whatsapp.png"
                            width={20}
                            height={20}
                            alt="whtsapp"
                            className="w-[20px] md:[w-25px]"
                          />
                          Get In Touch
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="text-2xl md:text-4xl">
                    About <span className="font-bold text-red-600">Event</span>
                  </h1>
                  <p>{eventData?.description}</p>
                </div>
                {/* <div className="flex flex-col">
                  <h1 className="text-2xl md:text-4xl">
                    About{" "}
                    <span className="font-bold text-primary">Artists</span>
                  </h1>
                  <div className="flex flex-col gap-2">
                    {eventData?.artists.map(
                      (item: { name: string; insta: string }, i: number) => (
                        <li className="flex items-center gap-2" key={i}>
                          {item?.name}
                          <Link href={item?.insta} target="_blank">
                            <Image
                              src="/img/instagram.png"
                              width={20}
                              height={20}
                              alt="whtsapp"
                              className="w-[20px] md:[w-25px]"
                            />
                          </Link>
                        </li>
                      )
                    )}
                  </div>
                </div> */}
              </div>
              {eventData?.tableLayout && (
                <div className="flex justify-center w-full h-full">
                  <Image
                    loader={() => myLoader(eventData?.tableLayout || "")}
                    src={`${process.env.NEXT_PUBLIC_API_URL_FILE}${eventData?.tableLayout}`}
                    width={500}
                    height={500}
                    alt="Table Layout"
                    className="w-[500px] lg:h-[600px] object-contain lg:ml-10"
                  />
                </div>
              )}
            </div>
          </Container>
        </Layout>
      )}
      {loading && <Loader />}
    </>
  );
};
