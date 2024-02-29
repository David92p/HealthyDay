import axios from "axios"

export const generateMealPlan = async (key: string, timeFrame: string) => {
    try {
        const response = await axios(`https://api.spoonacular.com/mealplanner/generate?apiKey=${key}&timeFrame=${timeFrame}`)
        const data = response.data
        return data 
      } catch (error) {
        console.log(error)
        return null
      }
}