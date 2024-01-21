import React from 'react'

function ContactCards(props) {
  return (
    <div className='border-2 border-[#1f1f29] bg-[#E96135]/30 px-10 py-5 hover:bg-[#E96135] hover:text-white duration-100'>
        <div className='text-center'>
            <iconify-icon width="50" height="50" icon={props.icon}></iconify-icon>
        </div>
        <a className='text-center' href={props.link} target='_blank'>
        {props.title}
        </a>
    </div>
  )
}

export default ContactCards
