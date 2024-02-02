import axios from "axios";
import { DetailsType, RecipeToolType } from "../details";
import fotoDefault from "../../assets/global/fotodefault.png"

type equipmentStepType = {
    equipment: RecipeToolType[]
}

type ingredientType = {
	id: number
	name: string
	image: string
	measures: {metric: {amount: number, unitShort: string}}
}

export const getRecipeDetails= async (key:string, id:number):Promise<DetailsType | null>=> {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}`)
        const { title, image, summary:description, dishTypes, servings, instructions, extendedIngredients, analyzedInstructions } = response.data
        // ingredienti 
        const ingredients = extendedIngredients.map((ingredient:ingredientType) => {
          if (ingredient.name) {
            return {
              id: ingredient.id,
              name: ingredient.name,
              image: image ? `https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}` : fotoDefault,
              measures: ingredient.measures?.metric.amount + " " + (ingredient.measures?.metric.unitShort == "" ? "qty" : ingredient.measures?.metric.unitShort )
            }
          }
        })

        // strumenti di lavoro
        let equipments:RecipeToolType[] = []
        analyzedInstructions[0].steps.forEach((step:equipmentStepType) => {
            step.equipment.map((equipment:RecipeToolType) => {
              const newEquipments = {id: equipment.id, name: equipment.name, measures: null, image: image ? `https://spoonacular.com/cdn/equipment_100x100/${equipment.image}`: fotoDefault}
              equipments = equipments.filter((element:RecipeToolType) => {
                return element.id != newEquipments.id
              })
              equipments.push(newEquipments)
            })
        })

        return { 
            id:response.data.id, 
            title, 
            image, 
            description, 
            dishTypes, 
            servings,
            instructions, 
            ingredients,
            equipments
        }

    } catch (error) {
      console.log(error)
      return null
    } 
}
