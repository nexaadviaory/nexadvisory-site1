import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Briefcase } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ clients: 0, industries: 0, projects: 0 });
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

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const targets = { clients: 150, industries: 12, projects: 200 };

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        setCounts({
          clients: Math.floor(targets.clients * progress),
          industries: Math.floor(targets.industries * progress),
          projects: Math.floor(targets.projects * progress),
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounts(targets);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              AI-Driven Strategy. Human-Centered Impact.
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              At Nexa Advisory, we bridge the gap between cutting-edge artificial intelligence and real-world business transformation. Our mission is to empower organizations across Lebanon and the MENA region with the tools, insights, and strategies needed to thrive in an AI-powered future.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              We believe in sustainable growth, ethical innovation, and creating lasting value for every stakeholder. Our approach combines technical excellence with deep industry expertise to deliver solutions that truly move the needle.
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="grid gap-8">
              <StatCard
                icon={<Users className="w-8 h-8" />}
                value={counts.clients}
                label="Clients Served"
                suffix="+"
              />
              <StatCard
                icon={<Briefcase className="w-8 h-8" />}
                value={counts.industries}
                label="Industries Impacted"
                suffix=""
              />
              <StatCard
                icon={<TrendingUp className="w-8 h-8" />}
                value={counts.projects}
                label="Projects Delivered"
                suffix="+"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, value, label, suffix }: { icon: React.ReactNode; value: number; label: string; suffix: string }) {
  return (
    <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-blue-950/30 to-cyan-950/30 border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-2xl transition-all duration-300"></div>
      <div className="relative z-10 flex items-center gap-4">
        <div className="text-blue-400">{icon}</div>
        <div>
          <div className="text-4xl font-bold text-white">{value}{suffix}</div>
          <div className="text-gray-400">{label}</div>
        </div>
      </div>
    </div>
  );
}
