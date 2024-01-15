'use client'
import Image from 'next/image'
import React from 'react'
import Button from './common/Button'

export const Hero = () => {
  const handleSubmit = (e:any) => {
    e.preventDefault();
  }
  return (
    <section className='relative lg:max-h-[800px] h-full lg:h-screen pt-6'>
      <Image className='absolute inset-0 w-full h-full -z-20 object-cover' src={require('@/public/hero.jpg')} alt='' />
      <div className='absolute bg-hero-gradient opacity-60 bg-transparent inset-0 w-full h-full -z-10'></div>
      <div className='max-w-main mx-auto h-full flex flex-col lg:flex-row items-center justify-between text-white gap-10 py-10 md:py-16 lg:py-0 px-4 lg:px-0'>
        <div className='mx-1 flex-1 lg:max-w-[500px] pt-14 md:pt-0 md:p-[70px] lg:p-2.5'>
          <h1 className='text-white text-4xl md:text-h1 font-bold uppercase mb-2.5'>
          LOOKING FOR A WINTER ESCAPE?
          </h1>
          <p className='text-lg text-white'>
          Our slopes are the perfect place to practice your skills or take on a new challenge. Plus, our charming town is the perfect place to relax after a long day on the slopes.
          </p>
        </div>
        <div className='p-9 lg:p-12 max-w-[464px] w-full rounded-3xl bg-white text-brand-black'>
          <h2 className='text-xl md:text-[26px] font-black mb-5 uppercase'>
            find your stay
          </h2>
          <p className='text-sm md:text-base lg:pr-4 mb-9'>
          This is the perfect place to relax and enjoy the company of friends and family.
          </p>
          <form onSubmit={handleSubmit}>
            <input className='w-full h-14 border border-brand-black/30 px-4 outline-none mb-4' type="text" placeholder='username' />
            <input className='w-full h-14 border border-brand-black/30 px-4 outline-none mb-4' type="password" placeholder='passwod' />
            <div className='grid md:grid-cols-2 items-center gap-4 md:gap-2.5'>
              <div>
                <label className='my-1.5 capitalize text-brand-gray text-sm' htmlFor="adults">adults</label>
                <select className='w-full h-14 border border-brand-black/30 px-4 outline-none mb-4'>
                  <option value="1">1</option>
                  <option value="3">3</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div>
                <label className='my-1.5 capitalize text-brand-gray text-sm' htmlFor="adults">Children</label>
                <select className='w-full h-14 border border-brand-black/30 px-4 outline-none mb-4'>
                  <option value="1">1</option>
                  <option value="3">3</option>
                  <option value="2">2</option>
                </select>
              </div>
            </div>
            <Button className='uppercase font-bold w-full mt-5 py-4 h-14'>search</Button>
          </form>
        </div>
      </div>
    </section>
  )
}