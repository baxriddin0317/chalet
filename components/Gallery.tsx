import Image from 'next/image'
import React from 'react'

export const Gallery = () => {
  return (
    <section className='max-w-main mx-auto py-19 px-4 lg:px-0'>
      <div className='grid lg:grid-cols-2 items-start'>
        <h2 className='text-2xl md:text-h2 leading-snug font-extrabold text-brand-title uppercase mb-10'>our <span className='text-brand-blue'>GALLERY</span></h2>
        <p className='font-light'>
        Check out our latest video about some of the best winter vacation destinations! From skiing in the Rockies to soaking up the sun in the Caribbean, we’ve got you covered.
        </p>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mb-7'>
        {[...Array(6)].map((item,idx) => (
          <div key={idx}>
            <Image className='w-full h-full' src={require(`@/public/img-${idx+1}.jpg`)} alt='' />
          </div>
        ))}
      </div>
    </section>
  )
}