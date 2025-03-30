"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const integrations = [
  { src: "/images/integrations/google-calendar.svg", alt: "Google Calendar", delay: 0 },
  { src: "/images/integrations/zoom.svg", alt: "Zoom", delay: 0.1 },
  { src: "/images/integrations/gmail.svg", alt: "Gmail", delay: 0.2 },
  { src: "/images/integrations/outlook.svg", alt: "Outlook", delay: 0.3 },
  { src: "/images/integrations/zendesk.svg", alt: "Zendesk", delay: 0.4 },
  { src: "/images/integrations/slack.svg", alt: "Slack", delay: 0.5 },
  { src: "/images/integrations/hubspot.svg", alt: "HubSpot", delay: 0.6 },
  { src: "/images/integrations/notion.svg", alt: "Notion", delay: 0.7 },
  { src: "/images/integrations/openai.svg", alt: "OpenAI", delay: 0.8 },
  { src: "/images/integrations/linkedin.svg", alt: "LinkedIn", delay: 0.9 },
  { src: "/images/integrations/salesforce.svg", alt: "Salesforce", delay: 1.0 },
  { src: "/images/integrations/meta.svg", alt: "Meta", delay: 1.1 },
];

// Definindo posições para layout orgânico
const positions = [
  "row-start-1 col-start-2",
  "row-start-1 col-start-3",
  "row-start-2 col-start-1",
  "row-start-2 col-start-4",
  "row-start-3 col-start-2",
  "row-start-3 col-start-3",
  "row-start-4 col-start-1",
  "row-start-4 col-start-4",
  "row-start-5 col-start-2",
  "row-start-5 col-start-3",
  "row-start-6 col-start-1",
  "row-start-6 col-start-4",
];

const Integration = () => {
  return (
    <section className="relative z-10 mx-auto max-w-c-1390 px-4 py-20 md:px-8 xl:px-0">
      <SectionHeader
        headerInfo={{
          title: "INTEGRAÇÕES",
          subtitle: "Conectado com seu ecossistema.",
          description:
            "Orquestre interações perfeitas com as ferramentas que você já usa no dia a dia.",
        }}
      />

      <div className="relative w-full overflow-hidden rounded-xl bg-gradient-to-b from-white to-gray-50 dark:from-blacksection dark:to-black">
        {/* Mobile */}
        <div className="flex flex-wrap items-center justify-center gap-6 p-6 md:hidden">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: integration.delay }}
              viewport={{ once: true }}
              className="w-20 h-20 rounded-2xl bg-white p-3 shadow-md dark:bg-btndark flex items-center justify-center"
            >
              <Image
                src={integration.src}
                alt={integration.alt}
                width={40}
                height={40}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>

        {/* Desktop: Grid com menos espaçamento */}
        <div className="hidden md:grid grid-cols-4 grid-rows-6 gap-y-6 gap-x-6 p-8 place-items-center">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: integration.delay }}
              viewport={{ once: true }}
              className={`w-20 h-20 rounded-2xl bg-white p-3 shadow-lg dark:bg-btndark flex items-center justify-center ${positions[index]}`}
            >
              <Image
                src={integration.src}
                alt={integration.alt}
                width={50}
                height={50}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integration;