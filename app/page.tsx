import { Hero } from "@/components/sections/Hero";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { Benefits } from "@/components/sections/Benefits";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { Partners } from "@/components/sections/Partners";
import { Blog } from "@/components/sections/Blog";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero page="home" />
      <CategoryGrid />
      <Benefits />
      <Process />
      <Projects />
      <Testimonials />
      <Partners />
      <Blog />
      <CTA />
      <Footer />
    </main>
  );
}
