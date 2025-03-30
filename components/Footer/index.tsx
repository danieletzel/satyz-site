"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="py-16 lg:py-20">
          <div className="flex flex-wrap justify-between gap-10 lg:flex-nowrap">
            {/* Logo + Descrição */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/4"
            >
              <Link href="/" className="block relative h-16 w-[200px] xl:h-20 xl:w-[240px]">
                <Image
                  src="/images/logo/logo-light.svg"
                  alt="Satyz Logo Light"
                  fill
                  className="block dark:hidden object-contain"
                  priority
                />
                <Image
                  src="/images/logo/logo-dark.svg"
                  alt="Satyz Logo Dark"
                  fill
                  className="hidden dark:block object-contain"
                  priority
                />
              </Link>

              <p className="mb-10 mt-5 text-sm text-waterloo">
                Automatize seu time com agentes de IA inteligentes.
              </p>

              <p className="mb-1.5 text-sectiontitle uppercase tracking-[5px]">
                Contato
              </p>
              <a
                href="mailto:hello@satyz.io"
                className="text-itemtitle font-medium text-black dark:text-white"
              >
                hello@satyz.io
              </a>
            </motion.div>

            {/* Menus */}
            <div className="grid w-full gap-10 sm:grid-cols-2 lg:w-3/4 lg:grid-cols-3 xl:w-7/12">
              {/* Links rápidos */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="mb-5 text-itemtitle2 font-medium text-black dark:text-white">Links rápidos</h4>
                <ul className="space-y-3">
                  <li><Link href="/" className="hover:text-primary">Home</Link></li>
                  <li><Link href="/about" className="hover:text-primary">Company</Link></li>
                  <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
                  <li><Link href="/contact" className="hover:text-primary">Contato</Link></li>
                </ul>
              </motion.div>

              {/* Suporte */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="mb-5 text-itemtitle2 font-medium text-black dark:text-white">Suporte</h4>
                <ul className="space-y-3">
                  <li><Link href="/security" className="hover:text-primary">Segurança</Link></li>
                  <li><Link href="/privacy" className="hover:text-primary">Privacidade</Link></li>
                  <li><Link href="/terms" className="hover:text-primary">Termos de uso</Link></li>
                </ul>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="mb-5 text-itemtitle2 font-medium text-black dark:text-white">Newsletter</h4>
                <p className="mb-4 w-[90%] text-sm">
                  Assine para receber novidades e atualizações da Satyz.
                </p>
                <form action="#">
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
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-stroke py-6 text-sm dark:border-strokedark lg:flex-row">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            &copy; {new Date().getFullYear()} Satyz. Todos os direitos reservados.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-6"
          >
            <li><Link href="/privacy" className="hover:text-primary">Privacidade</Link></li>
            <li><Link href="/terms" className="hover:text-primary">Termos</Link></li>
            <li><Link href="/contact" className="hover:text-primary">Contato</Link></li>
          </motion.ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;