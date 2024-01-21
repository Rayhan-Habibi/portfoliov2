import React from 'react'
import Placeholder from '../../../public/images/ImagePlaceholder.png'
import Image from 'next/image'


function ProjectCards(props) {
  return (
    <div className='border-2 border-[#1F1F29] shadow-[+10px_10px_0_-2px_rgba(0,0,0,0.5)]'>
      <Image className='h-80 w-full' src={props.image}></Image>
      <div className='p-5 border-t-2 border-[#1F1F29]'>
        <div className='flex justify-between items-center'>
            <h5 className='text-4xl my-3 text-[#1F1F29]'>{props.title}</h5>
            <a target='_blank' href={props.link} className='hover:text-black text-4xl'><iconify-icon icon="ic:twotone-link"></iconify-icon></a>
        </div>
        <div className='flex gap-2 text-[#1F1F29]'>
            {props.tags.map(
                (val) => <p className='border-2 border-[#1F1F29] px-3 py-1 rounded-full'>{val}</p>
            )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCards
