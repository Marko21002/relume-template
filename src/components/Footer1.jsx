"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React, { useState } from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer1() {
  const formState = useForm();
  return (
    <footer
      id="relume"
      className="bg-zinc-50 px-[5%] py-16 md:py-24 lg:py-28 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500 to-emerald-500/0"></div>
      <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-emerald-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-zinc-200 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[0.75fr_1fr] lg:gap-y-4 lg:pb-20">
          <div className="flex flex-col relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 border border-emerald-500"></div>
            <a
              href="#"
              className="mb-5 md:mb-6 font-mono text-2xl font-bold tracking-tighter text-emerald-600 inline-block transform hover:translate-x-1 transition-transform duration-300"
            >
              DESIGN<span className="text-zinc-900">.LAB</span>
            </a>
            <p className="mb-5 text-zinc-600 font-light tracking-wide leading-relaxed md:mb-6">
              Subscribe to our newsletter for the latest updates on features and
              releases.
            </p>
            <div className="w-full max-w-md">
              <form
                className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4"
                onSubmit={formState.handleSubmit}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email here"
                  value={formState.email}
                  onChange={formState.handleSetEmail}
                  className="focus:border-emerald-500 bg-white border-zinc-200 text-zinc-800"
                />
                <Button
                  title="Join"
                  variant="secondary"
                  size="sm"
                  className="rounded-none bg-emerald-500 text-zinc-900 hover:bg-emerald-400 transition-colors duration-300 px-6 py-2 font-medium uppercase tracking-wider text-sm"
                >
                  Join
                </Button>
              </form>
              <p className="text-xs text-zinc-500">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-10 sm:grid-cols-3 sm:gap-x-6 md:gap-x-8 md:gap-y-4">
            <div className="flex flex-col items-start justify-start">
              <h2 className="font-mono text-emerald-600 text-sm uppercase tracking-widest mb-4">
                Useful Links
              </h2>
              <ul>
                <li className="py-2 text-sm group">
                  <a
                    href="#"
                    className="flex items-center text-zinc-700 hover:text-emerald-600 transition-colors duration-300 group-hover:translate-x-1 transform transition-transform duration-300"
                  >
                    <span>About Us</span>
                  </a>
                </li>
                <li className="py-2 text-sm group">
                  <a
                    href="#"
                    className="flex items-center text-zinc-700 hover:text-emerald-600 transition-colors duration-300 group-hover:translate-x-1 transform transition-transform duration-300"
                  >
                    <span>Contact Us</span>
                  </a>
                </li>
                <li className="py-2 text-sm group">
                  <a
                    href="#"
                    className="flex items-center text-zinc-700 hover:text-emerald-600 transition-colors duration-300 group-hover:translate-x-1 transform transition-transform duration-300"
                  >
                    <span>Services</span>
                  </a>
                </li>
                <li className="py-2 text-sm group">
                  <a
                    href="#"
                    className="flex items-center text-zinc-700 hover:text-emerald-600 transition-colors duration-300 group-hover:translate-x-1 transform transition-transform duration-300"
                  >
                    <span>Blog Posts</span>
                  </a>
                </li>
                <li className="py-2 text-sm group">
                  <a
                    href="#"
                    className="flex items-center text-zinc-700 hover:text-emerald-600 transition-colors duration-300 group-hover:translate-x-1 transform transition-transform duration-300"
                  >
                    <span>FAQs</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="font-mono text-emerald-600 text-sm uppercase tracking-widest mb-4">
                Connect With Us
              </h2>
              <ul>
                <li className="py-2 text-sm group">
                  <a
                    href="#"
                    className="flex items-center text-zinc-700 hover:text-emerald-600 transition-colors duration-300 group-hover:translate-x-1 transform transition-transform duration-300"
                  >
                    <span>Support</span>
                  </a>
                </li>
                <li className="py-2 text-sm group">
                  <a
                    href="#"
                    className="flex items-center text-zinc-700 hover:text-emerald-600 transition-colors duration-300 group-hover:translate-x-1 transform transition-transform duration-300"
                  >
                    <span>Careers</span>
                  </a>
                </li>
                <li className="py-2 text-sm group">
                  <a
                    href="#"
                    className="flex items-center text-zinc-700 hover:text-emerald-600 transition-colors duration-300 group-hover:translate-x-1 transform transition-transform duration-300"
                  >
                    <span>Testimonials</span>
                  </a>
                </li>
                <li className="py-2 text-sm group">
                  <a
                    href="#"
                    className="flex items-center text-zinc-700 hover:text-emerald-600 transition-colors duration-300 group-hover:translate-x-1 transform transition-transform duration-300"
                  >
                    <span>Portfolio</span>
                  </a>
                </li>
                <li className="py-2 text-sm group">
                  <a
                    href="#"
                    className="flex items-center text-zinc-700 hover:text-emerald-600 transition-colors duration-300 group-hover:translate-x-1 transform transition-transform duration-300"
                  >
                    <span>Events</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="font-mono text-emerald-600 text-sm uppercase tracking-widest mb-4">
                Follow Us
              </h2>
              <ul className="flex flex-col items-start">
                <li className="py-2 text-sm">
                  <a
                    href="#"
                    className="flex items-center gap-3 text-zinc-700 hover:text-emerald-600 transition-colors duration-300 group"
                  >
                    <div className="flex items-center justify-center size-8 bg-zinc-100 border border-zinc-200 group-hover:bg-emerald-100 group-hover:border-emerald-200 transition-all duration-300 rounded-full">
                      <BiLogoFacebookCircle className="size-5 text-zinc-600 group-hover:text-emerald-600 transition-colors duration-300" />
                    </div>
                    <span className="group-hover:translate-x-1 transform transition-transform duration-300">
                      Facebook
                    </span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a
                    href="#"
                    className="flex items-center gap-3 text-zinc-700 hover:text-emerald-600 transition-colors duration-300 group"
                  >
                    <div className="flex items-center justify-center size-8 bg-zinc-100 border border-zinc-200 group-hover:bg-emerald-100 group-hover:border-emerald-200 transition-all duration-300 rounded-full">
                      <BiLogoInstagram className="size-5 text-zinc-600 group-hover:text-emerald-600 transition-colors duration-300" />
                    </div>
                    <span className="group-hover:translate-x-1 transform transition-transform duration-300">
                      Instagram
                    </span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a
                    href="#"
                    className="flex items-center gap-3 text-zinc-700 hover:text-emerald-600 transition-colors duration-300 group"
                  >
                    <div className="flex items-center justify-center size-8 bg-zinc-100 border border-zinc-200 group-hover:bg-emerald-100 group-hover:border-emerald-200 transition-all duration-300 rounded-full">
                      <FaXTwitter className="size-5 p-0.5 text-zinc-600 group-hover:text-emerald-600 transition-colors duration-300" />
                    </div>
                    <span className="group-hover:translate-x-1 transform transition-transform duration-300">
                      X
                    </span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a
                    href="#"
                    className="flex items-center gap-3 text-zinc-700 hover:text-emerald-600 transition-colors duration-300 group"
                  >
                    <div className="flex items-center justify-center size-8 bg-zinc-100 border border-zinc-200 group-hover:bg-emerald-100 group-hover:border-emerald-200 transition-all duration-300 rounded-full">
                      <BiLogoLinkedinSquare className="size-5 text-zinc-600 group-hover:text-emerald-600 transition-colors duration-300" />
                    </div>
                    <span className="group-hover:translate-x-1 transform transition-transform duration-300">
                      LinkedIn
                    </span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a
                    href="#"
                    className="flex items-center gap-3 text-zinc-700 hover:text-emerald-600 transition-colors duration-300 group"
                  >
                    <div className="flex items-center justify-center size-8 bg-zinc-100 border border-zinc-200 group-hover:bg-emerald-100 group-hover:border-emerald-200 transition-all duration-300 rounded-full">
                      <BiLogoYoutube className="size-5 text-zinc-600 group-hover:text-emerald-600 transition-colors duration-300" />
                    </div>
                    <span className="group-hover:translate-x-1 transform transition-transform duration-300">
                      YouTube
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-zinc-200" />
        <div className="flex flex-col-reverse items-start justify-between pt-6 pb-4 text-sm md:flex-row md:items-center md:pt-8 md:pb-0">
          <p className="mt-6 text-zinc-500 md:mt-0">
            © 2024 Design.Lab. All rights reserved.
          </p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li>
              <a
                href="#"
                className="text-zinc-700 hover:text-emerald-600 transition-colors duration-300 border-b border-zinc-300 hover:border-emerald-500 pb-0.5"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-zinc-700 hover:text-emerald-600 transition-colors duration-300 border-b border-zinc-300 hover:border-emerald-500 pb-0.5"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-zinc-700 hover:text-emerald-600 transition-colors duration-300 border-b border-zinc-300 hover:border-emerald-500 pb-0.5"
              >
                Cookie Settings
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Grid background effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyODI4MjgiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aC0ydi00aDJ2NHptMC02di00aC0ydjRoMnpNMjQgMjRoMnYtMmgtMnYyem0wIDR2LTJoLTJ2Mmgyek0zNiAyNGgtMnYyaDJ2LTJ6bTAgNHYtMmgtMnYyaDJ6bTAtNnYtMmgtMnYyaDJ6bTIwIDEwaC0ydjJoMnYtMnptMC00aC0ydjJoMnYtMnptMC0ydi0yaC0ydjJoMnptMC00aC0ydjJoMnYtMnptLTgtOHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50 pointer-events-none"></div>
    </footer>
  );
}
