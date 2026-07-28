import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Location } from "./components/Location";
import { Services } from "./components/Services";
import { SpecialCare } from "./components/SpecialCare";
import { Testimonials } from "./components/Testimonials";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Differentials } from "./components/Differentials";

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <Differentials />
        <SpecialCare />
        <Testimonials />
        <HowItWorks />
        <Gallery />
        <Location />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
