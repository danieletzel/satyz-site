"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const pathUrl = usePathname();

  const handleStickyMenu = () => {
    setStickyMenu(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        stickyMenu
          ? "bg-white shadow-sm py-3 dark:bg-black"
          : "bg-transparent py-4"
      }`}
    >
      <div className="relative mx-auto flex max-w-c-1390 items-center justify-between px-4 md:px-8 2xl:px-0">
        {/* Logo com animação responsiva */}
        <motion.div
          animate={{
            height: stickyMenu ? 60 : 80, // MOBILE maior
            width: stickyMenu ? 180 : 260, // MOBILE maior
          }}
          transition={{ duration: 0.3 }}
          className="relative shrink-0"
        >
          <Link href="/" className="block relative h-full w-full">
            <Image
              src="/images/logo/logo-light.svg"
              alt="Satyz Logo Light"
              fill
              className="object-contain block dark:hidden"
              priority
            />
            <Image
              src="/images/logo/logo-dark.svg"
              alt="Satyz Logo Dark"
              fill
              className="object-contain hidden dark:block"
              priority
            />
          </Link>
        </motion.div>

        {/* Botão Mobile */}
        <button
          aria-label="hamburger"
          className="relative z-50 block xl:hidden"
          onClick={() => setNavigationOpen(!navigationOpen)}
        >
          <span className="relative block h-5.5 w-5.5 cursor-pointer">
            <span className="absolute right-0 block h-full w-full">
              <span className={`my-1 block h-0.5 rounded-sm bg-black dark:bg-white transition-all duration-300 ${navigationOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
              <span className={`my-1 block h-0.5 rounded-sm bg-black dark:bg-white transition-all duration-300 ${navigationOpen ? "opacity-0" : ""}`} />
              <span className={`my-1 block h-0.5 rounded-sm bg-black dark:bg-white transition-all duration-300 ${navigationOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
            </span>
          </span>
        </button>

        {/* Navegação Desktop */}
        <div className="hidden xl:flex items-center justify-between w-full">
          <nav>
            <ul className="flex items-center gap-8">
              <li><Link href="/" className={pathUrl === "/" ? "text-primary" : "hover:text-primary"}>Home</Link></li>
              <li className="relative group">
                <button
                  onClick={() => setDropdownToggler(!dropdownToggler)}
                  className="flex items-center gap-2 hover:text-primary"
                >
                  AI Workers
                  <svg className="h-3 w-3 fill-waterloo group-hover:fill-primary" viewBox="0 0 512 512">
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                  </svg>
                </button>
                <ul className={`absolute z-50 mt-2 w-40 rounded bg-white p-4 shadow dark:bg-blacksection ${dropdownToggler ? "flex flex-col" : "hidden"}`}>
                  <li><Link href="/agents/caio" className="hover:text-primary">CAIO</Link></li>
                  <li><Link href="/agents/linda" className="hover:text-primary">Linda</Link></li>
                  <li><Link href="/agents/ana" className="hover:text-primary">Ana</Link></li>
                  <li><Link href="/agents/javi" className="hover:text-primary">Javi</Link></li>
                </ul>
              </li>
              <li><Link href="/about" className={pathUrl === "/about" ? "text-primary" : "hover:text-primary"}>Company</Link></li>
              <li><Link href="/blog" className={pathUrl === "/blog" ? "text-primary" : "hover:text-primary"}>Blog</Link></li>
              <li><Link href="/contact" className={pathUrl === "/contact" ? "text-primary" : "hover:text-primary"}>Contact</Link></li>
            </ul>
          </nav>

          <div className="ml-8 flex items-center gap-5">
            <ThemeToggler />
            <Link href="/auth/signin" className="text-sm font-medium text-waterloo hover:text-primary">Log in</Link>
            <Link href="/auth/signup" className="rounded-full bg-primary px-6 py-2 text-sm text-white hover:bg-primaryho">
              Get Started 🚀
            </Link>
          </div>
        </div>

        {/* Navegação Mobile Animada */}
        <AnimatePresence>
          {navigationOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 mt-3 w-full rounded-md border border-stroke bg-white/80 backdrop-blur-md p-6 shadow-lg dark:bg-blacksection/80 z-40 xl:hidden"
            >
              <nav>
                <ul className="flex flex-col gap-4 text-base">
                  <li><Link href="/" className="hover:text-primary">Home</Link></li>
                  <li>
                    <details open={dropdownToggler} onToggle={() => setDropdownToggler(!dropdownToggler)}>
                      <summary className="cursor-pointer hover:text-primary">AI Workers</summary>
                      <ul className="ml-4 mt-2 flex flex-col gap-1">
                        <li><Link href="/agents/caio" className="hover:text-primary">CAIO</Link></li>
                        <li><Link href="/agents/linda" className="hover:text-primary">Linda</Link></li>
                        <li><Link href="/agents/ana" className="hover:text-primary">Ana</Link></li>
                        <li><Link href="/agents/javi" className="hover:text-primary">Javi</Link></li>
                      </ul>
                    </details>
                  </li>
                  <li><Link href="/about" className="hover:text-primary">Company</Link></li>
                  <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
                  <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                </ul>
              </nav>

              <div className="mt-6 flex flex-col gap-4">
                <Link href="/auth/signin" className="text-sm text-waterloo hover:text-primary">Log in</Link>
                <Link href="/auth/signup" className="rounded-full bg-primary px-6 py-2 text-sm text-white text-center hover:bg-primaryho">
                  Get Started 🚀
                </Link>
                <ThemeToggler />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;