"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { useEffect, useState } from "react";

interface AgentHeroProps {
  name: string;
  description: string;
  videoSrc: string;
  resumeUrl: string;
}

const AgentHero = ({ name, description, videoSrc, resumeUrl }: AgentHeroProps) => {
  const [timeElapsed, setTimeElapsed] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 60000);
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
              href="/#contact"
              className="inline-block rounded-full bg-primary px-8 py-3 text-white text-lg font-medium shadow-md hover:bg-primaryho transition-transform hover:scale-105"
            >
              Entreviste o {name}
            </Link>

            <a
              href={resumeUrl}
              download
              className="inline-block rounded-full border border-primary px-8 py-3 text-primary text-lg font-medium hover:bg-primary hover:text-white transition-transform hover:scale-105"
            >
              Baixar CV
            </a>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
            </span>
            Autopilot ativado há {timeElapsed} minutos
          </div>
        </div>

        {/* Vídeo */}
        <div className="flex-1 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-solid-5 w-full max-w-md mx-auto">
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