"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const buttonVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="px-[5%] max-w-[1200px] mx-auto py-4 flex items-center justify-between">
        <a href="#">
          <motion.img
            src="/overdeliver.png"
            alt="overdeliver"
            className="w-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </a>
        <motion.div
          className="hidden md:block"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          <div className="flex gap-4">
            <button className="px-3 cursor-pointer py-2 w-full sm:w-auto bg-white text-black ring ring-neutral-400 rounded-lg text-md font-semibold transition-colors hover:bg-neutral-100 flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.759a11.024 11.024 0 004.754 4.754l.759-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C6.477 18 2 13.523 2 8V3z" />
              </svg>
              Book a call
            </button>
            <button className="px-3 cursor-pointer py-2 w-full sm:w-auto bg-black text-white rounded-lg text-md font-semibold transition-colors hover:bg-neutral-800">
              Get a free re-design
            </button>
          </div>
        </motion.div>
        <button
          onClick={() => setIsMenuOpen(true)}
          className="px-2 py-2 rounded-full  cursor-pointer md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            color={"#000000"}
            fill={"none"}
            className="cursor-pointer"
          >
            <path
              d="M4 5L20 5"
              stroke="#141B34"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12L20 12"
              stroke="#141B34"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 19L20 19"
              stroke="#141B34"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-white transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center p-5 border-b border-neutral-200">
          <a href="#">
            <img src="/overdeliver.png" alt="overdeliver" className="w-40" />
          </a>
          <button onClick={() => setIsMenuOpen(false)} className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <div className="w-full px-8 space-y-4">
            <button className="w-full px-3 py-2 flex items-center justify-center gap-2 bg-white text-black ring ring-neutral-400 rounded-lg text-md font-semibold transition-colors hover:bg-neutral-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.759a11.024 11.024 0 004.754 4.754l.759-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C6.477 18 2 13.523 2 8V3z" />
              </svg>
              Book a call
            </button>
            <button className="w-full px-3 py-2 bg-black text-white rounded-lg text-md font-semibold transition-colors hover:bg-neutral-800">
              Get a free re-design
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
