import React from 'react'
import { Source_Sans_3, Playfair_Display } from 'next/font/google'
import ContactCards from '../components/webElements/ContactCards'

const font = Source_Sans_3({ subsets: ['latin'], weight: '400' })
const headerFont = Playfair_Display({ subsets: ['latin'], weight: '600'})

function page() {
  return (
    <div className='ml-[25vw] min-h-screen bg-[#F3EEE3] p-10'>
      <section className={`${headerFont.className} mb-20`}>
        <header>
          <h1 className='text-5xl tracking-wider text-center text-[#1F1F29]'>Contacts</h1>
        </header>
      </section>
      <section className='text-2xl flex gap-3 text-[#1F1F29] justify-center flex-wrap'>
        <ContactCards icon="basil:linkedin-solid" title="LinkedIn" link="https://www.linkedin.com/in/rayhan-habibi-587b6b17b"/>
        <ContactCards icon="mingcute:github-line" title="Github" link="https://github.com/Rayhan-Habibi"/>
        <ContactCards icon="akar-icons:whatsapp-fill" title="Whatsapp" link="https://wa.me/6283180412906"/>
        <ContactCards icon="cib:gmail" title="Gmail" link="https://mail.google.com/mail/?view=cm&fs=1&to=nahyaribibah2017@gmail.com"/>
      </section>
    </div>
  )
}

export default page
