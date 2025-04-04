"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";

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
  return (
    <section
      id="relume"
      className="bg-zinc-900 text-white px-[5%] py-24 md:py-32 lg:py-36 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500 to-emerald-500/0"></div>
      <div className="absolute -bottom-64 -right-64 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-64 -left-64 w-96 h-96 bg-zinc-800/50 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <div className="mb-12 w-full max-w-lg md:mb-16 lg:mb-20">
          <p className="font-mono text-emerald-400 text-sm uppercase tracking-widest mb-3">
            {tagline}
          </p>
          <h2 className="mb-5 text-5xl font-bold tracking-tight md:mb-6 md:text-7xl lg:text-8xl">
            {heading.split(" ").map((word, i) =>
              i === 1 ? (
                <span key={i} className="text-emerald-400">
                  {word}{" "}
                </span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </h2>
          <p className="text-zinc-300 font-light tracking-wide leading-relaxed md:text-md">
            {description}
          </p>
        </div>

        <div className="grid w-full grid-cols-1 items-center gap-y-12 md:gap-x-12 md:gap-y-16 lg:grid-cols-2 lg:gap-x-20 relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -z-10"></div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
            {featureSections.map((featureSection, index) => (
              <div
                key={index}
                className="flex self-start group hover:translate-x-2 transition-all duration-500"
              >
                <div className="mr-6 flex-none self-start">
                  <div className="flex items-center justify-center size-12 bg-zinc-800/80 border border-zinc-700 group-hover:border-emerald-500 group-hover:bg-zinc-800 transition-all duration-300">
                    <img
                      src={featureSection.icon.src}
                      className="size-8 group-hover:scale-110 transition-transform duration-300"
                      alt={featureSection.icon.alt}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {featureSection.heading}
                  </h3>
                  <p className="text-zinc-300 font-light">
                    {featureSection.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute -top-2 -left-2 w-8 h-8 border border-emerald-500"></div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 border border-emerald-500"></div>
            <div className="absolute -top-6 -right-6 bg-emerald-500 text-zinc-900 font-bold py-2 px-4 rotate-12 text-sm uppercase tracking-wider">
              Limited Time!
            </div>
            <PricingPlanStyled plan={pricingPlan} />
          </div>
        </div>
      </div>

      {/* Grid background effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyODI4MjgiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0yNCAyNGgydi0yaC0ydjJ6bTAgNHYtMmgtMnYyaDJ6bTAtNnYtMmgtMnYyaDJ6bTIwIDEwaC0ydjJoMnYtMnptMC00aC0ydjJoMnYtMnptMC0ydi0yaC0ydjJoMnptMC00aC0ydjJoMnYtMnptLTgtOHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 mix-blend-luminosity pointer-events-none"></div>
    </section>
  );
}

const PricingPlanStyled = ({ plan }: { plan: PricingPlan }) => (
  <div className="h-full border border-zinc-800 bg-zinc-800/30 backdrop-blur-sm px-6 py-8 md:p-8 shadow-2xl relative z-10 hover:border-emerald-500/50 transition-all duration-500">
    <div className="flex items-start justify-between">
      <div>
        <h4 className="mb-2 text-xl font-bold md:text-2xl text-white">
          {plan.planName}
        </h4>
        <p className="text-zinc-300 font-light">{plan.description}</p>
      </div>
      <div className="text-right">
        <div className="text-zinc-400 text-lg line-through mb-1">
          $19<span className="text-sm">/mo</span>
        </div>
        <h5 className="justify-self-end text-6xl font-bold md:text-8xl lg:text-9xl text-emerald-400">
          {plan.monthlyPrice}
        </h5>
      </div>
    </div>
    <div className="my-8 h-px w-full shrink-0 bg-zinc-700" />
    <p className="text-white font-mono text-sm uppercase tracking-widest">
      Includes:
    </p>
    <div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2 md:grid-cols-2 md:gap-x-6">
      {plan.features.map((feature, index) => (
        <div key={index} className="flex self-start group">
          <div className="mr-4 flex-none self-start">
            <BiCheck className="size-6 text-emerald-400" />
          </div>
          <p className="text-zinc-300 font-light group-hover:text-white transition-colors duration-300">
            {feature}
          </p>
        </div>
      ))}
    </div>
    <div className="my-8 h-px w-full shrink-0 bg-zinc-700" />
    <div>
      <Button
        {...plan.button}
        className="w-full rounded-none bg-emerald-500 text-zinc-900 hover:bg-emerald-400 transition-colors duration-300 font-medium uppercase tracking-wider text-sm py-3"
      >
        {plan.button.title}
      </Button>
    </div>
  </div>
);

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
