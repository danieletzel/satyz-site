"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="hero" className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
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
              Seu próximo {" "}
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                colaborador
              </span>{" "}
              é uma IA.
            </h1>
            <p className="text-base leading-relaxed text-gray-700 dark:text-manatee">
              A Satyz cria agentes autônomos de IA para seu time. Treine, delegue e escale como nunca. 
              Seus novos colaboradores não dormem, não faltam e aprendem rápido. 
            </p>

            <div className="mt-10">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 sm:gap-5">
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
                100% gratuito e pronto para usar.
              </p>
            </div>
          </motion.div>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 mb-10 lg:mb-0 animate_right"
          >
            <div className="relative 2xl:-mr-7.5">
              <Image
                src="/images/shape/shape-01.png"
                alt="shape"
                width={46}
                height={246}
                className="absolute -left-11.5 top-0"
              />
              <Image
                src="/images/shape/shape-02.svg"
                alt="shape"
                width={36.9}
                height={36.7}
                className="absolute bottom-0 right-0 z-10"
              />
              <Image
                src="/images/shape/shape-03.svg"
                alt="shape"
                width={21.64}
                height={21.66}
                className="absolute -right-6.5 bottom-0 z-1"
              />
              <div className="relative aspect-[700/444] w-full">
                <Image
                  className="shadow-solid-l dark:hidden"
                  src="/images/hero/hero-light.svg"
                  alt="Hero"
                  fill
                />
                <Image
                  className="hidden shadow-solid-l dark:block"
                  src="/images/hero/hero-dark.svg"
                  alt="Hero"
                  fill
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;