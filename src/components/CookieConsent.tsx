"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@relume_io/relume-ui";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent");
    
    if (!hasConsented) {
      // Show the banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-900 border-t border-zinc-800 p-4 md:p-6 shadow-lg"
        >
          <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-zinc-300 text-sm md:text-base">
              <p>
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                By clicking "Accept", you consent to our use of cookies.
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={acceptCookies}
                className="bg-emerald-500 text-zinc-900 hover:bg-emerald-400 rounded-full transition-colors duration-300 px-6 py-2 text-sm font-bold tracking-tighter normal-case cursor-pointer"
              >
                Accept
              </Button>
              <Button
                onClick={() => setIsVisible(false)}
                className="bg-zinc-800 text-white hover:bg-zinc-700 rounded-full transition-colors duration-300 px-6 py-2 text-sm font-bold tracking-tighter normal-case cursor-pointer"
              >
                Decline
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 