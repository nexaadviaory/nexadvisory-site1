import { useEffect, useRef, useState } from 'react';
import { Brain, Zap, Globe, GraduationCap, Wand2, Package } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Business Strategy',
    description: 'Transform your business model with intelligent automation, predictive analytics, and AI-powered decision-making frameworks.',
  },
  {
    icon: Zap,
    title: 'Automation & Data Intelligence',
    description: 'Streamline operations and unlock insights from your data with custom AI solutions tailored to your industry.',
  },
  {
    icon: Globe,
    title: 'Digital Transformation Consulting',
    description: 'Navigate the digital landscape with confidence through end-to-end transformation strategies and implementation support.',
  },
  {
    icon: GraduationCap,
    title: 'AI Education & Workshops',
    description: 'Empower your team with cutting-edge AI knowledge through hands-on training, workshops, and certification programs.',
  },
  {
    icon: Wand2,
    title: 'Branding',
    description: 'We craft brands from the ground up — defining identity, voice, and visual systems. From logo design to brand guidelines, we build cohesive, future-proof brands that communicate trust and innovation.',
  },
  {
    icon: Package,
    title: 'Sourcing',
    description: 'We handle end-to-end product sourcing for businesses of any size. Whether it\'s for a brand we\'ve built or an existing one, Nexa ensures quality, reliability, and cost efficiency — sourcing anything, anywhere.',
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to accelerate your growth and transform your business operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
  isVisible
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
  isVisible: boolean;
}) {
  return (
    <div
      className={`group relative p-8 rounded-2xl bg-gradient-to-br from-blue-950/20 to-cyan-950/20 border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-2xl transition-all duration-500"></div>

      <div className="relative z-10">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>

        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}
