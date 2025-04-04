"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { motion } from "framer-motion";

export function Header1() {
  return (
    <section
      id="relume"
      className="bg-zinc-900 text-white px-[5%] py-28 md:py-36 lg:py-40 mt-16"
    >
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <motion.p
              className="font-mono text-emerald-400 text-sm uppercase tracking-widest mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Web Design Studio
            </motion.p>
            <motion.h1
              className="mb-5 text-6xl font-bold tracking-tight md:mb-6 md:text-8xl lg:text-9xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Crafting <span className="text-emerald-400">Unique</span> Websites
              for Your Vision
            </motion.h1>
            <motion.p
              className="text-zinc-300 font-light tracking-wide leading-relaxed md:text-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              At our web design studio, we specialize in creating custom
              websites that reflect your brand's unique identity. With our
              professional design quality and affordable pricing, your online
              presence will stand out and thrive.
            </motion.p>
            <motion.div
              className="mt-6 flex flex-wrap gap-4 md:mt-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Button
                title="Get Started"
                className="rounded-none bg-emerald-500 text-zinc-900 px-8 py-3 hover:bg-emerald-400 transition-colors duration-300 font-medium uppercase tracking-wider text-sm"
              >
                Get Started
              </Button>
              <Button
                title="Learn More"
                variant="secondary"
                className="rounded-none bg-transparent border border-zinc-700 text-white hover:bg-zinc-800 hover:border-zinc-600 transition-colors duration-300 px-8 py-3 font-medium uppercase tracking-wider text-sm"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-zinc-700/30 rounded-full blur-3xl"></div>
            <motion.div
              className="relative z-10"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="w-full object-cover border border-zinc-800 shadow-2xl"
                alt="Relume placeholder image"
              />
            </motion.div>
            <motion.div
              className="absolute -top-2 -left-2 w-16 h-16 border border-emerald-500/50 z-0"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            ></motion.div>
            <motion.div
              className="absolute -bottom-2 -right-2 w-24 h-24 border border-emerald-500/30 z-0"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            ></motion.div>
          </motion.div>
        </div>
      </div>

      {/* Grid background effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyODI4MjgiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0yNCAyNGgydi0yaC0ydjJ6bTAgNHYtMmgtMnYyaDJ6bTAtNnYtMmgtMnYyaDJ6bTIwIDEwaC0ydjJoMnYtMnptMC00aC0ydjJoMnYtMnptMC0ydi0yaC0ydjJoMnptMC00aC0ydjJoMnYtMnptLTgtOHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 mix-blend-luminosity pointer-events-none"></div>
    </section>
  );
}
