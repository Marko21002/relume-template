"use client";
import {
  Button,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import type { ButtonProps } from "@relume_io/relume-ui";

type QuestionsProps = {
  title: string;
  answer: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  footerHeading: string;
  footerDescription: string;
  button: ButtonProps;
  questions: QuestionsProps[];
};

export type Faq1Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Faq1 = (props: Faq1Props) => {
  const {
    tagline,
    heading,
    description,
    questions,
    footerHeading,
    footerDescription,
    button,
  } = {
    ...Faq1Defaults,
    ...props,
  };
  return (
    <section
      id="relume"
      className="bg-white px-[5%] py-24 md:py-28 lg:py-32 relative overflow-hidden border-t border-zinc-200"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNlNGU0ZTciIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0yNCAyNGgydi0yaC0ydjJ6bTAgNHYtMmgtMnYyaDJ6bTAtNnYtMmgtMnYyaDJ6bTIwIDEwaC0ydjJoMnYtMnptMC00aC0ydjJoMnYtMnptMC0ydi0yaC0ydjJoMnptMC00aC0ydjJoMnYtMnptLTgtOHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 pointer-events-none"></div>

      <div className="container relative z-10 mx-auto max-w-3xl">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Accordion type="multiple" className="mb-16">
            {questions.map((question, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-zinc-200 py-4"
              >
                <AccordionTrigger className="text-lg md:text-xl font-medium text-zinc-900 hover:text-emerald-500 transition-colors cursor-pointer">
                  {question.title}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600 md:text-lg mt-2 pr-12">
                  {question.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          className="mx-auto text-center bg-zinc-50 border border-zinc-200 p-10 md:p-12 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <h4 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl text-zinc-900">
            {footerHeading}
          </h4>
          <p className="text-zinc-600 md:text-lg max-w-xl mx-auto mb-8">
            {footerDescription}
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              {...button}
              className="rounded-full bg-emerald-500 text-zinc-900 hover:bg-emerald-400 transition-colors duration-300 px-10 py-4 text-lg font-bold tracking-tighter normal-case cursor-pointer"
            >
              {button.title}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export const Faq1Defaults: Props = {
  tagline: "Questions & Answers",
  heading: "Frequently Asked Questions",
  description:
    "Find answers to common questions about our web design services, process, and pricing.",
  questions: [
    {
      title: "What services do you offer?",
      answer:
        "We provide comprehensive web design services including responsive website design, e-commerce development, UI/UX design, website maintenance, SEO optimization, and custom web application development. Our team specializes in creating modern, user-friendly websites that align with your brand identity.",
    },
    {
      title: "How long does it take to build a website?",
      answer:
        "The timeline varies based on the complexity of your project. A simple website typically takes 2-4 weeks, while more complex sites with custom functionality can take 6-12 weeks. During our initial consultation, we'll provide a more accurate timeline based on your specific requirements and project scope.",
    },
    {
      title: "What's your pricing structure?",
      answer:
        "Our pricing is customized based on your project requirements. We offer packages starting at $250 for basic websites, $500 for business websites, and $1000+ for premium websites with advanced functionality. We provide detailed quotes after understanding your specific needs during our consultation.",
    },
    {
      title: "Do you offer website maintenance services?",
      answer:
        "Yes, we offer ongoing maintenance packages to keep your website secure, updated, and performing optimally. Our maintenance services include regular updates, security monitoring, performance optimization, content updates, and technical support. We recommend maintenance plans for all websites to ensure they remain secure and up-to-date.",
    },
    {
      title: "Do I own my website after it's completed?",
      answer:
        "Absolutely! Once your project is completed and final payment is received, you have full ownership of your website. We provide all necessary access credentials and can assist with transferring the site to your preferred hosting if needed. We believe in transparency and ensuring you have complete control over your digital assets.",
    },
  ],
  footerHeading: "Still have questions?",
  footerDescription:
    "Contact our team for a free consultation. We're here to answer any questions about your web design project and how we can help bring your vision to life.",
  button: {
    title: "Contact Us",
    variant: "primary",
  },
};
