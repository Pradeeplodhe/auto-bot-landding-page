"use client";
import { FaBolt, FaRobot, FaShieldAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Features() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true); // trigger animation on mount
  }, []);

  const featureData = [
    {
      icon: <FaBolt size={36} className="text-blue-400 mb-4" />,
      title: "Fast Performance",
      desc: "Lightning-fast load time & smooth experience.",
    },
    {
      icon: <FaRobot size={36} className="text-green-400 mb-4" />,
      title: "Smart Automation",
      desc: "Automate workflow to save time & boost efficiency.",
    },
    {
      icon: <FaShieldAlt size={36} className="text-red-400 mb-4" />,
      title: "Secure & Reliable",
      desc: "Enterprise-level security and data protection.",
    },
  ];

  return (
    <section className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Powerful Features</h2>

      <div  className="grid md:grid-cols-3 gap-8">
        {featureData.map((feature, index) => (
          <div
          id="features"
            key={index}
            className={`p-6 bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg border border-white/10 transition-transform duration-300 hover:scale-105 hover:shadow-2xl
              ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} delay-${index * 100}`}
          >
            <div  className="flex flex-col items-center text-center">
              {feature.icon}
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-gray-300">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
