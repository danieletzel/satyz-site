"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaLinkedin />, label: "LinkedIn", href: "#" },
    { icon: <FaInstagram />, label: "Instagram", href: "#" },
    { icon: <FaFacebook />, label: "Facebook", href: "#" },
    { icon: <FaXTwitter />, label: "X", href: "#" },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Company", href: "/#about" },
    { label: "AI Workers", href: "/#ai-workers" },
    { label: "FAQ", href: "/#faq" },
    { label: "Blog", href: "/blog" },
    { label: "Contato", href: "/#contact" },
  ];

  const supportLinks = [
    { label: "Segurança", href: "/security" },
    { label: "Privacidade", href: "/privacy" },
    { label: "Termos de uso", href: "/terms" },
  ];

  return (
    <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="py-20 lg:py-25 flex flex-wrap gap-12 lg:justify-between">
          {/* Logo + contato */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="animate_top w-full lg:w-1/4"
          >
            <Link href="/" className="block relative h-24 w-60 xl:h-32 xl:w-72">
              <Image
                src="/images/logo/logo-light.svg"
                alt="Logo Satyz Light"
                fill
                className="object-contain block dark:hidden"
                priority
              />
              <Image
                src="/images/logo/logo-dark.svg"
                alt="Logo Satyz Dark"
                fill
                className="object-contain hidden dark:block"
                priority
              />
            </Link>

            <p className="mt-5 mb-10 text-sm text-waterloo">
              Automatize seu time com agentes de IA inteligentes.
            </p>

            <p className="mb-1.5 text-sectiontitle uppercase tracking-[5px]">Contato</p>
            <a
              href="mailto:contact@satyz.io"
              className="text-itemtitle font-medium text-black dark:text-white"
            >
              contact@satyz.io
            </a>

            <div className="mt-6 flex gap-4 text-xl text-waterloo">
              {socialLinks.map(({ icon, label, href }) => (
                <motion.a
                  key={label}
                  whileHover={{ scale: 1.2, color: "#6366F1" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href={href}
                  aria-label={label}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Menus */}
          <div className="flex w-full flex-col gap-12 md:flex-row md:justify-between lg:w-2/3 xl:w-7/12">
            {/* Links rápidos */}
            <FooterList title="Links rápidos" links={quickLinks} delay={0.1} />

            {/* Suporte */}
            <FooterList title="Suporte" links={supportLinks} delay={0.2} />

            {/* Newsletter */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <h4 className="mb-5 text-itemtitle2 font-medium text-black dark:text-white">
                Newsletter
              </h4>
              <p className="mb-4 text-sm">
                Assine para receber novidades e atualizações da Satyz.
              </p>
              <form>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Seu email"
                    className="w-full rounded-full border border-stroke px-6 py-3 shadow-sm focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:focus:border-primary"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:text-primaryho"
                    aria-label="Subscribe"
                  >
                    ➤
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-stroke py-7 dark:border-strokedark flex flex-col items-center justify-center gap-5 lg:flex-row lg:justify-between">
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-sm text-center animate_top"
          >
            &copy; {currentYear} Satyz. Todos os direitos reservados.
          </motion.p>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-6 text-sm animate_top"
          >
            <li><Link href="/privacy" className="hover:text-primary">Privacidade</Link></li>
            <li><Link href="/terms" className="hover:text-primary">Termos</Link></li>
            <li><Link href="/#contact" className="hover:text-primary">Contato</Link></li>
          </motion.ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Subcomponente para colunas de links
const FooterList = ({
  title,
  links,
  delay,
}: {
  title: string;
  links: { label: string; href: string }[];
  delay: number;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
    transition={{ duration: 1, delay }}
    viewport={{ once: true }}
    className="animate_top"
  >
    <h4 className="mb-5 text-itemtitle2 font-medium text-black dark:text-white">{title}</h4>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="hover:text-primary">{link.label}</Link>
        </li>
      ))}
    </ul>
  </motion.div>
);