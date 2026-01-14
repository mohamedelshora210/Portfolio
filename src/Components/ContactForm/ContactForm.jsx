import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as zod from 'zod'
import emailjs from "emailjs-com";




export default function ContactForm() {

const schema = zod.object({
  name : zod.string().nonempty('Name is required').min(3 , 'your name at least 3 char'),
  email:zod.email('Enter valid email').regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ , 'Enter valid email'),
  subject:zod.string().nonempty('Subject is required'),
  message:zod.string()
})
 

  const {handleSubmit , register , formState:{errors , touchedFields}} = useForm({
    defaultValues : {
      name : '',
      email : '',
      subject : '',
      message : ''
    },
    resolver : zodResolver(schema),
      mode : 'onChange',
      reValidateMode : 'onChange'
    
  })

  

  function onSubmit(data){
    emailjs.send(
        'service_nglzj8r',
        'template_p3jn24p',
        {
          name : data.name,
          email : data.email,
          subject : data.subject,
          message : data.message
        },
        'tIvMRm5ynEfJjmNgy'
    ).then(()=>toast.success('Email sent successfully')).catch(()=>toast.error('Failed to send email'))
    
  }
  return (
    <>  
      <div className='space-y-8'>
        <h2 className='text-4xl '>Get In Touch</h2>

      <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="floating-label bg-transparent">
          <span className={`bg-[#10121B] dark:bg-gray-100 dark:text-gray-900 text-xl font-semibold ${errors.name && touchedFields.name ? 'text-red-500 font-semibold' :''}`}>Enter Your Name <span className='text-red-500 text-xl'>*</span> </span>
          <input type="text" placeholder="Your Name" {...register('name')}  className={`input input-md bg-transparent w-full p-6 border-blue-500/30 focus:border-blue-600 outline-0 dark:placeholder:text-gray-600 ${errors.name && touchedFields.name ? 'border-red-500 focus:border-red-500' : ''}`} />
      </label>
          {errors.name && touchedFields.name && <p className='text-red-500 '>{errors.name?.message}</p>}
        </div>

      <div>

      <label className="floating-label bg-transparent ">
          <span className={`bg-[#10121B] dark:bg-gray-100 dark:text-gray-900 text-xl font-semibold ${errors.email && touchedFields.email ? 'text-red-500 font-semibold' :''}`}>Enter Your Email <span className='text-red-500 text-xl'>*</span> </span>
          <input type="email" placeholder="Your Email" {...register('email')} className={`input input-md bg-transparent w-full p-6 border-blue-500/30 focus:border-blue-600 outline-0 dark:placeholder:text-gray-600 ${errors.email && touchedFields.email ? 'border-red-500 focus:border-red-500' : ''}`} />
      </label>
      {errors.email && touchedFields.email && <p className='text-red-500'>{errors.email?.message}</p>}
      </div>

      <div>
      <label className="floating-label bg-transparent ">
          <span className={`bg-[#10121B] dark:bg-gray-100 dark:text-gray-900 text-xl font-semibold ${errors.subject && touchedFields.subject ? 'text-red-500 font-semibold' :''}`}>Enter Your Subject <span className='text-red-500 text-xl'>*</span> </span>
          <input type="text" placeholder="Subject..." {...register('subject')} className={`input input-md bg-transparent w-full p-6 border-blue-500/30 focus:border-blue-600 outline-0 dark:placeholder:text-gray-600 ${errors.subject && touchedFields.subject ? 'border-red-500 focus:border-red-500' : ''}`} />
      </label>
      {errors.subject && touchedFields.subject && <p className='text-red-500'>{errors.subject?.message}</p>}
      </div>
      <label className="floating-label bg-transparent ">
        <span className='bg-[#10121B]  dark:bg-gray-100 dark:text-gray-900 text-xl font-semibold'>Enter Your Message </span>
        <textarea {...register('message')} className="textarea block bg-transparent w-full  border-blue-500/30 focus:border-blue-600 resize-none outline-0 dark:placeholder:text-gray-600" rows={5} placeholder="Message"></textarea>
      </label>
      <button className='border border-blue-600 px-4 py-3 rounded-xl cursor-pointer font-bold hover:bg-blue-600 duration-300 dark:hover:text-white' type='submit'>Send Mail</button>
     
     
      </form>
      </div>
    </>
  )
}
