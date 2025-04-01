// app/page.tsx
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FeaturesCarousel from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";

export default function Page() {
  return (
    <main>
      <Hero />
      <Feature />
      <About />
      <FeaturesTab />
      <FeaturesCarousel />
      <Integration />
      <CTA />
      <FAQ />
      <Pricing />
      <Contact />
      <Blog />
    </main>
  );
}