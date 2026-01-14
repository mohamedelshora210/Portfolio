import React from 'react'
import HeaderSection from '../../Components/HeaderSection/HeaderSection'
import ContactForm from '../../Components/ContactForm/ContactForm'
import Contactinfo from './Contactinfo'

export default function Contact() {
  return (
    <>
      <section className='bg-[#10121B] text-white w-full min-h-screen dark:bg-gray-100 dark:text-gray-900 pb-15'>
        <div className="container mx-auto p-4">
          <HeaderSection title={'Contact Me'}/>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <ContactForm/>
            <Contactinfo/>
          </div>
        </div>
        </section>
    </>
  )
}
