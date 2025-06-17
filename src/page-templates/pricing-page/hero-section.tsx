import React from "react";
import { BadgeCent, BadgeDollarSign } from "lucide-react";
import TailwindButton from "@/components/reusable-components/tailwind-button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-medium-blue via-mild-blue to-blue-800 overflow-hidden py-20 md:py-32 flex items-center justify-center mt-[104px]">
      {/* Decorative Circles */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-400 opacity-10 rounded-full z-0" />
      <BadgeCent className="absolute -top-20 -left-20 text-blue-200 opacity-10 w-80 h-80 z-0 rotate-[-19deg]" />
      <div className="absolute -bottom-8 -right-8 w-96 h-96 bg-blue-300 opacity-10 rounded-full z-0" />
      <BadgeDollarSign className="absolute -bottom-8 -right-8 text-blue-200 opacity-10 w-96 h-96 z-0 rotate-[23deg]" />
      {/* <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-blue-200 opacity-10 rounded-full z-0" style={{transform: 'translate(-50%, -50%)'}} /> */}
      {/* <CircleDollarSign className="absolute top-1/2 left-1/2 text-blue-200 opacity-10 w-40 h-40 z-0" style={{transform: 'translate(-50%, -50%)'}}/> */}
      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg text-white">Transparent Pricing, Exceptional Value</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-100 drop-shadow">Flexible Models. Secure Payments. No Surprises.</h2>
        <p className="text-lg md:text-xl mb-8 text-blue-50 max-w-2xl mx-auto drop-shadow">
          We offer clear, flexible pricing options and secure payment methods for all your tech related needs. We&apos;ll work with you to find the best solution for your goals and budget.
        </p>
        <TailwindButton href="/contact" className="bg-white text-blue-700 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-blue-50 hover:scale-105 transition-all text-lg mx-auto">
          Get a Custom Estimate
        </TailwindButton>
      </div>
    </section>
  );
};

export default HeroSection; 