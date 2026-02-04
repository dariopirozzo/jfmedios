import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import UpcomingEvents from "@/components/landing/UpcomingEvents";
import Gallery from "@/components/landing/Gallery";
import PastEvents from "@/components/landing/PastEvents";
import Testimonials from "@/components/landing/Testimonials";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <UpcomingEvents />
      <Gallery />
      <PastEvents />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
