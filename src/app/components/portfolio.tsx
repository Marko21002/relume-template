"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ComingSoonImage from "../../../public/404.png";

export default function Portfolio() {
  return (
    <div className="px-[5%] max-w-[1200px] mx-auto py-16 md:py-24 lg:py-28 flex flex-col items-center justify-center">
      <div className="text-center flex flex-col items-center justify-center gap-4">
        <div className="text-sm font-semibold text-neutral-500">PORTFOLIO</div>
        <h2 className="text-4xl md:text-5xl font-raleway font-semibold leading-tight mt-4">
          Our Latest <span className="font-playfair-display italic">Work</span>
        </h2>
      </div>
      <motion.div
        className="mt-16 w-full max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="bg-neutral-50 ring-1 ring-neutral-200 rounded-2xl p-8 md:p-12 text-center flex flex-col items-center shadow-sm">
          <div className="w-20 h-20 relative">
            <Image
              src={ComingSoonImage}
              alt="Coming Soon"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p className="text-2xl font-semibold text-neutral-800 mt-6">
            Coming Soon
          </p>
          <p className="text-neutral-600 mt-2 max-w-sm">
            We are currently curating our best projects to showcase here. Please
            check back shortly!
          </p>
        </div>
      </motion.div>
    </div>
  );
}
