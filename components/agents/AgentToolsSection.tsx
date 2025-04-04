"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Tool = {
  title: string;
  logos: string[];
};

const AgentToolsSection = ({ tools }: { tools: Tool[] }) => {
  return (
    <section className="w-full bg-[#f2ece5] dark:bg-[#111111] py-16 px-4 md:px-8 xl:px-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-12">
          Ferramentas que o agente usa para alimentar sua inteligência
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-xl bg-white dark:bg-neutral-900 p-6 shadow-md h-full"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                {tool.title}
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                {tool.logos.map((logo, idx) => (
                  <div key={idx} className="w-20 h-10 relative">
                    <Image
                      src={logo}
                      alt={logo.split("/").pop()?.replace(".svg", "") || "logo"}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentToolsSection;