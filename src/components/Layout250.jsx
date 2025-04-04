"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout250() {
  return (
    <section
      id="relume"
      className="bg-zinc-100 px-[5%] py-24 md:py-32 lg:py-36 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400/0 via-emerald-400 to-emerald-400/0"></div>
      <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-emerald-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-zinc-200 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <div className="mb-16 md:mb-24 lg:mb-28">
          <div className="max-w-lg relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 border border-emerald-500"></div>
            <p className="font-mono text-emerald-600 text-sm uppercase tracking-widest mb-3">
              Our Services
            </p>
            <h2 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl tracking-tight text-zinc-800">
              Tailored web solutions for{" "}
              <span className="text-emerald-500">bloggers</span>, businesses,
              and <span className="text-emerald-500">digital creators</span>.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex flex-col group hover:translate-y-[-8px] transition-all duration-500 ease-in-out">
            <div className="mb-6 md:mb-8 overflow-hidden relative">
              <div className="absolute inset-0 bg-emerald-500 mix-blend-color opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="transform group-hover:scale-105 transition-transform duration-700 border border-zinc-200 shadow-lg"
              />
              <div className="absolute top-2 right-2 bg-emerald-500 text-white text-xs font-medium py-1 px-2 tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Featured
              </div>
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl text-zinc-800 group-hover:text-emerald-600 transition-colors duration-300">
              Affordable subscription plans with fast turnaround and dedicated
              support.
            </h3>
            <p className="text-zinc-600">
              Our services are designed to empower your online presence with
              professional quality.
            </p>
            <div className="mt-6 flex gap-4 md:mt-8">
              <Button
                iconRight={
                  <RxChevronRight className="group-hover:translate-x-1 transition-transform duration-300" />
                }
                variant="link"
                size="link"
                className="text-emerald-600 font-medium hover:text-emerald-800 transition-colors duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex flex-col group hover:translate-y-[-8px] transition-all duration-500 ease-in-out md:translate-y-8">
            <div className="mb-6 md:mb-8 overflow-hidden relative">
              <div className="absolute inset-0 bg-emerald-500 mix-blend-color opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="transform group-hover:scale-105 transition-transform duration-700 border border-zinc-200 shadow-lg"
              />
              <div className="absolute top-2 right-2 bg-emerald-500 text-white text-xs font-medium py-1 px-2 tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Popular
              </div>
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl text-zinc-800 group-hover:text-emerald-600 transition-colors duration-300">
              Comprehensive support for your website, from launch to ongoing
              maintenance.
            </h3>
            <p className="text-zinc-600">
              We ensure your site runs smoothly while you focus on your content.
            </p>
            <div className="mt-6 flex gap-4 md:mt-8">
              <Button
                iconRight={
                  <RxChevronRight className="group-hover:translate-x-1 transition-transform duration-300" />
                }
                variant="link"
                size="link"
                className="text-emerald-600 font-medium hover:text-emerald-800 transition-colors duration-300"
              >
                Sign Up
              </Button>
            </div>
          </div>
          <div className="flex flex-col group hover:translate-y-[-8px] transition-all duration-500 ease-in-out">
            <div className="mb-6 md:mb-8 overflow-hidden relative">
              <div className="absolute inset-0 bg-emerald-500 mix-blend-color opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="transform group-hover:scale-105 transition-transform duration-700 border border-zinc-200 shadow-lg"
              />
              <div className="absolute top-2 right-2 bg-emerald-500 text-white text-xs font-medium py-1 px-2 tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                New
              </div>
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl text-zinc-800 group-hover:text-emerald-600 transition-colors duration-300">
              Creative designs that resonate with your audience and enhance
              engagement.
            </h3>
            <p className="text-zinc-600">
              Let us help you stand out with a unique and captivating website.
            </p>
            <div className="mt-6 flex gap-4 md:mt-8">
              <Button
                iconRight={
                  <RxChevronRight className="group-hover:translate-x-1 transition-transform duration-300" />
                }
                variant="link"
                size="link"
                className="text-emerald-600 font-medium hover:text-emerald-800 transition-colors duration-300"
              >
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Grid background effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyODI4MjgiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aC0ydi00aDJ2NHptMC02di00aC0ydjRoMnpNMjQgMjRoMnYtMmgtMnYyem0wIDR2LTJoLTJ2Mmgyek0zNiAyNGgtMnYyaDJ2LTJ6bTAgNHYtMmgtMnYyaDJ6bTAtNnYtMmgtMnYyaDJ6bTIwIDEwaC0ydjJoMnYtMnptMC00aC0ydjJoMnYtMnptMC0ydi0yaC0ydjJoMnptMC00aC0ydjJoMnYtMnptLTgtOHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50 pointer-events-none"></div>
    </section>
  );
}
