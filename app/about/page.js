import React from 'react'
import { Source_Sans_3, Playfair_Display } from 'next/font/google'

const font = Source_Sans_3({ subsets: ['latin'], weight: '400' })
const headerFont = Playfair_Display({ subsets: ['latin'], weight: '600'})

function page() {
  return (
    <div className='ml-[25vw] min-h-screen bg-[#F3EEE3] p-10'>
      <section className={`${headerFont.className} mb-20`}>
        <header>
          <h1 className='text-5xl tracking-wider text-center text-[#1F1F29]'>About</h1>
        </header>
      </section>
      <section className='px-10'>
        <p className='text-[#1F1F29] text-2xl text-center'> <span className='text-4xl font-semibold'>Hi there! I'm Rayhan,</span> 
        <br /><br /> a dedicated and innovative full stack developer with a passion for crafting seamless digital experiences. With expertise in 
        <span className='font-semibold bg-[#fe8a63] px-1'>React JS, NextJS, MongoDB, Redux, Tailwind CSS, Daisy UI, and TypeScript,</span>  
        I bring a versatile skill set to every project I tackle. <br/><br/>

        My specialty lies in my relentless <span className='font-semibold bg-[#fe8a63] px-1'>work ethic, clever problem-solving abilities, and meticulous attention to clean coding habits.</span> I believe that clean code is not just a practice, 
        but an art form that ensures maintainability and scalability, 
        making life easier for every developer who comes across it.<br/><br/>
        
        When I'm not immersed in code, I enjoy exploring the latest tech trends, contributing to open-source projects, 
        and continuously learning to stay ahead in this fast-paced industry. 
        My friends and colleagues often describe me as a hard worker span who is always ready to dive into a challenge and find innovative solutions.<br/><br/>

        If you're <span className='font-semibold bg-[#fe8a63] px-1 text-2xl'>looking for a reliable, skilled, and passionate developer</span>  to bring your ideas to life or to enhance your team, I'd love to hear from you. 
        Let's make technology work for you and achieve your goals together!</p>
      </section>
    </div>
  )
}

export default page
