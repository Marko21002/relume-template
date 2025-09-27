"use client";
import { useState } from "react";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: {
        monthly: "$999",
        yearly: "$9,999",
      },
      description: "Perfect for getting your new business off the ground.",
      features: [
        "1-page website",
        "Custom design",
        "Responsive design",
        "Contact form",
        "SEO optimized",
      ],
      isPrimary: false,
    },
    {
      name: "Pro",
      price: {
        monthly: "$1999",
        yearly: "$19,999",
      },
      description: "For established businesses looking to grow and scale.",
      features: [
        "Up to 5 pages",
        "Everything in Starter",
        "CMS integration",
        "Advanced analytics",
        "Priority support",
      ],
      isPrimary: true,
    },
  ];

  return (
    <div className="px-[5%] max-w-[1200px] mx-auto py-16 md:py-24 lg:py-28 flex flex-col items-center justify-center">
      <div className="text-center flex flex-col items-center justify-center gap-4">
        <div className="text-sm ">PRICING</div>
        <p className="text-4xl font-raleway font-semibold leading-none">
          Choose your <br />
          <span className="font-playfair-display font-normal italic">
            perfect plan
          </span>
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 mt-8">
        <span>Monthly</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-neutral-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
        </label>
        <span>Yearly</span>
      </div>
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 pt-12 lg:pt-16">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative w-full lg:w-1/2 border rounded-lg p-8 flex flex-col transition-transform hover:scale-105 ${
              plan.isPrimary
                ? "border-black bg-gradient-to-br from-white to-neutral-100"
                : "border-neutral-400"
            }`}
          >
            {plan.isPrimary && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
            )}
            <h3 className="text-2xl font-raleway font-semibold">{plan.name}</h3>
            <p className="text-4xl font-bold font-raleway my-4">
              {isYearly ? plan.price.yearly : plan.price.monthly}
            </p>
            <p className="text-md text-neutral-600">{plan.description}</p>
            <ul className="my-8 space-y-4 text-left">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <button
                className={`w-full px-4 py-3 rounded-lg text-md font-semibold transition-colors ${
                  plan.isPrimary
                    ? "bg-black text-white hover:bg-neutral-800"
                    : "bg-white text-black ring ring-neutral-400 hover:bg-neutral-100"
                }`}
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
