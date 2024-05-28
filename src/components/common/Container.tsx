import React from "react";
import { motion } from "framer-motion";
interface ContainerProp {
  children: React.ReactNode;
}
export const Container = ({ children }: ContainerProp) => {
  return (
    <motion.div
      className="px-6 py-2 lg:px-[200px]"
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
      {children}
    </motion.div>
  );
};
