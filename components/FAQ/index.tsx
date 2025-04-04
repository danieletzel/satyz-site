"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FAQItem from "./FAQItem";
import faqData from "./faqData";

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState<number>(1);

  const toggleFaq = (id: number) => {
    setActiveFaq(prev => (prev === id ? 0 : id));
  };

  return (
    <section id="faq" className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
      <div className="relative mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
        {/* Background shape */}
        <div className="absolute -bottom-16 -z-1 h-full w-full">
          <Image
            fill
            src="/images/shape/shape-dotted-light.svg"
            alt="Dotted"
            className="dark:hidden"
          />
          <Image
            fill
            src="/images/shape/shape-dotted-light.svg"
            alt="Dotted"
            className="hidden dark:block"
          />
        </div>

        <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center xl:gap-32.5">
          {/* Left Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_left md:w-2/5 lg:w-1/2"
          >
            <span className="font-medium uppercase text-black dark:text-white">FAQ</span>
            <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
              Dúvidas Frequentes{" "}
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                sobre a Satyz
              </span>
            </h2>

            <Link
              href="#contact"
              className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary transition-all duration-300"
            >
              <span className="group-hover:pr-2 duration-300">Fale com a gente</span>
              <motion.svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                  fill="currentColor"
                />
              </motion.svg>
            </Link>
          </motion.div>

          {/* Right FAQ Items */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_right md:w-3/5 lg:w-1/2"
          >
            <div className="rounded-lg bg-white shadow-solid-8 dark:border dark:border-strokedark dark:bg-blacksection">
              {faqData.map((faq) => (
                <FAQItem
                  key={faq.id}
                  faqData={{
                    ...faq,
                    activeFaq,
                    handleFaqToggle: toggleFaq,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;