"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React, { useState } from "react";
import { BiLogoInstagram } from "react-icons/bi";
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
      className="bg-zinc-900 text-white px-[5%] py-12 md:py-16 relative overflow-hidden"
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

      <div className="container relative z-10 mx-auto">
        <div className="flex flex-col items-center text-center mb-8">
          <motion.a
            href="#"
            className="mb-4 font-mono text-2xl font-bold tracking-tighter"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-emerald-400">DESIGN</span>
            <span className="text-white">.LAB</span>
          </motion.a>
          <motion.p
            className="mb-6 text-zinc-300 font-light tracking-wide leading-relaxed max-w-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Subscribe to our newsletter for the latest updates on features and releases.
          </motion.p>
          <motion.div
            className="w-full max-w-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form
              className="mb-3 flex flex-col sm:flex-row gap-3"
              onSubmit={formState.handleSubmit}
            >
              <Input
                id="email"
                type="email"
                placeholder="Your email here"
                value={formState.email}
                onChange={formState.handleSetEmail}
                className="bg-zinc-800 border-zinc-700 text-white flex-grow"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  title="join"
                  className="rounded-none bg-emerald-500 text-zinc-900 px-6 py-2 hover:bg-emerald-400 transition-colors duration-300 text-lg font-bold tracking-tighter normal-case w-full sm:w-auto"
                >
                  Join
                </Button>
              </motion.div>
            </form>
            <p className="text-xs text-zinc-400">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col items-center gap-8 pt-6 border-t border-zinc-800">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <motion.a
              href="#about"
              className="text-zinc-300 hover:text-emerald-400 transition-colors duration-300 font-light"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              About
            </motion.a>
            <motion.a
              href="#testimonials"
              className="text-zinc-300 hover:text-emerald-400 transition-colors duration-300 font-light"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              Testimonials
            </motion.a>
            <motion.a
              href="#pricing"
              className="text-zinc-300 hover:text-emerald-400 transition-colors duration-300 font-light"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              Pricing
            </motion.a>
            <motion.a
              href="#contact"
              className="text-zinc-300 hover:text-emerald-400 transition-colors duration-300 font-light"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              Contact
            </motion.a>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="flex gap-4">
              <motion.a
                href="#"
                className="text-zinc-300 hover:text-emerald-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <BiLogoInstagram className="size-5" />
              </motion.a>
              <motion.a
                href="#"
                className="text-zinc-300 hover:text-emerald-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <FaXTwitter className="size-5" />
              </motion.a>
            </div>
            
            <p className="text-zinc-400 font-light text-sm">
              © 2024 DESIGN.LAB. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
