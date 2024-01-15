import React from 'react'
import { FaBed, FaCertificate, FaPersonBooth, FaSkating, FaSkiing, FaSleigh, FaSnowflake, FaTicketAlt } from 'react-icons/fa'

const data = [
  {
    icon: <FaBed />,
    title: "Ski resort lodging",
    text: "Skiers can also find ski resort lodging that ranges from camping to full-service hotels."
  },
  {
    icon: <FaPersonBooth />,
    title: "Ski equipment rentals",
    text: "Most ski resorts offer ski equipment rentals, which can be found at the ski resort or in the town or village near the ski resort."
  },
  {
    icon: <FaCertificate />,
    title: "Ski school",
    text: "Many ski resorts offer ski school, which can be found at the ski resort or in the town or village near the ski resort."
  },
  {
    icon: <FaTicketAlt />,
    title: "Lift tickets",
    text: "Lift tickets are typically available at the ski resort, or in the town or village near the ski resort."
  },
  {
    icon: <FaSkating />,
    title: "Ice skating",
    text: "Ice skating is a fun way to get some exercise and enjoy the winter scenery."
  },
  {
    icon: <FaSleigh />,
    title: "Sledding",
    text: "Sledding is a classic winter activity that the whole family can enjoy."
  },
  {
    icon: <FaSnowflake />,
    title: "Snowshoeing",
    text: "Snowshoeing is a great way to explore the winter landscape."
  },
  {
    icon: <FaSkiing />,
    title: "Sledding",
    text: "Cross-country skiing is a great way to get some exercise and enjoy the winter scenery."
  },
]

export const Services = () => {
  return (
    <section className='bg-brand-secondary py-14 ld:py-19 lg:pb-40'>
      <div className='max-w-main mx-auto px-4 lg:px-0'>
        <h2 className='text-2xl md:text-h2 leading-snug font-extrabold text-brand-title uppercase mb-9'>VACATION <span className='text-brand-blue'>SERVICES</span></h2>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {data.map((item,idx) => (
            <div key={idx}>
              <span className='block text-5xl mb-4 text-brand-blue'>{item.icon}</span>
              <h3 className='text-lg font-bold text-brand-black mb-2.5'>
              {item.title}
              </h3>
              <p className='text-sm font-light'>
              {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}