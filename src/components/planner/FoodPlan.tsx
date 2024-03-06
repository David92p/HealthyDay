import React, { useEffect, useState } from 'react'
import { Carousel, Error, Loading } from '../global'
import { PlanParametersType } from '.'
import { generateMealPlan } from '../async'

import img from "../../assets/planner/planner-6.jpg"

type FoodPlanType = {
  parameters: PlanParametersType
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

const FoodPlan:React.FC<FoodPlanType> = ({parameters}) => {

  const [isLoading, setIsLoading] = useState<boolean>(false)
	const [isError, setIsError] = useState<boolean>(false)
  const [planning, setPlanning] = useState<DailyPlanType[] | null>(null)

  useEffect(() => {
    setIsLoading(true)
    const {timeFrame, targetCalories, diet, exclude} = parameters
    generateMealPlan(import.meta.env.VITE_APP_API_KEY, timeFrame, targetCalories, diet, exclude)
    .then((planner:DailyPlanType[] | null) => {
      setIsLoading(false)
      planner ? setPlanning(planner) : setIsError(true)
    })
  }, [parameters])

  useEffect(() => {
    console.log(planning)
  }, [planning])

  // useEffect(() => {
  //   console.log(parameters)
  // }, [])
  // const cercaDati = (parameters: PlanParametersType) => {
  //   const { timeFrame, targetCalories, diet, exclude } = parameters
  //   generateMealPlan(import.meta.env.VITE_APP_API_KEY, timeFrame, targetCalories, diet, exclude)
  //   .then((res) => {
  //     console.log(res) 
  //   })
  // }

  return (
    <div className={`w-full h-auto relative bg-neutral-800`}>
      <img src={img} alt="img" className="h-full w-full object-fill absolute mix-blend-soft-light rotate-180"/>
      {
        isError 
        ? <Error />
        : (
          isLoading 
          ? <Loading />
          : (
            planning && planning.length == 1 
            ? (
              <div className='flex justify-center h-auto'>
                {
                  <Carousel cards = {planning[0].meals}/>
                }
              </div>
            )
            : (
              <div>planning settimanale</div>
            )
          )
        )
      }
    </div>
  )
}

export default FoodPlan
