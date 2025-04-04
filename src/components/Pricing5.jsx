"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function Pricing5(props) {
  const { tagline, heading, description, featureSections, pricingPlan } = {
    ...Pricing5Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-8 w-full max-w-lg lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid w-full grid-cols-1 items-center gap-y-12 md:gap-x-12 md:gap-y-16 lg:grid-cols-2 lg:gap-x-20">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
            {featureSections.map((featureSection, index) => (
              <div key={index} className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <img
                    src={featureSection.icon.src}
                    className="size-8"
                    alt={featureSection.icon.alt}
                  />
                </div>
                <div>
                  <h3 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                    {featureSection.heading}
                  </h3>
                  <p>{featureSection.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <PricingPlan plan={pricingPlan} />
          </div>
        </div>
      </div>
    </section>
  );
}

const PricingPlan = ({ plan }) => (
  <div className="h-full border border-border-primary px-6 py-8 md:p-8">
    <div className="flex items-start justify-between">
      <div>
        <h4 className="mb-2 text-xl font-bold md:text-2xl">{plan.planName}</h4>
        <p>{plan.description}</p>
      </div>
      <h5 className="justify-self-end text-6xl font-bold md:text-9xl lg:text-10xl">
        {plan.monthlyPrice}
        <span className="text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
          /mo
        </span>
      </h5>
    </div>
    <div className="my-8 h-px w-full shrink-0 bg-border" />
    <p>Includes:</p>
    <div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2 md:grid-cols-2 md:gap-x-6">
      {plan.features.map((feature, index) => (
        <div key={index} className="flex self-start">
          <div className="mr-4 flex-none self-start">
            <BiCheck className="size-6" />
          </div>
          <p>{feature}</p>
        </div>
      ))}
    </div>
    <div className="my-8 h-px w-full shrink-0 bg-border" />
    <div>
      <Button {...plan.button} className="w-full">
        {plan.button.title}
      </Button>
    </div>
  </div>
);

export const Pricing5Defaults = {
  tagline: "Pricing",
  heading: "Our Plans",
  description:
    "Choose the plan that fits your needs and start building your online presence today.",
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
      heading: "Affordable Pricing",
      description: "Flexible subscription options to suit your budget.",
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
    description: "No hidden fees, cancel anytime.",
    monthlyPrice: "$19",
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
    button: { title: "Get started" },
  },
};
