import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PackagesSection from "./components/PackagesSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { domesticPackages, internationalPackages } from "./data/packages";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Header />
      <main className="flex justify-center align-middle items-center flex-col">
        <HeroSection />
        <PackagesSection
          type="international"
          title="Explore the World"
          packages={internationalPackages}
        />
        <PackagesSection
          type="domestic"
          title="Explore India"
          packages={domesticPackages}
        />
        <AboutSection />
        <GallerySection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
