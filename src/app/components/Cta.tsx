"use client";
import Image from "next/image";
import CtaImage from "../../../public/cta.png";
import { motion } from "framer-motion";

export default function Cta() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
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
      },
    },
  };

  return (
    <div className="px-[5%] max-w-[1200px] mx-auto py-16 md:py-24 lg:py-28">
      <motion.div
        className="ring-1 ring-neutral-400 bg-[#F5A3A3] rounded-lg p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h2
            className="text-3xl md:text-4xl font-raleway font-semibold leading-tight"
            variants={itemVariants}
          >
            Ready to <br />
            <span className="font-playfair-display font-normal italic">
              grow your business?
            </span>
          </motion.h2>
          <motion.p
            className="mt-4 text-md text-neutral-600"
            variants={itemVariants}
          >
            Let&apos;s build a stunning website that converts visitors into
            customers and takes your business to the next level.
          </motion.p>
          <motion.div
            className="mt-8 flex w-full flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            variants={itemVariants}
          >
            <button className="px-4 py-3 w-full sm:w-auto bg-white text-black ring ring-neutral-400 rounded-lg text-md font-semibold transition-colors hover:bg-neutral-200">
              Book a call
            </button>
            <button className="px-4 py-3 w-full sm:w-auto bg-black text-white rounded-lg text-md font-semibold transition-colors hover:bg-neutral-800">
              Get a free re-design
            </button>
          </motion.div>
        </div>
        <motion.div
          className="lg:w-1/2 w-full h-64 lg:h-auto  flex items-center justify-center"
          variants={imageVariants}
        >
          <span className="text-neutral-500">
            <Image src={CtaImage} alt="Cta" />
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
