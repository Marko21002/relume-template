import React from "react";
import { Navbar2 } from "@/components/Navbar2";
import { Header1 } from "@/components/Header1";
import { Layout250 } from "@/components/Layout250";
import { Pricing5 } from "@/components/Pricing5";
import { Layout1 } from "@/components/Layout1";
import { Contact15 } from "@/components/Contact15";
import { Footer1 } from "@/components/Footer1";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar2 />
      <Header1 />
      <Layout250 />
      <Pricing5 />
      <Layout1 />
      <Contact15 />
      <Footer1 />
    </div>
  );
}
