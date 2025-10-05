"use client";
import { useState } from "react";
import type { JSX } from "react";

interface BasePlan {
  name: string;
  icon: JSX.Element;
  description: string;
  features: string[];
  isPrimary: boolean;
}

interface PricedPlan extends BasePlan {
  monthlyPrice: number;
  yearlyPrice: number;
  isCustom?: false;
}

interface CustomPlan extends BasePlan {
  isCustom: true;
}

type SubscriptionPlan = PricedPlan | CustomPlan;

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [isMonthly, setIsMonthly] = useState(true);

  const subscriptionPlans: SubscriptionPlan[] = [
    {
      name: "Maintenance",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-7 h-7"
        >
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
        </svg>
      ),
      description:
        "Keep your website secure, fast, and up-to-date with our essential maintenance plan.",
      monthlyPrice: 49,
      yearlyPrice: 490,
      features: [
        "Weekly backups",
        "Security monitoring",
        "Performance optimization",
        "Plugin & theme updates",
        "Monthly health report",
      ],
      isPrimary: false,
    },
    {
      name: "Maintenance + Design",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-7 h-7 text-white"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      description:
        "Everything in Maintenance, plus ongoing design for your marketing needs.",
      monthlyPrice: 149,
      yearlyPrice: 1490,
      features: [
        "Everything in Maintenance",
        "Unlimited social media graphics",
        "Bi-weekly content updates",
        "Priority support",
        "Monthly design strategy call",
      ],
      isPrimary: true,
    },
    {
      name: "Custom",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-7 h-7"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
      description:
        "A tailored plan for businesses with specific design, development, or marketing needs.",
      features: [
        "Dedicated account manager",
        "Custom development",
        "Advanced SEO & marketing",
        "Full team access",
        "Bespoke solutions",
      ],
      isPrimary: false,
      isCustom: true,
    },
  ];

  const oneTimeProjects = [
    {
      name: "Landing Page",
      description:
        "A professional one-page website to capture leads and showcase your brand.",
      price: 199,
    },
    {
      name: "Business Website",
      description:
        "A complete, multi-page website to establish a strong online presence for your business.",
      price: 499,
    },
    {
      name: "E-commerce Store",
      description:
        "A powerful online store to sell your products, with secure payment integrations.",
      price: 999,
    },
  ];

  const CheckmarkIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  return (
    <div
      id="pricing"
      className="px-[5%] max-w-[1200px] mx-auto py-16 md:py-24 lg:py-28 flex flex-col items-center justify-center"
    >
      <div className="text-center flex flex-col items-center justify-center gap-4">
        <div className="text-sm font-semibold bg-neutral-100 text-black px-4 py-1 rounded-full">
          PRICING
        </div>
        <h2 className="text-4xl md:text-5xl font-raleway font-semibold leading-tight mt-4">
          Transparent Pricing for Every{" "}
          <span className="text-black font-playfair-display italic">
            Stage of Growth
          </span>
        </h2>
        <p className="mt-2 text-neutral-600 max-w-2xl">
          Choose a one-time project to launch your website, or a subscription to
          keep it growing.
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 mt-10">
        <button
          onClick={() => setIsMonthly(true)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            isMonthly
              ? "bg-black text-white"
              : "bg-neutral-200 text-black hover:bg-neutral-300"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsMonthly(false)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            !isMonthly
              ? "bg-black text-white"
              : "bg-neutral-200 text-black hover:bg-neutral-300"
          }`}
        >
          One-Time
        </button>
      </div>
      {isMonthly ? (
        <>
          <div className="flex items-center justify-center gap-4 mt-10">
            <span className="font-medium">Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-12 h-6 rounded-full transition-colors focus:outline-none ${
                isYearly ? "bg-black" : "bg-neutral-200"
              }`}
            >
              <span
                className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  isYearly ? "transform translate-x-6" : ""
                }`}
              />
            </button>
            <span className="font-medium">
              Yearly{" "}
              <span className="text-sm text-green-600">(2 months free!)</span>
            </span>
          </div>
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 lg:pt-16 items-start">
            {subscriptionPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 flex flex-col h-full ${
                  plan.isPrimary
                    ? "bg-black text-white"
                    : "bg-neutral-50 ring-1 ring-neutral-200"
                }`}
              >
                <div className="flex items-center gap-4">
                  {plan.icon}
                  <h3 className="text-xl font-raleway font-semibold">
                    {plan.name}
                  </h3>
                </div>
                <p
                  className={`mt-4 ${
                    plan.isPrimary ? "text-neutral-300" : "text-neutral-600"
                  }`}
                >
                  {plan.description}
                </p>
                <div className="my-6">
                  {plan.isCustom ? (
                    <p className="text-4xl font-bold font-raleway">Custom</p>
                  ) : (
                    <p className="text-4xl font-bold font-raleway">
                      $
                      {isYearly
                        ? plan.yearlyPrice.toLocaleString()
                        : plan.monthlyPrice.toLocaleString()}
                      <span
                        className={`text-lg font-medium ${
                          plan.isPrimary
                            ? "text-neutral-300"
                            : "text-neutral-500"
                        }`}
                      >
                        /{isYearly ? "yr" : "mo"}
                      </span>
                    </p>
                  )}
                </div>
                <button
                  className={`w-full px-4 py-3 rounded-lg text-md font-semibold transition-colors ${
                    plan.isPrimary
                      ? "bg-white text-black hover:bg-neutral-200"
                      : "bg-white ring-1 ring-neutral-200 text-black hover:bg-neutral-100"
                  }`}
                >
                  {plan.isCustom ? "Book a Call" : "Get started"}
                </button>
                <hr
                  className={`my-8 ${
                    plan.isPrimary ? "border-neutral-700" : "border-neutral-200"
                  }`}
                />
                <p
                  className={`font-semibold ${
                    plan.isPrimary ? "text-white" : "text-black"
                  }`}
                >
                  {plan.name} includes:
                </p>
                <ul className="mt-4 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckmarkIcon />
                      <span
                        className={
                          plan.isPrimary
                            ? "text-neutral-300"
                            : "text-neutral-600"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 lg:pt-16 items-start">
          {oneTimeProjects.map((service) => (
            <div
              key={service.name}
              className="bg-neutral-50 ring-1 ring-neutral-200 rounded-2xl p-8 flex flex-col flex-grow h-full"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-raleway font-semibold text-black">
                  {service.name}
                </h3>
                <p className="text-xl font-bold font-raleway text-black">
                  ${service.price.toLocaleString()}
                </p>
              </div>
              <p className="mt-2 text-neutral-600 flex-grow">
                {service.description}
              </p>
              <button className="mt-6 w-full px-4 py-3 rounded-lg text-md font-semibold bg-white ring-1 ring-neutral-200 text-black hover:bg-neutral-100 transition-colors">
                Get a quote
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="mt-16 w-full max-w-6xl bg-black rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <h3 className="text-2xl font-raleway font-semibold text-white text-center md:text-left">
          Have Questions?
        </h3>
        <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors flex-shrink-0">
          Book a Call
        </button>
      </div>
    </div>
  );
}
