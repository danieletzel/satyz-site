"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // ✅ Correção aqui
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionHeader from "../Common/SectionHeader";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Carla Mendes",
    role: "CMO na Innovatech",
    text: "A Satyz mudou completamente nossa operação de marketing. A Linda escreve conteúdos melhores que muitos redatores humanos com quem já trabalhei.",
    image: "/images/user/user-01.png",
  },
  {
    id: 2,
    name: "Lucas Prado",
    role: "Head de Vendas na DataBridge",
    text: "A Ana qualificou 3x mais leads no primeiro mês do que nosso time inteiro. E ainda agenda tudo com perfeição. Incrível!",
    image: "/images/user/user-02.png",
  },
  {
    id: 3,
    name: "Fernanda Costa",
    role: "CEO na FlexIA",
    text: "A integração dos AI Workers com nosso stack foi tão simples que parecia mágica. Hoje temos mais produtividade, menos custo e mais tempo.",
    image: "/images/user/user-03.png",
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 lg:py-25 xl:py-30 px-4 md:px-8 2xl:px-0">
      <div className="mx-auto max-w-c-1235">
        <SectionHeader
          headerInfo={{
            title: "DEPOIMENTOS",
            subtitle: "O que dizem sobre a Satyz",
            description:
              "Profissionais de diferentes áreas já utilizam os AI Workers para acelerar resultados.",
          }}
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          slidesPerView={1}
          loop
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div
                className={`rounded-lg bg-white dark:bg-blacksection p-8 shadow-md transition-all duration-500 ${
                  activeIndex === index ? "opacity-100" : "opacity-60"
                }`}
              >
                <p className="text-lg text-black dark:text-white mb-6 italic">"{item.text}"</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-black dark:text-white">{item.name}</p>
                    <p className="text-sm text-gray-600 dark:text-manatee">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;