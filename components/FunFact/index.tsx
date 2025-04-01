"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Sempre Aprendendo",
    description:
      "Seus agentes evoluem com cada interação, aprendendo e melhorando constantemente para entregar resultados mais precisos e relevantes.",
    icon: "/images/icon/icon-01.svg",
  },
  {
    id: 2,
    title: "Personalizado para Você",
    description:
      "Cada agente é moldado com a linguagem, processos e tom de voz da sua empresa. Nada genérico, tudo seu.",
    icon: "/images/icon/icon-02.svg",
  },
  {
    id: 3,
    title: "Totalmente Integrado",
    description:
      "Conecte seus sistemas como CRM, ERP, WhatsApp, Slack, Google Sheets e muito mais. Integração sem esforço.",
    icon: "/images/icon/icon-03.svg",
  },
  {
    id: 4,
    title: "Inteligência Autônoma",
    description:
      "Seus AI Workers tomam decisões, executam tarefas e geram valor com autonomia, reduzindo a sobrecarga da sua equipe.",
    icon: "/images/icon/icon-04.svg",
  },
  {
    id: 5,
    title: "Segurança em Primeiro Lugar",
    description:
      "Privacidade, criptografia e controle total. Sua inteligência é só sua — protegida por padrões globais.",
    icon: "/images/icon/icon-05.svg",
  },
];

const FeaturesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0">
      <div className="mx-auto max-w-c-1235">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3"
        >
          O que torna os AI Workers diferentes?
        </motion.h2>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={1.3}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          modules={[Autoplay, Pagination]}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={feature.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0.5,
                  scale: activeIndex === index ? 1 : 0.9,
                }}
                transition={{ duration: 0.6 }}
                className={`rounded-lg bg-white dark:bg-blacksection p-10 shadow-lg transition-all duration-500 ${
                  activeIndex === index ? "ring-2 ring-primary" : "opacity-60"
                }`}
              >
                <div className="mb-5 flex justify-center">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={60}
                    height={60}
                    className="filter brightness-0 dark:filter-none"
                  />
                </div>
                <h3 className="mb-3 text-center text-xl font-semibold text-black dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-center text-gray-700 dark:text-manatee">
                  {feature.description}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturesCarousel;