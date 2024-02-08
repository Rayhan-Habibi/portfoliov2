'use client'

import Popup from 'reactjs-popup'
import Image from 'next/image'
import React, {useState} from 'react'
import gsap from 'gsap'

export default function CertificationsList(props) {

  return (

  <Popup
    trigger={
      <button className={`border-2 active:shadow-none duration-200 border-[#1F1F29] p-4 w-full my-2 shadow-[+10px_10px_0_-2px_rgba(0,0,0,0.5)]`}>
          <div className={`flex justify-between items-center`}>
            <div className='text-[#1F1F29] text-xl text-start'>{props.title}</div>
          <div>
            <div className='text-[#6d6d6d]'>{props.date}</div>
            <div className='text-[#6d6d6d]'>Coursera</div>
          </div>
        </div>
      </button>
      } 
    position="center center"
    closeOnDocumentClick
    modal
    nested
    >

    {close => 
      <div id='animated' className='bg-[#F3EEE3] flex flex-col w-full h-[95vh] border-2 border-black relative'>
        <button className=' hover:text-red-600 text-[#1F1F29] right-0 top-0 absolute' onClick={close}>
          <iconify-icon width="30" icon="carbon:close-filled"></iconify-icon>
        </button>
        <Image className=' w-full h-full aspect-auto' src={props.image}></Image>
      </div>
    }
  </Popup>
      
  )
}

