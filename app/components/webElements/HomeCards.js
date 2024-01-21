import React from "react"
import { Source_Sans_3 } from "next/font/google"

const font = Source_Sans_3({ subsets: ['latin'], weight: '400' })

function Cards(props){

    const cardStyle = `min-h-full col-span-1 row-span-1 border-2 border-[#22242D] shadow-[+10px_10px_0_-2px_rgba(0,0,0,0.5)] ${props.className}`
  
    return(
      <div className={`${cardStyle}`}>
            <p className={`text-6xl text-center text-[#1F1F29] mb-1 mt-5 ${props.textClass}`} >{props.measurements}</p>
            <p className={`text-[#1F1F29] text-xl font-semibold text-center mb-5 ${props.subtitleClass} ${font.className}`}> 
              {props.text}
            </p>
      </div>
    )
}
 export default Cards;
