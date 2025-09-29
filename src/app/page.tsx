import React from "react";
import { Hero } from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import Portfolio from "./components/portfolio";
export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <Faq />
      <Cta />
    </div>
  );
}
