"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  return (
    <>
      {/* Bloco 1 */}
      <section id="about" className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col-reverse items-center gap-10 md:flex-row lg:gap-32.5">
            {/* Vídeo */}
            <motion.div
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto aspect-[588/526.5] w-full max-w-[500px] md:w-1/2"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="dark:hidden object-contain w-full h-full"
              >
                <source src="/videos/about-light-01.mp4" type="video/mp4" />
              </video>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="hidden dark:block object-contain w-full h-full"
              >
                <source src="/videos/about-dark-01.mp4" type="video/mp4" />
              </video>
            </motion.div>

            {/* Texto */}
            <motion.div
              variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right w-full md:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white">
                  Sobre
                </span>{" "}
                Como trabalhamos
              </span>

              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Agentes de IA sob medida para{" "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  sua operação
                </span>
              </h2>

              <p className="text-base leading-relaxed text-gray-700 dark:text-manatee">
                A Satyz combina LLMs de ponta com arquitetura modular para criar agentes especialistas
                em tarefas reais do seu negócio — de vendas a suporte, de onboarding a automação de sistemas internos.
              </p>

              {/* Etapas */}
              {[
                {
                  number: "01",
                  title: "Treinados com seus dados",
                  description: "Integramos dados reais para adaptar o comportamento dos agentes à sua realidade.",
                },
                {
                  number: "02",
                  title: "Autonomia e evolução constante",
                  description: "Agentes que aprendem com interações, feedbacks e objetivos. Sempre melhorando.",
                },
              ].map((item, i) => (
                <div key={i} className="mt-7.5 flex items-start gap-5">
                  <div className="flex h-15 w-15 items-center justify-center rounded-full border border-stroke dark:border-strokedark dark:bg-blacksection">
                    <p className="text-metatitle2 font-semibold text-black dark:text-white">
                      {item.number}
                    </p>
                  </div>
                  <div className="w-full">
                    <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bloco 2 */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col items-center gap-10 md:flex-row lg:gap-32.5">
            {/* Texto */}
            <motion.div
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left w-full md:w-1/2"
            >
              <h4 className="font-medium uppercase text-black dark:text-white">
                Uma nova era de produtividade
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Agentes com{" "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                  skills reais
                </span>{" "}
                de negócio
              </h2>
              <p className="text-base leading-relaxed text-gray-700 dark:text-manatee">
                Nossos AI Workers fazem onboarding, captam leads, escrevem propostas, enviam follow-ups e se integram ao seu stack.
                Tudo em minutos, não meses.
              </p>

              <div className="mt-7.5">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="transition-all duration-300 group-hover:pr-2">Vamos conversar</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Vídeo */}
            <motion.div
              variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto aspect-[588/526.5] w-full max-w-[500px] md:w-1/2"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="dark:hidden object-contain w-full h-full"
              >
                <source src="/videos/about-light-02.mp4" type="video/mp4" />
              </video>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="hidden dark:block object-contain w-full h-full"
              >
                <source src="/videos/about-dark-02.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;