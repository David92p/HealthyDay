import axios from "axios"


export type SearchType = {
  id: number
  title: string
}


export const getResearchdata = async (key:string, type: "ingredients" | "recipe", text:string):Promise<SearchType[] | null> => {
  const data:SearchType[] = []
    try {
      if (type == "recipe"){
        const response = await axios(`https://api.spoonacular.com/recipes/autocomplete?apiKey=${key}&number=8&query=${text}`)
        response.data.map((recipe:SearchType) => {
          const {id, title} = recipe
          data.push({id, title})
        })
      } else {
        const response =  await axios(`https://api.spoonacular.com/food/ingredients/search?apiKey=${key}&number=8&query=${text}`)
        response.data.results.map((ingredient: {id: number, name: string}) => {
          const { id, name } = ingredient
          data.push({id,  title: name})
        })

      }
      return data
    } catch (error) {
      console.log(error)
      return null
    } 
}
