import React, { useState } from 'react'
import img1 from '../../assets/e-commerce.png'
import img2 from '../../assets/social-app.png'
import img3 from '../../assets/activities.png'
import img4 from '../../assets/bookmark.png'
import img5 from '../../assets/danial.png'
import img6 from '../../assets/mealify.png'
import img7 from '../../assets/portfolio-bootstrap.png'
import img8 from '../../assets/quets.png'
import img9 from '../../assets/smartLogin.png'
import img10 from '../../assets/start-react.png'
import img11 from '../../assets/weather.png'
import { FaLink, FaSearchPlus } from 'react-icons/fa'
import ModalProjectsImage from '../ModalProjectsImage/ModalProjectsImage'
export default function TapsProjects() {
    const [modalImage, setModalImage] = useState(null)

    const images = [
        {tec:'react' , image : img1 , link:'https://e-commerce-iota-opal-39.vercel.app/' , title : 'E-commerce'},
        {tec:'react' , image : img2 , link:'https://social-app-lime-eight.vercel.app/' , title : 'Social App'},
        {tec:'react' , image : img10 , link:'https://first-react-project-kappa-jet.vercel.app/' , title : 'First Project React'},
        {tec:'js' , image : img11 , link:'https://mohamedelshora210.github.io/weather-app/' , title : 'Weather App'},
        {tec:'js' , image : img4 , link:'https://mohamedelshora210.github.io/bookmark-crud/' , title : 'BookMark'},
        {tec:'js' , image : img8 , link:'https://mohamedelshora210.github.io/quotesApp/' , title : 'Quets'},
        {tec:'js' , image : img9 , link:'https://mohamedelshora210.github.io/smart-login/' , title : 'Smart Login'},
        {tec:'bs' , image : img5 , link:'https://mohamedelshora210.github.io/daniels-portfolio/' , title : 'Daniels Portfolio'},
        {tec:'bs' , image : img7 , link:'https://mohamedelshora210.github.io/Bootstrap-Portfolio/' , title : 'Bootstrap Portfolio'},
        {tec:'bs' , image : img6 , link:'https://mohamedelshora210.github.io/Malify/' , title : 'Mealify'},
        {tec:'bs' , image : img3 , link:'https://mohamedelshora210.github.io/activites/' , title : 'Students Activities'},
    ]
     
    const perPage= 4;
    const [page, setPage] = useState(1)

    const paginatedImages = images.slice((page - 1) * perPage , page * perPage )
    const totalPages = Math.ceil(images.length / perPage)

  return (
    <>
    <div className="tabs tabs-border  space-y-4 ">
  <input type="radio" name="my_tabs_2" className="tab hover:text-white font-semibold text-gray-500 checked:text-white dark:hover:text-gray-800  dark:checked:text-gray-800 " aria-label="All Projects" defaultChecked/>
  <div className="tab-content  p-10">
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-5'>
       {paginatedImages.map((img , index)=> <div key={index} className='relative p-1 border-3 rounded-2xl border-gray-400 dark:border-gray-800 overflow-hidden group hover:border-blue-600 hover:shadow hover:shadow-blue-500 duration-150'>
            <img src={img.image} alt={img.tec} className='rounded-2xl group-hover:scale-105 hover:rotate-[0.3deg] duration-300 ' />
        <div className='flex flex-col items-center justify-center absolute top-[125%] left-0 right-[125%] bottom-0 group-hover:top-0 group-hover:right-0 bg-black/60 duration-300 '>
            <h3 className='text-3xl text-yellow-500 font-bold mb-4'>{img.title}</h3>
            <div className='flex items-center gap-5'>
                <a href={img.link} target='_blank'>
                    <FaLink className='text-3xl text-blue-400 cursor-pointer hover:text-blue-500 hover:scale-115 duration-300' />          
                 </a>
                <button 
                    onClick={()=>{
                    setModalImage(img.image) ;
                    document.getElementById('my_modal_3').showModal();}}>
                     <FaSearchPlus  className='text-3xl text-blue-400 cursor-pointer hover:text-blue-500 hover:scale-115 duration-300'/>
                </button> 
            </div>
        </div>
        </div>)}
    </div>

    <div className="join block text-center">
        {Array.from({length : totalPages} , (_,i)=> (
                <button onClick={()=>setPage( i + 1)} key={i} 
                className={`px-4 py-2 rounded-lg border border-gray-400 dark:border-gray-700
                    ${page === i + 1 ? 'bg-blue-500 text-white' : ' text-gray-700'}
                    hover:bg-blue-600 hover:text-white duration-150 cursor-pointer me-2`}>
                    {i + 1}
                </button>
        ))}
    </div>

  </div>

  <input type="radio" name="my_tabs_2" className="tab hover:text-white font-semibold text-gray-500 checked:text-white  dark:hover:text-gray-800  dark:checked:text-gray-800" aria-label="React"  />
  <div className="tab-content  p-10">

    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-5'>
       { images.filter((image)=>image.tec=='react').map((img , index)=> <div key={index} className='relative p-1 border-3 rounded-2xl border-gray-400 dark:border-gray-800 overflow-hidden group hover:border-blue-600 hover:shadow hover:shadow-blue-500 duration-150'>
            <img src={img.image} alt={img.tec} className='rounded-2xl group-hover:scale-105 hover:rotate-[0.3deg] duration-300 ' />
        <div className='flex flex-col items-center justify-center absolute top-[125%] left-0 right-[125%] bottom-0 group-hover:top-0 group-hover:right-0 bg-black/60 duration-300 '>
            <h3 className='text-3xl text-yellow-500 font-bold mb-4'>{img.title}</h3>
            <div className='flex items-center gap-5'>
                <a href={img.link} target='_blank'>
                    <FaLink className='text-3xl text-blue-400 cursor-pointer hover:text-blue-500 hover:scale-115 duration-300' />          
                 </a>
                <button 
                    onClick={()=>{
                    setModalImage(img.image) ;
                    document.getElementById('my_modal_3').showModal();}}>
                     <FaSearchPlus  className='text-3xl text-blue-400 cursor-pointer hover:text-blue-500 hover:scale-115 duration-300'/>
                </button> 
            </div>
        </div>
        </div>)}
    </div>
  </div>

  <input type="radio" name="my_tabs_2" className="tab hover:text-white font-semibold text-gray-500 checked:text-white  dark:hover:text-gray-800  dark:checked:text-gray-800" aria-label="Java Script" />
  <div className="tab-content p-10">
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-5'>
       { images.filter((image)=>image.tec=='js').map((img , index)=> <div key={index} className='relative p-1 border-3 rounded-2xl border-gray-400 dark:border-gray-800 overflow-hidden group hover:border-blue-600 hover:shadow hover:shadow-blue-500 duration-150'>
            <img src={img.image} alt={img.tec} className='rounded-2xl group-hover:scale-105 hover:rotate-[0.3deg] duration-300 ' />
        <div className='flex flex-col items-center justify-center absolute top-[125%] left-0 right-[125%] bottom-0 group-hover:top-0 group-hover:right-0 bg-black/60 duration-300 '>
            <h3 className='text-3xl text-yellow-500 font-bold mb-4'>{img.title}</h3>
            <div className='flex items-center gap-5'>
                <a href={img.link} target='_blank'>
                    <FaLink className='text-3xl text-blue-400 cursor-pointer hover:text-blue-500 hover:scale-115 duration-300' />          
                 </a>
                <button 
                    onClick={()=>{
                    setModalImage(img.image) ;
                    document.getElementById('my_modal_3').showModal();}}>
                     <FaSearchPlus  className='text-3xl text-blue-400 cursor-pointer hover:text-blue-500 hover:scale-115 duration-300'/>
                </button> 
            </div>
        </div>
        </div>)}
    </div>
  </div>

  <input type="radio" name="my_tabs_2" className="tab hover:text-white font-semibold text-gray-500 checked:text-white  dark:hover:text-gray-800  dark:checked:text-gray-800" aria-label="Bootstrap" />
  <div className="tab-content p-10">
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-5'>
       { images.filter((image)=>image.tec=='bs').map((img , index)=> <div key={index} className='relative p-1 border-3 rounded-2xl border-gray-400 dark:border-gray-800 overflow-hidden group hover:border-blue-600 hover:shadow hover:shadow-blue-500 duration-150'>
            <img src={img.image} alt={img.tec} className='rounded-2xl group-hover:scale-105 hover:rotate-[0.3deg] duration-300 ' />
        <div className='flex flex-col items-center justify-center absolute top-[125%] left-0 right-[125%] bottom-0 group-hover:top-0 group-hover:right-0 bg-black/60 duration-300 '>
            <h3 className='text-3xl text-yellow-500 font-bold mb-4'>{img.title}</h3>
            <div className='flex items-center gap-5'>
                <a href={img.link} target='_blank'>
                    <FaLink className='text-3xl text-blue-400 cursor-pointer hover:text-blue-500 hover:scale-115 duration-300' />          
                 </a>
                <button 
                    onClick={()=>{
                    setModalImage(img.image) ;
                    document.getElementById('my_modal_3').showModal();}}>
                     <FaSearchPlus  className='text-3xl text-blue-400 cursor-pointer hover:text-blue-500 hover:scale-115 duration-300'/>
                </button> 
            </div>
        </div>
        </div>)}
    </div>
  </div>

</div>

<ModalProjectsImage img={modalImage}/>
    </>
  )
}
