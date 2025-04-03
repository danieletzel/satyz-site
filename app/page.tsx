"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FunFact from "@/components/FunFact";
import FeaturesTab from "@/components/FeaturesTab";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
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
      <CTA />
      {/* <Pricing /> */}
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}