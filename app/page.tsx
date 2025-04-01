// app/page.tsx
"use client";

import About from "@/components/About";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Blog from "@/components/Blog";
// import Pricing from "@/components/Pricing"; // ❌ Temporariamente oculto

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <About />
      {/* <Pricing /> */}
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}