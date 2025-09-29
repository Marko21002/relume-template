"use client";
import { useState } from "react";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [openAddon, setOpenAddon] = useState<number | null>(null);

  const plans = [
    {
      name: "Starter",
      price: {
        monthly: 999,
        yearly: 9990,
      },
      description: "Perfect for getting your new business off the ground.",
      features: [
        "1-page website",
        "Custom design",
        "Responsive design",
        "Contact form",
        "SEO optimized",
      ],
      addOns: [
        { name: "Additional Page", price: 250 },
        { name: "Blog Setup", price: 400 },
      ],
      isPrimary: false,
      bgColor: "#A7D8DE",
    },
    {
      name: "Pro",
      price: {
        monthly: 1999,
        yearly: 19990,
      },
      description: "For established businesses looking to grow and scale.",
      features: [
        "Up to 5 pages",
        "Everything in Starter",
        "CMS integration",
        "Advanced analytics",
        "Priority support",
      ],
      addOns: [
        { name: "E-commerce Functionality", price: 800 },
        { name: "Booking System", price: 500 },
      ],
      isPrimary: true,
      bgColor: "#CBB7F7",
    },
    {
      name: "Premium",
      price: {
        monthly: 3499,
        yearly: 34990,
      },
      description:
        "For businesses that need advanced features and customization.",
      features: [
        "Unlimited pages",
        "Everything in Pro",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 support",
      ],
      addOns: [
        { name: "Advanced SEO Package", price: 600 },
        { name: "Mobile App Integration", price: 5000 },
      ],
      isPrimary: false,
      bgColor: "#F8C794",
    },
  ];

  const toggleAddon = (index: number) => {
    setOpenAddon(openAddon === index ? null : index);
  };

  return (
    <div className="px-[5%] max-w-[1200px] mx-auto py-16 md:py-24 lg:py-28 flex flex-col items-center justify-center">
      <div className="text-center flex flex-col items-center justify-center gap-4">
        <div className="text-sm font-semibold bg-neutral-100 text-black px-4 py-1 rounded-full">
          PRICING
        </div>
        <p className="text-4xl md:text-5xl font-raleway font-semibold leading-tight mt-4">
          Plans to Fit{" "}
          <span className="font-playfair-display font-normal italic">
            Your Business
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
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 lg:pt-16">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`relative w-full rounded-2xl p-8 flex flex-col shadow-lg transition-all hover:shadow-2xl ${
              plan.isPrimary
                ? "ring-2 ring-neutral-400"
                : "ring-1 ring-neutral-200"
            }`}
            style={{ backgroundColor: plan.bgColor }}
          >
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-raleway font-semibold">
                {plan.name}
              </h3>
              {plan.isPrimary && (
                <div className="bg-black text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                  🔥 Popular
                </div>
              )}
            </div>
            <p className="text-4xl font-bold font-raleway my-4">
              {isYearly
                ? `$${plan.price.yearly.toLocaleString()}/y`
                : `$${plan.price.monthly.toLocaleString()}/m`}
            </p>
            <p className="text-sm text-neutral-500">{plan.description}</p>
            <div className="my-8">
              <button
                className={`w-full px-4 py-3 rounded-lg text-md font-semibold transition-colors ${
                  plan.isPrimary
                    ? "bg-black text-white hover:bg-neutral-800"
                    : "bg-white text-black ring-1 ring-neutral-400 hover:bg-neutral-100"
                }`}
              >
                Get Started
              </button>
              <p className="text-center text-sm text-neutral-500 mt-4">
                Got questions? Talk to an expert.
              </p>
            </div>
            <hr />
            <ul className="my-8 space-y-4 text-left">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-4">
                  <svg
                    className="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8 border-t">
              <button
                onClick={() => toggleAddon(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="font-semibold">Optional add-ons</span>
                <span
                  className={`transform transition-transform duration-300 ${
                    openAddon === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  openAddon === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <ul className="mt-4 space-y-2">
                    {plan.addOns.map((addon) => (
                      <li
                        key={addon.name}
                        className="flex justify-between text-sm text-neutral-600"
                      >
                        <span>{addon.name}</span>
                        <span>+${addon.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
