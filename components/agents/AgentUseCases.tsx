"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface UseCase {
  title: string;
  description: string;
  icon: string;
}

interface Props {
  useCases: UseCase[];
}

export default function AgentUseCases({ useCases }: Props) {
  return (
    <section className="py-20 px-4 md:px-10 xl:px-0 bg-white dark:bg-blacksection">
      <div className="max-w-c-1235 mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-12">
          Casos de uso do CAIO
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl border border-stroke dark:border-strokedark bg-zumthor dark:bg-dark-section p-6 text-left shadow-solid-4 transition hover:brightness-110"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={useCase.icon}
                  alt={useCase.title}
                  width={32}
                  height={32}
                />
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  {useCase.title}
                </h3>
              </div>
              <p className="text-sm text-gray-700 dark:text-manatee">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}