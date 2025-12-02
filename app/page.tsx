import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-gray-950 text-white">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
