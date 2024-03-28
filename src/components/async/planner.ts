import axios from "axios"
import type { MealType, DailyPlanType } from "../planner"

const getDailyPlan = (meals:MealType[]) => {
  const mealsData = meals.map((meal:MealType) => {
    const { id, title } = meal
    return {id, title, image: `https://spoonacular.com/recipeImages/${meal.id}-556x370.jpg`}
  })
  return mealsData
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const generateMealPlan = (data: { meals?: any; nutrients?: any; week?: any }, timeFrame: string) :DailyPlanType[] | null => {
  const mealsPlan:DailyPlanType[] = []
  if (timeFrame == "day") {
    const { meals, nutrients } = data
    mealsPlan.push({meals: getDailyPlan(meals), nutrients})
  } else {
    const { week } = data
    const days = Object.keys(week)
    days.forEach((day:string) => {
      mealsPlan.push({
        meals: getDailyPlan(week[day].meals),
        nutrients: week[day].nutrients
      })
    })
  }
  return mealsPlan
}

export const getMealPlan = async (timeFrame: string, targetCalories: string, diet: string, exclude:string):Promise<DailyPlanType[] | null> => {
  const KEY_1 = import.meta.env.VITE_APP_API_KEY_1
  const KEY_2 = import.meta.env.VITE_APP_API_KEY_2
  const KEY_3 = import.meta.env.VITE_APP_API_KEY_3
  const KEY_4 = import.meta.env.VITE_APP_API_KEY_4
    try {
        const response = await axios(`https://api.spoonacular.com/mealplanner/generate?timeFrame=${timeFrame}&targetCalories=${targetCalories}&diet=${diet}&exclude=${exclude}&apiKey=${KEY_1}`)
        return generateMealPlan(response.data, timeFrame)
      } catch (error:unknown) {
        if (axios.isAxiosError(error)) console.log(`Error: 25% of daily requests made - code: ${error.message}`)
        try {
          const response = await axios(`https://api.spoonacular.com/mealplanner/generate?timeFrame=${timeFrame}&targetCalories=${targetCalories}&diet=${diet}&exclude=${exclude}&apiKey=${KEY_2}`)
          return generateMealPlan(response.data, timeFrame)
        } catch (error) {
          if (axios.isAxiosError(error)) console.log(`Error: 50% of daily requests made - code: ${error.message}`)
          try {
            const response = await axios(`https://api.spoonacular.com/mealplanner/generate?timeFrame=${timeFrame}&targetCalories=${targetCalories}&diet=${diet}&exclude=${exclude}&apiKey=${KEY_3}`)
            return generateMealPlan(response.data, timeFrame)
          } catch (error) {
            if (axios.isAxiosError(error)) console.log(`Error: 75% of daily requests made - code: ${error.message}`)
            try {
              const response = await axios(`https://api.spoonacular.com/mealplanner/generate?timeFrame=${timeFrame}&targetCalories=${targetCalories}&diet=${diet}&exclude=${exclude}&apiKey=${KEY_4}`)
              return generateMealPlan(response.data, timeFrame)
            } catch (error) {
              if (axios.isAxiosError(error)) console.log(`Error: 100% of daily requests made - Come back to visit us tomorrow after the server reset - code:  ${error.message}`)
              return null
            }
          }
        }
      }
}



// const getDailyPlan = (meals:MealType[]) => {
//   const mealsData = meals.map((meal:MealType) => {
//     const { id, title } = meal
//     return {id, title, image: `https://spoonacular.com/recipeImages/${meal.id}-556x370.jpg`}
//   })
//   return mealsData
// }