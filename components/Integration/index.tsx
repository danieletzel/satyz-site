"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const integrations = [
  { src: "/images/integrations/google-calendar.svg", alt: "Google Calendar", x: "left-[5%]", y: "top-[20%]", delay: 0 },
  { src: "/images/integrations/zoom.svg", alt: "Zoom", x: "left-[20%]", y: "top-[55%]", delay: 0.1 },
  { src: "/images/integrations/gmail.svg", alt: "Gmail", x: "left-[35%]", y: "top-[10%]", delay: 0.2 },
  { src: "/images/integrations/outlook.svg", alt: "Outlook", x: "left-[50%]", y: "top-[40%]", delay: 0.3 },
  { src: "/images/integrations/zendesk.svg", alt: "Zendesk", x: "right-[35%]", y: "top-[15%]", delay: 0.4 },
  { src: "/images/integrations/slack.svg", alt: "Slack", x: "right-[20%]", y: "top-[60%]", delay: 0.5 },
  { src: "/images/integrations/hubspot.svg", alt: "HubSpot", x: "right-[5%]", y: "top-[30%]", delay: 0.6 },
  { src: "/images/integrations/notion.svg", alt: "Notion", x: "left-[10%]", y: "bottom-[5%]", delay: 0.7 },
  { src: "/images/integrations/openai.svg", alt: "OpenAI", x: "right-[10%]", y: "bottom-[10%]", delay: 0.8 },
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

      <div className="relative h-[550px] w-full overflow-hidden rounded-xl bg-gradient-to-b from-white to-gray-50 dark:from-blacksection dark:to-black">
        {integrations.map((integration, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: integration.delay }}
            viewport={{ once: true }}
            className={`absolute ${integration.x} ${integration.y}`}
          >
            <div className="rounded-2xl bg-white p-3 shadow-lg dark:bg-btndark">
              <Image
                src={integration.src}
                alt={integration.alt}
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Integration;