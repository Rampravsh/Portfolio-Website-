import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Skills";
import TechStack from "../components/TechStack";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f1e8]">
      <Navbar />

      <Hero />

      <section className="grid lg:grid-cols-3 border-t border-[#e4d9c8]">

        <About />

        <Services />

        <TechStack />

      </section>
    </main>
  );
}