"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface IntegrationGridProps {
  title: string;
  description: string;
  integrations: string[];
}

const IntegrationGrid = ({ title, description, integrations }: IntegrationGridProps) => {
  return (
    <section className="bg-zumthor dark:bg-blacksection py-20 lg:py-25 xl:py-30">
      <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          {/* Texto */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
              {title}
            </h2>
            <p className="text-gray-600 dark:text-manatee text-base leading-relaxed mb-6">
              {description}
            </p>
            <Link
              href="/contact"
              className="inline-block relative rounded-full bg-primary px-6 py-3 text-white font-medium transition-all duration-300 ease-in-out hover:bg-primaryho hover:scale-105 hover:shadow-xl overflow-hidden"
            >
              <span className="relative z-10">Fale com a gente →</span>
              <span className="absolute inset-0 z-0 bg-white/10 blur-sm opacity-0 hover:opacity-100 transition-all duration-500" />
            </Link>
          </div>

          {/* Ícones de integração */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 lg:w-1/2">
            {integrations.map((icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, zIndex: 5 }}
                className="rounded-xl bg-white dark:bg-black shadow-solid-3 p-5 flex items-center justify-center transition-all hover:brightness-110"
              >
                <img
                  src={icon}
                  alt={`integração-${index}`}
                  className="h-10 w-10 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationGrid;