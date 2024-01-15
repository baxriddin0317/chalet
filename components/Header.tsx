'use client'
import { menuItems } from '@/lib/data';
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { FaBars, FaInstagram, FaTwitter } from 'react-icons/fa';

export const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef<any>();

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    if (ref.current) {
      setHeight(isActive ? ref.current?.clientHeight : 0);
    }
  }, [isActive]);

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header className={`py-1 fixed z-50 w-full ${navbar ? "bg-white/95 z-50 animated text-brand-black top-0" : "bg-transparent text-white"} transition-all duration-500 ease-linear`}>
      <div className='grid grid-cols-2 lg:grid-cols-3 items-center max-w-main mx-auto px-2.5'>
        <div className='flex items-center gap-4'>
          <button onClick={() => setIsActive(!isActive)} className='lg:hidden text-2xl'>
            <FaBars />
          </button>
          {/* logo */}
          <Link className='text-[26px] uppercase font-extrabold p-2.5 pl-0' href={'#'}>
            chalet
          </Link>
        </div>
        {/* menu */}
        <div className='hidden lg:flex items-center justify-center p-2.5'>
          {menuItems.map((item,idx) => (
            <div className='relative group' key={idx}>
              <Link className='capitalize text-lg font-semibold p-4' href={item.href}>{item.name}</Link>
              <div className='absolute hidden group-hover:flex flex-col bg-white py-2.5 w-[220px] top-full translate-y-2 left-0' key={idx}>
                {item.items.map((link,key) => (
                  <Link className='capitalize text-xs font-semibold h-9 px-5 py-2.5 text-brand-black' href={link.href} key={key}>{link.name}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* left links */}
        <div className='flex items-center justify-end gap-8 p-2.5 pr-0'>
          <div className='hidden lg:flex items-center gap-2.5'>
            <Link className='flex items-center justify-center w-9 h-9' href={'#'}>
              <FaTwitter />
            </Link>
            <Link className='flex items-center justify-center w-9 h-9' href={'#'}>
              <FaInstagram />
            </Link>
          </div>
          <Link className={`${navbar ? 'bg-brand-black text-white' : 'bg-white text-brand-black'} text-center font-bold rounded-full py-3 px-8`} href={'#'} target='_blank'>
            Buy now $69
          </Link>
        </div>
      </div>

      <div
        className="relative z-50 lg:hidden overflow-scroll transition-all ease-in-out duration-500 mobile"
        style={{ height: `${isActive ? `${height}px` : "0px"}` }}>
        <div
          ref={ref}
          className={`${
            navbar ? "text-brand-black" : "text-brand-black bg-white"
          } flex flex-col font-semibold text-xs uppercase whitespace-nowrap gap-y-5 px-4 pt-5 nav-link pb-3`}>
          {menuItems.map((item,idx) => (
            <Accordion item={item} key={idx} />
          ))}
        </div>
      </div>
    </header>
  )
}

const Accordion = ({item}:any) => {
  const [accordionHeight, setAccordionHeight] = useState(0);
  const [open, setOpen] = useState(false);

  const ref = useRef<any>();

  useEffect(() => {
    if (ref.current) {
      setAccordionHeight(open ? ref.current?.clientHeight : 0);
    }
  }, [open]);

  return (
    <div className=''>
      <Link onClick={() => setOpen(!open)} className='capitalize text-lg font-semibold p-4' href={item.href}>{item.name}</Link>
      <div className='overflow-hidden'  style={{ height: `${open ? `${accordionHeight}px` : "0px"}` }}>
        <div className='flex flex-col items-start' ref={ref}>
          {item.items.map((link:any,key:any) => (
            <Link className='capitalize text-xs font-semibold h-9 px-5 py-2.5 text-brand-black' href={link.href} key={key}>{link.name}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}