import Image from 'next/image';

export default function BlogGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {/* Left card */}
      <div className="md:col-span-2 relative">
        <Image
          className="w-full h-80 object-cover"
          src="/I1.avif" 
          alt="Main Blog Image"
          width={800}
          height={450}/>
      </div>

      {/* Right cards */}
      <div className="flex flex-col gap-4">
        <div className="relative">
          <Image
            className="w-full h-40 object-cover"
            src="/I2.jpg" 
            alt="Blog Image"
            width={400}
            height={200}/>
        </div>
        <div className="relative">
          <Image
            className="w-full h-40 object-cover"
            src="/I3.avif" 
            alt="Blog Image"
            width={400}
            height={200}/>
        </div>
      </div>
    </div>
  );
}
