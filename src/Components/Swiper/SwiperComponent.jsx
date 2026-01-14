import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import { FreeMode , Autoplay } from 'swiper/modules';
export default function SwiperComponent() {
  const data = [
    {
      content : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.' ,
      title : 'Burdette Turner',
      job : 'Web Developer, Abc Company'
    },
    {
      content : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.' ,
      title : 'Susan Yost',
      job : 'Client'
    },
    {
      content : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' ,
      title : 'Irving Feeney',
      job : 'Fiverr Client'
    },
  ]
  return (
    <>
    <Swiper
    
        slidesPerView={2}
        spaceBetween={20}
        freeMode={true}
        loop={true}  
        grabCursor={true}
        breakpoints={{
            0: { slidesPerView: 1 , },   
            1280: { slidesPerView: 2 , spaceBetween:20},
          }}
          autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}

        modules={[FreeMode , Autoplay]}
        className="mySwiper mt-5 "
      >
        {data.map((dataInfo , index)=><SwiperSlide key={index}>
          <div className="card xl:w-135 lg:w-155 w-125 md:w-100 h-35 md:h-38 lg:h-35 mb-5 card-lg shadow-sm bg-[#191D2B] dark:bg-gray-300 border-l-5 border-l-gray-600 dark:border-l-gray-400 rounded-none overflow-visible
          after:content-[''] after:w-10 after:h-10 after:absolute 
          after:border-transparent after:border-t-[#191D2B] dark:after:border-t-gray-300  after:-rotate-90 after:border-20 after:-bottom-5 after:left-8 ">
            <div className="card-body">
              <p className='text-gray-400 dark:text-gray-900 text-xl'>{dataInfo.content}</p>
              <div className="justify-end card-actions">
              </div>
            </div>
           </div>
            <h2 className='text-3xl mb-2'>{dataInfo.title}</h2>
            <p className='text-xl text-gray-400 dark:text-gray-900'>{dataInfo.job}</p>
        </SwiperSlide>)}

      </Swiper>
    </>
  )
}
