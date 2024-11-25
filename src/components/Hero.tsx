import React from 'react';
import { Sun, Wind, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-100 -z-10" />
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Powering Tomorrow's
            <span className="text-yellow-500"> Energy Solutions</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Transforming the future of energy with innovative power solutions, solar technology, and expert EPC services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">
              Join Waitlist
            </button>
            <button className="px-8 py-4 border-2 border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-colors">
              Learn More
            </button>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
            <div className="text-center">
              <div className="bg-white/80 p-4 rounded-xl shadow-lg">
                <Zap className="h-8 w-8 text-yellow-500 mx-auto" />
                <p className="mt-2 font-semibold">Power</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/80 p-4 rounded-xl shadow-lg">
                <Sun className="h-8 w-8 text-yellow-500 mx-auto" />
                <p className="mt-2 font-semibold">Solar</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/80 p-4 rounded-xl shadow-lg">
                <Wind className="h-8 w-8 text-yellow-500 mx-auto" />
                <p className="mt-2 font-semibold">EPC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}