import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Research } from '.'
import Carousel from './Carousel'
import nondisponibile from "../assets/global/nondisponibile.png"

type RecipeCardType = {
  id: number
  title: string
  image: string
}

const Recipes:React.FC = () => {

  const [cards, setCards] = useState<RecipeCardType[]>([])

  const getRec = async () => {
    const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_APP_API_KEY}&number=9&include-tags=vegetarian`)
    const data = response.data.recipes.map((recepi: RecipeCardType):RecipeCardType => {
      return {id: recepi.id, title: recepi.title, image: recepi.image || nondisponibile}
    })
    
    setCards(data)
  }

  useEffect(() => {
    getRec()
  }, [])


  return (
    <div className='flex flex-col w-full bg-mygreen'>     
      <Research type={"Ricetta"}/>
      { <Carousel cards={cards} /> }
    </div>
  )
}

export default Recipes
