import React, { useEffect, useState } from 'react'
import { Carousel, Error, Loading } from '../global'
import { Chart } from "../details"
import type { PlanParametersType } from '.'
import { generateMealPlan } from '../async'

import img from "../../assets/planner/planner6.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'

type FoodPlanType = {
  parameters: PlanParametersType
  toggleSequence: (nextSequence: "start") => void
}

export type MealType = {
  id: number
  title: string
  image: string
}

type NutrientsType = {
  calories: number
  carbohydrates: number
  fat: number
  protein: number
}

export type DailyPlanType = {
  meals: MealType[],
  nutrients: NutrientsType
}

const FoodPlan:React.FC<FoodPlanType> = ({parameters, toggleSequence}) => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  const [isLoading, setIsLoading] = useState<boolean>(false)
	const [isError, setIsError] = useState<boolean>(false)
  const [planning, setPlanning] = useState<DailyPlanType[] | null>(null)
  const [counterDays, setCounterDays] = useState(0)

  useEffect(() => {
    setIsLoading(true)
    const {timeFrame, targetCalories, diet, exclude} = parameters
    generateMealPlan(import.meta.env.VITE_APP_API_KEY, timeFrame, targetCalories, diet, exclude)
    .then((planner:DailyPlanType[] | null) => {
      setIsLoading(false)
      planner ? setPlanning(planner) : setIsError(true)
    })
  }, [parameters])

  const toggleCounter = (typeCounter: "+" | "-") => typeCounter == "+" 
  ? setCounterDays((prev:number) => prev == days.length - 1 ? 0 : prev += 1) 
  : setCounterDays((prev:number) => prev == 0 ? days.length - 1 : prev -= 1) 

  return (
    <div className={`w-full h-auto relative bg-neutral-800`}>
      <img src={img} alt="img" className="h-full w-full object-fill absolute mix-blend-soft-light"/>
      <div className="flex flex-col px-4 sm:px-8 2xl:px-10 py-6">
        <span className='text-mypink text-bold text-3xl sm:text-5xl 2xl:text-7xl tracking-wider'>
          { parameters.timeFrame == "day" ? "Daily nutrition plan!" : "Weekly nutrition plan!"}
        </span>
				<span className='text-slate-100 w-[90%] tracking-wider text-xl sm:text-3xl leading-relaxed my-4 sm:my-10'>
          It is all ready!<br/>
          Here are three main dishes that you can distribute between breakfast, lunch and dinner.<br/>
          We have tried to offer you the best recipes according to your eating habits and getting as close as possible to the daily calories you require!
				</span>
        {planning && planning.length > 1  && (
					<div className='flex justify-around 2xl:justify-center 2xl:gap-24 items-center mb-4 sm:mb-10'>
						<button
							onClick={() => toggleCounter("-")}
							className='bg-mypink mix-blend-lighten text-mygreen px-6 py-1 rounded-md text-2xl text-bold'
						>
							<FontAwesomeIcon icon={faGreaterThan} rotation={180} />
						</button>
						<span className='text-slate-100 tracking-wider text-3xl sm:text-3xl leading-relaxed'>
							{ days[counterDays] }
						</span>
						<button
							onClick={() => toggleCounter("+")}
							className='bg-mypink mix-blend-lighten text-mygreen px-6 py-1 rounded-md text-2xl text-bold'
						>
							<FontAwesomeIcon icon={faGreaterThan} />
						</button>
					</div>						
				)}
        {
          isError 
          ? <Error />
          : (
            isLoading 
              ? <Loading />
              : planning && <Carousel cards={planning[counterDays].meals}/>
            )
        }
        <div className='flex flex-col 2xl:flex-row'>
          <div className='flex flex-col 2xl:w-1/2 '>
            <span className='text-slate-100 tracking-wider text-xl sm:text-3xl leading-relaxed mt-4 sm:my-10'>
              This table will help you analyze the daily nutritional values you will take.<br/>
              The values are calculated based on the recipe data provided.<br/>
              Any changes you make to the suggested recipe will change the values provided here.<br/>
              We have tried to provide you with a plan that is as close as possible to the nutritional needs you need.<br/>
              We recommend that you always follow a healthy and balanced diet suited to your needs and consult a nutritionist.<br/>
              Remember, don't forget the importance of taste and health.
            </span>
            <div className='flex flex-col justify-center items-center gap-4 my-8'>
              <span className='text-mypink text-bold text-4xl sm:text-5xl 2xl:text-7xl'>Total calories</span>
              <span className='text-slate-100 tracking-wider text-2xl sm:text-3xl leading-relaxed '>{planning && `${planning[counterDays].nutrients.calories} kcal`}</span>
            </div>
          </div>
          <div className='2xl:w-1/2'>
            {
              planning && <Chart 
                type={"grams"}
                percentCarbs={planning[counterDays].nutrients.carbohydrates} 
                percentFats={planning[counterDays].nutrients.fat} 
                percentProteins={planning[counterDays].nutrients.protein}
              />
            }
          </div>
        </div>
        <div className='flex justify-center items-center h-full mt-8'>
          <button 
            onClick={() => toggleSequence("start")}
            className='bg-mypink mix-blend-lighten text-mygreen z-40 w-44 h-14 py-auto rounded-md text-2xl text-bold'>
              Restart!
          </button>
        </div>
      </div>
    </div>
  )
}

export default FoodPlan
