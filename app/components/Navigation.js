'use client'
import React, { useRef } from 'react'
import NavigationParts from './NavigationParts'
import { Quicksand } from 'next/font/google'


const quicksand = Quicksand({subsets: ['latin']})

function Navigation() {

  
 
  return (
    <nav className='overflow-hidden'>
      <NavigationParts />
    </nav>
  )
}

export default Navigation
