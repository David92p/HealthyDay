import React from 'react'

import first from "../../assets/recipes/first.jpg"

const MainRecipes:React.FC = () => {
  return (
		<div className='flex flex-col h-auto w-full bg-pink-100' style={{fontFamily: "Salsa"}}>
			<div className='flex flex-col sm:flex-row sm:py-6'>
				<div className='pt-4 px-4 sm:p-6'>
					<p className='text-mygreen text-3xl sm:text-5xl 2xl:text-7xl tracking-wider'>Start building your health here!</p>
					<p className='text-mygreen tracking-wider text-xl sm:text-3xl mt-4 sm:mt-10 leading-normal '>
					Consult the best recipes and plan your day
					with our dishes.<br/>See the values of your favorite ingredients and build your day!<br/> Look for everything your body requires!
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
