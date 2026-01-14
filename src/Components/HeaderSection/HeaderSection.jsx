import React from 'react'

export default function HeaderSection({title}) {
  return (
    <>
     <div className="relative py-22 mt-5  overflow-hidden">
  <h2 className="relative text-5xl font-bold text-white dark:text-gray-900 z-10 uppercase
    after:content-[''] after:absolute after:top-[130%] after:left-0 after:block after:w-32 after:h-1.5 after:rounded-2xl after:bg-blue-400/50
    before:content-[''] before:absolute before:top-[130%] before:left-0 before:block before:w-12 before:h-1.5 before:rounded-2xl before:bg-blue-600
  ">
    {title}
  </h2>

  <div className="absolute top-[52%] left-0 w-full h-20 overflow-hidden z-0">
    <h3
      className="text-8xl font-bold text-white dark:text-gray-900 opacity-20 uppercase"
      style={{
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
      }}
    >
      {title}
    </h3>
  </div>
</div>
    </>
  )
}
