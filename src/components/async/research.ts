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
        console.log(response.data)
        response.data.map((el:SearchType) => {
          const {id, title} = el
          data.push({id, title})
        })
      } else {
        const response =  await axios(`https://api.spoonacular.com/food/ingredients/search?apiKey=${key}&query=${text}&number=8`)
        console.log(response.data.results)
        response.data.results.map((el: {id: number, name: string}) => {
          const { id, name} = el
          data.push({id,  title: name})
        })

      }
      return data
    } catch (error) {
      console.log(error)
      return null
    } 
}
