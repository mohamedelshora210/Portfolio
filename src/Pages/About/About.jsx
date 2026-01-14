import React from 'react'
import HeaderSection from '../../Components/HeaderSection/HeaderSection'
import img from '../../assets/me.jpeg'
import ModalAbout from '../../Components/ModalAboutImg/ModalAbout'
import cv from '../../../public/cv.pdf'
import { FaCode } from 'react-icons/fa'
import { HiOutlinePaintBrush } from 'react-icons/hi2'
import SwiperComponent from '../../Components/Swiper/SwiperComponent'


export default function About() {
  const personalInfo = [
  { label: "Full Name", value: "Mohamed Elshora" },
  { label: "Age", value: "24" },
  { label: "Nationality", value: "Egyptian" },
  { label: "Languages", value: "Arabic, Intermediate level in English" },
  { label: "Address", value: "El-Mahalla El-Kubra, Egypt" },
  { label: "Freelance", value: "Available" },
];

const cardInfo = [
  {icon : HiOutlinePaintBrush  , title : 'Web Design'},
  {icon : FaCode , title : 'Web Development'},
]
  return (
    <>
      <section className='bg-[#10121B] text-white w-full min-h-screen dark:bg-gray-100 dark:text-gray-900 pb-15'>
        <div className="container mx-auto p-4">
            <HeaderSection title={'about me'}/>
            {/* information */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5 '>
            <div className='relative  h-100 overflow-hidden group mb-4
            before:content-[""] before:absolute before:w-5 before:h-70 before:bg-blue-600/60
            after:content-[""] after:absolute after:right-0 after:bottom-0 after:w-5 after:h-70 after:bg-blue-600/60'>
              <img src={img} alt="Me" className='w-full object-cover '/>
              <ModalAbout/>
            </div>
            <div>
              <h2 className='md:text-4xl text-3xl font-semibold -translate-y-5'>I am <span className='text-blue-500'>Mohamed Elshora</span></h2>
              <p className='md:text-xl text-lg text-gray-400 dark:text-gray-700 leading-relaxed mb-5'>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
              <ul className='space-y-2'>
                {personalInfo.map((info , index)=> <li key={index} className='flex text-xl text-gray-400 dark:text-gray-900 '>
                  <span className='font-semibold w-30'>{info.label}</span> <span className='pr-2'>:</span> <span>{info.value}</span>
                </li>)}
              </ul>
              <button 
              className="btn mt-3 relative rounded-none  bg-blue-600 border-none shadow-none text-white tracking-widest text-lg font-normal px-6 py-6 uppercase
                after:content-[''] after:absolute after:w-0 after:bottom-0 after:h-0.5 after:bg-white after:left-0 hover:after:w-full  after:duration-500
              "><a href={cv} target='_blank'>Download CV</a></button>
            </div>
          </div>   
        {/*end info*/}
        <HeaderSection title={'services'}/>
        {/* services */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5'>
          {cardInfo.map((card , index)=><div key={index} className='bg-[#191D2B] dark:bg-gray-300 p-5 border border-t-5 border-gray-400 dark:border-gray-500 hover:border-t-blue-600 duration-350'>
            <card.icon className='text-5xl text-blue-600'/>
            <h3 className='text-3xl my-5 font-semibold relative 
            after:content-[""] after:w-[10%] after:h-0.5 after:rounded-2xl after:bg-gray-600 dark:after:bg-gray-400 after:absolute after:left-0 after:bottom-0 pb-5'>Web Design</h3>
            <p className='text-xl leading-relaxed text-gray-400 dark:text-gray-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.</p>
          </div>)}
        </div>
        {/*end services */}
        <HeaderSection title={'reviews'}/>
        <SwiperComponent/>
        </div>

      </section>
    </>
  )
}
