import Image from 'next/image';

const BlogLayout = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 

        {/* First Section*/}
        <div className="bg-white shadow-lg overflow-hidden w-full h-auto md:w-[400px] md:h-[480px]">
          <Image
            src="/T1.avif"
            alt="Article 1"
            width={500}
            height={300}
            className="w-full h-auto"
          />
          <div className="p-3">
            <p className="text-gray-700 mb-4 text-base md:text-lg">
              Technology empowers us to dream bigger and achieve more. With each innovation, we unlock new possibilities, solve problems, and break boundaries. It fuels creativity, enhances productivity, and connects the world. Embrace the future, because with technology, anything is possible! The power of progress is in your hands. Every challenge becomes an opportunity, and every idea can change the world
            </p>
          </div>
        </div>

        {/* Second Section*/}
        <div className="flex flex-col gap-4">
          <div className="bg-white shadow-md overflow-hidden flex flex-col md:flex-row w-full h-auto md:h-[150px]">
            <div className="w-full md:w-1/3">
              <Image
                src="/T2.avif"
                alt="Article 1"
                width={150}
                height={150}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-2/3 p-3">
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                The future of technology lies in the fusion of artificial intelligence and human creativity, where machines enhance our abilities and unlock new possibilities.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-md overflow-hidden flex flex-col md:flex-row w-full h-auto md:h-[150px]">
            <div className="w-full md:w-1/3">
              <Image
                src="/T3.avif"
                alt="Article 2"
                width={150}
                height={150}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-2/3 p-3">
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                Tech advancements are making the impossible possible, from space exploration to healthcare breakthroughs and improving lives across the globe.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-md overflow-hidden flex flex-col md:flex-row w-full h-auto md:h-[150px]">
            <div className="w-full md:w-1/3">
              <Image
                src="/T4.avif"
                alt="Article 3"
                width={150}
                height={150}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-2/3 p-3">
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                Technology is reshaping the way we live, work, and communicate, driving innovation and connecting people across the globe in ways never imagined before.
              </p>
            </div>
          </div>
        </div>

        {/* Third Section */}
        <div className="flex flex-col gap-4">
          <div className="bg-white shadow-md overflow-hidden w-full h-auto md:h-[480px] p-4">
            <div className="text-center px-6 sm:px-12 lg:px-24">
              <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl text-blue-500">
                Advantage Of Technology
              </h1>
            <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-blue-800 inline-flex" />
        </div>
        </div>
            <div className="space-y-4">
              <div>
                <p className="text-gray-700 text-sm md:text-base">Innovation in tech continues to push the boundaries of what’s possible.</p>
                <hr className="border-gray-300 mt-2" />
              </div>
              <div>
                <p className="text-gray-700 text-sm md:text-base">Every new tech invention opens doors to endless opportunities and challenges.</p>
                <hr className="border-gray-300 mt-2" />
              </div>
              <div>
                <p className="text-gray-700 text-sm md:text-base">Technology is the driving force behind global connectivity and collaboration.</p>
                <hr className="border-gray-300 mt-2" />
              </div>
              <div>
                <p className="text-gray-700 text-sm md:text-base">Digital transformation is key to business success in the modern world.</p>
                <hr className="border-gray-300 mt-2" />
              </div>
              <div>
                <p className="text-gray-700 text-sm md:text-base">With technology, data has become one of the most valuable resources in the world.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
