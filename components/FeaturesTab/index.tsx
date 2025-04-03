"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import FeaturesTabItem from "./FeaturesTabItem";
import featuresTabData from "./featuresTabData";

const tabItems = [
  { id: "tabOne", number: "01", label: "IA em Ação" },
  { id: "tabTwo", number: "02", label: "Delegue com Precisão" },
  { id: "tabThree", number: "03", label: "Resultados em Minutos" },
];

const FeaturesTab = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");

  return (
    <section id="featurestab" className="relative pb-20 pt-18.5 lg:pb-22.5">
      <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        {/* Background */}
        <div className="absolute -top-16 -z-1 mx-auto h-[350px] w-[90%]">
          <Image
            fill
            src="/images/shape/shape-dotted-light.svg"
            alt="Dotted Shape"
            className="dark:hidden"
          />
          <Image
            fill
            src="/images/shape/shape-dotted-dark.svg"
            alt="Dotted Shape"
            className="hidden dark:block"
          />
        </div>

        {/* Tabs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mb-15 flex flex-wrap justify-center rounded-[10px] border border-stroke bg-white shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 md:flex-nowrap md:items-center lg:gap-7.5 xl:mb-21.5 xl:gap-12.5"
        >
          {tabItems.map(({ id, number, label }) => (
            <div
              key={id}
              onClick={() => setCurrentTab(id)}
              className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-hoverdark ${
                currentTab === id
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <div className="flex h-12.5 w-12.5 items-center justify-center rounded-full border border-stroke dark:border-strokedark dark:bg-blacksection">
                <p className="text-metatitle3 font-medium text-black dark:text-white">
                  {number}
                </p>
              </div>
              <div className="md:w-3/5 lg:w-auto">
                <span className="text-sm font-medium text-black dark:text-white xl:text-regular">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="animate_top mx-auto max-w-c-1154"
        >
          <AnimatePresence mode="wait">
            {featuresTabData.map(
              (feature) =>
                feature.id === currentTab && (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <FeaturesTabItem featureTab={feature} />
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesTab;