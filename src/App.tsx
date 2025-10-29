import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Hero scrollY={scrollY} />
      <About />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
