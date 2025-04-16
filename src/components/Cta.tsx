"use client";

import { Button } from "@relume_io/relume-ui";
import { motion } from "framer-motion";

type Props = {
  tagline: string;
  heading: string;
  description: string;
  phoneNumber: string;
};

export type Cta25Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Cta25 = (props: Cta25Props) => {
  const { tagline, heading, description, phoneNumber } = {
    ...Cta25Defaults,
    ...props,
  };
  return (
    <section
      id="relume"
      className="bg-zinc-900 text-white px-[5%] py-16 md:py-20 lg:py-24 relative overflow-hidden border-t border-zinc-800 backdrop-blur-md bg-opacity-90"
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
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={() => window.open(`tel:${phoneNumber}`, "_self")}
                className="bg-emerald-500 text-zinc-900 hover:bg-emerald-400 rounded-full transition-colors duration-300 px-8 py-4 text-lg font-bold tracking-tighter normal-case cursor-pointer flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Us Now
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={() =>
                  window.open(
                    `https://wa.me/${phoneNumber.replace(/\D/g, "")}`,
                    "_blank"
                  )
                }
                className="bg-zinc-900 border border-zinc-700 text-white hover:bg-zinc-800 hover:border-zinc-600 rounded-full transition-colors duration-300 px-8 py-4 text-lg font-bold tracking-tighter normal-case cursor-pointer flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#25D366]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </Button>
            </motion.div>
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
  phoneNumber: "+43 677 61197581",
};
