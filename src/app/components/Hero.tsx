"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import Computer from "../../../public/Hero.jpg";

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
    <div className="px-[5%] pt-20 pb-12 max-w-[1200px] mx-auto md:pt-40 md:pb-24 lg:pt-44 lg:pb-28 flex flex-col items-center justify-center gap-12">
      <motion.div
        className="flex flex-col items-center justify-center gap-4 max-w-3xl pt-12 md:pt-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* <motion.div
          className="text-sm font-semibold text-neutral-500"
          variants={itemVariants}
        >
          DESIGN THAT DELIVERS
        </motion.div> */}
        <motion.h1
          className="text-4xl text-center md:text-10xl font-raleway"
          variants={itemVariants}
        >
          <span className="font-bold font-raleway">We build websites that</span>
          <br />
          <span className="font-bold font-raleway ">
            {" "}
            drive business growth
          </span>
        </motion.h1>
        <motion.div
          className="text-md text-center sm:max-w-[80%] text-neutral-600"
          variants={itemVariants}
        >
          We build stunning, high-performing websites designed to convert
          visitors into customers and elevate your brand.
        </motion.div>
        <motion.div
          className="flex w-full flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          variants={itemVariants}
        >
          <button className="px-6 py-3 w-full sm:w-auto bg-black text-white rounded-lg font-semibold transition-colors hover:bg-neutral-800 flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.759a11.024 11.024 0 004.754 4.754l.759-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C6.477 18 2 13.523 2 8V3z" />
            </svg>
            Book a Free Consultation
          </button>
          <button className="px-6 py-3 w-full sm:w-auto bg-white text-black ring ring-neutral-400 rounded-lg font-semibold transition-colors hover:bg-neutral-100">
            View Our Work
          </button>
        </motion.div>
      </motion.div>
      <motion.div
        className="relative w-full max-w-5xl flex items-center justify-center"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <Image src={Computer} alt="Promo video" className="w-full rounded-xl" />
      </motion.div>
    </div>
  );
};
