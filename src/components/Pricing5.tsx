"use client";

import React from "react";
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { BiCheck } from "react-icons/bi";
import { motion } from "framer-motion";

type PricingPlan = {
  planName: string;
  price: string;
  features: string[];
  button: ButtonProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  pricingPlans: PricingPlan[];
};

export type Pricing18Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Pricing18 = (props: Pricing18Props) => {
  const { tagline, heading, description, pricingPlans } = {
    ...Pricing18Defaults,
    ...props,
  };
  return (
    <section
      id="relume"
      className="bg-zinc-900 text-white px-[5%] py-24 md:py-28 lg:py-32 relative overflow-hidden border-t border-zinc-800 backdrop-blur-md bg-opacity-90"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyODI4MjgiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0yNCAyNGgydi0yaC0ydjJ6bTAgNHYtMmgtMnYyaDJ6bTAtNnYtMmgtMnYyaDJ6bTIwIDEwaC0ydjJoMnYtMnptMC00aC0ydjJoMnYtMnptMC0ydi0yaC0ydjJoMnptMC00aC0ydjJoMnYtMnptLTgtOHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 mix-blend-luminosity pointer-events-none"></div>

      <div className="container relative z-10 mx-auto">
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-emerald-400 text-sm uppercase tracking-widest mb-3 md:mb-4">
            {tagline}
          </p>
          <h2 className="mb-5 text-5xl font-bold md:text-6xl lg:text-7xl tracking-tight">
            {heading}
          </h2>
          <p className="text-zinc-300 font-light tracking-wide leading-relaxed md:text-lg">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className="flex h-full flex-col justify-between border border-zinc-800 bg-zinc-900 bg-opacity-70 px-6 py-8 md:p-8 hover:border-emerald-500 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              whileHover={{ y: -5 }}
            >
              <div>
                <div className="mb-6 text-center md:mb-8">
                  <h6 className="text-md font-bold md:text-xl mb-2">
                    {plan.planName}
                  </h6>
                  <h1 className="my-2 text-6xl font-bold md:text-7xl lg:text-8xl text-emerald-400">
                    {plan.price}
                  </h1>
                  <p className="text-zinc-400 font-light">One-time payment</p>
                </div>
                <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex self-start">
                      <div className="mr-4 flex-none self-start text-emerald-400">
                        <BiCheck className="size-6" />
                      </div>
                      <p className="text-zinc-300 font-light">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  {...plan.button}
                  className={`w-full rounded-full ${
                    index === 1
                      ? "bg-emerald-500 text-zinc-900 hover:bg-emerald-400"
                      : "bg-zinc-900 border border-zinc-700 text-white hover:bg-zinc-800 hover:border-zinc-600"
                  } transition-colors duration-300 text-lg font-bold tracking-tighter normal-case py-3 cursor-pointer`}
                >
                  {plan.button.title}
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Pricing18Defaults: Props = {
  tagline: "Pricing",
  heading: "Choose Your Design Package",
  description:
    "We offer comprehensive web design packages tailored to your business needs, from simple landing pages to complex e-commerce solutions.",
  pricingPlans: [
    {
      planName: "Basic Website",
      price: "$250",
      features: [
        "Up to 3 pages",
        "Mobile responsive design",
        "Basic SEO setup",
        "Contact form integration",
        "1 round of revisions",
      ],
      button: { title: "Get Started" },
    },
    {
      planName: "Business Website",
      price: "$500",
      features: [
        "Up to 7 pages",
        "Mobile responsive design",
        "Advanced SEO optimization",
        "Contact form & newsletter",
        "Custom animations",
        "Social media integration",
        "3 rounds of revisions",
      ],
      button: { title: "Most Popular" },
    },
    {
      planName: "Premium Website",
      price: "$1000+",
      features: [
        "10+ pages",
        "E-commerce functionality",
        "Custom animations & effects",
        "Advanced SEO strategy",
        "Database integration",
        "User account system",
        "Payment gateway setup",
        "Unlimited revisions",
      ],
      button: { title: "Contact Us" },
    },
  ],
};
