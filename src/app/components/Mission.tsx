"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import MissionImage from "../../../public/Mission.png";

export const Mission = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-white text-black py-16 md:py-24 lg:py-28">
      <div className="px-[5%] max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={imageVariants}
          >
            <Image
              src={MissionImage}
              alt="Our Mission"
              className="rounded-lg object-cover w-full h-full"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="text-sm font-semibold text-neutral-500"
            >
              OUR MISSION
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-raleway font-semibold leading-tight mt-4"
            >
              The mission behind
              <br />
              <span className="font-playfair-display italic">Our Work</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mt-6 text-neutral-600 text-lg"
            >
              Our mission is to deliver exceptional value, building true
              partnerships to help our clients thrive in the digital landscape.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mt-4 text-neutral-600 text-lg"
            >
              We are committed to their growth, acting as a dedicated guide on
              their journey to success.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
