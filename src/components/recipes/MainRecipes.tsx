import React from 'react'

import first from "../../assets/recipes/first.jpg"

const MainRecipes:React.FC = () => {
  return (
		<div className='flex flex-col h-auto w-full bg-pink-100' style={{fontFamily: "Salsa"}}>
			<div className='flex flex-col sm:flex-row sm:py-6'>
				<div className='pt-4 px-4 sm:p-6'>
					<p className='text-mygreen text-3xl sm:text-5xl 2xl:text-7xl tracking-wider'>Inizia da quì a costruire la tua salute!</p>
					<p className='text-mygreen tracking-wider text-xl sm:text-3xl mt-4 leading-normal'>
						Consulta le migliori ricette e pianifica la tua giornata 
						con i nostri piatti.<br/>Guarda i valori dei tuoi ingredienti preferiti e costruisci la tua giornata!<br/> Cerca tutto quello che il tuo corpo richiede!
					</p>
				</div>
			<div className='p-4 sm:p-6 2xl:w-3/5'>
				<img src={first} alt="first photo" className='h-full w-full object-cover brightness-100 2xl:brightness-75'/>
			</div>
			</div>
		</div>
  )
}

export default MainRecipes
