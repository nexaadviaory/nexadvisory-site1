import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Nexa Advisory transformed our entire operational framework. Their AI solutions delivered measurable ROI within the first quarter.",
    author: "Sarah Al-Khatib",
    position: "CEO, TechVentures MENA",
  },
  {
    quote: "The team's expertise in AI strategy is unmatched. They didn't just implement technology—they reimagined our business model.",
    author: "Hassan Mahmoud",
    position: "Director of Innovation, Gulf Enterprises",
  },
  {
    quote: "Working with Nexa was a game-changer. Their educational workshops equipped our team with the skills to drive our own AI initiatives.",
    author: "Layla Nasser",
    position: "CTO, Digital Solutions Group",
  },
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Trusted by Visionary Leaders
          </h2>
        </div>

        <div className="relative min-h-[400px] flex items-center justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ${
                index === currentIndex
                  ? 'opacity-100 scale-100 translate-x-0'
                  : index < currentIndex
                  ? 'opacity-0 scale-95 -translate-x-8'
                  : 'opacity-0 scale-95 translate-x-8'
              }`}
            >
              <div className="relative p-12 rounded-3xl bg-gradient-to-br from-blue-950/40 to-cyan-950/40 border border-blue-500/30 backdrop-blur-sm">
                <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                  <Quote className="w-8 h-8 text-white" />
                </div>

                <blockquote className="text-2xl md:text-3xl text-gray-200 leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600"></div>
                  <div>
                    <div className="font-semibold text-white text-lg">{testimonial.author}</div>
                    <div className="text-gray-400">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-500 w-12'
                  : 'bg-blue-500/30 hover:bg-blue-500/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
