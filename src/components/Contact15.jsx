"use client";

import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function Contact15() {
  return (
    <section
      id="relume"
      className="bg-zinc-900 text-white px-[5%] py-24 md:py-32 lg:py-36 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500 to-emerald-500/0"></div>
      <div className="absolute -bottom-64 -right-64 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-64 -left-64 w-96 h-96 bg-zinc-800/50 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <div>
          <div className="mb-16 grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:mb-24 md:grid-cols-[1fr_.75fr] md:gap-x-20 md:gap-y-16">
            <div className="rb-12 max-w-lg relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 border border-emerald-500"></div>
              <p className="font-mono text-emerald-400 text-sm uppercase tracking-widest mb-3">
                Connect
              </p>
              <h2 className="mb-5 text-5xl font-bold tracking-tight md:mb-6 md:text-7xl lg:text-8xl">
                Get in <span className="text-emerald-400">Touch</span>
              </h2>
              <p className="text-zinc-300 font-light tracking-wide leading-relaxed md:text-md">
                We'd love to hear from you! Reach out with any questions or
                inquiries.
              </p>
            </div>
            <div className="flex flex-col relative">
              <div className="absolute -top-2 -right-2 w-8 h-8 border border-emerald-500"></div>
              <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-8 py-2">
                <div className="flex flex-row group hover:translate-x-2 transition-all duration-500">
                  <div className="mr-6 flex-none self-start">
                    <div className="flex items-center justify-center size-12 bg-zinc-800/80 border border-zinc-700 group-hover:border-emerald-500 group-hover:bg-zinc-800 transition-all duration-300">
                      <BiEnvelope className="size-6 text-emerald-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl text-white group-hover:text-emerald-400 transition-colors duration-300">
                      Email
                    </h3>
                    <a
                      className="text-zinc-300 hover:text-white transition-colors duration-300 border-b border-emerald-500/30 hover:border-emerald-500 pb-1"
                      href="#"
                    >
                      hello@relume.io
                    </a>
                  </div>
                </div>
                <div className="flex flex-row group hover:translate-x-2 transition-all duration-500">
                  <div className="mr-6 flex-none self-start">
                    <div className="flex items-center justify-center size-12 bg-zinc-800/80 border border-zinc-700 group-hover:border-emerald-500 group-hover:bg-zinc-800 transition-all duration-300">
                      <BiPhone className="size-6 text-emerald-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl text-white group-hover:text-emerald-400 transition-colors duration-300">
                      Phone
                    </h3>
                    <a
                      className="text-zinc-300 hover:text-white transition-colors duration-300 border-b border-emerald-500/30 hover:border-emerald-500 pb-1"
                      href="#"
                    >
                      +1 (555) 000-0000
                    </a>
                  </div>
                </div>
                <div className="flex flex-row group hover:translate-x-2 transition-all duration-500">
                  <div className="mr-6 flex-none self-start">
                    <div className="flex items-center justify-center size-12 bg-zinc-800/80 border border-zinc-700 group-hover:border-emerald-500 group-hover:bg-zinc-800 transition-all duration-300">
                      <BiMap className="size-6 text-emerald-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl text-white group-hover:text-emerald-400 transition-colors duration-300">
                      Office
                    </h3>
                    <p className="text-zinc-300 font-light">
                      123 Sample St, Sydney NSW 2000 AU
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group overflow-hidden">
          <div className="absolute inset-0 bg-emerald-500 mix-blend-color opacity-0 group-hover:opacity-10 transition-opacity duration-700 z-10"></div>
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            className="w-full object-cover border border-zinc-800 shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
            alt="Relume placeholder image"
          />
          <div className="absolute -top-2 -left-2 w-16 h-16 border border-emerald-500/50"></div>
          <div className="absolute -bottom-2 -right-2 w-24 h-24 border border-emerald-500/30"></div>
        </div>
      </div>

      {/* Grid background effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyODI4MjgiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0yNCAyNGgydi0yaC0ydjJ6bTAgNHYtMmgtMnYyaDJ6bTAtNnYtMmgtMnYyaDJ6bTIwIDEwaC0ydjJoMnYtMnptMC00aC0ydjJoMnYtMnptMC0ydi0yaC0ydjJoMnptMC00aC0ydjJoMnYtMnptLTgtOHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 mix-blend-luminosity pointer-events-none"></div>
    </section>
  );
}
