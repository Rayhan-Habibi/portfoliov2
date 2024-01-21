import React from 'react'
import { Source_Sans_3, Playfair_Display } from 'next/font/google'
import ProjectCards from '../components/webElements/ProjectCards'


const font = Source_Sans_3({ subsets: ['latin'], weight: '400' })
const headerFont = Playfair_Display({ subsets: ['latin'], weight: '600'})

function page() {
  return (
    <div className='ml-[25vw] min-h-screen bg-[#F3EEE3] p-10'>
      <section className={`${headerFont.className} mb-20`}>
        <header>
          <h1 className='text-5xl tracking-wider text-center text-[#1F1F29]'>Latest Projects</h1>
        </header>
      </section>
      <section className={`${font.className} grid grid-cols-2 gap-7`}>
        <ProjectCards link="https://rayhan-habibi.github.io/Deliciao/" tags={["Tailwind", "Coffeshop", "GSAP"]} title={"Deliciao"} />
        <ProjectCards link="https://rayhan-habibi.github.io/Smart_Diction/"  tags={["Tailwind", "CSS"]} title={"Smart-Diction"} />
        <ProjectCards link="https://rayhan-habibi.github.io/Todolist/" tags={["Tailwind", "CSS"]} title={"Todo List"} />
        <ProjectCards link="https://rayhan-habibi.github.io/Hair-Day/" tags={["Bootstrap 5", "CSS"]} title={"Hair Day"} />
      </section>
    </div>
  )
}

export default page
