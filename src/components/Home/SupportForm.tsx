import React from "react";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";

export const SupportForm = () => {
  return (
    <motion.div
      className="flex flex-col gap-8 bg-black/40 items-center p-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: {
          opacity: 1,
          scale: [0.8, 1.2, 1],

          transition: {
            duration: 1.2,
            ease: "easeInOut",
          },
        },
        hidden: {
          opacity: 0,
          scale: 0.8,
          rotate: 0,
          skew: 0,
        },
      }}
    >
      <h2 className="text-4xl">
        Our <span className="font-bold text-primary">Sponsors</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-20 lg:w-[50%]">
        <Image
          src="https://getvectorlogo.com/wp-content/uploads/2018/11/jagermeister-vector-logo.png"
          alt="jager"
          className="w-[120px] h-[80px] rounded-xl object-cover"
        />

        <Image
          src="https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/6/AmazonStores/A21TJRUUN4KGV/384c80c3ab4f11b5a50b651f6afd91f7.w2926.h1139.png"
          alt="jimmy's"
          className="w-[120px] h-[80px] rounded-xl "
        />
        <Image
          src="https://static.brandirectory.com/logos/MONR005_monkey_shoulder_jpg.jpg"
          alt="monkey"
          className="w-[120px] h-[80px] rounded-xl object-cover"
        />
        <Image
          src="https://lacartedubongout.com/img/cms/hibiki%20logo.jpg"
          alt="hibki"
          className="w-[120px] h-[80px] rounded-xl "
        />
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROYY0mXEHp3nSO4S-5VyyELm_9y2jIr6vGAm99orS8Bw&s"
          alt="diageo"
          className="w-[120px] h-[80px] rounded-xl object-cover"
        />
        <Image
          src="https://c8.alamy.com/comp/2M82AE0/pernod-ricard-logo-white-background-2M82AE0.jpg"
          alt="pernod"
          className="w-[120px] h-[80px] rounded-xl object-cover"
        />
      </div>
    </motion.div>
  );
};
