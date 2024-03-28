import axios from "axios"


export type SearchType = {
  id: number
  title: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const researchData = (data: any[], type: "ingredients" | "recipe" | "exclude") => {
  const results:SearchType[] = []
  type == "recipe" ? (
    data.map((recipe:SearchType) => {
      const {id, title} = recipe
      results.push({id, title})
    })
  ) : (
    data.map((ingredient: {id: number, name: string}) => {
      const { id, name } = ingredient
      results.push({id,  title: name})
    })
  )
  return results
}

export const getResearchdata = async (type: "ingredients" | "recipe" | "exclude", text:string):Promise<SearchType[] | null> => {
  const KEY_1 = import.meta.env.VITE_APP_API_KEY_1
  const KEY_2 = import.meta.env.VITE_APP_API_KEY_2
  const KEY_3 = import.meta.env.VITE_APP_API_KEY_3
  const KEY_4 = import.meta.env.VITE_APP_API_KEY_4

  try {
    if (type == "recipe"){
      const response = await axios(`https://api.spoonacular.com/recipes/autocomplete?apiKey=${KEY_1}&number=8&query=${text}`)
      return researchData(response.data, type)
    } else {
      const response =  await axios(`https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${KEY_1}&query=${text}&number=8&metaInformation=true`)
      return researchData(response.data, type)
    }
  } catch (error:unknown) {
    if (axios.isAxiosError(error)) console.log(`Error: 25% of daily requests made - code: ${error.message}`)
    try {
      if (type == "recipe"){
        const response = await axios(`https://api.spoonacular.com/recipes/autocomplete?apiKey=${KEY_2}&number=8&query=${text}`)
        return researchData(response.data, type)
      } else {
        const response =  await axios(`https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${KEY_2}&query=${text}&number=8&metaInformation=true`)
        return researchData(response.data, type)
      }
    } catch (error:unknown) {
      if (axios.isAxiosError(error)) console.log(`Error: 50% of daily requests made - code: ${error.message}`)
      try {
        if (type == "recipe"){
          const response = await axios(`https://api.spoonacular.com/recipes/autocomplete?apiKey=${KEY_3}&number=8&query=${text}`)
          return researchData(response.data, type)
        } else {
          const response =  await axios(`https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${KEY_3}&query=${text}&number=8&metaInformation=true`)
          return researchData(response.data, type)
        }
      } catch (error:unknown) {
        if (axios.isAxiosError(error)) console.log(`Error: 75% of daily requests made - code: ${error.message}`)
        try {
          if (type == "recipe"){
            const response = await axios(`https://api.spoonacular.com/recipes/autocomplete?apiKey=${KEY_4}&number=8&query=${text}`)
            return researchData(response.data, type)
          } else {
            const response =  await axios(`https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${KEY_4}&query=${text}&number=8&metaInformation=true`)
            return researchData(response.data, type)
          }
        } catch (error) {
          if (axios.isAxiosError(error)) console.log(`Error: 100% of daily requests made - Come back to visit us tomorrow after the server reset - code:  ${error.message}`)
          return null
        }
      }
    }
  } 
}
