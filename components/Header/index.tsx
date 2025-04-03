"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const pathUrl = usePathname();

  useEffect(() => {
    const handleStickyMenu = () => setStickyMenu(window.scrollY >= 80);
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const yOffset = -100;
      const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${stickyMenu ? "bg-white shadow-sm py-3 dark:bg-black" : "bg-transparent py-4"}`}>
      <div className="relative mx-auto flex max-w-c-1390 items-center justify-between px-4 md:px-8 2xl:px-0">
        {/* Logo */}
        <motion.div
          animate={{ height: stickyMenu ? 60 : 80, width: stickyMenu ? 180 : 260 }}
          transition={{ duration: 0.3 }}
          className="relative shrink-0"
        >
          <Link href="/" className="block relative h-full w-full">
            <Image src="/images/logo/logo-light.svg" alt="Satyz Logo Light" fill className="object-contain block dark:hidden" priority />
            <Image src="/images/logo/logo-dark.svg" alt="Satyz Logo Dark" fill className="object-contain hidden dark:block" priority />
          </Link>
        </motion.div>

        {/* Botão Mobile */}
        <button
          aria-label="Abrir menu"
          onClick={() => setNavigationOpen(!navigationOpen)}
          className="relative z-50 block xl:hidden"
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
              {menuData.map((menu) => (
                <li key={menu.id} className="relative group">
                  {!menu.submenu ? (
                    <Link
                      href={menu.path}
                      onClick={menu.path.startsWith("/#") ? (e) => handleAnchorClick(e, menu.path.replace("/#", "")) : undefined}
                      className={pathUrl === menu.path ? "text-primary" : "hover:text-primary"}
                    >
                      {menu.title}
                    </Link>
                  ) : (
                    <>
                      <button className="flex items-center gap-1 hover:text-primary">
                        {menu.title}
                        <svg className="h-3 w-3 fill-waterloo group-hover:fill-primary" viewBox="0 0 512 512">
                          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                        </svg>
                      </button>
                      <ul className="absolute z-50 mt-2 w-40 rounded bg-white p-4 shadow dark:bg-blacksection hidden group-hover:flex flex-col">
                        {menu.submenu.map((item) => (
                          <li key={item.id}>
                            <Link href={item.path} className="hover:text-primary">{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}
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

        {/* Navegação Mobile */}
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
                  {menuData.map((menu) => (
                    <li key={menu.id}>
                      {!menu.submenu ? (
                        <Link
                          href={menu.path}
                          onClick={menu.path.startsWith("/#") ? (e) => handleAnchorClick(e, menu.path.replace("/#", "")) : undefined}
                          className="hover:text-primary"
                        >
                          {menu.title}
                        </Link>
                      ) : (
                        <details>
                          <summary className="cursor-pointer hover:text-primary">{menu.title}</summary>
                          <ul className="ml-4 mt-2 flex flex-col gap-1">
                            {menu.submenu.map((item) => (
                              <li key={item.id}>
                                <Link href={item.path} className="hover:text-primary">
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </details>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-6 flex flex-col gap-4">
                <ThemeToggler />
                <Link href="/auth/signin" className="text-sm text-waterloo hover:text-primary">Log in</Link>
                <Link href="/auth/signup" className="rounded-full bg-primary px-6 py-2 text-sm text-white text-center hover:bg-primaryho">
                  Get Started 🚀
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;