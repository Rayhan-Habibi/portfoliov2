import React from 'react'
import gsap from 'gsap'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import HomeCards from './webElements/HomeCards'
import Link from 'next/link'


const font = Source_Sans_3({ subsets: ['latin'], weight: '400' })
const headerFont = Playfair_Display({ subsets: ['latin'], weight: '600'})


function InterludeName() {
  return (
    <div className='ml-[25vw] min-h-screen bg-[#F3EEE3] p-10'>
      <section className={`${headerFont.className} mb-20`}>
        <header>
          <h1 className='text-5xl tracking-wider text-center text-[#1F1F29]'>This is Rayhan!</h1>
        </header>
      </section>
      <section className='grid grid-cols-4 gap-5 grid-rows-2 pb-10 mx-10'>
        <header className={`${font.className} col-span-2 row-span-2 text-5xl text-[#1F1F29] pr-10 my-auto`}>
          <h1>
            A Young and talented Full-Stack Developer
          </h1>
          <h1 className='text-2xl mt-3'>
            Create your dream websites or apps with your unique style and personality without any hassle 
          </h1>
          <button className='text-2xl border-2 border-[#1F1F29] px-3 py-1 mt-3 hover:bg-[#E96135] hover:text-white bg-[#E96135]/30 duration-100'><Link href={'/contacts'}>Contact me</Link></button>
        </header>
        <HomeCards text="Projects Finished" measurements="25+"/>
        <HomeCards text="Client Satisfaction" measurements="4.3" />
        <HomeCards text="Years experience" measurements="2"/>
        <HomeCards text="Years experience" measurements="2"/>
      </section>
    </div>
  )
}

export default InterludeName
