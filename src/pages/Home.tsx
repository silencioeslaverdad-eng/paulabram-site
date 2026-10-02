import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import MoonriseBanner from "@/sections/MoonriseBanner";
import QuickActions from "@/sections/QuickActions";
import Chapters from "@/sections/Chapters";
import Themes from "@/sections/Themes";
import GroundedPlan from "@/sections/GroundedPlan";
import Proof from "@/sections/Proof";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main>
        <Hero />
        <MoonriseBanner />
        <QuickActions />
        <Chapters />
        <Themes />
        <GroundedPlan />
        <Proof />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
