"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react"; 
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri"; 

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  return (
    <nav className="bg-gradient-to-r from-black to-[#315F8C] text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 relative">
        {/* Logo */}
        <Link href="/">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={70} 
            height={70} 
            className="cursor-pointer" 
          />
        </Link>

        {/* Mobile Menu Icon (Hamburger) */}
        <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <RiCloseFill className="text-white text-3xl cursor-pointer"/>
          ) : (
            <HiOutlineMenuAlt3 className="text-white text-3xl cur" />
          )}
        </div>

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex space-x-8 justify-center flex-grow">
          <li>
            <Link href="/Ai" className="font-bold text-white text-lg relative group py-2">
              AI
              <span className="absolute left-0 bottom-[-32px] w-0 h-1 bg-blue-500 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link href="/Ml" className="font-bold text-white text-lg relative group py-2">
              MI
              <span className="absolute left-0 bottom-[-32px] w-0 h-1 bg-blue-500 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link href="/Gaming" className="font-bold text-white text-lg relative group py-2">
              Gaming
              <span className="absolute left-0 bottom-[-32px] w-0 h-1 bg-blue-500 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link href="/Cybersecurity" className="font-bold text-white text-lg relative group py-2">
              Cybersecurity
              <span className="absolute left-0 bottom-[-32px] w-0 h-1 bg-blue-500 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link href="/Programming" className="font-bold text-white text-lg relative group py-2">
              Programming Tools
              <span className="absolute left-0 bottom-[-32px] w-0 h-1 bg-blue-500 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link href="/Robotics" className="font-bold text-white text-lg relative group py-2">
              Robotics
              <span className="absolute left-0 bottom-[-32px] w-0 h-1 bg-blue-500 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link href="/Technology" className="font-bold text-white text-lg relative group py-2">
              3D Technology
              <span className="absolute left-0 bottom-[-32px] w-0 h-1 bg-blue-500 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link href="/Computing" className="font-bold text-white text-lg relative group py-2">
              Cloud Computing
              <span className="absolute left-0 bottom-[-32px] w-0 h-1 bg-blue-500 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Full-Screen Mobile Menu with Overlay */}
      {isMenuOpen && (
        <>
          {/* Overlay Background */}
          <div className="fixed inset-0 bg-black opacity-50 z-40"></div>

          {/* Full-Screen Menu */}
          <div className="fixed inset-0 z-50 bg-gradient-to-r from-black to-[#315F8C] rounded-lg m-4">
            <div className="absolute top-4 right-4 cursor-pointer">
              <RiCloseFill 
                className="text-white text-3xl"
                onClick={() => setIsMenuOpen(false)}
              />
            </div>

            {/* Full-Screen Menu Content */}
            <div className="flex flex-col justify-center items-center h-full space-y-6 text-white text-2xl">
              <Link href="/Ai" className="font-bold">AI</Link>
              <Link href="/Ml" className="font-bold">MI</Link>
              <Link href="/Gaming" className="font-bold">Gaming</Link>
              <Link href="/Cybersecurity" className="font-bold">Cybersecurity</Link>
              <Link href="/programming" className="font-bold">Programming Tools</Link>
              <Link href="/Robotics" className="font-bold">Robotics</Link>
              <Link href="/Technology" className="font-bold">3D Technology</Link>
              <Link href="/Computing" className="font-bold">Cloud Computing</Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
























