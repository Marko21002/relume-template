"use client";

import { Button, ButtonProps } from "@relume_io/relume-ui";
import { motion } from "framer-motion";

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

export type Cta25Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Cta25 = (props: Cta25Props) => {
  const { tagline, heading, description, buttons } = {
    ...Cta25Defaults,
    ...props,
  };
  return (
    <section
      id="relume"
      className="bg-zinc-900 text-white px-[5%] py-24 md:py-28 lg:py-32 relative overflow-hidden border-t border-zinc-800 backdrop-blur-md bg-opacity-90"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyODI4MjgiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0yNCAyNGgydi0yaC0ydjJ6bTAgNHYtMmgtMnYyaDJ6bTAtNnYtMmgtMnYyaDJ6bTIwIDEwaC0ydjJoMnYtMnptMC00aC0ydjJoMnYtMnptMC0ydi0yaC0ydjJoMnptMC00aC0ydjJoMnYtMnptLTgtOHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 mix-blend-luminosity pointer-events-none"></div>

      <div className="container relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-emerald-400 text-sm uppercase tracking-widest mb-3 md:mb-4">
            {tagline}
          </p>
          <h2 className="mb-5 text-5xl font-bold md:text-6xl lg:text-7xl tracking-tight">
            {heading}
          </h2>
          <p className="text-zinc-300 font-light tracking-wide leading-relaxed md:text-lg max-w-2xl mx-auto mb-8 md:mb-10">
            {description}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            {buttons.map((button, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  {...button}
                  className={`${
                    index === 0
                      ? "bg-emerald-500 text-zinc-900 hover:bg-emerald-400"
                      : "bg-zinc-900 border border-zinc-700 text-white hover:bg-zinc-800 hover:border-zinc-600"
                  } rounded-full transition-colors duration-300 px-10 py-4 text-lg font-bold tracking-tighter normal-case cursor-pointer`}
                >
                  {button.title}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Cta25Defaults: Props = {
  tagline: "Ready to get started?",
  heading: "Let's Create Your Dream Website",
  description:
    "Transform your online presence with a custom website that perfectly captures your brand's unique identity. Our experienced team is ready to bring your vision to life.",
  buttons: [
    { title: "Book a Free Consultation" },
    { title: "View Portfolio", variant: "secondary" },
  ],
};
