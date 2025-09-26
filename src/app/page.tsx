import React from "react";
import { Hero } from "./components/Hero";
import Services from "./components/Services";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
}
