"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout1() {
  return (
    <section
      id="relume"
      className="bg-zinc-100 px-[5%] py-24 md:py-32 lg:py-36 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500 to-emerald-500/0"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-100 rounded-full opacity-40 blur-3xl"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-zinc-200 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:items-center md:gap-x-16 lg:gap-x-24">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 border border-emerald-500"></div>
            <p className="font-mono text-emerald-600 text-sm uppercase tracking-widest mb-3">
              Innovate
            </p>
            <h1 className="mb-5 text-5xl font-bold tracking-tight md:mb-6 md:text-7xl lg:text-8xl text-zinc-800">
              Meet Our <span className="text-emerald-500">Passionate</span> Web
              Design Team
            </h1>
            <p className="text-zinc-600 font-light tracking-wide leading-relaxed md:text-md">
              At our studio, we believe in crafting unique digital experiences
              that resonate with your audience. Our dedicated team combines
              creativity and technical expertise to bring your vision to life.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 md:mt-10">
              <Button
                title="Learn More"
                variant="secondary"
                className="rounded-none bg-transparent border border-zinc-300 text-zinc-800 hover:bg-zinc-200 hover:border-zinc-400 transition-colors duration-300 px-8 py-3 font-medium uppercase tracking-wider text-sm"
              >
                Learn More
              </Button>
              <Button
                title="Contact"
                variant="link"
                size="link"
                iconRight={
                  <RxChevronRight className="group-hover:translate-x-1 transition-transform duration-300" />
                }
                className="text-emerald-600 font-medium hover:text-emerald-800 transition-colors duration-300 group"
              >
                Contact
              </Button>
            </div>
          </div>
          <div className="relative group">
            {/* Image decorative elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl group-hover:bg-emerald-100 transition-all duration-700"></div>
            <div className="absolute -bottom-10 left-10 w-48 h-48 bg-zinc-200/60 rounded-full blur-3xl"></div>

            {/* Image container with effects */}
            <div className="relative z-10 overflow-hidden">
              <div className="absolute inset-0 bg-emerald-500 mix-blend-color opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="w-full object-cover shadow-2xl border border-zinc-200 transform group-hover:scale-105 transition-transform duration-700"
                alt="Relume placeholder image"
              />
              {/* Decorative borders */}
              <div className="absolute -top-2 -left-2 w-16 h-16 border border-emerald-500/50 z-0"></div>
              <div className="absolute -bottom-2 -right-2 w-24 h-24 border border-emerald-500/30 z-0"></div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white py-3 px-5 shadow-xl border-l-4 border-emerald-500 transform group-hover:translate-y-2 transition-transform duration-500">
              <p className="text-zinc-900 font-bold text-lg">10+ Years</p>
              <p className="text-zinc-600 text-sm">Experience in Web Design</p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid background effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyODI4MjgiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aC0ydi00aDJ2NHptMC02di00aC0ydjRoMnpNMjQgMjRoMnYtMmgtMnYyem0wIDR2LTJoLTJ2Mmgyek0zNiAyNGgtMnYyaDJ2LTJ6bTAgNHYtMmgtMnYyaDJ6bTAtNnYtMmgtMnYyaDJ6bTIwIDEwaC0ydjJoMnYtMnptMC00aC0ydjJoMnYtMnptMC0ydi0yaC0ydjJoMnptMC00aC0ydjJoMnYtMnptLTgtOHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50 pointer-events-none"></div>
    </section>
  );
}
