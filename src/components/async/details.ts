import axios from "axios";
import { IngredientDetailsType, RecipeDetailsType, RecipeToolType } from "../details";
import fotoDefault from "../../assets/global/fotodefault.png"
import { CardType } from "..";
import { Nutrition } from "../details/IngredientDetails";

type equipmentStepType = {
    equipment: RecipeToolType[]
}

type ingredientType = {
	id: number
	nameClean: string
	image: string
	measures: {metric: {amount: number, unitShort: string}}
}

export const getRecipeDetails = async (key:string, idRecipe:number):Promise<RecipeDetailsType | null>=> {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${key}`)
        const { id, title, image, summary:description, diets, servings, instructions, extendedIngredients, analyzedInstructions } = response.data
        // ingredienti 
        let ingredients:RecipeToolType[] = []
        extendedIngredients.map((ingredient:ingredientType) => {
          if (ingredient.nameClean) {
            const newIngredient = {
              id: ingredient.id, 
              name: ingredient.nameClean, 
              image: ingredient.image ? `https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}` : fotoDefault,
              measures: ingredient.measures?.metric.amount + " " + (ingredient.measures?.metric.unitShort == "" ? "qty" : ingredient.measures?.metric.unitShort )
            }
            ingredients = ingredients.filter((element:RecipeToolType) => {
              return element.id != newIngredient.id
            })
            ingredients.push(newIngredient)
          }
        })

        // strumenti di lavoro
        let equipments:RecipeToolType[] = []
        analyzedInstructions.length > 0 ? analyzedInstructions[0].steps.forEach((step:equipmentStepType) => {
            step.equipment.map((equipment:RecipeToolType) => {
              const newEquipments = {id: equipment.id, name: equipment.name, measures: null, image: image ? `https://spoonacular.com/cdn/equipment_100x100/${equipment.image}`: fotoDefault}
              equipments = equipments.filter((element:RecipeToolType) => {
                return element.id != newEquipments.id
              })
              equipments.push(newEquipments)
            })
        })  : null

        return { 
            id, 
            title, 
            image, 
            description, 
            diets, 
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

// passiamo la key e un id di riferenza per le ricette da cercare
export const getSimilarRecipes = async (key:string, id:number) => {
  try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/similar?apiKey=${key}&number=5`)
      const data:CardType[] = response.data.map((recepi:CardType) => {
          const {id, title} = recepi
          return {id, title, image: `https://spoonacular.com/recipeImages/${id}-556x370.jpg` || fotoDefault}
      })
      
      return data
  } catch (error) {
      return null
  }
}   

export const getIngredientDetails = async (key:string, idRecipe:number):Promise<IngredientDetailsType | null> => {
  try {
    const response = await axios(`https://api.spoonacular.com/food/ingredients/${idRecipe}/information?apiKey=${key}&amount=1`)
    const { id, name, image, consistency, possibleUnits} = response.data
    const { weightPerServing, caloricBreakdown, flavonoids:flavonoidsData, nutrients:nutrientsData} = response.data.nutrition
    
    
    const portion = { amount: weightPerServing.amount, unit: weightPerServing.unit }
    const flavonoids = flavonoidsData.filter((flavonoid:{name: string, amount: number, unit: string}) => flavonoid.amount != 0 )
    const nutrients = nutrientsData.filter((nutrient: {name: string, amount: number, unit: string, percentOfDailyNeeds: number}) => nutrient.amount != 0)
    const nutrition:Nutrition = {
      portion, 
      caloricBreakdown,
      flavonoids, 
      nutrients
    }

    const data = {
      id, 
      name: name[0].toUpperCase() + name.slice(1), 
      image: image ? `https://spoonacular.com/cdn/ingredients_100x100/${image}` : fotoDefault,
      consistency,
      possibleUnits, 
      nutrition
    } 
    //console.log("DATA: ", response.data)
    return data
  } catch (error) {
    console.log(error)
    return null
  }
}

