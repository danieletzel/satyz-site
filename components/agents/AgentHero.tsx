"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import ThemeToggler from "@/components/Header/ThemeToggler";
import Link from "next/link";
import { useEffect, useState } from "react";

interface AgentHeroProps {
  name: string;
  description: string;
  videoSrc: string;
  ctaLink: string;
}

const AgentHero = ({ name, description, videoSrc, ctaLink }: AgentHeroProps) => {
  const [timeElapsed, setTimeElapsed] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 60000); // 1 minuto
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white dark:bg-black py-12 lg:py-24">
      <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* Texto */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight text-black dark:text-white">
            Olá, meu nome é{" "}
            <span className="text-primary">
              <Typewriter
                words={[`${name}.`]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 dark:text-manatee max-w-xl mx-auto lg:mx-0">
            {description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href={ctaLink}
              className="inline-block rounded-full bg-primary px-8 py-3 text-white text-lg font-medium shadow-md hover:bg-primaryho transition-transform hover:scale-105"
            >
              Entreviste o {name}
            </Link>

            <a
              href="/downloads/caio-curriculo.pdf"
              download
              className="inline-block rounded-full border border-primary px-8 py-3 text-primary text-lg font-medium hover:bg-primary hover:text-white transition-transform hover:scale-105"
            >
              Baixar CV
            </a>
          </div>
        </div>

        {/* Vídeo com badge */}
        <div className="flex-1 relative">
          <span className="absolute top-4 left-4 z-10 rounded-full bg-green-500 px-4 py-1.5 text-xs font-medium text-white shadow-lg">
            Autopilot ativado há {timeElapsed} minutos
          </span>

          <div className="aspect-[9/10] w-full max-w-[500px] mx-auto rounded-2xl overflow-hidden shadow-solid-5">
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentHero;