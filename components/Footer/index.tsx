"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="py-20 lg:py-25">
          <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
            <motion.div
              variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top w-full lg:w-1/4"
            >
              <Link href="/" className="block relative h-14 w-[180px] xl:h-16 xl:w-[200px]">
                <Image
                  src="/images/logo/logo-light.svg"
                  alt="Logo Satyz Light"
                  fill
                  className="block dark:hidden object-contain"
                  priority
                />
                <Image
                  src="/images/logo/logo-dark.svg"
                  alt="Logo Satyz Dark"
                  fill
                  className="hidden dark:block object-contain"
                  priority
                />
              </Link>

              <p className="mb-10 mt-5 text-sm text-waterloo">
                Automatize seu time com agentes de IA inteligentes.
              </p>

              <p className="mb-1.5 text-sectiontitle uppercase tracking-[5px]">Contato</p>
              <a
                href="mailto:hello@satyz.io"
                className="text-itemtitle font-medium text-black dark:text-white"
              >
                hello@satyz.io
              </a>
            </motion.div>

            <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between lg:w-2/3 xl:w-7/12">
              {[
                {
                  title: "Links rápidos",
                  links: [
                    { href: "/", label: "Home" },
                    { href: "/about", label: "Company" },
                    { href: "/blog", label: "Blog" },
                    { href: "/contact", label: "Contato" },
                  ],
                },
                {
                  title: "Suporte",
                  links: [
                    { href: "/security", label: "Segurança" },
                    { href: "/privacy", label: "Privacidade" },
                    { href: "/terms", label: "Termos de uso" },
                  ],
                },
              ].map((section, i) => (
                <motion.div
                  key={i}
                  variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-5 text-itemtitle2 font-medium text-black dark:text-white">{section.title}</h4>
                  <ul>
                    {section.links.map((link, idx) => (
                      <li key={idx}>
                        <Link href={link.href} className="mb-3 inline-block hover:text-primary">{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}

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
                <p className="mb-4 w-[90%] text-sm">Assine para receber novidades e atualizações da Satyz.</p>
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
            className="animate_top flex items-center gap-6 text-sm"
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