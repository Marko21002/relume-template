"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import FounderImage from "../../../public/Founder.png";
import CrownImage from "../../../public/crown.png";
import ArtemImage from "../../../public/Artem.png";

export default function About() {
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

  return (
    <div className="bg-white text-black py-16 md:py-24 lg:py-28">
      <div className="px-[5%] max-w-[1200px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="text-sm font-semibold text-neutral-500"
          >
            ABOUT US
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-raleway font-semibold leading-tight mt-4"
          >
            Meet the Founders
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Marko Gufman Profile */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <div className="relative">
              <motion.div
                className="absolute -top-8 left-1/2 -translate-x-1/2 z-10 w-20 h-20"
                initial={{ scale: 0, opacity: 0, y: 20, rotate: -15 }}
                whileInView={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 120,
                }}
                viewport={{ once: true }}
              >
                <Image
                  src={CrownImage}
                  alt="Crown"
                  layout="fill"
                  objectFit="contain"
                />
              </motion.div>
              <Image
                src={FounderImage}
                alt="Marko Gufman, Founder and Lead Designer"
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
            <div className="mt-6 text-left">
              <h3 className="text-2xl font-raleway font-semibold">
                Marko Gufman
              </h3>
              <p className="text-md text-neutral-500">
                Founder & Lead Designer
              </p>
              <p className="mt-4 text-neutral-600">
                Hi, I&apos;m Marko—the Founder and Lead Designer. At 23 years
                old and currently studying at Modul University, I bring a fresh
                perspective combined with deep experience in Web Design and
                Development.
              </p>
            </div>
          </motion.div>

          {/* Artyom Profile */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <div className="relative">
              <motion.div
                className="absolute -top-8 left-1/2 -translate-x-1/2 z-10 w-20 h-20"
                initial={{ scale: 0, opacity: 0, y: 20, rotate: -15 }}
                whileInView={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 120,
                }}
                viewport={{ once: true }}
              >
                <Image
                  src={CrownImage}
                  alt="Crown"
                  layout="fill"
                  objectFit="contain"
                />
              </motion.div>
              <Image
                src={ArtemImage}
                alt="Artyom, Partner and Sales Representative"
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
            <div className="mt-6 text-left">
              <h3 className="text-2xl font-raleway font-semibold">Artyom</h3>
              <p className="text-md text-neutral-500">
                Partner & Sales Representative
              </p>
              <p className="mt-4 text-neutral-600">
                Meet Artyom, our idea partner and sales representative. Also
                studying at Modul University, he brings valuable management
                experience to the team, ensuring our projects run smoothly and
                our client relationships thrive.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
