import Image from "next/image";

export default function Home() {
  return (
    <div
      className="flex flex-col md:flex-row items-center min-h-screen text-white"
      style={{background: "linear-gradient(to bottom right, #315F8C, white, #315F8C, black)",}}>
      <div className="md:w-1/2 p-8 flex flex-col items-center md:items-start text-center md:text-left">
        <h1
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 mb-6 relative">
          Code Create Play
          <span
            className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 transition-all duration-300 origin-left group-hover:scale-x-100"/>
        </h1>
        <h1
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-500 mb-6 relative">
          Dream Big  Build Bigger
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 transition-all duration-300 origin-left group-hover:scale-x-100"/>
        </h1>
        <p className="text-lg md:text-xl font-semibold text-indigo-600 mb-6 leading-relaxed tracking-wide hover:text-indigo-400 transition-all duration-300">
          The future is yours to create. Dream big, code fearlessly, and build the extraordinary. Let your imagination shape tomorrow!
        </p>

        <div className="flex gap-4 justify-center md:justify-start w-full">
          <button
            className="px-8 py-3 md:px-10 md:py-4 bg-white text-blue-700 border-2 border-blue-700 rounded-full 
              hover:bg-blue-700 hover:text-white hover:border-white 
              hover:scale-105 transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center p-8">
        <Image
          src="/Home Pic.png"
          alt="Robot"
          width={350}
          height={350}
          className="object-cover"/>
      </div>
    </div>
  );
}
