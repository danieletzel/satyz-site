"use client";

import Image from "next/image";
import { useState } from "react";
import FeaturesTabItem from "./FeaturesTabItem";
import featuresTabData from "./featuresTabData";
import { motion } from "framer-motion";

const FeaturesTab = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");

  return (
    <section id="featurestab" className="relative pb-20 pt-18.5 lg:pb-22.5">
      <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="absolute -top-16 -z-1 mx-auto h-[350px] w-[90%]">
          <Image
            fill
            className="dark:hidden"
            src="/images/shape/shape-dotted-light.svg"
            alt="Dotted Shape"
          />
          <Image
            fill
            className="hidden dark:block"
            src="/images/shape/shape-dotted-dark.svg"
            alt="Dotted Shape"
          />
        </div>

        {/* Tab Menu */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mb-15 flex flex-wrap justify-center rounded-[10px] border border-stroke bg-white shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 md:flex-nowrap md:items-center lg:gap-7.5 xl:mb-21.5 xl:gap-12.5"
        >
          {["tabOne", "tabTwo", "tabThree"].map((id, i) => {
            const labels = [
              "IA em Ação",
              "Delegue com Precisão",
              "Resultados em Minutos",
            ];
            const number = `0${i + 1}`;
            const label = labels[i];

            return (
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
                  <p className="text-metatitle3 font-medium text-black dark:text-white">{number}</p>
                </div>
                <div className="md:w-3/5 lg:w-auto">
                  <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                    {label}
                  </button>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="animate_top mx-auto max-w-c-1154"
        >
          {featuresTabData.map((feature) => (
            <div
              className={`${feature.id === currentTab ? "block animate-fadeIn" : "hidden"}`}
              key={feature.id}
            >
              <FeaturesTabItem featureTab={feature} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesTab;