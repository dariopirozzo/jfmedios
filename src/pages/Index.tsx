import { useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import UpcomingEvents from "@/components/landing/UpcomingEvents";
import Gallery from "@/components/landing/Gallery";
import PastEvents from "@/components/landing/PastEvents";
import WhatsAppFloating from "@/components/landing/WhatsAppFloating";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

const Index = () => {
  useEffect(() => {
    console.log(new Date().toISOString().split("T")[0]);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <UpcomingEvents />
      <Gallery />
      <PastEvents />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
      <WhatsAppFloating />
    </div>
  );
};

export default Index;
