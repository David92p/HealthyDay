import React from 'react'

import first from "../../assets/recipes/first.jpg"
import { useNavigate } from 'react-router-dom'

const MainRecipes:React.FC = () => {
	const navigate = useNavigate()
  return (
		<>
			<div className='flex flex-col sm:flex-row h-auto w-full bg-mygreen pt-4 sm:py-14 px-4 sm:px-6 2xl:px-10'>
				<div className='sm:w-2/5'>
					<p className='text-mypink text-3xl sm:text-5xl 2xl:text-7xl tracking-wider'>Inizia da quì a costruire la tua salute!</p>
					<p className='text-slate-100 tracking-wider text-xl sm:text-3xl mt-4'>
						Consulta le migliori ricette e pianifica la tua giornata 
						con i nostri piatti.<br/>Colazione, pranzo o cena!<br/> Cerca tutto quello che il tuo corpo richiede!
					</p>
				</div>
				<div className='sm:w-3/5 my-auto mt-8 sm:mt-0 sm:pl-6'>
					<img src={first} alt="first photo" className='h-full 2xl:h-[700px] w-full object-cover brightness-100 2xl:brightness-75'/>
				</div>
			</div>
			<span className='text-center text-mypink text-3xl sm:text-5xl 2xl:text-7xl py-4 sm:py-10'>
				Consulta le nostre sezioni dedicate<br/> alla tua giornata
			</span>
			<div className="flex justify-around w-full my-4 2xl:mb-10 text-xl sm:text-2xl 2xl:text-3xl tracking-wider">
				<button className='bg-mypink h-10 sm:w-40 px-2' onClick={() => navigate("/ricettario/colazione")}>Colazione</button>
				<button className='bg-mypink h-10 sm:w-40 px-4' onClick={() => navigate("/ricettario/pranzo")}>Pranzo</button>
				<button className='bg-mypink h-10 sm:w-40 px-6' onClick={() => navigate("/ricettario/cena")}>Cena</button>			
			</div>
		</>
  )
}

export default MainRecipes
