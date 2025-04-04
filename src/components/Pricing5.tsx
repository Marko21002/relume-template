"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import React, { useState } from "react";
import { BiCheck } from "react-icons/bi";
import { motion } from "framer-motion";

type ImageProps = {
  src: string;
  alt?: string;
};

type FeatureSection = {
  icon: ImageProps;
  heading: string;
  description: string;
};

type PricingPlan = {
  planName: string;
  description: string;
  monthlyPrice: string;
  features: string[];
  button: ButtonProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  featureSections: FeatureSection[];
  pricingPlan: PricingPlan;
};

export type Pricing5Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export function Pricing5(props: Pricing5Props) {
  const { tagline, heading, description, featureSections, pricingPlan } = {
    ...Pricing5Defaults,
    ...props,
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const glowVariants = {
    initial: { scale: 0.85, opacity: 0.5 },
    animate: {
      scale: 1.15,
      opacity: 0.7,
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="relume"
      className="bg-zinc-900 text-white px-[5%] py-24 md:py-32 lg:py-36 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500 to-emerald-500/0"
      ></motion.div>
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

      <div className="container relative z-10">
        <motion.div
          className="mb-12 w-full max-w-lg md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-mono text-emerald-400 text-sm uppercase tracking-widest mb-3"
          >
            {tagline}
          </motion.p>
          <motion.h2
            className="mb-5 text-5xl font-bold tracking-tight md:mb-6 md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {heading.split(" ").map((word, i) =>
              i === 1 ? (
                <motion.span
                  key={i}
                  className="text-emerald-400"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {word}{" "}
                </motion.span>
              ) : (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {word}{" "}
                </motion.span>
              )
            )}
          </motion.h2>
          <motion.p
            className="text-zinc-300 font-light tracking-wide leading-relaxed md:text-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        </motion.div>

        <div className="grid w-full grid-cols-1 items-center gap-y-12 md:gap-x-12 md:gap-y-16 lg:grid-cols-2 lg:gap-x-20 relative">
          <motion.div
            variants={glowVariants}
            initial="initial"
            animate="animate"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -z-10"
          ></motion.div>

          <motion.div
            className="grid grid-cols-1 gap-x-6 gap-y-8 py-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {featureSections.map((featureSection, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex self-start group hover:translate-x-2 transition-all duration-500"
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
              >
                <div className="mr-6 flex-none self-start">
                  <motion.div
                    className="flex items-center justify-center size-12 bg-zinc-800/80 border border-zinc-700 group-hover:border-emerald-500 group-hover:bg-zinc-800 transition-all duration-300"
                    whileHover={{ borderColor: "#10b981", scale: 1.05 }}
                  >
                    <motion.img
                      src={featureSection.icon.src}
                      className="size-8 group-hover:scale-110 transition-transform duration-300"
                      alt={featureSection.icon.alt}
                      initial={{ rotate: -5, scale: 0.9 }}
                      whileInView={{ rotate: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                </div>
                <div>
                  <motion.h3
                    className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl text-white group-hover:text-emerald-400 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    {featureSection.heading}
                  </motion.h3>
                  <motion.p
                    className="text-zinc-300 font-light"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    {featureSection.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>

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
              className="absolute -top-2 -left-2 w-8 h-8 border border-emerald-500"
              initial={{ opacity: 0, x: -10, y: -10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            ></motion.div>
            <motion.div
              className="absolute -bottom-2 -right-2 w-12 h-12 border border-emerald-500"
              initial={{ opacity: 0, x: 10, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            ></motion.div>
            <motion.div
              className="absolute -top-6 -right-6 bg-emerald-500 text-zinc-900 font-bold py-2 px-4 rotate-12 text-sm uppercase tracking-wider"
              initial={{ opacity: 0, scale: 0, rotate: 20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 12 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.9,
              }}
              viewport={{ once: true }}
              whileHover={{
                rotate: -5,
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              Limited Time!
            </motion.div>
            <PricingPlanStyled plan={pricingPlan} />
          </motion.div>
        </div>
      </div>

      {/* Grid background effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyODI4MjgiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0yNCAyNGgydi0yaC0ydjJ6bTAgNHYtMmgtMnYyaDJ6bTAtNnYtMmgtMnYyaDJ6bTIwIDEwaC0ydjJoMnYtMnptMC00aC0ydjJoMnYtMnptMC0ydi0yaC0ydjJoMnptMC00aC0ydjJoMnYtMnptLTgtOHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 mix-blend-luminosity pointer-events-none"
      ></motion.div>
    </section>
  );
}

const PricingPlanStyled = ({ plan }: { plan: PricingPlan }) => {
  const [isHovered, setIsHovered] = useState(false);

  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      className="h-full border border-zinc-800 bg-zinc-800/30 backdrop-blur-sm px-6 py-8 md:p-8 shadow-2xl relative z-10 hover:border-emerald-500/50 transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{
        boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.15)",
        borderColor: "rgba(16, 185, 129, 0.5)",
        y: -5,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.h4
            className="mb-2 text-xl font-bold md:text-2xl text-white"
            whileHover={{ color: "#10b981", x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {plan.planName}
          </motion.h4>
          <motion.p
            className="text-zinc-300 font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {plan.description}
          </motion.p>
        </motion.div>
        <motion.div
          className="text-right"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-zinc-400 text-lg line-through mb-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            $19<span className="text-sm">/mo</span>
          </motion.div>
          <motion.h5
            className="justify-self-end text-6xl font-bold md:text-8xl lg:text-9xl text-emerald-400"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.5,
            }}
            viewport={{ once: true }}
            animate={
              isHovered
                ? {
                    scale: [1, 1.05, 1],
                    color: ["#10b981", "#34d399", "#10b981"],
                    transition: { duration: 1.5, repeat: Infinity },
                  }
                : {}
            }
          >
            {plan.monthlyPrice}
          </motion.h5>
        </motion.div>
      </div>
      <motion.div
        className="my-8 h-px w-full shrink-0 bg-zinc-700"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      />
      <motion.p
        className="text-white font-mono text-sm uppercase tracking-widest"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
      >
        Includes:
      </motion.p>
      <motion.div
        className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2 md:grid-cols-2 md:gap-x-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {plan.features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex self-start group"
            custom={index}
            variants={featureVariants}
          >
            <motion.div
              className="mr-4 flex-none self-start"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <BiCheck className="size-6 text-emerald-400" />
            </motion.div>
            <motion.p
              className="text-zinc-300 font-light group-hover:text-white transition-colors duration-300"
              whileHover={{ x: 2, color: "#ffffff" }}
            >
              {feature}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="my-8 h-px w-full shrink-0 bg-zinc-700"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        viewport={{ once: true }}
      >
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Button
            {...plan.button}
            className="w-full rounded-none bg-emerald-500 text-zinc-900 hover:bg-emerald-400 transition-colors duration-300 font-medium uppercase tracking-wider text-sm py-3"
          >
            {plan.button.title}
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export const Pricing5Defaults: Props = {
  tagline: "Special Offer",
  heading: "Free Plan",
  description:
    "For a limited time, get started with our basic plan at no cost and experience the full suite of features.",
  featureSections: [
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Relume logo 1",
      },
      heading: "Key Features",
      description: "Professional design quality tailored for your brand.",
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Relume logo 1",
      },
      heading: "Zero Cost",
      description: "All premium features included with no hidden charges.",
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Relume logo 1",
      },
      heading: "Full Support",
      description: "Dedicated assistance whenever you need it.",
    },
  ],
  pricingPlan: {
    planName: "Basic Plan",
    description: "No credit card required, cancel anytime.",
    monthlyPrice: "FREE",
    features: [
      "Custom website design",
      "24/7 customer support",
      "Monthly updates included",
      "SEO optimization tools",
      "Social media integration",
      "Advanced analytics dashboard",
      "Priority support access",
      "Monthly performance reports",
      "Custom website design",
      "24/7 customer support",
    ],
    button: { title: "Get started free" },
  },
};
