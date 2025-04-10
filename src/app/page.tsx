import React from "react";
import { Navbar2 } from "@/components/Navbar2";
import { Header1 } from "@/components/Header1";
import { Pricing18 } from "@/components/Pricing5";
import { Contact15 } from "@/components/Contact15";
import { Footer1 } from "@/components/Footer1";
import { Testimonial17 } from "@/components/Testimonial";
import { Cta25 } from "@/components/Cta";
import { Faq1 } from "@/components/Faq";
export default function Home() {
  return (
    <div>
      <Navbar2 />
      <Header1 />
      <Testimonial17 />
      <Pricing18 />
      <Cta25 />
      <Faq1 />

      <Contact15 />
      <Footer1 />
    </div>
  );
}
