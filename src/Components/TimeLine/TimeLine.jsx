import React from 'react'
import { FaBookOpen } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'

export default function TimeLine() {
  return (
    <>
    <div className='text-3xl font-bold text-white dark:text-gray-800 mb-8 flex items-center gap-3'> <FaBookOpen /> <span>Educational Qualifications</span></div>
   <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li>
    <div className="timeline-middle ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-6 w-6 text-blue-500 dark:text-blue-600"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic text-xl">6/2025-12/2025</time>
      <div className="text-xl font-black text-blue-500 capitalize">student & trainee front-end web</div>
      <h3 className='text-lg font-semibold my-1 capitalize'>route software development </h3>
      I am a student and trainee Front-End Web Developer at Route Academy,
       where I am gaining hands-on experience in building modern,
        responsive web applications. Through the training,
         I am developing strong skills in HTML, CSS, Bootstrap, JavaScript, TypeScript, Tailwind CSS, React, Next.js,
          while focusing on clean code, performance, and user-friendly interfaces. This experience is helping me strengthen my practical skills and prepare for real-world front-end development projects.
    </div>
    <hr className='bg-blue-500'/>
  </li>
  <li>
    <hr className='bg-blue-500'/>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-6 w-6 text-blue-500 dark:text-blue-600"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-end md:mb-10">
      <time className="font-mono italic text-xl">2019-2023</time>
      <div className="text-xl font-black text-blue-500 capitalize">Bachelor of Computer Science</div>
        <h3 className='text-lg font-semibold my-1 capitalize'>Mansoura University</h3>
      I earned a Bachelor’s degree in Computer Science from Mansoura University in 2023,
       graduating with a Good overall grade. During my studies, I built a strong foundation in
        programming, software development, and computer science principles, which helped prepare me for 
        practical work in the field and continuous learning in modern technologies.
    </div>
    <hr className='bg-blue-500'/>
  </li>

   <li>
    <hr className='bg-blue-500'/>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-6 w-6 text-blue-500 dark:text-blue-600"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic text-xl">2021-2022</time>
      <div className="text-xl font-black text-blue-500 capitalize">student & trainee front-end web</div>
      <h3 className='text-lg font-semibold my-1 capitalize'>instant software solution</h3>
    </div>
    <hr className='bg-blue-500'/>
  </li>

</ul>
    <div className='text-3xl font-bold text-white dark:text-gray-800 mb-8 flex items-center gap-3 mt-5'> <MdWork /> <span>Working Experience</span></div>
   
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
   <li>
    <hr className='bg-blue-500'/>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-6 w-6 text-blue-500 dark:text-blue-600"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic text-xl">9/2025-Present</time>
      <div className="text-xl font-black text-blue-500 capitalize">Frontend Web Developer</div>
      <h3 className='text-lg font-semibold my-1 capitalize'>freelance</h3>
    </div>
  </li>

</ul>
    </>
  )
}
