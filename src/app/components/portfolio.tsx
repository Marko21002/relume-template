"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PromoImage from "../../../public/Promo.avif";

export default function Portfolio() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce site for a fashion brand.",
      image: PromoImage,
      category: "Web Design",
    },
    {
      title: "Branding for a Startup",
      description: "A complete branding package for a new tech startup.",
      image: PromoImage,
      category: "Branding",
    },
    {
      title: "SEO for a Local Business",
      description:
        "An SEO campaign that boosted a local business's online visibility.",
      image: PromoImage,
      category: "SEO",
    },
    {
      title: "Mobile App Design",
      description: "A sleek and intuitive mobile app for a fitness company.",
      image: PromoImage,
      category: "Web Design",
    },
    {
      title: "Corporate Website Redesign",
      description: "A modern redesign for a large corporate website.",
      image: PromoImage,
      category: "Web Design",
    },
    {
      title: "Logo for a Cafe",
      description: "A charming and memorable logo for a local cafe.",
      image: PromoImage,
      category: "Branding",
    },
  ];

  return (
    <div className="px-[5%] max-w-[1400px] mx-auto py-16 md:py-24 lg:py-28 flex flex-col items-center justify-center">
      <div className="text-center flex flex-col items-center justify-center gap-4">
        <div className="text-sm ">PORTFOLIO</div>
        <p className="text-4xl md:text-5xl font-raleway font-semibold leading-tight">
          Our Latest{" "}
          <span className="font-playfair-display font-normal italic">Work</span>
        </p>
      </div>
      <div className="hidden md:flex items-center gap-2 text-neutral-500 mt-8 text-sm self-end">
        <span>Drag to explore</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <polyline points="18 8 22 12 18 16" />
          <polyline points="6 8 2 12 6 16" />
          <line x1="2" x2="22" y1="12" y2="12" />
        </svg>
      </div>
      <motion.div
        ref={carousel}
        className="cursor-grab active:cursor-grabbing w-full overflow-hidden mt-4"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="group relative w-80 md:w-96 flex-shrink-0 h-80 rounded-lg overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105 pointer-events-none"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 transition-opacity opacity-0 group-hover:opacity-100">
                <h3 className="text-xl font-raleway font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-md text-neutral-300">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <div className="flex md:hidden items-center justify-center gap-2 text-neutral-500 mt-8 text-sm">
        <span>Drag to explore</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <polyline points="18 8 22 12 18 16" />
          <polyline points="6 8 2 12 6 16" />
          <line x1="2" x2="22" y1="12" y2="12" />
        </svg>
      </div>
    </div>
  );
}
