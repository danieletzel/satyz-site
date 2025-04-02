"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Contact = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [phone, setPhone] = useState("");
  const [selectedAgent, setSelectedAgent] = useState("");
  const [teamSize, setTeamSize] = useState("");

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <section id="contact" className="px-4 md:px-8 2xl:px-0">
      <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
        <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]" />
        <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
          <Image
            src="./images/shape/shape-dotted-light.svg"
            alt="Dotted"
            className="dark:hidden"
            fill
          />
          <Image
            src="./images/shape/shape-dotted-dark.svg"
            alt="Dotted"
            className="hidden dark:block"
            fill
          />
        </div>

        <motion.div
          variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mx-auto w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:p-15"
        >
          <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
            Fale com a gente
          </h2>

          <form action="https://formbold.com/s/unique_form_id" method="POST">
            {/* Nome + Email */}
            <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
              <input
                type="text"
                name="name"
                placeholder="Nome"
                required
                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-primary focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-primary dark:placeholder:text-white lg:w-1/2"
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail profissional"
                required
                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-primary focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-primary dark:placeholder:text-white lg:w-1/2"
              />
            </div>

            {/* Código do país + telefone + Agente */}
            <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
              <div className="w-full lg:w-1/2">
                <PhoneInput
                  country={""}
                  value={phone}
                  onChange={setPhone}
                  inputProps={{
                    name: "phone",
                    required: true,
                    placeholder: "Telefone",
                  }}
                  inputClass="!w-full !border-b !border-stroke !bg-transparent !pb-3.5 !text-black dark:!text-white focus:!outline-none dark:!border-strokedark"
                  buttonClass="!bg-transparent"
                  containerClass="!w-full"
                  enableSearch
                  disableCountryCode={false}
                />
              </div>

              <div className="w-full lg:w-1/2">
                <select
                  name="interested_agent"
                  value={selectedAgent}
                  onChange={(e) => setSelectedAgent(e.target.value)}
                  required
                  className="w-full border-b border-stroke bg-transparent pb-3.5 text-black focus:border-primary focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:bg-black dark:text-white dark:focus:border-primary"
                >
                  <option value="">Qual agente te interessou mais?</option>
                  <option value="caio">CAIO (Chief AI Officer)</option>
                  <option value="linda">Linda (AI Copywriter)</option>
                  <option value="ana">Ana (AI SDR)</option>
                  <option value="javi">Javi (AI Phone Agent)</option>
                </select>
              </div>
            </div>

            {/* Tamanho do time */}
            <div className="mb-12.5">
              <select
                name="team_size"
                value={teamSize}
                onChange={(e) => setTeamSize(e.target.value)}
                required
                className="w-full border-b border-stroke bg-transparent pb-3.5 text-black focus:border-primary focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:bg-black dark:text-white dark:focus:border-primary"
              >
                <option value="">Qual o tamanho do seu time?</option>
                <option value="1000+">1000+</option>
                <option value="200-1000">200-1000</option>
                <option value="50-200">50-200</option>
                <option value="5-50">5-50</option>
                <option value="0-5">0-5</option>
              </select>
            </div>

            {/* Termos + Botão */}
            <div className="flex flex-col gap-4 xl:flex-row xl:justify-between">
              <div className="flex items-start gap-4">
                <input id="consent-checkbox" type="checkbox" className="peer sr-only" required />
                <span className="group mt-2 flex h-5 min-w-[20px] items-center justify-center rounded border-gray-300 bg-gray-100 peer-checked:bg-primary dark:border-gray-600 dark:bg-gray-700">
                  <svg
                    className="opacity-0 peer-checked:group-[]:opacity-100"
                    width="10"
                    height="8"
                    viewBox="0 0 10 8"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.70704 0.792787C9.89451 0.980314 9.99983 1.23462 9.99983 1.49979C9.99983 1.76495 9.89451 2.01926 9.70704 2.20679L4.70704 7.20679C4.51951 7.39426 4.26521 7.49957 4.00004 7.49957C3.73488 7.49957 3.48057 7.39426 3.29304 7.20679L0.293041 4.20679C0.110883 4.01818 0.0100885 3.76558 0.0123669 3.50339C0.0146453 3.24119 0.119814 2.99038 0.305222 2.80497C0.490631 2.61956 0.741443 2.51439 1.00364 2.51211C1.26584 2.50983 1.51844 2.61063 1.70704 2.79279L4.00004 5.08579L8.29304 0.792787Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <label htmlFor="consent-checkbox" className="flex max-w-[425px] cursor-pointer select-none text-sm">
                  Ao enviar, você concorda com os nossos termos e uso de cookies.
                </label>
              </div>

              <button
                aria-label="enviar mensagem"
                className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
              >
                Enviar mensagem
                <svg className="fill-white" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z" />
                </svg>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
