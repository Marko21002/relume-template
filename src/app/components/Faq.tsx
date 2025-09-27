"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the turnaround time for a website?",
      answer:
        "Our standard turnaround time is two weeks from the moment we receive all the necessary content from you. For more complex projects, this timeline may be extended, but we will always provide a clear estimate upfront.",
    },
    {
      question: "Do you offer hosting and domain services?",
      answer:
        "While we do not directly provide hosting or domain registration, we can guide you through the process and recommend the best providers based on your needs. We'll ensure your website is set up correctly on your chosen platform.",
    },
    {
      question: "Can I update the website myself?",
      answer:
        "Yes! For our Pro plan, we build your website on a user-friendly CMS that allows you to easily update content, add blog posts, and make other changes without any technical knowledge. We also provide training to get you started.",
    },
    {
      question: "What kind of support do you offer after launch?",
      answer:
        "We offer 30 days of free support after your website goes live to address any bugs or issues. For ongoing support and maintenance, we have monthly retainer plans available to ensure your site stays up-to-date and secure.",
    },
    {
      question: "Do you offer SEO services?",
      answer:
        "All of our websites are built with on-page SEO best practices in mind. We also offer more advanced SEO packages that include keyword research, content strategy, and link building to help you rank higher in search results.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="px-[5%] max-w-[1400px] mx-auto py-16 md:py-24 lg:py-28 flex flex-col items-center justify-center">
      <div className="text-center flex flex-col items-center justify-center gap-4">
        <div className="text-sm ">FAQ</div>
        <p className="text-4xl font-raleway font-semibold leading-none">
          Frequently Asked <br />
          <span className="font-playfair-display font-normal italic">
            Questions
          </span>
        </p>
      </div>
      <motion.div
        className="w-full max-w-3xl mt-12 lg:mt-16 space-y-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className={`rounded-lg transition-all duration-300 ring-1 ring-neutral-400 cursor-pointer ${
              openFaq === index ? "bg-black text-white p-6" : "bg-white p-6"
            }`}
            variants={itemVariants}
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center text-left"
            >
              <span className="text-lg font-raleway font-semibold">
                {faq.question}
              </span>
              <motion.div
                className="relative h-6 w-6"
                animate={{ rotate: openFaq === index ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  ></path>
                </svg>
              </motion.div>
            </button>
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                openFaq === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className={`pt-4 text-md ${
                    openFaq === index ? "text-neutral-300" : "text-neutral-600"
                  }`}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
