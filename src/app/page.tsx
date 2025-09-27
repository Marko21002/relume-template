import React from "react";
import { Hero } from "./components/Hero";
import Services from "./components/Services";
import Navbar from "./components/navbar";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Portfolio from "./components/portfolio";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}
