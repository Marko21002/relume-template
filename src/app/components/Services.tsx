"use client";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      step: 1,
      image: "/discovery.png",
      title: "Discovery call",
      description:
        "We start with a discovery call to understand your business needs.",
      bgColor: "#CBB7F7",
    },
    {
      step: 2,
      image: "/design.png",
      title: "Design",
      description:
        "After getting started, we propose different designs to choose from..",
      bgColor: "#A7D8DE",
    },
    {
      step: 3,
      image: "/development.png",
      title: "Development",
      description:
        "After your approval, we build your website and deliver it to you.",
      bgColor: "#F8C794",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="px-[5%] max-w-[1200px] mx-auto py-16 md:py-24 lg:py-28 flex flex-col items-center justify-center">
      <div className="text-center flex flex-col items-center justify-center gap-4">
        <div className="text-sm ">Process</div>
        <p className="  text-4xl font-raleway font-semibold leading-none">
          Receive your <br />
          website{" "}
          <span className="font-playfair-display font-normal italic">
            in two weeks
          </span>
        </p>
      </div>
      <motion.div
        className="flex w-full flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 pt-12 lg:pt-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.step}
            className="relative w-full border border-neutral-400 rounded-lg px-6 pt-12 pb-6 flex flex-col items-center justify-between gap-4 text-center"
            style={{ backgroundColor: service.bgColor }}
            variants={cardVariants}
            custom={index}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-400 bg-white px-4 py-2">
              <span className="text-sm font-semibold tracking-widest">
                STEP {service.step}
              </span>
            </div>
            <img
              className="w-full rounded-md object-cover lg:h-64"
              src={service.image}
              alt={service.title}
            />
            <div className="flex flex-col items-center gap-2">
              <h3 className=" font-raleway font-semibold text-xl">
                {service.title}
              </h3>
              <p className="text-md text-neutral-600 ">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
