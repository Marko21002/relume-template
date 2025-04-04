"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { motion } from "framer-motion";

export function Layout1() {
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

  return (
    <section
      id="relume"
      className="bg-zinc-100 px-[5%] py-24 md:py-32 lg:py-36 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400/0 via-emerald-400 to-emerald-400/0"></div>
      <motion.div
        variants={glowVariants}
        initial="initial"
        animate="animate"
        className="absolute -bottom-64 -right-64 w-96 h-96 bg-emerald-100 rounded-full opacity-50 blur-3xl"
      ></motion.div>
      <motion.div
        variants={glowVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.5 }}
        className="absolute top-64 -left-64 w-96 h-96 bg-zinc-200 rounded-full blur-3xl"
      ></motion.div>

      <div className="container relative z-10 mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.p
              className="font-mono text-emerald-600 text-sm uppercase tracking-widest mb-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Innovate
            </motion.p>
            <motion.h1
              className="mb-5 text-5xl font-bold tracking-tight md:mb-6 md:text-7xl lg:text-8xl text-zinc-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Meet Our <span className="text-emerald-500">Passionate</span> Web
              Design Team
            </motion.h1>
            <motion.p
              className="text-zinc-600 font-light tracking-wide leading-relaxed md:text-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              At our studio, we believe in crafting unique digital experiences
              that resonate with your audience. Our dedicated team combines
              creativity and technical expertise to bring your vision to life.
            </motion.p>
            <motion.div
              className="mt-6 flex flex-wrap items-center gap-4 md:mt-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  title="learn more"
                  variant="secondary"
                  className="rounded-none bg-emerald-500 text-white px-8 py-3 hover:bg-emerald-400 transition-colors duration-300 text-lg font-bold tracking-tighter normal-case"
                >
                  Learn more
                </Button>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Button
                  title="contact"
                  variant="link"
                  size="link"
                  iconRight={
                    <RxChevronRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  }
                  className="text-emerald-600 text-lg font-bold tracking-tighter hover:text-emerald-800 transition-colors duration-300"
                >
                  Contact
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              className="absolute -top-4 -left-4 w-16 h-16 border border-emerald-500/50 z-0"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            ></motion.div>
            <motion.div
              className="absolute -bottom-4 -right-4 w-24 h-24 border border-emerald-500/30 z-0"
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
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="w-full object-cover border border-zinc-200 shadow-2xl"
                alt="Relume placeholder image"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Grid background effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyODI4MjgiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aC0ydi00aDJ2NHptMC02di00aC0ydjRoMnpNMjQgMjRoMnYtMmgtMnYyem0wIDR2LTJoLTJ2Mmgyek0zNiAyNGgtMnYyaDJ2LTJ6bTAgNHYtMmgtMnYyaDJ6bTAtNnYtMmgtMnYyaDJ6bTIwIDEwaC0ydjJoMnYtMnptMC00aC0ydjJoMnYtMnptMC0ydi0yaC0ydjJoMnptMC00aC0ydjJoMnYtMnptLTgtOHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50 pointer-events-none"></div>
    </section>
  );
}
