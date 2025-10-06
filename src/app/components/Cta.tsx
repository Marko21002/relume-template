"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Cta() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-3xl bg-black p-8 md:p-12 lg:p-16 text-center">
        <div className="absolute -inset-4 bg-white/10 blur-3xl rounded-full" />
        <motion.div
          className="relative z-10 flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-block px-3 py-1 text-sm font-semibold text-neutral-400 border border-neutral-700 rounded-full"
            variants={itemVariants}
          >
            GET STARTED
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-raleway font-semibold leading-tight mt-6 text-white"
            variants={itemVariants}
          >
            Start Your Journey with Confidence
          </motion.h2>
          <motion.p
            className="mt-4 text-md text-neutral-300 max-w-2xl"
            variants={itemVariants}
          >
            Embrace a risk-free journey with our satisfaction guarantee — your
            success is not just a goal, but our commitment.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
          >
            <button className="px-6 py-3 w-full sm:w-auto bg-white text-black rounded-lg text-md font-semibold transition-colors hover:bg-neutral-200 flex items-center justify-center gap-2">
              Book a Free Consultation
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </motion.div>
          <motion.div
            className="mt-6 flex items-center justify-center gap-2"
            variants={itemVariants}
          >
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-neutral-700 ring-2 ring-black flex items-center justify-center text-xs font-bold text-white">
                A
              </div>
              <div className="w-8 h-8 rounded-full bg-neutral-700 ring-2 ring-black flex items-center justify-center text-xs font-bold text-white">
                B
              </div>
              <div className="w-8 h-8 rounded-full bg-neutral-700 ring-2 ring-black flex items-center justify-center text-xs font-bold text-white">
                C
              </div>
            </div>
            <p className="text-sm text-neutral-400">Trusted by 50+ clients</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
