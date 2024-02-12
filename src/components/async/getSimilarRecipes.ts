import axios from "axios"
import { CardType } from ".."
import fotoDefault from "../../assets/global/fotodefault.png"

// passiamo la key, una lista di ingredienti mappati in formato stringa e ,+ più un id principale per evitare di includerlo nella lista di card generate 
export const getSimilarRecipe = async (key:number, listIngredient:string, firstId:number) => {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${key}&ingredients=${listIngredient}`)
        const  data = response.data.map((recepi:CardType) => {
            const {id, title, image} = recepi
            return {id, title, image: image || fotoDefault}
        })
        return data.filter((card:CardType) => card.id != firstId)
    } catch (error) {
        console.log(error)
        return null
    }
}   