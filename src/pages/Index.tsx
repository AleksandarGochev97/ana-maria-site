import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import PerformancesSection from "@/components/PerformancesSection";
import TeachingSection from "@/components/TeachingSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pt-16 text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <PerformancesSection />
        <TeachingSection />
        <GallerySection />
        <ContactSection />
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default Index;
