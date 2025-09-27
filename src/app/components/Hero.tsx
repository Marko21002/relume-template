"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import Computer from "../../../public/Computer.svg";

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.6,
      },
    },
  };

  return (
    <div className="px-[5%] py-12 max-w-[1400px] mx-auto md:py-24 lg:py-28 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12">
      <motion.div
        className="flex flex-col items-center lg:items-start justify-center gap-4 lg:w-1/2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-sm " variants={itemVariants}>
          OVERDELIVER
        </motion.h1>
        <motion.div
          className="text-4xl text-center lg:text-left md:text-6xl"
          variants={itemVariants}
        >
          <span className="font-playfair-display italic">
            Web design agency
          </span>
          <br />
          <span className="font-bold font-raleway ">
            {" "}
            for digital businesses
          </span>
        </motion.div>
        <motion.div
          className="text-md text-center sm:max-w-[80%] lg:text-left text-neutral-600"
          variants={itemVariants}
        >
          We build stunning websites for digital businesses and founders. To
          find out more, watch the video below and book a call.
        </motion.div>
        <motion.div
          className="flex w-full flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
          variants={itemVariants}
        >
          <button className="px-4 cursor-pointer py-3 w-full sm:w-auto bg-white text-black ring ring-neutral-400 rounded-lg text-md font-semibold transition-colors hover:bg-neutral-100">
            Book a call
          </button>
          <button className="px-4 cursor-pointer py-3 w-full sm:w-auto bg-black text-white rounded-lg text-md font-semibold transition-colors hover:bg-neutral-800">
            Get a free re-design
          </button>
        </motion.div>
      </motion.div>
      <motion.div
        className="relative mt-4 lg:mt-0 w-full lg:w-1/2 max-w-5xl flex items-center justify-center"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <Image src={Computer} alt="Promo video" className="w-full rounded-xl" />
      </motion.div>
    </div>
  );
};
