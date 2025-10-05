"use client";
import Image from "next/image";
import CtaImage from "../../../public/cta.png";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Cta() {
  const iconRef = useRef<SVGPathElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (iconRef.current) {
      const length = iconRef.current.getTotalLength();
      gsap.set(iconRef.current, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(iconRef.current, {
        strokeDashoffset: 0,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }
  }, []);

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
    <div
      ref={containerRef}
      className="px-[5%] max-w-[1200px] mx-auto py-16 md:py-24 lg:py-28"
    >
      <motion.div
        className="bg-black text-white rounded-2xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            className="text-sm font-semibold text-neutral-400"
            variants={itemVariants}
          >
            GET IN TOUCH
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-raleway font-semibold leading-tight mt-4"
            variants={itemVariants}
          >
            Ready to <br />
            <span className="font-playfair-display italic">
              grow your business?
            </span>
          </motion.h2>
          <motion.p
            className="mt-4 text-md text-neutral-300"
            variants={itemVariants}
          >
            Let&apos;s build a stunning website that converts visitors into
            customers and takes your business to the next level.
          </motion.p>
          <motion.div
            className="mt-8 flex w-full flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            variants={itemVariants}
          >
            <button className="px-4 py-3 w-full sm:w-auto bg-white text-black ring-1 ring-neutral-400 rounded-lg text-md font-semibold transition-colors hover:bg-neutral-200 flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  ref={iconRef}
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.759a11.024 11.024 0 004.754 4.754l.759-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C6.477 18 2 13.523 2 8V3z"
                />
              </svg>
              Book a call
            </button>
            <button className="px-4 py-3 w-full sm:w-auto rounded-lg text-md font-semibold transition-colors bg-transparent ring-1 ring-white hover:bg-white hover:text-black">
              Get a free re-design
            </button>
          </motion.div>
        </div>
        <motion.div
          className="lg:w-1/2 w-full h-64 lg:h-auto  flex items-center justify-center"
          variants={imageVariants}
        >
          <span className="text-neutral-500">
            <Image src={CtaImage} alt="Cta" className="invert" />
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
