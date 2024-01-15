import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import Button from './common/Button'

export const Footer = () => {
  return (
    <footer>
      <div className='border-y border-[#EBECEF] py-12'>
        <div className='grid lg:grid-cols-2 gap-5 max-w-main mx-auto px-4 lg:px-0'>
          <div>
            <h4 className='text-2xl font-bold mb-8'>
              Contact Us
            </h4>
            <div className='flex gap-10 mb-5'>
              <div className='flex items-center gap-4'>
                <Link href={'#'}>
                  <FaInstagram className='text-[33px] text-brand-black' />
                </Link>
                <Link href={'#'}>
                  <FaFacebook className='text-[33px] text-brand-black' />
                </Link>
              </div>
              <Link className='font-bold text-xl' href={"tel:%20+00(00)000000000"} >
              +00 (00) 0000 000 00
              </Link>
            </div>
            <p className='text-[#8b8b8b] font-light'>
            st. Example 58, 8726HS Prague, Czech Republic
            </p>
          </div>
          <div>
            <h3 className='text-2xl md:text-3xl font-extrabold text-brand-title mb-5'>
            <span className='text-brand-blue'>Sign up</span> to our newsletter
            </h3>
            <p className='text-[#8b8b8b] font-light mb-8'>
            The decade that brought us Star Trek and Doctor
            </p>
            <div className='flex items-center gap-5'>
            <input className='w-full h-14 border border-brand-black/30 px-4 outline-none' type="text" placeholder='username' />
            <Button className='capitalize font-bold w-full  py-3'>submit</Button>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-main mx-auto flex flex-col gap-5 md:flex-row items-center justify-between py-4'>
        <div className='flex items-center gap-3 md:gap-5'>
          <p className='font-bold '>©2021 the best chalet</p>
          <Link className='font-bold ' href={'#'}>
            terms
          </Link>
          <Link className='font-bold ' href={'#'}>
          privacy policy
          </Link>
        </div>
        <div className='flex items-center gap-3 md:gap-5'>
          <Link className='font-bold ' href={'#'}>
          Prague
          </Link>
          <Link className='font-bold ' href={'#'}>
          English
          </Link>
          <Link className='font-bold ' href={'#'}>
          $ - dollars
          </Link>
        </div>
      </div>
    </footer>
  )
}