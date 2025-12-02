import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 mt-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">AutoBot</h2>
          <p className="text-gray-400">
            Build modern, responsive websites & apps effortlessly with AutoBot.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="#features" className="hover:text-blue-500 transition">
                Features
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-blue-500 transition">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#cta" className="hover:text-blue-500 transition">
                Get Started
              </a>
            </li>
            <li>
              <a href="#hero" className="hover:text-blue-500 transition">
                Home
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500 transition">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-6 py-4 text-center text-gray-500 text-sm">
        © 2025 AutoBot. All Rights Reserved.
      </div>
    </footer>
  );
}
