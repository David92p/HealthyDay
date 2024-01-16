import React from 'react'

// immagini
import headerImg from "../assets/home/header.jpg";


const Home:React.FC = () => {
  return (
   <div className='flex flex-col'>
      {/* Header */}
      <div className='relative'>
        <img src={headerImg} alt="Header" className='brightness-50'/>
        <h1 style={{fontFamily: "Salsa"}} className='text-white absolute top-0 ml-4 mt-1 text-sm'>Il caffè mattutino</h1>
        <h1 style={{fontFamily: "Salsa"}} className='text-fuchsia-200 text-4xl font-bold tracking-wider ml-4 mb-2 absolute bottom-0'>La sana bontà che puoi avere.</h1>
      </div>
   </div>
  )
}

export { Home }
