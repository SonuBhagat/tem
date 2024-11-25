import React from 'react';
import { Sun, Wind, Zap, Battery } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-yellow-500" />
            <span className="text-xl font-bold text-gray-800">The Energy Market</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#power" className="text-gray-600 hover:text-yellow-500 transition-colors">Power</a>
            <a href="#solar" className="text-gray-600 hover:text-yellow-500 transition-colors">Solar</a>
            <a href="#epc" className="text-gray-600 hover:text-yellow-500 transition-colors">EPC</a>
            <a href="#contact" className="text-gray-600 hover:text-yellow-500 transition-colors">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}