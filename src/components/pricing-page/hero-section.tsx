import React from "react";
import { CircleDollarSign } from "lucide-react";
import TailwindButton from "@/components/reusable-components/tailwind-button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-blue-800 overflow-hidden py-20 md:py-32 flex items-center justify-center">
      {/* Decorative Circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 opacity-10 rounded-full z-0" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 opacity-10 rounded-full z-0" />
      <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-blue-200 opacity-10 rounded-full z-0" style={{transform: 'translate(-50%, -50%)'}} />
      <CircleDollarSign className="absolute top-1/2 left-1/2 text-blue-200 opacity-10 w-40 h-40 z-0" style={{transform: 'translate(-50%, -50%)'}}/>
      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg text-white">Transparent Pricing, Exceptional Value</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-100 drop-shadow">Flexible Models. Secure Payments. No Surprises.</h2>
        <p className="text-lg md:text-xl mb-8 text-blue-50 max-w-2xl mx-auto drop-shadow">
          Choose the pricing model that fits your needs. We offer clear, flexible options and secure payment methods for web development, custom software, and data analytics services.
        </p>
        <TailwindButton href="/contact" className="bg-white text-blue-700 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-blue-50 hover:scale-105 transition-all text-lg mx-auto">
          Get a Custom Quote
        </TailwindButton>
      </div>
    </section>
  );
};

export default HeroSection; 