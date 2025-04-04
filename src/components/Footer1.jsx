"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React, { useState } from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer1() {
  const formState = useForm();
  return (
    <footer
      id="relume"
      className="bg-zinc-900 text-white px-[5%] py-16 md:py-20 lg:py-24 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400/0 via-emerald-400 to-emerald-400/0"></div>
      <motion.div
        initial={{ scale: 0.85, opacity: 0.5 }}
        animate={{
          scale: 1.15,
          opacity: 0.2,
          transition: {
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
        className="absolute -bottom-64 -right-64 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
      ></motion.div>

      {/* Grid background effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyODI4MjgiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0yNCAyNGgydi0yaC0ydjJ6bTAgNHYtMmgtMnYyaDJ6bTAtNnYtMmgtMnYyaDJ6bTIwIDEwaC0ydjJoMnYtMnptMC00aC0ydjJoMnYtMnptMC0ydi0yaC0ydjJoMnptMC00aC0ydjJoMnYtMnptLTgtOHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 mix-blend-luminosity pointer-events-none"></div>

      <div className="container relative z-10 mx-auto">
        <div className="grid grid-cols-1 gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[0.75fr_1fr] lg:gap-y-4 lg:pb-20">
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.a
              href="#"
              className="mb-5 md:mb-6 font-mono text-2xl font-bold tracking-tighter"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-emerald-400">DESIGN</span>
              <span className="text-white">.LAB</span>
            </motion.a>
            <motion.p
              className="mb-5 md:mb-6 text-zinc-300 font-light tracking-wide leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Subscribe to our newsletter for the latest updates on features and
              releases.
            </motion.p>
            <motion.div
              className="w-full max-w-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <form
                className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4"
                onSubmit={formState.handleSubmit}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email here"
                  value={formState.email}
                  onChange={formState.handleSetEmail}
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    title="join"
                    className="rounded-none bg-emerald-500 text-zinc-900 px-6 py-2 hover:bg-emerald-400 transition-colors duration-300 text-lg font-bold tracking-tighter normal-case"
                  >
                    Join
                  </Button>
                </motion.div>
              </form>
              <p className="text-xs text-zinc-400">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 items-start gap-y-10 sm:grid-cols-3 sm:gap-x-6 md:gap-x-8 md:gap-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold text-emerald-400 font-mono uppercase tracking-widest text-sm md:mb-4">
                Useful Links
              </h2>
              <ul>
                <li className="py-2 text-sm">
                  <motion.a
                    href="#"
                    className="flex items-center gap-3 text-zinc-300 hover:text-emerald-400 transition-colors duration-300 font-light tracking-wide"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>About Us</span>
                  </motion.a>
                </li>
                <li className="py-2 text-sm">
                  <motion.a
                    href="#"
                    className="flex items-center gap-3 text-zinc-300 hover:text-emerald-400 transition-colors duration-300 font-light tracking-wide"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>Contact Us</span>
                  </motion.a>
                </li>
                <li className="py-2 text-sm">
                  <motion.a
                    href="#"
                    className="flex items-center gap-3 text-zinc-300 hover:text-emerald-400 transition-colors duration-300 font-light tracking-wide"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>Services</span>
                  </motion.a>
                </li>
                <li className="py-2 text-sm">
                  <motion.a
                    href="#"
                    className="flex items-center gap-3 text-zinc-300 hover:text-emerald-400 transition-colors duration-300 font-light tracking-wide"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>Blog Posts</span>
                  </motion.a>
                </li>
                <li className="py-2 text-sm">
                  <motion.a
                    href="#"
                    className="flex items-center gap-3 text-zinc-300 hover:text-emerald-400 transition-colors duration-300 font-light tracking-wide"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>FAQs</span>
                  </motion.a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold text-emerald-400 font-mono uppercase tracking-widest text-sm md:mb-4">
                Connect With Us
              </h2>
              <ul>
                <li className="py-2 text-sm">
                  <motion.a
                    href="#"
                    className="flex items-center gap-3 text-zinc-300 hover:text-emerald-400 transition-colors duration-300 font-light tracking-wide"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>Support</span>
                  </motion.a>
                </li>
                <li className="py-2 text-sm">
                  <motion.a
                    href="#"
                    className="flex items-center gap-3 text-zinc-300 hover:text-emerald-400 transition-colors duration-300 font-light tracking-wide"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>Careers</span>
                  </motion.a>
                </li>
                <li className="py-2 text-sm">
                  <motion.a
                    href="#"
                    className="flex items-center gap-3 text-zinc-300 hover:text-emerald-400 transition-colors duration-300 font-light tracking-wide"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>Testimonials</span>
                  </motion.a>
                </li>
                <li className="py-2 text-sm">
                  <motion.a
                    href="#"
                    className="flex items-center gap-3 text-zinc-300 hover:text-emerald-400 transition-colors duration-300 font-light tracking-wide"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>Portfolio</span>
                  </motion.a>
                </li>
                <li className="py-2 text-sm">
                  <motion.a
                    href="#"
                    className="flex items-center gap-3 text-zinc-300 hover:text-emerald-400 transition-colors duration-300 font-light tracking-wide"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>Events</span>
                  </motion.a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold text-emerald-400 font-mono uppercase tracking-widest text-sm md:mb-4">
                Follow Us
              </h2>
              <ul className="flex flex-col items-start">
                <li className="py-2 text-sm">
                  <motion.a
                    href="#"
                    className="flex items-center gap-3 text-zinc-300 hover:text-emerald-400 transition-colors duration-300 font-light tracking-wide"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <BiLogoFacebookCircle className="size-6 text-emerald-400" />
                    <span>Facebook</span>
                  </motion.a>
                </li>
                <li className="py-2 text-sm">
                  <motion.a
                    href="#"
                    className="flex items-center gap-3 text-zinc-300 hover:text-emerald-400 transition-colors duration-300 font-light tracking-wide"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <BiLogoInstagram className="size-6 text-emerald-400" />
                    <span>Instagram</span>
                  </motion.a>
                </li>
                <li className="py-2 text-sm">
                  <motion.a
                    href="#"
                    className="flex items-center gap-3 text-zinc-300 hover:text-emerald-400 transition-colors duration-300 font-light tracking-wide"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaXTwitter className="size-6 p-0.5 text-emerald-400" />
                    <span>X</span>
                  </motion.a>
                </li>
                <li className="py-2 text-sm">
                  <motion.a
                    href="#"
                    className="flex items-center gap-3 text-zinc-300 hover:text-emerald-400 transition-colors duration-300 font-light tracking-wide"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <BiLogoLinkedinSquare className="size-6 text-emerald-400" />
                    <span>LinkedIn</span>
                  </motion.a>
                </li>
                <li className="py-2 text-sm">
                  <motion.a
                    href="#"
                    className="flex items-center gap-3 text-zinc-300 hover:text-emerald-400 transition-colors duration-300 font-light tracking-wide"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <BiLogoYoutube className="size-6 text-emerald-400" />
                    <span>YouTube</span>
                  </motion.a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        <div className="h-px w-full bg-zinc-800" />
        <motion.div
          className="flex flex-col-reverse items-start justify-between pt-6 pb-4 text-sm md:flex-row md:items-center md:pt-8 md:pb-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="mt-6 md:mt-0 text-zinc-400 font-light">
            © 2024 DESIGN.LAB. All rights reserved.
          </p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li>
              <motion.a
                href="#"
                className="text-zinc-300 hover:text-emerald-400 transition-colors duration-300 font-light"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                Privacy Policy
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#"
                className="text-zinc-300 hover:text-emerald-400 transition-colors duration-300 font-light"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                Terms of Service
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#"
                className="text-zinc-300 hover:text-emerald-400 transition-colors duration-300 font-light"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                Cookie Settings
              </motion.a>
            </li>
          </ul>
        </motion.div>
      </div>
    </footer>
  );
}
