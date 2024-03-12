import first from "../../assets/ingredients/first.jpg"

const MainIngredients:React.FC = () => {
  return (
    <div className='flex flex-col h-auto w-full bg-pink-100' style={{fontFamily: "Salsa"}}>
			<div className='flex flex-col sm:flex-row sm:py-6 2xl:h-[600px]'>
				<div className='pt-4 px-4 sm:p-6 sm:w-3/5'>
					<p className='text-mygreen text-3xl sm:text-5xl 2xl:text-7xl tracking-wider'>Research your ingredients and choose simplicity!</p>
					<p className='text-mygreen tracking-wider text-xl sm:text-3xl mt-4 sm:mt-10 leading-normal '>
						Select your ingredients starting here, listen to your body and choose the best with our help!
						We strive every day to provide you with every detail of our ingredients, to bring the taste of health to your tables.
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
