"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <Contact />
      </main>
      <Footer />
    </>
  );
}