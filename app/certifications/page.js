import React from 'react'
import { Source_Sans_3, Playfair_Display } from 'next/font/google'
import CertificationsList from '../components/webElements/CertificationsList'

const font = Source_Sans_3({ subsets: ['latin'], weight: '400' })
const headerFont = Playfair_Display({ subsets: ['latin'], weight: '600'})

function page() {
  return (
    <div className='ml-[25vw] min-h-screen bg-[#F3EEE3] p-10'>
      <section className={`${headerFont.className} mb-20`}>
        <header>
          <h1 className='text-5xl tracking-wider text-center text-[#1F1F29]'>Certifications</h1>
        </header>
      </section>
      <section className=''>
        <CertificationsList title="Advanced React" date="29/06/2023"/>
        <CertificationsList title="React JS Basics" date="29/06/2023"/>
        <CertificationsList title="Programming with JavaScript" date="29/06/2023"/>
        <CertificationsList title="HTML and CSS in Depth" date="29/06/2023"/>
        <CertificationsList title="Intoduction to Front-End Development" date="29/06/2023"/>
      </section>
    </div>
  )
}

export default page
