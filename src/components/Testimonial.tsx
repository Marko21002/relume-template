"use client";

import { BiSolidStar } from "react-icons/bi";
import { motion } from "framer-motion";

type ImageProps = {
  src: string;
  alt?: string;
};

type Testimonial = {
  quote: string;
  avatar: ImageProps;
  name: string;
  position: string;
  companyName: string;
  numberOfStars: number;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  testimonials: Testimonial[];
};

export type Testimonial17Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Testimonial17 = (props: Testimonial17Props) => {
  const { tagline, heading, description, testimonials } = {
    ...Testimonial17Defaults,
    ...props,
  };
  return (
    <section
      id="relume"
      className="bg-white px-[5%] py-24 md:py-28 lg:py-32 relative overflow-hidden border-t border-zinc-200"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNlNGU0ZTciIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0yNCAyNGgydi0yaC0ydjJ6bTAgNHYtMmgtMnYyaDJ6bTAtNnYtMmgtMnYyaDJ6bTIwIDEwaC0ydjJoMnYtMnptMC00aC0ydjJoMnYtMnptMC0ydi0yaC0ydjJoMnptMC00aC0ydjJoMnYtMnptLTgtOHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 pointer-events-none"></div>

      <div className="container relative z-10 mx-auto">
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-emerald-500 text-sm uppercase tracking-widest mb-3 md:mb-4">
            {tagline}
          </p>
          <h2 className="mb-5 text-5xl font-bold md:text-6xl lg:text-7xl tracking-tight text-zinc-900">
            {heading}
          </h2>
          <p className="text-zinc-600 tracking-wide leading-relaxed md:text-lg">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex w-full flex-col items-start justify-between border border-zinc-200 bg-zinc-50 shadow-sm p-8 hover:border-emerald-500 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-5 flex md:mb-6">
                {Array(testimonial.numberOfStars)
                  .fill(null)
                  .map((_, starIndex) => (
                    <BiSolidStar
                      key={starIndex}
                      className="mr-1 size-6 text-emerald-500"
                    />
                  ))}
              </div>
              <blockquote className="text-zinc-700 mb-6 italic">
                {testimonial.quote}
              </blockquote>
              <div className="mt-auto flex w-full flex-col items-start md:w-fit md:flex-row md:items-center">
                <img
                  src={testimonial.avatar.src}
                  alt={testimonial.avatar.alt}
                  className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4 border-2 border-emerald-500"
                />
                <div>
                  <p className="font-semibold text-zinc-900">
                    {testimonial.name}
                  </p>
                  <p className="text-zinc-600">
                    <span>{testimonial.position}</span>,{" "}
                    <span>{testimonial.companyName}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Testimonial17Defaults: Props = {
  tagline: "Client Feedback",
  heading: "What Our Clients Say",
  description:
    "See why clients trust us to bring their digital vision to life with beautiful, functional website designs.",
  testimonials: [
    {
      quote:
        "Design.Lab transformed our outdated website into a modern, user-friendly platform that perfectly represents our brand and has significantly increased our conversion rates.",
      avatar: {
        src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Sarah Johnson",
      },
      name: "Sarah Johnson",
      position: "Marketing Director",
      companyName: "TechSolutions Inc.",
      numberOfStars: 5,
    },
    {
      quote:
        "Their attention to detail impressed us. The website they delivered exceeded expectations - intuitive navigation, beautiful design, and lightning fast performance. Worth every penny!",
      avatar: {
        src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Michael Roberts",
      },
      name: "Michael Roberts",
      position: "CEO",
      companyName: "Artisan Crafts Co.",
      numberOfStars: 5,
    },
    {
      quote:
        "Design.Lab created a digital experience that perfectly captures our brand. Their process was smooth, communication excellent, and they delivered on schedule. Highly recommend!",
      avatar: {
        src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Jennifer Chen",
      },
      name: "Jennifer Chen",
      position: "Brand Manager",
      companyName: "Innovate Media",
      numberOfStars: 5,
    },
  ],
};
