"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { RxChevronDown } from "react-icons/rx";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

export function Navbar2() {
  const useActive = useRelume();
  return (
    <section
      id="relume"
      className="z-[999] fixed top-0 left-0 right-0 flex w-full items-center border-b border-zinc-800 bg-zinc-900 backdrop-blur-md bg-opacity-90 lg:min-h-18 lg:px-[5%]"
    >
      <div className="mx-auto size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between lg:gap-4">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <a
            href="#home"
            className="font-mono text-2xl font-bold tracking-tighter text-emerald-400"
          >
            DESIGN<span className="text-white">.LAB</span>
          </a>
          <div className="flex items-center gap-4 lg:hidden">
            <div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href="tel:+43 677 61197581"
                  className="px-8 py-3 cursor-pointer bg-emerald-500 text-zinc-900 rounded-full hover:bg-emerald-400 transition-colors duration-300 text-md font-bold tracking-tighter normal-case inline-block"
                  title="call us"
                >
                  Call us
                </a>
              </motion.div>
            </div>
            <button
              className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
              onClick={useActive.toggleMobileMenu}
            >
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-white"
                animate={useActive.animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: 8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-white"
                animate={useActive.animateMobileMenu}
                variants={{
                  open: { width: 0, transition: { duration: 0.1 } },
                  closed: {
                    width: "1.5rem",
                    transition: { delay: 0.3, duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-white"
                animate={useActive.animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: -8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
            </button>
          </div>
        </div>
        <motion.div
          variants={{
            open: { height: "var(--height-open, 100dvh)" },
            close: { height: "var(--height-closed, 0)" },
          }}
          animate={useActive.animateMobileMenu}
          initial="close"
          exit="close"
          transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] text-center bg-zinc-900 lg:bg-transparent lg:flex lg:items-center lg:justify-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          <a
            href="#home"
            className="block py-3 text-md first:pt-7 text-zinc-300 hover:text-emerald-400 font-light tracking-wide transition-colors duration-300 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
          >
            Home
          </a>
          <a
            href="#testimonials"
            className="block py-3 text-md first:pt-7 text-zinc-300 hover:text-emerald-400 font-light tracking-wide transition-colors duration-300 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
          >
            Testimonials
          </a>
          <a
            href="#pricing"
            className="block py-3 text-md first:pt-7 text-zinc-300 hover:text-emerald-400 font-light tracking-wide transition-colors duration-300 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="block py-3 text-md first:pt-7 text-zinc-300 hover:text-emerald-400 font-light tracking-wide transition-colors duration-300 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="block py-3 text-md first:pt-7 text-zinc-300 hover:text-emerald-400 font-light tracking-wide transition-colors duration-300 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
          >
            Contact
          </a>
        </motion.div>
        <div className="hidden justify-self-end lg:block">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <a
              href="tel:+43 677 61197581"
              className="px-8 py-3 cursor-pointer bg-emerald-500 text-zinc-900 rounded-full hover:bg-emerald-400 transition-colors duration-300 text-md font-bold tracking-tighter normal-case inline-block"
              title="call us"
            >
              Call us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
