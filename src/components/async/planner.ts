import axios from "axios"

export const generateMealPlan = async (key: string, timeFrame:string, targetCalories: string, diet: string) => {
    try {
        const response = await axios(`https://api.spoonacular.com/mealplanner/generate?timeFrame=${timeFrame}&targetCalories=${targetCalories}&diet=${diet}&apiKey=${key}`)
        const data = response.data
        return data 
      } catch (error) {
        console.log(error)
        return null
      }
}