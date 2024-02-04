import axios from "axios"

export const getSimilarRecipe = async (key:number, id:number) => {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/similar?apiKey=${key}`)

        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}   