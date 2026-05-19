import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import ViasSection from './components/ViasSection';
import ActividadesSection from './components/ActividadesSection';
import ReviewsSection from './components/ReviewsSection';
import ContactoSection from './components/ContactoSection';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <GallerySection />
      <ViasSection />
      <ActividadesSection />
      <ReviewsSection />
      <ContactoSection />
      <WhatsAppButton />
    </>
  );
}
