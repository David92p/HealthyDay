import first from "../../assets/ingredients/first.jpg"

const MainIngredients:React.FC = () => {
  return (
    <div className='flex flex-col h-auto w-full bg-pink-100' style={{fontFamily: "Salsa"}}>
			<div className='flex flex-col sm:flex-row sm:py-6 2xl:h-[600px]'>
				<div className='pt-4 px-4 sm:p-6 sm:w-3/5'>
					<p className='text-mygreen text-3xl sm:text-5xl 2xl:text-7xl tracking-wider'>Cerca i tuoi ingredienti e scegli la semplicità!</p>
					<p className='text-mygreen tracking-wider text-xl sm:text-3xl mt-4 leading-normal'>
						Seleziona i tuoi ingredienti iniziando da quì, ascolta il tuo corpo e scegli il meglio con il nostro aiuto!
						Ci impegnamo ogni giorno a fornirvi ogni dettaglio dei nostri ingredienti, per portare sulle vostre tavole il gusto della salute.
					</p>
				</div>
				<div className='p-4 sm:p-6 sm:w-2/5'>
					<img src={first} alt="first photo" className='h-full w-full object-cover brightness-100 2xl:brightness-75'/>
				</div>
			</div>
		</div>
  )
}

export default MainIngredients
