"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import SectionHeader from "../Common/SectionHeader";
import { motion } from "framer-motion";
import clsx from "clsx";

const Pricing = () => {
  const t = useTranslations("pricing");

  const plans = [
    {
      price: "$10",
      label: t("small"),
      features: [
        t("features.storage"),
        t("features.unlimited"),
        { label: t("features.support"), available: false },
        { label: t("features.branding"), available: false }
      ]
    },
    {
      price: "$59",
      label: t("medium"),
      features: [
        t("features.storage"),
        t("features.unlimited"),
        t("features.support"),
        { label: t("features.branding"), available: false }
      ],
      popular: true
    },
    {
      price: "$189",
      label: t("large"),
      features: [
        t("features.storage"),
        t("features.unlimited"),
        t("features.support"),
        t("features.branding")
      ]
    }
  ];

  return (
    <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: t("title"),
              subtitle: t("subtitle"),
              description: t("description")
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
              whileHover={{ scale: 1.05 }}
              className={clsx(
                "group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 transition-all duration-300 hover:shadow-xl hover:brightness-105 dark:border-strokedark dark:bg-blacksection dark:hover:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5",
                plan.popular && "border-primary"
              )}
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
                {plan.label}
              </h4>
              <p className="text-sm text-body-color dark:text-body-color-dark">
                {t("description")}
              </p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  {plan.features.map((feature, idx) => {
                    const label = typeof feature === "string" ? feature : feature.label;
                    const available =
                      typeof feature === "string" ? true : feature.available !== false;
                    return (
                      <li
                        key={idx}
                        className={clsx(
                          "mb-4 last:mb-0",
                          available
                            ? "text-black dark:text-manatee"
                            : "text-black opacity-40 dark:text-manatee"
                        )}
                      >
                        {label}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  {t("button")}
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
};

export default Pricing;