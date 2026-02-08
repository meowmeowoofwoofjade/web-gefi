import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import BusinessModel from "@/components/BusinessModel";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <BusinessModel />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
