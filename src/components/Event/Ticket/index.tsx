"use client";
import { Container } from "@/components/common/Container";
import { Layout } from "@/components/common/Layout";
import { useGetEventQuery } from "@/graphql/generated/schema";
import { usePathname } from "next/navigation";
import React, { ChangeEvent, useMemo, useState } from "react";
import Image from "next/image";
import { myLoader } from "@/utils/ImgLoader";
import moment from "moment";
import { PrimaryButton } from "@/components/common/Buttons/PrimaryButton";
import { Loader } from "@/components/common/Loader";

const maxTicket = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
interface ITicket {
  _id: string;
  quantity: number;
  price: number;
}

const Tikcet = () => {
  const [selectedTicket, setSelectedTicket] = useState<ITicket[]>([]);
  const search = usePathname().split("/");
  const { data, loading } = useGetEventQuery({
    variables: {
      getEventId: search[2],
    },
  });
  const eventData = data?.getEvent;
  const handleChange = (
    e: ChangeEvent<HTMLSelectElement>,
    id: string,
    price: number
  ) => {
    const { value } = e.target;
    if (selectedTicket.length > 0) {
      const idIndex = selectedTicket.findIndex((item) => item._id === id);
      if (idIndex >= 0) {
        selectedTicket[idIndex].quantity = parseInt(value);
        selectedTicket[idIndex].price = parseInt(value) * price;
        setSelectedTicket([...selectedTicket]);
      } else {
        setSelectedTicket([
          ...selectedTicket,
          {
            quantity: parseInt(value),
            _id: id,
            price: parseInt(value) * price,
          },
        ]);
      }
    } else {
      setSelectedTicket([
        ...selectedTicket,
        {
          quantity: parseInt(value),
          _id: id,
          price: parseInt(value) * price,
        },
      ]);
    }
  };

  const totalAmount = useMemo(() => {
    return selectedTicket.reduce(
      (acc, obj) => {
        acc["quantity"] += obj["quantity"];
        acc["price"] += obj["price"];
        return acc;
      },
      { quantity: 0, price: 0 }
    );
  }, [selectedTicket]);

  return (
    <Layout>
      {eventData && (
        <>
          <Container>
            <div className="flex flex-col items-center mt-32 h-auto gap-12 w-full">
              <div className="flex gap-4 items-center">
                <Image
                  loader={() => myLoader(eventData?.banner || "")}
                  src={`${process.env.NEXT_PUBLIC_API_IMG_URL}/${eventData?.banner}`}
                  width={300}
                  height={300}
                  objectFit="cover"
                  alt="Home"
                  className="w-[200px] h-[150px] md:w-[300px] md:h-[200px]"
                />
                <div className="flex flex-col gap-2 w-full">
                  <h2 className="font-bold">{eventData?.name}</h2>
                  <span className="text-primary">
                    {moment(eventData?.date).format("MMMM Do YYYY")}
                  </span>
                  <span>{eventData?.location}</span>
                </div>
              </div>
              <div className="flex w-full p-4 gap-10 flex-col items-center lg:flex-row">
                <Image
                  loader={() => myLoader(eventData?.tableLayout || "")}
                  src={`${process.env.NEXT_PUBLIC_API_IMG_URL}/${eventData?.tableLayout}`}
                  width={500}
                  height={500}
                  alt="table Layout"
                  className="w-[500px] lg:h-[600px] object-contain lg:ml-10"
                />
                <div className="flex flex-col gap-4 bg-white text-black p-4 w-full">
                  <h1 className="text-xl md:text-2xl font-bold">
                    Select tickets
                  </h1>
                  {eventData?.tickets &&
                    eventData?.tickets.map((ticket) => (
                      <div
                        className="flex justify-between lg:flex-row items-center"
                        key={ticket?._id}
                      >
                        <div>
                          <h2 className="font-semibold">{ticket?.category}</h2>
                          <span>₹ {ticket?.price}</span>
                        </div>

                        <select
                          className="border-2 w-20"
                          onChange={(e) =>
                            handleChange(
                              e,
                              ticket?._id || "",
                              ticket?.price || 0
                            )
                          }
                        >
                          {maxTicket.map((item) => (
                            <option value={item} key={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </Container>
          <div className="bg-black w-full  flex justify-around items-center h-[200px]">
            <div>
              <h2 className="font-semibold">₹ {totalAmount.price}</h2>
              <span className="text-sm">{totalAmount.quantity} Ticket</span>
            </div>
            <div>
              <PrimaryButton
                label="Proceed"
                link=""
                disable={totalAmount.quantity ? false : true}
              />
            </div>
          </div>
        </>
      )}
      {loading && <Loader />}
    </Layout>
  );
};

export default Tikcet;
