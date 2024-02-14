import { useEffect, useState } from 'react'
import {  Research, Error, Loading } from '../global'
import { IngredientIcon, LetterScroller } from '.'
import { IngredientType, getIngredients } from '../async' 

const Ingredients:React.FC = () => {
  

  const [ingredientList, setIngredientList] = useState<IngredientType[] | null>(null)
  const [counter, setCounter] = useState<number>(10)
  const [isLoading, setIsLoading] = useState<boolean>(true)
	const [isError, setIsError] = useState<boolean>(false)
  const [scrool, setScrool] = useState([0, 1, 24])
  //const [initialLetter, setInitialLetter] = useState<string>(letters[scrool[0]])


  // letters[Math.floor(Math.random() * letters.length)]

  useEffect(() => {
    setIsLoading(true)
    getIngredients(import.meta.env.VITE_APP_API_KEY, "a")
    .then((res: IngredientType[] | null) => {
      setIsLoading(false)
      res ? setIngredientList(res) : setIsError(true)
    })
  }, [])
  
  const toggleSearch = (letter:string) => {
    setIsLoading(true)
    setCounter(10)
    getIngredients(import.meta.env.VITE_APP_API_KEY, letter)
    .then((res: IngredientType[] | null) => {
      setIsLoading(false)
      res ? setIngredientList(res) : setIsError(true)
    })
  }

  return (
    <div className='flex flex-col w-full bg-mygreen' style={{fontFamily: "Salsa"}}>     
      {
        isError 
        ? <Error />
        : (
          <div>
            <Research title={"un ingrediente"} type="ingredients" />
            <LetterScroller scrool={scrool} setScrool={setScrool} toggleSearch={toggleSearch}/>
            <div className='flex flex-wrap justify-center gap-4 py-4 border-8 border-red-500'>
              {
                isLoading ? <Loading /> : ingredientList?.map((ingredient:IngredientType, index:number) => index < counter ? <IngredientIcon {...ingredient} key={ingredient.id}/> : null)
              }
            </div>
             <div className='flex justify-around w-full py-4'>
              <button className='bg-mypink text-mygreen text-lg px-6 py-1' onClick={() => setCounter(10)}>Close</button>
              { counter < 100 ? <button className='bg-mypink text-mygreen text-lg px-6 py-1' onClick={() => setCounter(prev => prev + 10)}>Other results</button> : null}
            </div>
          </div>
        )
      }
    </div>
  ) 
}

export default Ingredients
