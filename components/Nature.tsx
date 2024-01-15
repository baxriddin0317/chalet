// 'use client'
import Image from 'next/image'
import React from 'react'
import Img1 from "@/public/img-1.jpg"
import { FaPlay } from 'react-icons/fa'

export const Nature = () => {
  return (
    <section className='max-w-main mx-auto py-14 px-4 lg:px-0 md:py-19'>
      <div className='flex flex-col-reverse lg:flex-row items-center justify-between'>
        <div className='w-full flex-1 p-2.5'>
          <div className='relative flex items-center justify-center h-48 md:h-72 lg:h-96 w-full'>
            <Image className='absolute -z-10 inset-0 w-full h-full object-cover' src={Img1} alt='' />
            <button className='bg-transparent flex items-center justify-center w-16 h-16 md:w-20 md:h-20 border-4 border-white rounded-full'>
              <FaPlay className='text-white text-2xl md:text-3xl pl-1' />
            </button>
          </div>
        </div>
        <div className='p-2.5'>
          <div className='lg:max-w-[431px] w-full lg:pl-5'>
            <h2 className='text-2xl md:text-h2 leading-snug font-extrabold text-brand-title mb-4 uppercase lg:pr-10'>RECONNECT WITH <span className='text-brand-blue'>NATURE</span></h2>
            <span className='block w-12 h-1 bg-brand-gray rounded-full mb-5'></span>
            <p className='text-brand-black lg:pr-5 font-light'>
            Spend your vacation at a chalet! These cozy, rustic cabins offer all the peace and quiet you need to relax and recharge. A chalet is the perfect place to escape.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}