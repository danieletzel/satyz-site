"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="group flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg transition duration-300 hover:bg-primaryho focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          <span className="mt-[4px] h-3 w-3 rotate-45 border-t-2 border-l-2 border-white transition-transform duration-300 group-hover:-translate-y-0.5" />
          <span className="sr-only">Scroll to top</span>
        </button>
      )}
    </div>
  );
}