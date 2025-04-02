"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  name: string;
  description: string;
  videoSrc: string;
  ctaLink: string;
}

export default function AgentHero({ name, description, videoSrc, ctaLink }: Props) {
  return (
    <section className="pt-36 pb-20 px-4 md:px-10 xl:px-0 max-w-c-1235 mx-auto">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Texto à esquerda */}
        <div className="w-full lg:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6"
          >
            Olá, meu nome é <span className="text-primary">{name}.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-700 dark:text-manatee max-w-xl mb-8"
          >
            {description}
          </motion.p>

          <Link
            href={ctaLink}
            className="inline-block rounded-full bg-primary px-8 py-3 text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-primaryho"
          >
            Me entreviste
          </Link>
        </div>

        {/* Vídeo à direita */}
        <div className="w-full lg:w-1/2 max-w-md rounded-xl overflow-hidden shadow-solid-6">
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}