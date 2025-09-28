"use client";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Loader() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const progress = useTransform(count, (latest) => `${latest}%`);

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 2.5, // Total duration for loading
      ease: "easeInOut",
    });
    return controls.stop;
  }, [count]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-black"
      exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.2 } }}
    >
      <motion.img
        src="/overdeliver.png"
        alt="Loading..."
        className="w-64"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <div className="absolute bottom-24 w-full max-w-sm flex flex-col items-center">
        <motion.p className="text-6xl font-raleway font-semibold">
          <motion.span>{rounded}</motion.span>
          <span className="text-4xl">%</span>
        </motion.p>
        <div className="w-full bg-neutral-200 h-1 mt-4 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-black"
            style={{ width: progress }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
