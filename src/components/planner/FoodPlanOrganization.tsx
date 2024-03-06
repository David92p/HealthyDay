import React, { useState } from 'react'
import { DailyPlanType } from '.'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Carousel } from '../global'
import { Chart } from "../details"

type FoodPlanOrganizationType = {
    //type: "daily" | "weekly"
    dailyList: DailyPlanType[]
}

const FoodPlanOrganization:React.FC<FoodPlanOrganizationType> = ({ dailyList }) => {
	const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
	// const meals = ["Breakfast", "Lunch", "Dinner"]
  const [counterDays, setCounterDays] = useState(0)
	//const [counterMeals, setCounterMeals] = useState(0)

	const toggleCounter = (type: "days" | "meals", typeCounter: "+" | "-") => {
		type == "days" ? (
			typeCounter == "+" 
			? setCounterDays((prev:number) => prev == days.length - 1 ? 0 : prev += 1) 
			: setCounterDays((prev:number) => prev == 0 ? days.length - 1 : prev -= 1) 
		) : (
			console.log("meals")
		)
	}

	console.log(dailyList)
  return (
    <div className='flex flex-col border-4 border-red-600'>
      <span className='text-mypink text-center text-bold leading-relaxed text-4xl sm:text-5xl 2xl:text-7xl'>
				{ dailyList.length > 1 ? "Weekly plan!" : "Daily plan!" }
      </span>
			<div className='flex flex-col'>
				{dailyList.length > 1  && (
					<div className='flex justify-around items-center py-4 border-4 border-blue-600'>
						<button
							onClick={() => toggleCounter("days", "-")}
							className='bg-mypink mix-blend-lighten text-mygreen px-6 py-1 rounded-md text-2xl text-bold'
						>
							<FontAwesomeIcon icon={faGreaterThan} rotation={180} />
						</button>
						<span className='text-slate-100 tracking-wider text-3xl sm:text-3xl leading-relaxed'>
							{ days[counterDays] }
						</span>
						<button
							onClick={() => toggleCounter("days", "+")}
							className='bg-mypink mix-blend-lighten text-mygreen px-6 py-1 rounded-md text-2xl text-bold'
						>
							<FontAwesomeIcon icon={faGreaterThan} />
						</button>
					</div>						
				)}
				{/* <span className='text-mypink text-center text-bold leading-relaxed text-4xl sm:text-5xl 2xl:text-7xl'>
					{ dailyList[counterDays].meals[0].typeOfMeal }
				</span> */}
				<Carousel cards={dailyList[counterDays].meals}/>
				<Chart 
          percentCarbs={dailyList[counterDays].nutrients.carbohydrates} 
          percentFat={dailyList[counterDays].nutrients.fat} 
          percentProtein={dailyList[counterDays].nutrients.protein}
				/>
			</div>
    </div>
  )
}

export default FoodPlanOrganization
