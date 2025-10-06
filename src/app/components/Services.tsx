"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
      clipRule="evenodd"
    />
  </svg>
);

const MinusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Services() {
  const [openService, setOpenService] = useState<number | null>(0);

  const services = [
    {
      title: "Discovery call",
      description:
        "We start with a discovery call to understand your business needs.",
      image: "/discovery.png",
    },
    {
      title: "Design",
      description:
        "After getting started, we propose different designs to choose from.",
      image: "/design.png",
    },
    {
      title: "Development",
      description:
        "After your approval, we build your website and deliver it to you.",
      image: "/development.png",
    },
  ];

  const toggleService = (index: number) => {
    setOpenService(openService === index ? null : index);
  };

  return (
    <div className="bg-white text-black py-16 md:py-24 lg:py-28">
      <div className="px-[5%] max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-3 py-1 text-sm font-semibold text-black border border-neutral-300 rounded-full">
            OUR PROCESS
          </div>
          <h2 className="text-4xl md:text-5xl font-raleway font-semibold leading-tight mt-6">
            Crafting Your
            <br />
            <span className="font-playfair-display italic">Success Story</span>
          </h2>

          <div className="mt-8 space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-b border-neutral-200 last:border-b-0"
              >
                <button
                  onClick={() => toggleService(index)}
                  className="w-full flex justify-between items-center py-4 text-left"
                >
                  <span className="text-xl font-raleway font-medium">
                    {service.title}
                  </span>
                  {openService === index ? (
                    <MinusIcon className="w-6 h-6 text-black" />
                  ) : (
                    <PlusIcon className="w-6 h-6 text-neutral-400" />
                  )}
                </button>
                <AnimatePresence>
                  {openService === index && (
                    <motion.div
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <p className="pb-4 text-neutral-600">
                        {service.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative w-full h-96"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <AnimatePresence>
            <motion.div
              key={openService}
              className="absolute inset-0 bg-neutral-50 ring-1 ring-neutral-200 rounded-2xl p-6 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {openService !== null && (
                <Image
                  src={services[openService].image}
                  alt={services[openService].title}
                  width={400}
                  height={400}
                  className="w-full h-auto max-w-sm"
                />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
