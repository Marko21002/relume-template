import React from "react";
import { Hero } from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import Portfolio from "./components/portfolio";
import Cta2 from "./components/cta2";
export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <Cta2 />
      <Faq />
      <Cta />
    </div>
  );
}
