import React, { useEffect, useState } from 'react'
import { getCardsRecipes } from '../async'
import { Research, Carousel, Loading, Error, CardType, Redirection } from '../global'
import { MainRecipes } from '.'


const Recipes:React.FC = () => {

  const [cards, setCards] = useState<CardType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
	const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    getCardsRecipes(import.meta.env.VITE_APP_API_KEY, 9)
    .then((res:CardType[] | null) => {
      res ? setCards(res) : setIsError(true)
      setIsLoading(false)
    })

  }, [])

  return (
    <div className='flex flex-col w-full bg-mygreen' style={{fontFamily: "Salsa"}}>     
      {
        isError 
        ? <Error/> 
        : (
          <div>
            <Research title={"una ricetta"} type="recipe" />
            { isLoading ? <Loading/> : <Carousel cards={cards} /> }
            <MainRecipes />
            <Redirection type="recipes"/>
          </div>
        )
      }
    </div>
  )
}

export default Recipes