"use client";
import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
        <path d="M3 10h18" />
        <path d="M10 3v18" />
      </svg>
    ),
    title: "Web Design",
    description:
      "We create stunning, user-centric websites that captivate your audience and elevate your brand.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 8l-4 4l4 4" />
        <path d="M17 8l4 4l-4 4" />
        <path d="M14 4l-4 16" />
      </svg>
    ),
    title: "Web Development",
    description:
      "Our expert developers build fast, scalable, and secure websites that perform flawlessly.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
        <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
      </svg>
    ),
    title: "SEO Optimization",
    description:
      "We help you rank higher on search engines, driving organic traffic and boosting your visibility.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function Services2() {
  return (
    <div
      id="services"
      className="px-[5%] max-w-[1200px] mx-auto py-16 md:py-24 lg:py-28 flex flex-col items-center justify-center"
    >
      <motion.div
        className="text-center flex flex-col items-center justify-center gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div
          className="text-sm font-semibold bg-neutral-100 text-black px-4 py-1 rounded-full"
          variants={itemVariants}
        >
          OUR SERVICES
        </motion.div>
        <motion.h2
          className="text-4xl md:text-5xl font-raleway font-semibold leading-tight mt-4"
          variants={itemVariants}
        >
          What We Do{" "}
          <span className="text-black font-playfair-display italic">
            For You
          </span>
        </motion.h2>
        <motion.p
          className="mt-2 text-neutral-600 max-w-2xl"
          variants={itemVariants}
        >
          From stunning web design to powerful development and strategic SEO, we
          provide everything you need to succeed online.
        </motion.p>
      </motion.div>

      <motion.div
        className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 lg:pt-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            className="bg-neutral-50 ring-1 ring-neutral-200 rounded-2xl p-8 flex flex-col"
            variants={itemVariants}
          >
            <div className="flex items-center gap-4">
              {service.icon}
              <h3 className="text-xl font-raleway font-semibold">
                {service.title}
              </h3>
            </div>
            <p className="mt-4 text-neutral-600 flex-grow">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}


