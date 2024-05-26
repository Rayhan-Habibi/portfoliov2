import React from 'react'

function ContactCards(props) {
  return (
    <a href={props.link} target='_blank' className='border-2 min-w-[15rem] flex flex-col border-[#1f1f29] bg-[#E96135]/30 px-10 py-5 hover:bg-[#E96135] hover:text-white duration-100'>
        <div className='text-center'>
            <iconify-icon width="50" height="50" icon={props.icon}></iconify-icon>
        </div>
        <p className='text-center'  >
        {props.title}
        </p>
    </a>
  )
}

export default ContactCards
