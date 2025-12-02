"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true); // trigger animation after mount
  }, []);

  return (
    <section className="h-[85vh] flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-600/30 to-transparent px-6 relative overflow-hidden">
      
      {/* Heading */}
      <h1
        id="heading"
        className={`text-6xl font-extrabold drop-shadow-lg text-white transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        Elevate Your Digital Experience
      </h1>

      {/* Subtext */}
      <p
        className={`mt-4 text-lg max-w-2xl text-gray-300 transition-all duration-1000 delay-200 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        A next-gen platform to build, launch, and scale products with speed and precision.
      </p>

      {/* CTA Button */}
      <button
        className={`mt-8 px-10 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-lg font-semibold shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        Start Free Trial
      </button>

      {/* Optional small tagline */}
      <p className={`mt-3 text-sm text-gray-400 transition-opacity duration-1000 delay-400 ${loaded ? "opacity-100" : "opacity-0"}`}>
        No credit card required • Instant access
      </p>
    </section>
  );
}
