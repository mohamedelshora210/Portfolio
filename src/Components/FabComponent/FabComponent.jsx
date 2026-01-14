import React from 'react'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'

export default function FabComponent() {
     const socialIcon = [
        {icon : <FaGithub/> , link : 'https://github.com/mohamedelshora210' },
        {icon : <FaLinkedinIn/> , link : 'https://www.linkedin.com/in/mohamed-elshora-0b8231350/' },
        {icon : <FaWhatsapp/> , link : 'https://wa.me/201127885852' },
        {icon : <IoIosMail/> , link : `mailto:mohamedelshora210@gmail.com?subject=${encodeURIComponent("Hello!")} &body=${encodeURIComponent("I want to contact you.")}` },
      ]
  return (
    <>
    <div className="fab fab-flower me-2">
  {/* a focusable div with tabIndex is necessary to work on all browsers. role="button" is necessary for accessibility */}
  <div tabIndex={0} role="button" className="btn btn-circle btn-lg dark:bg-gray-600 dark:border-gray-600">
    <svg
      aria-label="New"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="size-6"
    >
      <path
        d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"
      />
    </svg>
  </div>

  {/* Main Action button replaces the original button when FAB is open */}
  <button className="fab-main-action btn btn-circle btn-lg bg-blue-500 border-blue-500 text-white">
    <svg
      aria-label="New post"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="size-6"
    >
      <path
        fillRule="evenodd"
        d="M11.013 2.513a1.75 1.75 0 0 1 2.475 2.474L6.226 12.25a2.751 2.751 0 0 1-.892.596l-2.047.848a.75.75 0 0 1-.98-.98l.848-2.047a2.75 2.75 0 0 1 .596-.892l7.262-7.261Z"
        clipRule="evenodd"
      />
    </svg>
  </button>

  {/* buttons that show up when FAB is open */}
  
    {socialIcon.map((item , index)=><button key={index} className="btn btn-circle btn-lg">
        <a  href={item.link} target='_blank' className={`text-gray-500 dark:text-gray-600 
        text-2xl p-2 border-3 hover:shadow-2xl rounded-full
        hover:text-blue-500 duration-150 `}>
            <span className=" block ">
                 {item.icon}
            </span>
        </a> 
        </button>)}
  
</div>
    </>
  )
}
