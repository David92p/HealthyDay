import axios from "axios"
import type { MealType, DailyPlanType } from "../planner"

export const generateMealPlan = async (key: string, timeFrame: string, targetCalories: string, diet: string, exclude:string) => {
    try {
        const response = await axios(`https://api.spoonacular.com/mealplanner/generate?timeFrame=${timeFrame}&targetCalories=${targetCalories}&diet=${diet}&exclude=${exclude}&apiKey=${key}`)
        const data = response.data
        const mealsPlan:DailyPlanType[] = []
        if (timeFrame == "day") {
          const { meals, nutrients } = data
          mealsPlan.push({meals: getDailyPlan(meals), nutrients})
        } else if (timeFrame == "week"){
          const { week } = data
          const days = Object.keys(week)
          days.forEach((day:string) => {
            mealsPlan.push({
              meals: getDailyPlan(week[day].meals),
              nutrients: week[day].nutrients
            })
          })
        } else {
          console.log("ERRORE")
        }
        return mealsPlan
      } catch (error) {
        console.log(error)
        return null
      }
}



const getDailyPlan = (meals:MealType[]) => {
  const mealsData = meals.map((meal:MealType) => {
    const { id, title } = meal
    return {id, title, image: `https://spoonacular.com/recipeImages/${meal.id}-556x370.jpg`}
  })
  return mealsData
}