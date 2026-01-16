import { MainHero } from "@/components/MainHero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <MainHero />
      <Services />
      <Process />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
