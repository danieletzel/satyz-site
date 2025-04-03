"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import BlogData from "./blogData";

const Blog = () => {
  const [swiperRef, setSwiperRef] = useState<any>(null);

  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="text-center">
          <SectionHeader
            headerInfo={{
              title: "CONTEÚDO E IDEIAS",
              subtitle: "Insights e novidades sobre IA",
              description:
                "Descubra como a inteligência artificial está transformando empresas, equipes e experiências com clientes.",
            }}
          />
        </div>

        <div className="relative mt-12 xl:mt-16">
          {/* Swiper Carrossel */}
          <Swiper
            onSwiper={(swiper) => setSwiperRef(swiper)}
            modules={[Navigation]}
            slidesPerView={1.1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 1.3 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {BlogData.map((post) => (
              <SwiperSlide key={post._id}>
                <BlogItem blog={post} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Setas de navegação */}
          <div className="absolute -top-10 right-0 flex gap-4">
            <button
              className="swiper-button-prev rounded-full border border-gray-300 p-2 text-gray-500 hover:text-primary dark:border-gray-700 dark:text-gray-400"
              aria-label="Voltar"
            >
              ←
            </button>
            <button
              className="swiper-button-next rounded-full border border-gray-300 p-2 text-gray-500 hover:text-primary dark:border-gray-700 dark:text-gray-400"
              aria-label="Avançar"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;