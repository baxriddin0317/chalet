import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './common/Button'

export const Family = () => {
  return (
    <section className='max-w-main mx-auto py-19 px-4 lg:px-0'>
      <div className='flex flex-col md:flex-row gap-5 md:items-center justify-between'>
        <h2 className='text-2xl text-left md:text-h2 leading-snug font-extrabold text-brand-title uppercase'>FOCUSED ON <span className='text-brand-blue'>family</span></h2>
        <Link href={'#'} className='w-full md:w-auto ml-auto border md:border-2 bg-transparent hover:bg-brand-blue text-brand-blue hover:text-white hover:underline font-bold text-lg border-brand-blue rounded-full text-center py-3 px-6 transition-colors'>
          All rooms
        </Link>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mb-7'>
        {[...Array(5)].map((item,idx) => (
          <div key={idx}>
            <div className='mb-5 h-[281px] relative'>
              <Image className='absolute inset-0 object-cover -z-10 w-full h-full' src={require(`@/public/img-${idx+1}.jpg`)} alt='' />
              <p className='absolute flex px-5 py-4 text-white bottom-0'>
                <span className='text-xl'>$299</span>
                <span>/night</span>
              </p>
              {idx===2 && (
                <span className='absolute top-4 right-5 bg-white text-brand-black text-sm font-bold py-2.5 px-6 capitalize'>update</span>
              )}
            </div>
            <h3 className='text-lg font-bold text-brand-black'>
            Minimalist
            </h3>
            <p className='my-4'>
            This room is perfect for the traveler who wants to feel like they’re living in a different time. It comes with a queen-sized bed.
            </p>
            <Button className='w-full lg:w-1/2 py-3 text-sm font-medium'>
              Check Availability
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}