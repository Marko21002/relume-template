"use client";

import { motion } from "framer-motion";

export const Contact = () => {
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
    <div className="bg-white text-black">
      <div className="px-[5%] max-w-[1200px] mx-auto py-16 md:py-24 lg:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
          className="max-w-4xl"
        >
          <motion.div
            variants={itemVariants}
            className="text-sm font-semibold text-neutral-500"
          >
            CONTACT US
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-raleway font-semibold leading-tight mt-4"
          >
            Ready to Grow
            <br />
            Your Business?
            <br />
            Let’s Get Started
          </motion.h2>

          <motion.form
            variants={itemVariants}
            className="mt-12"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-transparent border-b border-neutral-300 py-3 text-black placeholder-neutral-500 focus:outline-none focus:border-black transition-colors"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border-b border-neutral-300 py-3 text-black placeholder-neutral-500 focus:outline-none focus:border-black transition-colors"
              />
            </div>
            <div className="mt-10">
              <input
                type="text"
                placeholder="How can we help?"
                className="w-full bg-transparent border-b border-neutral-300 py-3 text-black placeholder-neutral-500 focus:outline-none focus:border-black transition-colors"
              />
            </div>
            <div className="mt-12 flex">
              <button
                type="submit"
                className="px-10 py-4 bg-black text-white font-semibold rounded-lg hover:bg-neutral-800 transition-colors"
              >
                Get in touch
              </button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
