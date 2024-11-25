import React from 'react';
import { Battery, Sun, Wrench, Users } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Battery className="h-8 w-8 text-yellow-500" />,
      title: "Power Solutions",
      description: "Advanced power systems and infrastructure for sustainable energy distribution."
    },
    {
      icon: <Sun className="h-8 w-8 text-yellow-500" />,
      title: "Solar Technology",
      description: "Cutting-edge solar solutions for residential and commercial applications."
    },
    {
      icon: <Wrench className="h-8 w-8 text-yellow-500" />,
      title: "EPC Services",
      description: "Complete engineering, procurement, and construction services for energy projects."
    },
    {
      icon: <Users className="h-8 w-8 text-yellow-500" />,
      title: "Expert Team",
      description: "Dedicated professionals with years of experience in the energy sector."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of energy solutions designed to power your future.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}