"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./Loader";
import Navbar from "./navbar";
import SmoothScroll from "./SmoothScroll";
import Footer from "./Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      {!loading && (
        <>
          <Navbar />
          <SmoothScroll>
            {children}
            <Footer />
          </SmoothScroll>
        </>
      )}
    </>
  );
}
