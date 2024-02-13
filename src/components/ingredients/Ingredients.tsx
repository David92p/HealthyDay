import { useEffect, useState } from 'react'
import {  Research, Error } from '../global'
import { IngredientIcon, LetterScroller } from '.'
import { IngredientType, getIngredients } from '../async' 

const Ingredients:React.FC = () => {
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w", "x", "y", "z"]

  const [ingredientList, setIngredientList] = useState<IngredientType[] | null>(null)
  // const [isLoading, setIsLoading] = useState<boolean>(true)
	const [isError, setIsError] = useState<boolean>(false)
  const [scrool, setScrool] = useState([0, 1, 24])
  const [initialLetter, setInitialLetter] = useState<string>(letters[scrool[0]])


  // letters[Math.floor(Math.random() * letters.length)]

  useEffect(() => {
    getIngredients(import.meta.env.VITE_APP_API_KEY, "a")
    .then((res: IngredientType[] | null) => {
      res ? setIngredientList(res) : setIsError(true)
    })
  }, [])
  
  useEffect(() => {
    console.log(ingredientList)
    console.log(ingredientList?.length)
  }, [ingredientList])

  return (
    <div className='flex flex-col w-full bg-mygreen' style={{fontFamily: "Salsa"}}>     
      {
        isError 
        ? <Error />
        : (
          <div>
            <Research title={"un ingrediente"} type="ingredients" />
            <LetterScroller scrool={scrool} setScrool={setScrool} />
            <div className='flex justify-around flex-wrap py-4 gap-4 border-4 border-red-500'>
              {
                ingredientList && ingredientList.map((ingredient:IngredientType) => {
                  return <IngredientIcon {...ingredient} key={ingredient.id}/>
                })
              }
            </div>
          </div>
        )
      }
    </div>
  ) 
}

export default Ingredients
