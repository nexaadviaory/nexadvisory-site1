import { Cpu } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-blue-500/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Nexa Advisory
            </span>
          </div>

          <nav className="flex gap-8">
            <a
              href="#about"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-500/10 text-center text-gray-500 text-sm">
          © 2025 Nexa Advisory. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
