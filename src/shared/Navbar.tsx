import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

import headerImg from "../assets/global/header.jpg"
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const Navbar:React.FC = () => {
  
  const [menu, setMenu] = useState<boolean>(false)


  return (
    <div className='flex flex-col w-full h-48 sm:h-64 2xl:h-[500px] relative' style={{fontFamily: "Salsa"}}>
      <img src={headerImg} alt="home1" className={`brightness-75 2xl:brightness-50 object-cover h-full w-full ${menu ? "opacity-50" : "opacity-100"}`}/>
      <h1 style={{fontFamily: "Salsa"}} className='text-slate-100 absolute w-full text-end mt-4 pr-4 2xl:pr-16 text-xl sm:text-4xl opacity-100'>Buongiorno Salute</h1>
      <div className='w-full flex justify-between items-end absolute bottom-0 2xl:pb-6'>
        <h1 className='text-mypink text-3xl sm:text-5xl 2xl:text-8xl pl-4 2xl:pl-16 pb-2 sm:pb-14 2xl:pb-4 tracking-wider'>La sana bontà che <br /> puoi trovare.</h1>
        <div onClick={() => setMenu(!menu)} className={`sm:hidden pr-4 pb-2 sm:pb-4`}>
          { menu 
            ? <FontAwesomeIcon icon={faXmark} className='text-slate-100 fa-2x' /> 
            : <FontAwesomeIcon icon={faBars} className='text-slate-100 fa-2x' />
          }
        </div>
        <div className='hidden sm:flex text-slate-100 text-2xl 2xl:text-4xl sm:justify-end gap-5 2xl:gap-8 absolute bottom-0 w-full pr-10 2xl:pr-16 pb-2'>
          <NavLink className='text-slate-100 cursor-pointer 2xl:hover:text-mypink' onClick={() => setMenu(false)} to="/">Home</NavLink>
          <NavLink className='text-slate-100 cursor-pointer 2xl:hover:text-mypink' onClick={() => setMenu(false)} to={''}>Ingredienti</NavLink>
          <NavLink className='text-slate-100 cursor-pointer 2xl:hover:text-mypink' onClick={() => setMenu(false)} to='ricettario'>Ricettario</NavLink>
          <NavLink className='text-slate-100 cursor-pointer 2xl:hover:text-mypink' onClick={() => setMenu(false)} to={''}>Pianifica</NavLink>
          <NavLink className='text-slate-100 cursor-pointer 2xl:hover:text-mypink' onClick={() => setMenu(false)} to='contattaci'>Contattaci</NavLink>
          <NavLink className='text-slate-100 cursor-pointer 2xl:hover:text-mypink' onClick={() => setMenu(false)} to={'about'}>About</NavLink>
        </div>
      </div>
      {
        menu ? (
          <motion.div initial={{x:-300}} animate={{x:0}} transition={{delay: 0, duration: 0.5}} className='flex flex-col justify-center gap-8 py-14 pl-4 w-2/3 bg-mygreen opacity-90 absolute top-0 text-2xl tracking-widest font-bold z-10'>
            <NavLink className='text-slate-100' onClick={() => setMenu(false)} to="/">Home</NavLink>
            <NavLink className='text-slate-100' onClick={() => setMenu(false)} to="ingredienti">Ingredienti</NavLink>
            <NavLink className='text-slate-100' onClick={() => setMenu(false)} to="ricettario">Ricettario</NavLink>
            <NavLink className='text-slate-100' onClick={() => setMenu(false)} to="pianifica">Pianifica</NavLink>
            <NavLink className='text-slate-100' onClick={() => setMenu(false)} to="contattaci">Contattaci</NavLink>
            <NavLink className='text-slate-100' onClick={() => setMenu(false)} to="about">About</NavLink>
          </motion.div> 
        ) : null
      }
    </div>
  )
}

export default Navbar
