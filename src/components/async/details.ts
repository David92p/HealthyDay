/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import type { IngredientDetailsType, RecipeDetailsType, RecipeToolType, Nutrition } from "../details";
import fotoDefault from "../../assets/global/fotodefault.png"
import { CardType } from "..";

type equipmentStepType = {
    equipment: RecipeToolType[]
}

type ingredientType = {
	id: number
	nameClean: string
	image: string
	measures: {metric: {amount: number, unitShort: string}}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const recipeDetails = (data: { id: any; title: any; image: any; summary: any; diets: any; servings: any; instructions: any; extendedIngredients: any; analyzedInstructions: any; }):RecipeDetailsType => {
  const { id, title, image, summary:description, diets, servings, instructions, extendedIngredients, analyzedInstructions } = data
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
			const newEquipments = {id: equipment.id, name: equipment.name, measures: null, image: image ? `https://img.spoonacular.com/equipment_100x100/${equipment.name.replace(" ", '-')}`: fotoDefault}
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
}

export const getRecipeDetails = async (idRecipe:number):Promise<RecipeDetailsType | null>=> {
    const KEY_1 = import.meta.env.VITE_APP_API_KEY_1
    const KEY_2 = import.meta.env.VITE_APP_API_KEY_2
    const KEY_3 = import.meta.env.VITE_APP_API_KEY_3
    const KEY_4 = import.meta.env.VITE_APP_API_KEY_4
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${KEY_1}`)
      return recipeDetails(response.data)
    } catch (error:unknown) {
      if (axios.isAxiosError(error)) console.log(`Error: 25% of daily requests made - code: ${error.message}`)
			try {
				const response = await axios.get(`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${KEY_2}`)
				return recipeDetails(response.data)				
			} catch (error:unknown) {
				if (axios.isAxiosError(error)) console.log(`Error: 50% of daily requests made - code: ${error.message}`)
				try {
					const response = await axios.get(`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${KEY_3}`)
					return recipeDetails(response.data)		
				} catch (error:unknown) {
					if (axios.isAxiosError(error)) console.log(`Error: 75% of daily requests made - code: ${error.message}`)
					try {
						const response = await axios.get(`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${KEY_4}`)
						return recipeDetails(response.data)	
					} catch (error) {
						if (axios.isAxiosError(error)) console.log(`Error: 100% of daily requests made - Come back to visit us tomorrow after the server reset - code:  ${error.message}`)
						return null
					}
				}
			}
    }
}

const similarRecipes = (data: CardType[]):CardType[] => {
	const cards:CardType[] = data.map((recepi:CardType) => {
		const {id, title} = recepi
		return {id, title, image: `https://spoonacular.com/recipeImages/${id}-556x370.jpg` || fotoDefault}
	})
	return cards
}

// passiamo un id di referenza per le ricette da cercare
export const getSimilarRecipes = async (id:number) => {
	const KEY_1 = import.meta.env.VITE_APP_API_KEY_1
	const KEY_2 = import.meta.env.VITE_APP_API_KEY_2
	const KEY_3 = import.meta.env.VITE_APP_API_KEY_3
	const KEY_4 = import.meta.env.VITE_APP_API_KEY_4
  try {
		const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/similar?apiKey=${KEY_1}&number=5`)
		return similarRecipes(response.data)
  } catch (error) {
    if (axios.isAxiosError(error)) console.log(`Error: 25% of daily requests made - code: ${error.message}`)
		try {
			const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/similar?apiKey=${KEY_2}&number=5`)
			return similarRecipes(response.data)
		} catch (error) {
			if (axios.isAxiosError(error)) console.log(`Error: 50% of daily requests made - code: ${error.message}`)
			try {
				const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/similar?apiKey=${KEY_3}&number=5`)
				return similarRecipes(response.data)
			} catch (error) {
				if (axios.isAxiosError(error)) console.log(`Error: 75% of daily requests made - code: ${error.message}`)
				try {
					const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/similar?apiKey=${KEY_4}&number=5`)
					return similarRecipes(response.data)
				} catch (error) {
					if (axios.isAxiosError(error)) console.log(`Error: 100% of daily requests made - Come back to visit us tomorrow after the server reset - code:  ${error.message}`)
					return null
				}
			}
		}
  }
}   


const ingredientDetails = (data: { nutrition?: any; id?: any; name?: any; image?: any; consistency?: any; possibleUnits?: any; }) => {
	const { id, name, image, consistency, possibleUnits} = data
	const { weightPerServing, caloricBreakdown, flavonoids:flavonoidsData, nutrients:nutrientsData} = data.nutrition
	
	const portion = { amount: weightPerServing.amount, unit: weightPerServing.unit }
	const flavonoids = flavonoidsData.filter((flavonoid:{name: string, amount: number, unit: string}) => flavonoid.amount != 0 )
	const nutrients = nutrientsData.filter((nutrient: {name: string, amount: number, unit: string, percentOfDailyNeeds: number}) => nutrient.amount != 0)
	const nutrition:Nutrition = {
		portion, 
		caloricBreakdown,
		flavonoids, 
		nutrients
	}

	const details = {
		id, 
		name: name[0].toUpperCase() + name.slice(1), 
		image: image ? `https://spoonacular.com/cdn/ingredients_100x100/${image}` : fotoDefault,
		consistency,
		possibleUnits, 
		nutrition
	} 
	return details
}

export const getIngredientDetails = async (idRecipe:number):Promise<IngredientDetailsType | null> => {
	const KEY_1 = import.meta.env.VITE_APP_API_KEY_1
	const KEY_2 = import.meta.env.VITE_APP_API_KEY_2
	const KEY_3 = import.meta.env.VITE_APP_API_KEY_3
	const KEY_4 = import.meta.env.VITE_APP_API_KEY_4
  try {
    const response = await axios(`https://api.spoonacular.com/food/ingredients/${idRecipe}/information?apiKey=${KEY_1}&amount=1`)
		return ingredientDetails(response.data)
  } catch (error) {
    if (axios.isAxiosError(error)) console.log(`Error: 25% of daily requests made - code: ${error.message}`)
		try {
			const response = await axios(`https://api.spoonacular.com/food/ingredients/${idRecipe}/information?apiKey=${KEY_2}&amount=1`)
			return ingredientDetails(response.data)
		} catch (error) {
			if (axios.isAxiosError(error)) console.log(`Error: 50% of daily requests made - code: ${error.message}`)
			try {
				const response = await axios(`https://api.spoonacular.com/food/ingredients/${idRecipe}/information?apiKey=${KEY_3}&amount=1`)
				return ingredientDetails(response.data)
			} catch (error) {
				if (axios.isAxiosError(error)) console.log(`Error: 75% of daily requests made - code: ${error.message}`)
				try {
					const response = await axios(`https://api.spoonacular.com/food/ingredients/${idRecipe}/information?apiKey=${KEY_4}&amount=1`)
					return ingredientDetails(response.data)
				} catch (error) {
					if (axios.isAxiosError(error)) console.log(`Error: 100% of daily requests made - Come back to visit us tomorrow after the server reset - code:  ${error.message}`)
					return null
				}
			}
		}
  }
}

// export const getIngredientSubstitutes = async (id: number):Promise<SubstituteType | null>  => {
// 	const KEY_1 = import.meta.env.VITE_APP_API_KEY_1
// 	const KEY_2 = import.meta.env.VITE_APP_API_KEY_2
// 	const KEY_3 = import.meta.env.VITE_APP_API_KEY_3
// 	const KEY_4 = import.meta.env.VITE_APP_API_KEY_4
//   try {
//     const response = await axios(`https://api.spoonacular.com/food/ingredients/${id}/substitutes?apiKey=${KEY_1}`)
//     const data:SubstituteType =  response.data.status == "failure" ? {status: "failure"} : {status: "success", message: response.data.message, substitutes: response.data.substitutes}
//     return data 
//   } catch (error) {
//     if (axios.isAxiosError(error)) console.log(`Error: 25% of daily requests made - code: ${error.message}`)
// 		try {
// 			const response = await axios(`https://api.spoonacular.com/food/ingredients/${id}/substitutes?apiKey=${KEY_2}`)
// 			const data:SubstituteType =  response.data.status == "failure" ? {status: "failure"} : {status: "success", message: response.data.message, substitutes: response.data.substitutes}
// 			return data 
// 		} catch (error) {
// 			if (axios.isAxiosError(error)) console.log(`Error: 50% of daily requests made - code: ${error.message}`)
// 			try {
// 				const response = await axios(`https://api.spoonacular.com/food/ingredients/${id}/substitutes?apiKey=${KEY_3}`)
// 				const data:SubstituteType =  response.data.status == "failure" ? {status: "failure"} : {status: "success", message: response.data.message, substitutes: response.data.substitutes}
// 				return data 
// 			} catch (error) {
// 				if (axios.isAxiosError(error)) console.log(`Error: 75% of daily requests made - code: ${error.message}`)
// 				try {
// 					const response = await axios(`https://api.spoonacular.com/food/ingredients/${id}/substitutes?apiKey=${KEY_4}`)
// 					const data:SubstituteType =  response.data.status == "failure" ? {status: "failure"} : {status: "success", message: response.data.message, substitutes: response.data.substitutes}
// 					return data 
// 				} catch (error) {
// 					if (axios.isAxiosError(error)) console.log(`Error: 100% of daily requests made - Come back to visit us tomorrow after the server reset - code:  ${error.message}`)
// 					return null
// 				}
// 			}
// 		}
//   }
// }

