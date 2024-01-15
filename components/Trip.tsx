import Image from 'next/image'
import React from 'react'

const data = [
  {
    name: "Skiing/Snowboarding",
    price: "$50/ea"
  },
  {
    name: "Hiking",
    price: "$20/ea"
  },
  {
    name: "Hot Tubbing",
    price: "$15/ea"
  },
  {
    name: "Movie Night",
    price: "$50/ea"
  },
  {
    name: "Board Games",
    price: "$20/ea"
  },
  {
    name: "Poker Night",
    price: "15 min"
  }
]

export const Trip = () => {
  return (
    <section className='relative'>
      <div className='grid lg:grid-cols-2'>
        <div className='lg:-translate-y-19 w-full h-full'>
          <Image className='w-full object-cover' src={require('@/public/img-9.jpg')} alt='' />
        </div>
        <div className='flex-1 py-14 md:pt-19 px-12'>
          <h2 className='text-2xl md:text-h2 leading-snug font-extrabold text-brand-title uppercase mb-9'>
            LOOKING FOR A <span className='text-brand-blue'>FUN-FILLED</span> SKI TRIP?
          </h2>
          {data.map((item,idx) => (
            <div key={idx} className='flex items-center justify-between border-b border-dashed border-brand-black/20 my-2.5 p-2.5 md:px-7'>
              <h3 className='md:text-lg font-bold text-brand-black'>
              {item.name}
              </h3>
              <p className='md:text-lg text-black/60 font-light'>
              {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}