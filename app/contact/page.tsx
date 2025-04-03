// app/contact/page.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Header />

      <section className="pt-32 pb-20 px-4 md:px-8 xl:px-0 bg-white dark:bg-blacksection">
        <div className="max-w-c-1235 mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white text-center mb-6">
            Vamos conversar
          </h1>
          <p className="text-center text-gray-700 dark:text-manatee mb-12 max-w-2xl mx-auto">
            Preencha o formulário abaixo e entraremos em contato o mais rápido possível para apresentar o agente ideal para sua operação.
          </p>

          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
