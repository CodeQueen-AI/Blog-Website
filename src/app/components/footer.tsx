import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-[#315F8C] to-black text-white py-6">
      {/* Main Footer Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 px-4 md:px-6">
        {/* Logo Section */}
        <div className="text-center md:text-left">
          <Image src="/logo.png" alt="Logo" width={120} height={40} />
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16 text-center md:text-left">
          <div>
            <h3 className="font-semibold text-lg mb-2">Tech</h3>
            <ul className="space-y-1">
              <li className="text-white hover:text-blue-300">AI</li>
              <li className="text-white hover:text-blue-300">MI</li>
              <li className="text-white hover:text-blue-300">Gaming</li>
              <li className="text-white hover:text-blue-300">Cybersecurity</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Techno</h3>
            <ul className="space-y-1">
              <li className="text-white hover:text-blue-300">Programming Tools</li>
              <li className="text-white hover:text-blue-300">Robotics</li>
              <li className="text-white hover:text-blue-300">3D Technology</li>
              <li className="text-white hover:text-blue-300">Cloud Computing</li>
            </ul>
          </div>
        </div>

        {/* Search Bar Section */}
        <div className="w-full md:w-auto flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-full md:w-64 rounded-md md:rounded-l-md text-black focus:outline-none"
          />
          <button className="w-full md:w-auto px-6 py-2 bg-blue-800 text-white border border-white rounded-md md:rounded-r-md hover:bg-white hover:text-blue-800 hover:border-blue-800 transition-all duration-300">
            Subscribe
          </button>
        </div>
      </div>

      {/* End Section */}
      <div className="container mx-auto mt-6 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Copyright */}
        <div className="text-center md:text-left text-white">
          &copy; 2024 Your TechTechno. All rights reserved.
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end space-x-4">
          <Link
            href="https://github.com/CodeQueen-AI"
            className="flex items-center justify-center w-10 h-10 border border-black text-black bg-white rounded-full hover:bg-black hover:text-white hover:border-white transition-all duration-300"
          >
            <FaGithub size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sumbal-naz-601411323/"
            className="flex items-center justify-center w-10 h-10 border border-blue-600 text-blue-600 bg-white rounded-full hover:bg-blue-600 hover:text-white hover:border-white transition-all duration-300"
          >
            <FaLinkedin size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
