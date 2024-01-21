'use client'

import React from 'react'
import Image from 'next/image'
import profilePic from '../../public/images/profilePhoto.jpg'
import Link from 'next/link'
import { Playfair_Display, Roboto, Source_Sans_3 } from 'next/font/google'
import { usePathname } from 'next/navigation'

const roboto = Source_Sans_3({subsets: ['latin'], weight: "300" })
const nameFont = Playfair_Display({subsets: ['latin'], weight: "600"})

export default function NavigationParts() {

    const profilePicStyle = "h-32 w-32 border-4 bg-white border-[#1F1F29]"
    const nameStyle = "font-thin text-5xl text-[#1F1F29] font-medium tracking-wide"
    const linkStyle = "hover:ring-2 my-2 p-3 hover:ring-[#1F1F29] active:scale-95 duration-100"
    const navStyle = `border-r-2 border-[#22242D] flex items-center pt-20 bg-[#F3EEE3] flex-col gap-5 overflow-auto fixed top-0 bottom-0 min-w-[25vw] w-1/4 ${roboto.className}`
    const activeLinkStyle = 'text-[#F5F5FA] bg-[#E96135] ring-2 ring-[#1F1F29] tracking-wider'

    const router = usePathname();

    return (
        <div className={navStyle}>
            <Image 
                src={profilePic}
                className={profilePicStyle}
                />
            <h5 className={`${nameStyle} ${nameFont.className}`}>Rayhan</h5>

            <div className='flex flex-col text-xl w-full p-10 text-[#1F1F29] font-semibold duration-100'>

                <Link className={`${linkStyle} ${router === '/' ? activeLinkStyle : ''} flex items-center`} href={"/"}>
                    <iconify-icon icon="line-md:home-twotone"></iconify-icon>
                    <p className='mx-2'>Home</p>
                </Link>
                <Link className={`${linkStyle} ${router === '/projects'  ? activeLinkStyle : ''} flex items-center`} href={"/projects"}>
                    <iconify-icon icon="line-md:document-code-twotone"></iconify-icon>
                    <p className='mx-2'>Projects</p>
                </Link>
                <Link className={`${linkStyle} ${router === '/certifications'  ? activeLinkStyle : ''} flex items-center`} href={"/certifications"}>
                    <iconify-icon icon="line-md:text-box-twotone-to-text-box-multiple-twotone-transition"></iconify-icon>
                    <p className='mx-2'>Certifications</p>
                </Link>
                <Link className={`${linkStyle} ${router === '/about'  ? activeLinkStyle : ''} flex items-center`} href={"/about"}>
                    <iconify-icon icon="line-md:person-filled"></iconify-icon>
                    <p className='mx-2'>About</p>
                </Link>
                <Link className={`${linkStyle} ${router === '/contacts'  ? activeLinkStyle : ''} flex items-center`} href={"/contacts"}>
                    <iconify-icon icon="line-md:github-twotone"></iconify-icon>
                    <p className='mx-2'>Contacts</p>
                </Link>

            </div>
        </div>
  )
}
