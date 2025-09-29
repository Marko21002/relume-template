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
    const textSpans = text.split("").map((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.opacity = "0";
      span.style.transform = "translateY(20px)";
      return span;
    });
    const textContainer = document.querySelector(".loader-text");
    if (textContainer) {
      textSpans.forEach((span) => textContainer.appendChild(span));
      tl.to(textSpans, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        ease: "power3.out",
        duration: 1,
      });
    }

    // Panels animation
    tl.to(
      ".panel-1",
      {
        height: "100%",
        duration: 0.8,
        ease: "power3.inOut",
      },
      0
    )
      .to(
        ".panel-2",
        {
          height: "100%",
          duration: 0.8,
          ease: "power3.inOut",
        },
        0.2
      )
      .to(
        ".panel-3",
        {
          height: "100%",
          duration: 0.8,
          ease: "power3.inOut",
        },
        0.4
      );

    // Counter and progress bar animation
    const counter = { value: 0 };
    tl.to(
      counter,
      {
        value: 100,
        duration: 1.5,
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
      "-=1.2"
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
      <div className="absolute inset-0 flex">
        <div
          className="panel-1 w-1/3 bg-neutral-900"
          style={{ height: "0%" }}
        ></div>
        <div
          className="panel-2 w-1/3 bg-neutral-700"
          style={{ height: "0%" }}
        ></div>
        <div
          className="panel-3 w-1/3 bg-neutral-500"
          style={{ height: "0%" }}
        ></div>
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="loader-text text-4xl md:text-6xl font-raleway font-bold text-white mb-8"></h1>
        <div className="absolute bottom-[-120px] w-full max-w-sm flex flex-col items-center">
          <p className="text-6xl font-raleway font-semibold text-white">
            <span ref={counterRef}>0</span>
            <span className="text-4xl">%</span>
          </p>
          <div className="w-full bg-neutral-200/50 h-1 mt-4 rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full bg-white"
              style={{ width: "0%" }}
            ></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
