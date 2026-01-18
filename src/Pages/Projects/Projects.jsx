import React from 'react'
import HeaderSection from '../../Components/HeaderSection/HeaderSection'
import TapsProjects from '../../Components/TapsProjects/TapsProjects'

export default function Projects() {
  return (
    <>
    <section className='bg-[#10121B] px-1 md:px-0 text-white w-full min-h-screen dark:bg-gray-100 dark:text-gray-900 pb-15'>
        <div className="container mx-auto p-4">

          <HeaderSection title={'projects'}/>
          <TapsProjects/>
        </div>
        </section>
    </>
  )
}
