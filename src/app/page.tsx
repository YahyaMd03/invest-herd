import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import DashboardOverview from "@/components/DashboardOverview";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import BrokersSection from "@/components/BrokersSection";

export default function Home() {
  return (
    <main  className="bg-blue-ray h-full w-full">
      <Navbar />
     <Hero /> 
     <DashboardOverview />
      <ServicesSection />
      <FAQSection />
      <BrokersSection />
     <Footer />
  </main>
  );
}
