import React from 'react'

import first from "../../assets/recipes/first.jpg"
import { useNavigate } from 'react-router-dom'

const MainRecipes:React.FC = () => {
	const navigate = useNavigate()
  return (
		<div className='flex flex-col h-auto w-full bg-pink-100' style={{fontFamily: "Salsa"}}>
			<div className='flex flex-col sm:flex-row sm:py-6'>
				<div className='pt-4 px-4 sm:p-6'>
					<p className='text-mygreen text-3xl sm:text-5xl 2xl:text-7xl tracking-wider'>Inizia da quì a costruire la tua salute!</p>
					<p className='text-mygreen tracking-wider text-xl sm:text-3xl mt-4'>
						Consulta le migliori ricette e pianifica la tua giornata 
						con i nostri piatti.<br/>Guarda i valori dei tuoi ingredienti preferiti e costruisci la tua giornata!<br/> Cerca tutto quello che il tuo corpo richiede!
					</p>
				</div>
			<div className='p-4 sm:p-6 2xl:w-3/5'>
				<img src={first} alt="first photo" className='h-full w-full object-cover brightness-100 2xl:brightness-75'/>
			</div>
			</div>
			<div className='flex flex-col bg-mygreen'>
				<span className='text-center text-mypink text-3xl sm:text-5xl 2xl:text-7xl mx-auto mt-4'>
					Consulta le nostre sezioni dedicate
				</span>
				<div className='flex justify-around 2xl:justify-center 2xl:gap-40 items-center w-full h-24 sm:h-36 2xl:h-44'>
					<button className='bg-mypink h-10 sm:w-40 px-2' onClick={() => navigate("/ricettario/ingredienti")}>Ingredienti</button>
					<button className='bg-mypink h-10 sm:w-40 px-4' onClick={() => navigate("/ricettario/pianifica")}>Pianifica</button>	
				</div>
			</div>
		</div>
  )
}

export default MainRecipes
