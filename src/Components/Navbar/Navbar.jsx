import React, { useState } from 'react'
import img from '../../assets/me.jpeg'
import { Link, NavLink } from 'react-router-dom';


export default function Navbar() {
 const [open, setOpen] = useState(false);
  const menuItem = ['Home' , 'About' , 'Resume' , 'Projects' , 'Contact']
  return (
    <>

      <div
        className={`fixed top-0 left-0 h-full w-64  p-6 flex flex-col items-center
                    transform transition-all duration-300 ease-in-out bg-[#191D2B] dark:bg-gray-300
                    ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:w-80 z-50`}
      >
        
          <Link to={'/'}>
        <img
          src={img}
          alt="Profile"
          className={`rounded-full w-50 h-50 md:w-60 md:h-60  hover:scale-101 border-7
           border-gray-400 dark:border-gray-700 dark:hover:border-gray-800 hover:border-gray-500 duration-200
            hover:shadow-blue-600 hover:shadow-lg object-cover mb-5`}
        />
        </Link>
        <hr className="my-5 border-gray-400 dark:border-gray-500 w-60" />

        <ul className="w-full flex flex-col items-center gap-2">
          {menuItem.map((item) => (
            <li
              key={item}
              className="w-full rounded-md text-gray-400 dark:text-gray-800 duration-200 font-semibold hover:text-blue-600 menuitem"
            >
              <NavLink
                to={`${item == `Home` ? `/` : `/${item.toLowerCase()}`}`}
                className="block py-3 text-xl text-center bg-transparent"
                onClick={() => setOpen(false)}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`md:hidden fixed top-15 left-0 z-50 p-3 text-black bg-blue-400
           rounded-r-md shadow-lg cursor-pointer duration-300 linear 
            ${open ? 'left-64':''}` }
        onClick={() => setOpen(!open)}
      >
        {open ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
 :
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
}
      </div>
    </>
  )
}
