import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

export default function Contactinfo() {
  return (
    <>
        <div className='space-y-8'> 
            <div className=' flex gap-5 items-center p-5 py-7 group bg-gray-800/20 rounded-xl'>
            <div className="tooltip" data-tip="whatsapp">
            <FaPhoneAlt className='text-5xl group-hover:scale-115 group-hover:rotate-[5deg] duration-150 border-2 p-2 rounded-full border-blue-600' />
              </div>  
                <span className='flex flex-col text-xl space-y-2 font-semibold'>
                    <a href="https://wa.me/201127885852" target='_blank' className='hover:text-blue-600 duration-150'> 01127885852</a>
                    <a href="https://wa.me/201127885852" target='_blank' className='hover:text-blue-600 duration-150'> 01211097606</a>
                </span>
            </div>

            
            <div className=' flex gap-5 items-center p-5 py-7 group bg-gray-800/20 rounded-xl '>
            <div className="tooltip" data-tip="gmail">
            <IoIosMail className='text-5xl group-hover:scale-115 group-hover:rotate-[5deg] duration-150 border-2 p-2 rounded-full border-blue-600' />
            </div>
                <span className='flex flex-col text-xl space-y-2 font-semibold '>
                    <a href={`mailto:mohamedelshora210@gmail.com?subject=${encodeURIComponent("Hello!")} &body=${encodeURIComponent("I want to contact you.")}`} target='_blank' className='hover:text-blue-600 duration-150'> mohamedelshora210</a>
                </span>
            </div>

            <div className=' flex gap-5 items-center p-5 py-7 group bg-gray-800/20 rounded-xl'>
           <div className="tooltip" data-tip="location">
            <FaLocationDot  className='text-5xl group-hover:scale-115 group-hover:rotate-[5deg] duration-150 border-2 p-2 rounded-full border-blue-600' />
            </div>
                <span className='flex flex-col text-xl space-y-2 font-semibold'>
                    El-Mahalla El-Kubra, Egypt
                </span>
            </div>
        </div>
        
    </>
  )
}
