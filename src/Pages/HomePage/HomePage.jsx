import React, { useState } from 'react'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import DarkMode from '../../Components/Dark/DarkMode'
import { IoIosMail } from 'react-icons/io'

export default function HomePage() {
  const socialIcon = [
    {icon : <FaGithub/> , link : 'https://github.com/mohamedelshora210' },
    {icon : <FaLinkedinIn/> , link : 'https://www.linkedin.com/in/mohamed-elshora-0b8231350/' },
    {icon : <FaWhatsapp/> , link : 'https://wa.me/201127885852' },
    {icon : <IoIosMail/> , link : `mailto:mohamedelshora210@gmail.com?subject=${encodeURIComponent("Hello!")} &body=${encodeURIComponent("I want to contact you.")}` },
  ]
  return (
    <>
        <div className={`absolute inset-0 bg-center bg-cover origin-center animate-bg bg-[url('./assets/hero.avif')]
          dark:bg-[url('./assets/hero2.avif')]
          `}>
        </div>
          <div className="container mx-auto transition-all h-full duration-300 ease-in-out">
            <div className='relative z-4 flex flex-col h-full items-center justify-center text-center px-5 w-[85%] mx-auto'>
            <h1 className={`text-white dark:text-gray-900 font-bold text-5xl font-serif leading-[1.2]`}>Hi, I am <span className='text-blue-500 whitespace-nowrap '>Mohamed Elshora</span></h1>
            <p className={`text-white dark:text-gray-900  text-2xl my-5`}>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
          
            <div className='flex items-center gap-5 '>
              {socialIcon.map((item , index)=><a key={index} href={item.link} target='_blank' className={`text-gray-300 dark:text-gray-600 
                 text-2xl p-2 border-3 hover:shadow-2xl hover:shadow-blue-500 rounded-full
                  hover:text-blue-500 duration-150 `}>
                  <span className=" block hover:[-webkit-box-reflect:below_8px_linear-gradient(transparent,rgba(0,0,0,0.8))]">
                        {item.icon}
                  </span>
              </a>)}
            </div>
          </div>
          </div>
    
    </>
  )
}
