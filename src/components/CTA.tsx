import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta" ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-600/20 to-blue-600/20"></div>

      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-blue-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`,
            }}
          >
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>
          </div>
        ))}
      </div>

      <div
        className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm mb-8">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-blue-300 font-medium">Ready to Transform Your Business?</span>
        </div>

        <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white leading-tight">
          Let's Shape the Future Together
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join the leading organizations in MENA who are already leveraging AI to drive unprecedented growth and innovation.
        </p>

        <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold text-xl overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-[0_0_60px_rgba(59,130,246,0.8)]">
          <span className="relative z-10 flex items-center gap-2">
            Schedule a Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        <div className="mt-8 text-gray-400 text-sm">
          No commitment required • Free 15-minute Discovery call
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20" viewBox="0 0 800 600">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <circle cx="400" cy="300" r="150" fill="none" stroke="url(#lineGradient)" strokeWidth="1" className="animate-spin-slow" />
          <circle cx="400" cy="300" r="200" fill="none" stroke="url(#lineGradient)" strokeWidth="1" className="animate-spin-reverse" />
          <circle cx="400" cy="300" r="250" fill="none" stroke="url(#lineGradient)" strokeWidth="1" className="animate-spin-slow" />
        </svg>
      </div>
    </section>
  );
}
