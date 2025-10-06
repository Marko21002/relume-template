"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Cta2() {
  return (
    <div className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-neutral-100 p-8 md:p-12 lg:p-16">
        {/* Left Illustration */}
        <motion.div
          className="absolute -bottom-16 -left-16 hidden h-72 w-72 lg:block"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Image src="/mail2.png" alt="Newsletter" width={288} height={288} />
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          className="absolute -bottom-16 -right-16 hidden h-72 w-72 lg:block"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src="/mail2.png"
            alt="Newsletter"
            className="scale-x-[-1]"
            width={288}
            height={288}
          />
        </motion.div>

        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
              NEWSLETTER
            </p>
            <motion.div
              className="my-4 lg:hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image src="/mail2.png" alt="Newsletter" width={80} height={80} />
            </motion.div>
            <h2 className="mt-4 max-w-lg font-raleway text-4xl font-semibold text-black md:text-5xl">
              Get news delivered right to your inbox
            </h2>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Email Address"
              className="w-full max-w-sm rounded-lg bg-white px-4 py-3 text-black ring-1 ring-neutral-300 transition-shadow focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              className="w-full sm:w-auto rounded-lg bg-black px-6 py-3 font-semibold text-white transition-colors hover:bg-neutral-800"
            >
              Subscribe
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
