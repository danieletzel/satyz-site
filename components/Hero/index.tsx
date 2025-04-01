"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section
      id="hero"
      className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46"
    >
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
              🚀 A nova era do trabalho já começou
            </h4>

            <h1 className="mb-5 pr-0 text-3xl font-bold text-black dark:text-white sm:pr-8 xl:pr-16 xl:text-hero">
              Seu próximo{" "}
              <span className="relative inline-block text-primary">
                colaborador
              </span>{" "}
              é um{" "}
              <span className="inline-block text-primary">
                <Typewriter
                  options={{
                    strings: ["AI Agent", "AI Worker"],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                    pauseFor: 2000,
                  }}
                />
              </span>
            </h1>

            <p className="text-base leading-relaxed text-gray-700 dark:text-manatee">
              A Satyz cria agentes autônomos de IA para seu time. Treine,
              delegue e escale como nunca. Seus novos colaboradores não dormem,
              não faltam e aprendem rápido.
            </p>

            <div className="mt-10">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 sm:gap-5"
              >
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Digite seu e-mail"
                  className="w-full rounded-full border border-stroke px-6 py-2.5 shadow-sm focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="rounded-full bg-black px-7.5 py-2.5 text-white duration-300 hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                >
                  Conheça um AI Worker
                </motion.button>
              </form>
              <p className="mt-4 text-sm text-black dark:text-white">
                Comece Agora.
              </p>
            </div>
          </motion.div>

          {/* Vídeo no lugar da imagem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 mb-10 lg:mb-0 animate_right"
          >
            <div className="relative aspect-[700/444] w-full overflow-hidden rounded-xl shadow-lg">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/ai-agent-websitevideo.mp4" type="video/mp4" />
                Seu navegador não suporta vídeo HTML5.
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;