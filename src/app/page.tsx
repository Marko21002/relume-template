import React from "react";
import { Hero } from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import Portfolio from "./components/portfolio";
import Cta2 from "./components/cta2";
import Contact from "./components/Contact";
import Mission from "./components/Mission";
import About from "./components/About";
export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <Cta2 />
      <Mission />
      <Faq />
      <About />
      <Contact />
      <Cta />
    </div>
  );
}
