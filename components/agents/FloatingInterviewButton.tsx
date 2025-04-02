"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingInterviewButtonProps {
  agentName?: string;
}

const FloatingInterviewButton = ({ agentName = "" }: FloatingInterviewButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href="/#contact"
        className="rounded-full bg-primary px-6 py-3 text-white font-medium shadow-lg hover:bg-primaryho transition-transform hover:scale-105"
      >
        Entreviste {agentName ? (agentName === "CAIO" ? "o" : "a") + " " + agentName : "um agente"}
      </Link>
    </motion.div>
  );
};

export default FloatingInterviewButton;