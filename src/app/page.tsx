import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import DashboardOverview from "@/components/DashboardOverview";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import BrokersSection from "@/components/BrokersSection";
import FloatingIcons from "@/components/FloatingIcons";


export default function Home() {
  return (
    <main  className="bg-blue-ray h-full w-full">
      <Navbar />
      <FloatingIcons/>
     <Hero /> 
     <DashboardOverview />
      <ServicesSection />
      <FAQSection />
      <BrokersSection />
     <Footer />
  </main>
  );
}
