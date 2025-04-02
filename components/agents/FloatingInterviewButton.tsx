"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  link: string;
}

export default function FloatingInterviewButton({ link }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timeout);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href={link}
        className="rounded-full bg-primary px-6 py-3 text-white text-sm font-semibold shadow-xl hover:bg-primaryho transition-all duration-300 hover:scale-105"
      >
        Me entreviste
      </Link>
    </motion.div>
  );
}