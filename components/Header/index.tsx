"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggler from "./ThemeToggler";
import MobileMenu from "./MobileMenu";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState<number | null>(null);
  const [stickyMenu, setStickyMenu] = useState(false);
  const pathUrl = usePathname();

  const handleStickyMenu = () => {
    setStickyMenu(window.scrollY >= 80);
  };

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const yOffset = -100;
      const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        stickyMenu ? "bg-white shadow-sm py-3 dark:bg-black" : "bg-transparent py-4"
      }`}
    >
      <div className="relative mx-auto flex max-w-c-1390 items-center justify-between px-4 md:px-8 2xl:px-0">
        {/* Logo */}
        <motion.div
          animate={{ height: stickyMenu ? 60 : 80, width: stickyMenu ? 180 : 260 }}
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
              <span
                className={`my-1 block h-0.5 rounded-sm bg-black dark:bg-white transition-all duration-300 ${
                  navigationOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
              />
              <span
                className={`my-1 block h-0.5 rounded-sm bg-black dark:bg-white transition-all duration-300 ${
                  navigationOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`my-1 block h-0.5 rounded-sm bg-black dark:bg-white transition-all duration-300 ${
                  navigationOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              />
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
                    menu.type === "anchor" ? (
                      <a
                        href={`/#${menu.path}`}
                        onClick={(e) => handleAnchorClick(e, menu.path!)}
                        className={
                          pathUrl === `/#${menu.path}`
                            ? "text-primary"
                            : "hover:text-primary"
                        }
                      >
                        {menu.title}
                      </a>
                    ) : (
                      <Link
                        href={menu.path ?? "#"}
                        className={
                          pathUrl === menu.path
                            ? "text-primary"
                            : "hover:text-primary"
                        }
                      >
                        {menu.title}
                      </Link>
                    )
                  ) : (
                    <>
                      <button
                        onClick={() =>
                          setDropdownToggler(
                            dropdownToggler === menu.id ? null : menu.id
                          )
                        }
                        className="flex items-center gap-1 hover:text-primary"
                      >
                        {menu.title}
                        <svg
                          className="h-3 w-3 fill-waterloo group-hover:fill-primary"
                          viewBox="0 0 512 512"
                        >
                          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                        </svg>
                      </button>

                      <AnimatePresence>
                        {dropdownToggler === menu.id && (
                          <motion.ul
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute z-50 mt-2 w-40 rounded bg-white p-4 shadow dark:bg-blacksection flex flex-col"
                          >
                            {menu.submenu.map((sub) => (
                              <li key={sub.id}>
                                <Link href={sub.path!} className="hover:text-primary">
                                  {sub.title}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-8 flex items-center gap-5">
            <ThemeToggler />
            <Link
              href="/auth/signin"
              className="text-sm font-medium text-waterloo hover:text-primary"
            >
              Log in
            </Link>
            <Link
              href="/auth/signup"
              className="rounded-full bg-primary px-6 py-2 text-sm text-white hover:bg-primaryho"
            >
              Get Started 🚀
            </Link>
          </div>
        </div>

        {/* MobileMenu */}
        <AnimatePresence>
          {navigationOpen && (
            <MobileMenu
              dropdownToggler={dropdownToggler}
              setDropdownToggler={setDropdownToggler}
              setNavigationOpen={setNavigationOpen}
              handleAnchorClick={handleAnchorClick}
            />
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;