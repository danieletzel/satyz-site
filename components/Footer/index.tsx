"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="py-20 lg:py-25">
          <div className="flex flex-wrap gap-10 lg:justify-between">
            {/* Logo e contato */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/4"
            >
              <Link
                href="/"
                className="relative block h-16 w-48 sm:h-20 sm:w-56 md:h-24 md:w-64 xl:h-28 xl:w-80"
              >
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

              <p className="mb-6 mt-5 text-sm text-waterloo max-w-[280px]">
                Automatize seu time com agentes de IA inteligentes.
              </p>

              <p className="mb-1.5 text-xs font-bold uppercase tracking-[4px] text-sectiontitle">Contato</p>
              <a
                href="mailto:hello@satyz.io"
                className="text-itemtitle font-medium text-black dark:text-white"
              >
                hello@satyz.io
              </a>
            </motion.div>

            {/* Links rápidos */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5"
            >
              <h4 className="mb-5 text-lg font-medium text-black dark:text-white">Links rápidos</h4>
              <ul className="text-sm text-waterloo space-y-2">
                <li><Link href="/" className="hover:text-primary">Home</Link></li>
                <li><Link href="/about" className="hover:text-primary">Company</Link></li>
                <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-primary">Contato</Link></li>
              </ul>
            </motion.div>

            {/* Suporte */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5"
            >
              <h4 className="mb-5 text-lg font-medium text-black dark:text-white">Suporte</h4>
              <ul className="text-sm text-waterloo space-y-2">
                <li><Link href="/security" className="hover:text-primary">Segurança</Link></li>
                <li><Link href="/privacy" className="hover:text-primary">Privacidade</Link></li>
                <li><Link href="/terms" className="hover:text-primary">Termos de uso</Link></li>
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full md:w-2/3 lg:w-1/3"
            >
              <h4 className="mb-5 text-lg font-medium text-black dark:text-white">Newsletter</h4>
              <p className="mb-4 text-sm text-waterloo max-w-[90%]">
                Assine para receber novidades e atualizações da Satyz.
              </p>

              <motion.form
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                <input
                  type="email"
                  placeholder="Seu email"
                  className="w-full rounded-full border border-stroke px-6 py-3 shadow-sm focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:focus:border-primary"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.1 }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:text-primaryho"
                  aria-label="Subscribe"
                >
                  ➤
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-stroke py-6 text-sm text-waterloo dark:border-strokedark lg:flex-row">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            &copy; {new Date().getFullYear()} Satyz. Todos os direitos reservados.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-5"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary transition">
              <FaLinkedinIn size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-primary transition">
              <FaTwitter size={18} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary transition">
              <FaGithub size={18} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-primary transition">
              <FaYoutube size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;