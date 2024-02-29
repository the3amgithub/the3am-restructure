"use client";
import { PrimaryButton } from "@/components/common/Buttons/PrimaryButton";
import { Container } from "@/components/common/Container";
import { Layout } from "@/components/common/Layout";
import { Loader } from "@/components/common/Loader";
import { useGetEventQuery } from "@/graphql/generated/schema";
import { myLoader } from "@/utils/ImgLoader";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const gradientStyles = {
  backgroundImage: "linear-gradient(-45deg, #c1089e 20%, #ff4e00 100%)",
};
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
          <div className="relative top-0 h-[400px] md:h-screen flex flex-col justify-center">
            <Image
              loader={() => myLoader(eventData?.banner || "")}
              src={`${process.env.NEXT_PUBLIC_API_IMG_URL}/${eventData?.banner}`}
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
                      <PrimaryButton
                        label="Book Ticket"
                        link={`${search[2]}/ticket`}
                      />
                      <Link
                        href={""}
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
            </div>
          </Container>
        </Layout>
      )}
      {loading && <Loader />}
    </>
  );
};
