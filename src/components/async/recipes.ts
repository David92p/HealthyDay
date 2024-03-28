import fotoDefault from "../../assets/global/fotodefault.png"
import type { CardType } from ".."
import axios from "axios"

const createCards = (data:CardType[]) => {
    const cards = data.map((recepi:CardType) => {
        const {id, title, image} = recepi
        return {id, title, image: image || fotoDefault}
    })
    return cards
}

// KEY = KEY UNIVOCA - QUANTITY = LUNGHEZZA RISULTATO ARRAY
export const getCardsRecipes = async (quantity: number):Promise<CardType[] | null> => {
    const KEY_1 = import.meta.env.VITE_APP_API_KEY_1
    const KEY_2 = import.meta.env.VITE_APP_API_KEY_2
    const KEY_3 = import.meta.env.VITE_APP_API_KEY_3
    const KEY_4 = import.meta.env.VITE_APP_API_KEY_4

    try {
        const response = await axios(`https://api.spoonacular.com/recipes/random?apiKey=${KEY_1}&number=${quantity}`)
        return createCards(response.data.recipes)
    } catch (error:unknown) {
        if (axios.isAxiosError(error)) console.log(`Error: 25% of daily requests made - code: ${error.message}`)
        try {
            const response = await axios(`https://api.spoonacular.com/recipes/random?apiKey=${KEY_2}&number=${quantity}`)
            return createCards(response.data.recipes)
        } catch (error) {
            if (axios.isAxiosError(error)) console.log(`Error: 50% of daily requests made - code: ${error.message}`)
            try {
                const response = await axios(`https://api.spoonacular.com/recipes/random?apiKey=${KEY_3}&number=${quantity}`)
                return createCards(response.data.recipes)
            } catch (error) {
                if (axios.isAxiosError(error)) console.log(`Error: 75% of daily requests made - code: ${error.message}`)
                try {
                    const response = await axios(`https://api.spoonacular.com/recipes/random?apiKey=${KEY_4}&number=${quantity}`)
                    return createCards(response.data.recipes)
                } catch (error:unknown) {
                    if (axios.isAxiosError(error)) console.log(`Error: 100% of daily requests made - Come back to visit us tomorrow after the server reset - code:  ${error.message}`)
                    return null
                }
            }
        }
    }
}