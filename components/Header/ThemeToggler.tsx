"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const ThemeToggler = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() =>
        setTheme(currentTheme === "dark" ? "light" : "dark")
      }
      className="flex items-center justify-center rounded-full p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {currentTheme === "dark" ? (
        <Image
          src="/images/icon/icon-sun.svg"
          alt="Light Mode"
          width={22}
          height={22}
        />
      ) : (
        <Image
          src="/images/icon/icon-moon.svg"
          alt="Dark Mode"
          width={21}
          height={21}
        />
      )}
    </button>
  );
};

export default ThemeToggler;