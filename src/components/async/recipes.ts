import axios from "axios"
import fotoDefault from "../../assets/global/fotodefault.png"
import type { CardType } from ".."

// KEY = KEY UNIVOCA - QUANTITY = LUNGHEZZA RISULTATO ARRAY
export const getCardsRecipes = async (key:number, quantity: number):Promise<CardType[] | null>=> {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${key}&number=${quantity}&include-tags=vegetarian`)
        const data = response.data.recipes.map((recepi:CardType) => {
            const {id, title, image} = recepi
            return {id, title, image: image || fotoDefault}
        })
        //console.log(data)
        return data
        // return data
    } catch (error) {
        return null
    } 
}