import React from 'react'

export default function CertificationsList(props) {
  return (
      <button className='border-2 border-[#1F1F29] p-4 w-full flex justify-between items-center my-5 shadow-[+10px_10px_0_-2px_rgba(0,0,0,0.5)]'>
          <div className='text-[#1F1F29] text-xl text-start'>{props.title}</div>
          <div>
            <div className='text-[#6d6d6d]'>{props.date}</div>
            <div className='text-[#6d6d6d]'>Coursera</div>
          </div>
      </button>
  )
}
