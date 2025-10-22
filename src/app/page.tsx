import React from "react";
import { Hero } from "./components/Hero";
import Services2 from "./components/Services2";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import Portfolio from "./components/portfolio";
import Cta2 from "./components/cta2";
import Contact from "./components/Contact";
import Mission from "./components/Mission";
import About from "./components/About";
import Book from "./components/Book";
import Frame from "./components/Frame";
export default function Home() {
  return (
    <div>
      <Frame />
      <Hero />
      <Services2 />
      <Portfolio />
      <Pricing />
      <Cta2 />
      <Mission />
      <Faq />
      <About />
      <Book />
      <Contact />
      <Cta />
    </div>
  );
}
