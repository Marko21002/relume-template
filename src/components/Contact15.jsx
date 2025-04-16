"use client";

import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { motion } from "framer-motion";

export function Contact15() {
  // Animation variants
  const glowVariants = {
    initial: { scale: 0.85, opacity: 0.5 },
    animate: {
      scale: 1.15,
      opacity: 0.7,
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  const contactItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section
      id="relume"
      className="bg-zinc-900 text-white px-[5%] py-24 md:py-32 lg:py-36 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500 to-emerald-500/0"></div>
      <motion.div
        variants={glowVariants}
        initial="initial"
        animate="animate"
        className="absolute -bottom-64 -right-64 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        variants={glowVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 1 }}
        className="absolute top-64 -left-64 w-96 h-96 bg-zinc-800/50 rounded-full blur-3xl"
      ></motion.div>

      <div className="container relative z-10 mx-auto">
        <div>
          <div className="mb-12 grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:mb-20 md:grid-cols-[1fr_.75fr] md:gap-x-20 md:gap-y-16">
            <motion.div
              className="rb-12 max-w-lg relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                className="absolute -top-4 -left-4 w-8 h-8 border border-emerald-500"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              ></motion.div>
              <motion.p
                className="font-mono text-emerald-400 text-sm uppercase tracking-widest mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                Connect
              </motion.p>
              <motion.h2
                className="mb-5 text-5xl font-bold tracking-tight md:mb-6 md:text-7xl lg:text-8xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                Get in <span className="text-emerald-400">Touch</span>
              </motion.h2>
              <motion.p
                className="text-zinc-300 font-light tracking-wide leading-relaxed md:text-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                We'd love to hear from you! Reach out with any questions or
                inquiries.
              </motion.p>
            </motion.div>
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-8 py-2">
                <motion.div
                  className="flex flex-row group hover:translate-x-2 transition-all duration-500"
                  custom={0}
                  variants={contactItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                >
                  <div className="mr-4 md:mb-4">
                    <motion.div
                      className="flex items-center justify-center size-12 bg-zinc-800/80 border border-zinc-700 group-hover:border-emerald-500 group-hover:bg-zinc-800 transition-all duration-300"
                      whileHover={{ borderColor: "#10b981", scale: 1.05 }}
                    >
                      <BiEnvelope className="size-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl text-white group-hover:text-emerald-400 transition-colors duration-300">
                      Email
                    </h3>
                    <a
                      className="text-zinc-300 hover:text-emerald-400 transition-colors duration-300"
                      href="mailto:designerlabagency@gmail.com"
                    >
                      designerlabagency@gmail.com
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  className="flex flex-row group hover:translate-x-2 transition-all duration-500"
                  custom={1}
                  variants={contactItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                >
                  <div className="mr-4 md:mb-4">
                    <motion.div
                      className="flex items-center justify-center size-12 bg-zinc-800/80 border border-zinc-700 group-hover:border-emerald-500 group-hover:bg-zinc-800 transition-all duration-300"
                      whileHover={{ borderColor: "#10b981", scale: 1.05 }}
                    >
                      <BiPhone className="size-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl text-white group-hover:text-emerald-400 transition-colors duration-300">
                      Phone
                    </h3>
                    <a
                      className="text-zinc-300 hover:text-emerald-400 transition-colors duration-300"
                      href="tel:+4367761197581"
                    >
                      +43 677 61197581
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1.0],
            delay: 0.3,
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="absolute -top-2 -left-2 w-16 h-16 border border-emerald-500/30 z-0"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          ></motion.div>
          <motion.div
            className="absolute -bottom-2 -right-2 w-24 h-24 border border-emerald-500/20 z-0"
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          ></motion.div>
          <motion.div
            className="relative z-10"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <img
              src="/call.jpg"
              className="w-full object-cover border border-zinc-800 shadow-2xl rounded-lg md:max-h-[400px]"
              alt="Person on a phone call"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Grid background effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyODI4MjgiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0yNCAyNGgydi0yaC0ydjJ6bTAgNHYtMmgtMnYyaDJ6bTAtNnYtMmgtMnYyaDJ6bTIwIDEwaC0ydjJoMnYtMnptMC00aC0ydjJoMnYtMnptMC0ydi0yaC0ydjJoMnptMC00aC0ydjJoMnYtMnptLTgtOHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 mix-blend-luminosity pointer-events-none"></div>
    </section>
  );
}
