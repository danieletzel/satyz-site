"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/Common/SectionHeader";
import { useTranslations } from "next-intl";

const plans = [
  {
    price: "$10",
    title: "Small Pack",
    popular: false,
    features: [
      { text: "300 GB Storage", available: true },
      { text: "Unlimited Photos and Videos", available: true },
      { text: "Exclusive Support", available: false },
      { text: "Custom Branding Strategy", available: false },
    ],
  },
  {
    price: "$59",
    title: "Medium Pack",
    popular: true,
    features: [
      { text: "300 GB Storage", available: true },
      { text: "Unlimited Photos and Videos", available: true },
      { text: "Exclusive Support", available: true },
      { text: "Custom Branding Strategy", available: false },
    ],
  },
  {
    price: "$189",
    title: "Large Pack",
    popular: false,
    features: [
      { text: "300 GB Storage", available: true },
      { text: "Unlimited Photos and Videos", available: true },
      { text: "Exclusive Support", available: true },
      { text: "Custom Branding Strategy", available: true },
    ],
  },
];

export default function PricingPage() {
  const t = useTranslations("Pricing");

  return (
    <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: t("title"),
              subtitle: t("subtitle"),
              description: t("description"),
            }}
          />
        </div>
      </div>

      <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="absolute -bottom-15 -z-1 h-full w-full">
          <Image
            fill
            src="/images/shape/shape-dotted-light.svg"
            alt="Dotted"
            className="dark:hidden"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, boxShadow: "0px 20px 60px rgba(0,0,0,0.1)" }}
              className="group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 transition-all duration-300 hover:brightness-110 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5"
            >
              {plan.popular && (
                <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                  {t("popular")}
                </div>
              )}
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                {plan.price}{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /month
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                {plan.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t("description")}
              </p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`mb-4 text-black last:mb-0 dark:text-manatee ${
                        !feature.available ? "opacity-40" : ""
                      }`}
                    >
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  {t("cta")}
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}