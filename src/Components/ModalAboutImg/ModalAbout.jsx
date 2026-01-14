import React from 'react'
import { FaSearchPlus } from 'react-icons/fa'
import img from '../../assets/me.jpeg'


export default function ModalAbout() {
  return (
    <>
            <FaSearchPlus onClick={()=>document.getElementById('my_modal_2').showModal()} className='absolute z-10 scale-0 group-hover:scale-100 duration-300 text-blue-500/50 cursor-pointer text-7xl top-[50%] left-[50%] -translate-1/2' />
            <dialog id="my_modal_2" className="modal">
            <div className="modal-box p-0 md:w-3/7 max-w-2xl">
                <img src={img} alt="" className='w-full '/>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
            </dialog>
    </>
  )
}
