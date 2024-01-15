import React from 'react'

const Button = ({children, className}: {children: any, className:string}) => {
  return (
    <button className={`flex items-center justify-center rounded-full bg-brand-blue hover:bg-brand-blue/90 transition-colors text-white ${className}`}>{children}</button>
  )
}

export default Button