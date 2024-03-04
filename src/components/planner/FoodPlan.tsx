import React, { useEffect } from 'react'
import { PlanParametersType } from '.'
import { generateMealPlan } from '../async'

type FoodPlanType = {
  parameters: PlanParametersType
}

const FoodPlan:React.FC<FoodPlanType> = ({parameters}) => {

  useEffect(() => {
    console.log(parameters)
  }, [parameters])

  const cercaDati = (parameters: PlanParametersType) => {
    const { timeFrame, targetCalories, diet, exclude } = parameters
    generateMealPlan(import.meta.env.VITE_APP_API_KEY, timeFrame, targetCalories, diet, exclude)
    .then((res) => {
      console.log(res) 
    })
  }

  return (
    <div className='w-full h-72 bg-red-200'>
      FOODPLAN
      <button onClick={() => cercaDati(parameters)}>CLick</button>
    </div>
  )
}

export default FoodPlan
