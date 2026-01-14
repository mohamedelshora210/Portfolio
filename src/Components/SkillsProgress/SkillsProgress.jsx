import React, { useEffect, useState } from 'react'

export default function SkillsProgress() {
     const [animation, setAnimation] = useState(false)
     const skills = [
        {label : 'html5' , progress:'95'},
        {label : 'css' , progress:'95'},
        {label : 'bootstrap' , progress:'90'},
        {label : 'tailwind.css' , progress:'90'},
        {label : 'javascript' , progress:'85'},
        {label : 'typescript' , progress:'80'},
        {label : 'react.js' , progress:'85'},
        {label : 'next.js' , progress:'85'},
     ]
      useEffect(()=>{
        setTimeout(()=>{
          setAnimation(true)
        },200)
      },[])
  return (
    <> 
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {skills.map((skill , index)=><div key={index} className='mt-4 '>
        <p className='mb-2 text-2xl uppercase tracking-wide dark:teaxt-gray-900'>{skill.label}</p>
        <div className='flex gap-2 items-center'>
          <p className='text-2xl text-gray-400 dark:text-gray-700'>{skill.progress}%</p>
          <div className='w-full h-3 bg-gray-300/50 dark:bg-gray-400/50 rounded-full '>
          <div 
          className='h-3 bg-blue-600 rounded-full transition-all duration-1000 ease-out '
          style={{width : animation ? `${skill.progress}%` : '0'}}
          />
        </div>
        </div>

      </div>)}
      </div>
    </>
  )
}
