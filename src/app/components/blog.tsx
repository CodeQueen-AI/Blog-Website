import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = () => {
  return (
    <div className='mb-[100px] mt-[100px]'>
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-3xl text-[#315F8C]">
          Blogs
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-[#5793cf] inline-flex" />
        </div>
      </div>

      {/* category */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {/* Category1 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative border-4 border-dark-blue h-72 w-72 transition-all duration-300'>
          <Link href={'/Ai'}>
            <Image
              src='/B1.jpg'
              alt='category1'
              width={250}
              height={150}
              className='object-cover w-full h-full'
            />
            <div className='absolute bottom-0 bg-gradient-to-r from-blue-500 via-black to-blue-900 text-center text-white w-full p-4'>
              <h1 className='text-3xl font-extrabold'>AI</h1>
            </div>
          </Link>
        </div>

        {/* Category2 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative border-4 border-dark-blue h-72 w-72 transition-all duration-300'>
          <Link href={'/Ml'}>
            <Image
              src='/B2.avif'
              alt='category2'
              width={300}
              height={200}
              className='object-cover w-full h-full'
            />
            <div className='absolute bottom-0 bg-gradient-to-r from-blue-500 via-black to-blue-900 text-center text-white w-full p-4'>
              <h1 className='text-3xl font-extrabold'>ML</h1>
            </div>
          </Link>
        </div>

        {/* Category3 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative border-4 border-dark-blue h-72 w-72 transition-all duration-300'>
          <Link href={'/Gaming'}>
            <Image
              src='/B3.jpg'
              alt='category3'
              width={230}
              height={150}
              className='object-cover w-full h-full'
            />
            <div className='absolute bottom-0 bg-gradient-to-r from-blue-500 via-black to-blue-900 text-center text-white w-full p-4'>
              <h1 className='text-3xl font-extrabold'>Gaming</h1>
            </div>
          </Link>
        </div>

        {/* Category4 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative border-4 border-dark-blue h-72 w-72 transition-all duration-300'>
          <Link href={'/Cybersecurity'}>
            <Image
              src='/B4.avif'
              alt='category4'
              width={250}
              height={100}
              className='object-cover w-full h-full'
            />
            <div className='absolute bottom-0 bg-gradient-to-r from-blue-500 via-black to-blue-900 text-center text-white w-full p-4'>
              <h1 className='text-3xl font-extrabold'>Cybersecurity</h1>
            </div>
          </Link>
        </div>

        {/* Category5 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative border-4 border-dark-blue h-72 w-72 transition-all duration-300'>
          <Link href={'/Programming-tools'}>
            <Image
              src='/B5.avif'
              alt='category5'
              width={250}
              height={150}
              className='object-cover w-full h-full'
            />
            <div className='absolute bottom-0 bg-gradient-to-r from-blue-500 via-black to-blue-900 text-center text-white w-full p-4'>
              <h1 className='text-3xl font-extrabold'>Programming</h1>
            </div>
          </Link>
        </div>

        {/* Category6 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative border-4 border-dark-blue h-72 w-72 transition-all duration-300'>
          <Link href={'/Robotics'}>
            <Image
              src='/B6.webp'
              alt='category6'
              width={250}
              height={150}
              className='object-cover w-full h-full'
            />
            <div className='absolute bottom-0 bg-gradient-to-r from-blue-500 via-black to-blue-900 text-center text-white w-full p-4'>
              <h1 className='text-3xl font-extrabold'>Robotics</h1>
            </div>
          </Link>
        </div>

        {/* Category7 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative border-4 border-dark-blue h-72 w-72 transition-all duration-300'>
          <Link href={'/Technology'}>
            <Image
              src='/B7.avif'
              alt='category7'
              width={250}
              height={150}
              className='object-cover w-full h-full'
            />
            <div className='absolute bottom-0 bg-gradient-to-r from-blue-500 via-black to-blue-900 text-center text-white w-full p-4'>
              <h1 className='text-3xl font-extrabold'>3D Technology</h1>
            </div>
          </Link>
        </div>

        {/* Category8 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative border-4 border-dark-blue h-72 w-72 transition-all duration-300'>
          <Link href={'/Computing'}>
            <Image
              src='/B8.avif'
              alt='category8'
              width={250}
              height={150}
              className='object-cover w-full h-full'
            />
            <div className='absolute bottom-0 bg-gradient-to-r from-blue-500 via-black to-blue-900 text-center text-white w-full p-4'>
              <h1 className='text-3xl font-extrabold'>Cloud Computing</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default categories;
