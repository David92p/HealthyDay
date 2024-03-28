import axios from "axios"
import { SubstituteType } from "../details"

export type IngredientType = {
    id: number
    name: string
    image: string
}

const ingredientsResults = (data: IngredientType[]):IngredientType[] => {
    const ingredients = data.map((ingredient:IngredientType) => { 
        const { id, name, image} = ingredient
        return { id, name,  image: `https://spoonacular.com/cdn/ingredients_100x100/${image}` }
    })
    return ingredients
}

export const getIngredients = async (initial:string):Promise<IngredientType[] | null> => {
    const KEY_1 = import.meta.env.VITE_APP_API_KEY_1
    const KEY_2 = import.meta.env.VITE_APP_API_KEY_2
    const KEY_3 = import.meta.env.VITE_APP_API_KEY_3
    const KEY_4 = import.meta.env.VITE_APP_API_KEY_4
    try {
        const response = await axios(`https://api.spoonacular.com/food/ingredients/search?apiKey=${KEY_1}&query=${initial}&number=100`)
        return ingredientsResults(response.data.results)
    } catch (error) {
        if (axios.isAxiosError(error)) console.log(`Error: 25% of daily requests made - code: ${error.message}`)
        try {
            const response = await axios(`https://api.spoonacular.com/food/ingredients/search?apiKey=${KEY_2}&query=${initial}&number=100`)
            return ingredientsResults(response.data)
        } catch (error) {
            if (axios.isAxiosError(error)) console.log(`Error: 50% of daily requests made - code: ${error.message}`)
            try {
                const response = await axios(`https://api.spoonacular.com/food/ingredients/search?apiKey=${KEY_3}&query=${initial}&number=100`)
                return ingredientsResults(response.data)
            } catch (error) {
                if (axios.isAxiosError(error)) console.log(`Error: 75% of daily requests made - code: ${error.message}`)
                try {
                    const response = await axios(`https://api.spoonacular.com/food/ingredients/search?apiKey=${KEY_4}&query=${initial}&number=100`)
                    return ingredientsResults(response.data)
                } catch (error) {
                    if (axios.isAxiosError(error)) console.log(`Error: 100% of daily requests made - Come back to visit us tomorrow after the server reset - code:  ${error.message}`)
                    return null
                }
            }
        }
    }
}

export const getIngredientSubstitutes = async (id: number):Promise<SubstituteType | null>  => {
	const KEY_1 = import.meta.env.VITE_APP_API_KEY_1
	const KEY_2 = import.meta.env.VITE_APP_API_KEY_2
	const KEY_3 = import.meta.env.VITE_APP_API_KEY_3
	const KEY_4 = import.meta.env.VITE_APP_API_KEY_4
  try {
    const response = await axios(`https://api.spoonacular.com/food/ingredients/${id}/substitutes?apiKey=${KEY_1}`)
    const data:SubstituteType =  response.data.status == "failure" ? {status: "failure"} : {status: "success", message: response.data.message, substitutes: response.data.substitutes}
    return data 
  } catch (error) {
    if (axios.isAxiosError(error)) console.log(`Error: 25% of daily requests made - code: ${error.message}`)
		try {
			const response = await axios(`https://api.spoonacular.com/food/ingredients/${id}/substitutes?apiKey=${KEY_2}`)
			const data:SubstituteType =  response.data.status == "failure" ? {status: "failure"} : {status: "success", message: response.data.message, substitutes: response.data.substitutes}
			return data 
		} catch (error) {
			if (axios.isAxiosError(error)) console.log(`Error: 50% of daily requests made - code: ${error.message}`)
			try {
				const response = await axios(`https://api.spoonacular.com/food/ingredients/${id}/substitutes?apiKey=${KEY_3}`)
				const data:SubstituteType =  response.data.status == "failure" ? {status: "failure"} : {status: "success", message: response.data.message, substitutes: response.data.substitutes}
				return data 
			} catch (error) {
				if (axios.isAxiosError(error)) console.log(`Error: 75% of daily requests made - code: ${error.message}`)
				try {
					const response = await axios(`https://api.spoonacular.com/food/ingredients/${id}/substitutes?apiKey=${KEY_4}`)
					const data:SubstituteType =  response.data.status == "failure" ? {status: "failure"} : {status: "success", message: response.data.message, substitutes: response.data.substitutes}
					return data 
				} catch (error) {
					if (axios.isAxiosError(error)) console.log(`Error: 100% of daily requests made - Come back to visit us tomorrow after the server reset - code:  ${error.message}`)
					return null
				}
			}
		}
  }
}