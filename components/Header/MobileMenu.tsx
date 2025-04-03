"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

type Props = {
  dropdownToggler: number | null;
  setDropdownToggler: (id: number | null) => void;
  setNavigationOpen: (open: boolean) => void;
  handleAnchorClick: (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => void;
};

const MobileMenu = ({
  dropdownToggler,
  setDropdownToggler,
  setNavigationOpen,
  handleAnchorClick,
}: Props) => {
  return (
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
                menu.type === "anchor" ? (
                  <a
                    href={`/#${menu.path}`}
                    onClick={(e) => {
                      handleAnchorClick(e, menu.path!);
                      setNavigationOpen(false);
                    }}
                    className="hover:text-primary"
                  >
                    {menu.title}
                  </a>
                ) : (
                  <Link
                    href={menu.path ?? "#"}
                    onClick={() => setNavigationOpen(false)}
                    className="hover:text-primary"
                  >
                    {menu.title}
                  </Link>
                )
              ) : (
                <details open={dropdownToggler === menu.id}>
                  <summary
                    className="cursor-pointer hover:text-primary"
                    onClick={() =>
                      setDropdownToggler(
                        dropdownToggler === menu.id ? null : menu.id
                      )
                    }
                  >
                    {menu.title}
                  </summary>
                  <ul className="ml-4 mt-2 flex flex-col gap-1">
                    {menu.submenu.map((sub) => (
                      <li key={sub.id}>
                        <Link
                          href={sub.path ?? "#"}
                          onClick={() => setNavigationOpen(false)}
                          className="hover:text-primary"
                        >
                          {sub.title}
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

      <div className="mt-6 flex flex-col gap-4 items-start">
        <div className="flex items-center gap-4">
          <ThemeToggler />
          <Link
            href="/auth/signin"
            onClick={() => setNavigationOpen(false)}
            className="text-sm text-waterloo hover:text-primary"
          >
            Log in
          </Link>
        </div>
        <Link
          href="/auth/signup"
          onClick={() => setNavigationOpen(false)}
          className="rounded-full bg-primary px-6 py-2 text-sm text-white text-center hover:bg-primaryho"
        >
          Get Started 🚀
        </Link>
      </div>
    </motion.div>
  );
};

export default MobileMenu;