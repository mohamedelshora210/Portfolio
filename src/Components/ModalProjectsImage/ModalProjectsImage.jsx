import React from 'react'

export default function ModalProjectsImage({img}) {
  return (
    <>
    <dialog id="my_modal_3" className="modal cursor-auto">
        <div className="modal-box p-0 md:w-7/7 max-w-3xl">
            <img src={img} alt="" className='w-full '/>
        </div>
        <form method="dialog" className="modal-backdrop">
            <button className=''>close</button>
        </form>
    </dialog>
    </>
  )
}
