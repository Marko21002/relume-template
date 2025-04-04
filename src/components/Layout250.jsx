"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { motion } from "framer-motion";

export function Layout250() {
  return (
    <section
      id="relume"
      className="bg-zinc-100 px-[5%] py-24 md:py-32 lg:py-36 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400/0 via-emerald-400 to-emerald-400/0"></div>
      <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-emerald-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-zinc-200 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <motion.div
          className="mb-16 md:mb-24 lg:mb-28"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="max-w-lg relative">
            <motion.div
              className="absolute -top-4 -left-4 w-8 h-8 border border-emerald-500"
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            ></motion.div>
            <motion.p
              className="font-mono text-emerald-600 text-sm uppercase tracking-widest mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Our Services
            </motion.p>
            <motion.h2
              className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl tracking-tight text-zinc-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Tailored web solutions for{" "}
              <span className="text-emerald-500">bloggers</span>, businesses,
              and <span className="text-emerald-500">digital creators</span>.
            </motion.h2>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <CardWithAnimation
            image="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            tag="Featured"
            title="Affordable subscription plans with fast turnaround and dedicated support."
            description="Our services are designed to empower your online presence with professional quality."
            buttonText="Learn More"
            delay={0.1}
          />
          <CardWithAnimation
            image="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            tag="Popular"
            title="Comprehensive support for your website, from launch to ongoing maintenance."
            description="We ensure your site runs smoothly while you focus on your content."
            buttonText="Sign Up"
            delay={0.3}
            className="md:translate-y-8"
          />
          <CardWithAnimation
            image="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            tag="New"
            title="Creative designs that resonate with your audience and enhance engagement."
            description="Let us help you stand out with a unique and captivating website."
            buttonText="Explore"
            delay={0.5}
          />
        </div>
      </div>

      {/* Grid background effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyODI4MjgiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aC0ydi00aDJ2NHptMC02di00aC0ydjRoMnpNMjQgMjRoMnYtMmgtMnYyem0wIDR2LTJoLTJ2Mmgyek0zNiAyNGgtMnYyaDJ2LTJ6bTAgNHYtMmgtMnYyaDJ6bTAtNnYtMmgtMnYyaDJ6bTIwIDEwaC0ydjJoMnYtMnptMC00aC0ydjJoMnYtMnptMC0ydi0yaC0ydjJoMnptMC00aC0ydjJoMnYtMnptLTgtOHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50 pointer-events-none"></div>
    </section>
  );
}

const CardWithAnimation = ({
  image,
  tag,
  title,
  description,
  buttonText,
  delay = 0,
  className = "",
}) => (
  <motion.div
    className={`flex flex-col group hover:translate-y-[-8px] transition-all duration-500 ease-in-out ${className}`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
    }}
  >
    <motion.div
      className="mb-6 md:mb-8 overflow-hidden relative"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: delay + 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="absolute inset-0 bg-emerald-500 mix-blend-color opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
      <img
        src={image}
        alt="Relume placeholder image"
        className="transform group-hover:scale-105 transition-transform duration-700 border border-zinc-200 shadow-lg"
      />
      <motion.div
        className="absolute top-2 right-2 bg-emerald-500 text-white text-xs font-medium py-1 px-2 tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: delay + 0.3 }}
      >
        {tag}
      </motion.div>
    </motion.div>
    <motion.h3
      className="mb-3 text-xl font-bold md:mb-4 md:text-2xl text-zinc-800 group-hover:text-emerald-600 transition-colors duration-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay + 0.3 }}
    >
      {title}
    </motion.h3>
    <motion.p
      className="text-zinc-600"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay + 0.4 }}
    >
      {description}
    </motion.p>
    <motion.div
      className="mt-6 flex gap-4 md:mt-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay + 0.5 }}
    >
      <Button
        iconRight={
          <RxChevronRight className="group-hover:translate-x-1 transition-transform duration-300" />
        }
        variant="link"
        size="link"
        className="text-emerald-600 font-medium hover:text-emerald-800 transition-colors duration-300"
      >
        {buttonText}
      </Button>
    </motion.div>
  </motion.div>
);
