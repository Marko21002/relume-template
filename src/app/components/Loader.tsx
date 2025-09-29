"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Loader() {
  const counterRef = useRef(null);
  const progressBarRef = useRef(null);
  const loaderRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Text animation
    const text = "OVERDELIVER";
    const textContainer = document.querySelector(".loader-text");

    if (textContainer) {
      const textSpans = text.split("").map((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = "0";
        span.style.transform = "translateY(20px)";
        return span;
      });
      textContainer.innerHTML = "";
      textSpans.forEach((span) => textContainer.appendChild(span));
      tl.to(textSpans, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        ease: "power3.out",
        duration: 1,
      });
    }

    // Counter and progress bar animation
    const counter = { value: 0 };
    tl.to(
      counter,
      {
        value: 100,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => {
          if (counterRef.current) {
            (counterRef.current as HTMLElement).textContent = `${Math.round(
              counter.value
            )}`;
          }
          if (progressBarRef.current) {
            (
              progressBarRef.current as HTMLElement
            ).style.width = `${counter.value}%`;
          }
        },
      },
      0
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <motion.div
      ref={loaderRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-black"
      exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.2 } }}
    >
      <div className="flex flex-col items-center text-center">
        <h1 className="loader-text text-4xl md:text-6xl font-raleway font-bold text-black mb-8"></h1>
        <div className="w-full max-w-xs flex flex-col items-center">
          <p className="text-6xl font-raleway font-semibold text-black">
            <span ref={counterRef}>0</span>
            <span className="text-4xl">%</span>
          </p>
          <div className="w-full bg-neutral-200 h-1 mt-4 rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full bg-black"
              style={{ width: "0%" }}
            ></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
