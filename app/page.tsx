"use client";

import About from "@/components/About";
import Features from "@/components/Features";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Blog from "@/components/Blog";
import Integration from "@/components/Integration";
// import Pricing from "@/components/Pricing"; // ❌ Temporariamente oculto

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <FunFact />
      <FeaturesTab />
      <About />
      <FAQ />
      <Integration />
      {/* <Pricing /> */}
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}