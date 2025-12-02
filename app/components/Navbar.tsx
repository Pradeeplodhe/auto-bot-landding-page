"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-950 fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-blue-500">AutoBot</div>

        <ul className="hidden md:flex space-x-8 text-white font-semibold">
          <li><a href="#features" className="hover:text-blue-400 transition">Features</a></li>
          <li><a href="#testimonials" className="hover:text-blue-400 transition">Testimonials</a></li>
          <li><a href="#cta" className="hover:text-blue-400 transition">Get Started</a></li>
        </ul>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col bg-gray-950 text-white space-y-4 px-6 pb-6">
          <li><a href="#features" onClick={() => setOpen(false)}>Features</a></li>
          <li><a href="#testimonials" onClick={() => setOpen(false)}>Testimonials</a></li>
          <li><a href="#cta" onClick={() => setOpen(false)}>Get Started</a></li>
        </ul>
      )}
    </nav>
  );
}
