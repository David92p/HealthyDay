import axios from "axios"

export type IngredientType = {
    id: number
    name: string
    image: string
}

export const getIngredients = async (key:string, initial:string):Promise<IngredientType[] | null> => {
    try {
        const response = await axios(`https://api.spoonacular.com/food/ingredients/search?apiKey=${key}&query=${initial}&number=100`)
        const data = response.data.results.map((ingredient:IngredientType) => { 
            const { id, name, image} = ingredient
            return { id, name,  image: `https://spoonacular.com/cdn/ingredients_100x100/${image}` }
        })
        return data
    } catch (error) {
        console.log(error)
        return null
    }
}