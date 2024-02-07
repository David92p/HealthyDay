import axios from "axios"
import fotoDefault from "../../assets/global/fotodefault.png"
import type { CardType } from ".."

// KEY = KEY UNIVOCA - QUANTITY = LUNGHEZZA RISULTATO ARRAY
export const getCardsRecipes = async (key:string, quantity: number):Promise<CardType[] | null>=> {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${key}&number=${quantity}`)
        //console.log(response.data)
        const data = response.data.recipes.map((recepi:CardType) => {
            const {id, title, image} = recepi
            return {id, title, image: image || fotoDefault}
        })
        return data
        // return data
    } catch (error) {
        return null
    } 
}