import React from 'react'
import { Source_Sans_3, Playfair_Display } from 'next/font/google'
import CertificationsList from '../components/webElements/CertificationsList'
import frontEnd from "../../public/images/certifications/FrontEndC.jpg"
import javaScript from "../../public/images/certifications/JavaScriptC.jpg"
import html from "../../public/images/certifications/HTMLandCSSC.jpg"
import reactBasics from "../../public/images/certifications/ReactBasicsC.jpg"
import reactAdv from "../../public/images/certifications/AdvancedReactC.jpg"


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
        <CertificationsList image={reactAdv} title="Advanced React" date="29/06/2023"/>
        <CertificationsList image={reactBasics} title="React JS Basics" date="04/05/2023"/>
        <CertificationsList image={javaScript} title="Programming with JavaScript" date="13/11/2022"/>
        <CertificationsList image={html} title="HTML and CSS in Depth" date="26/05/2023"/>
        <CertificationsList image={frontEnd} title="Intoduction to Front-End Development" date="26/08/2022"/>
      </section>
    </div>
  )
}

export default page
