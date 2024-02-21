import React, { useEffect, useState } from 'react'
import { NutritionalValue } from '.';
import { Loading, Error } from "../global"
import { useParams } from 'react-router-dom';
import { getIngredientDetails } from '../async';


export type Nutrition = {
  portion: { amount: number, unit: string }
  caloricBreakdown: { percentProtein: number, percentFat: number, percentCarbs: number }
  flavonoids: { name: string, amount: number, unit: string }[]
  nutrients: { name: string, amount: number, unit: string, percentOfDailyNeeds: number }[]
  //properties: { name: string, amount: number, unit: string}
}

export type IngredientDetailsType = {
  id: number
	name: string
	image: string
  consistency: string
  possibleUnits: string[]
  nutrition: Nutrition
}

const IngredientDetails:React.FC = () => {
  
	const { id } = useParams<{ id: string }>();

  const [details, setDetails] = useState<IngredientDetailsType | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
	const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
		
		id && getIngredientDetails(import.meta.env.VITE_APP_API_KEY, +id)
    .then((res: IngredientDetailsType | null) => {
			setIsLoading(false)
			res ? setDetails(res) : setIsError(true)
		})	

  }, [id])

  useEffect(() => {
    console.log(details)
  }, [details])
	
  return (
    <div className='flex flex-col w-full h-auto'>
      {
        isError 
        ? <Error /> 
        : isLoading 
          ? <Loading /> 
          : (
            <>
              <div className='flex flex-col bg-mygreen' style={{fontFamily: "Salsa"}}>
                <div className='flex flex-col w-full items-center p-4 sm:p-6 2xl:p-10'>
                  <div className='flex flex-col sm:flex-row w-full'>
                    <div className='sm:w-1/2 2xl:w-1/3 sm:h-[300px] 2xl:h-[400px]'>
                      <img src={details?.image} alt={details?.name} className="object-contain h-56 sm:h-full w-96 sm:w-full sm:align-middle" />
                    </div>
                    <p className='text-mypink text-4xl sm:text-5xl 2xl:text-7xl font-bold tracking-wider text-center mt-4'>{details?.name}</p>
                  </div>
                  <div className='flex w-full my-4 sm:my-6 2xl:my-10'>
                    { details?.nutrition && <NutritionalValue units={details.nutrition.nutrients} portion={details.nutrition.portion}/> }
                  </div>
                </div>
              </div>
            </>
          )
      }
    </div>
  )
}

export default IngredientDetails
