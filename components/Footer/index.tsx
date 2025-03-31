"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="py-20 lg:py-25">
          <div className="flex flex-wrap gap-12 lg:justify-between lg:gap-0">
            {/* Logo e contato */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top w-full lg:w-1/4"
            >
              <motion.div
                whileHover={{ scale: 1.02, filter: "brightness(1.2)" }}
                transition={{ duration: 0.3 }}
                className="block relative h-20 w-52 sm:h-24 sm:w-60 md:h-28 md:w-64 xl:h-32 xl:w-72"
              >
                <Link href="/" className="block h-full w-full">
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
              </motion.div>

              <p className="mb-10 mt-5 text-sm text-waterloo">
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
                <motion.a
                  whileHover={{ scale: 1.2, color: "#6366F1" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="#"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, color: "#6366F1" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="#"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, color: "#6366F1" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="#"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, color: "#6366F1" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="#"
                  aria-label="X"
                >
                  <FaXTwitter />
                </motion.a>
              </div>
            </motion.div>

            {/* Menus */}
            <div className="flex w-full flex-col gap-12 md:flex-row md:justify-between lg:w-2/3 xl:w-7/12">
              {/* Links rápidos */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top"
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
                variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top"
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
                variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top"
              >
                <h4 className="mb-5 text-itemtitle2 font-medium text-black dark:text-white">Newsletter</h4>
                <p className="mb-4 text-sm">
                  Assine para receber novidades e atualizações da Satyz.
                </p>
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
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
                </motion.form>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between">
          <motion.p
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top text-sm text-center"
          >
            &copy; {new Date().getFullYear()} Satyz. Todos os direitos reservados.
          </motion.p>

          <motion.ul
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top flex flex-wrap items-center justify-center gap-6 text-sm"
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