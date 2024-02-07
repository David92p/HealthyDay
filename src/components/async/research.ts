import axios from "axios"


export const toggleResearch = async (key:string, text:string) => {
    const response = await axios(`https://api.spoonacular.com/recipes/autocomplete?apiKey=${key}&number=20&query=${text}&include-tags=vegetarian`)
    const x = response.data
    console.log(x)
  }