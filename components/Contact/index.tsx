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

            {/* Telefone + Agente */}
            <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
              <div className="w-full lg:w-1/2">
                <PhoneInput
                  country={"br"}
                  value={phone}
                  onChange={setPhone}
                  inputProps={{
                    name: "phone",
                    required: true,
                    placeholder: "Telefone",
                  }}
                  onlyCountries={["br"]}
                  countryCodeEditable={false}
                  inputClass="!w-full !border-b !border-stroke !bg-transparent !pb-3.5 !text-black dark:!text-white focus:!outline-none dark:!border-strokedark"
                  buttonClass="!bg-transparent"
                  containerClass="!w-full"
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

            {/* Consentimento e Envio */}
            <div className="flex flex-wrap gap-4 xl:justify-between items-center">
              <label className="flex items-center gap-3 cursor-pointer text-sm text-gray-700 dark:text-gray-300">
                <input
                  type="checkbox"
                  name="terms"
                  required
                  className="accent-primary w-5 h-5 rounded border border-stroke dark:border-strokedark"
                />
                Ao enviar, você concorda com os nossos termos e uso de cookies.
              </label>

              <button
                type="submit"
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