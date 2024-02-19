import React, { useEffect, useState } from 'react'
import { Chart } from '.';
import { Loading, Error } from "../global"
import { useParams } from 'react-router-dom';
import { getIngredientDetails } from '../async';


export type Nutrition = {
  portion: { amount: number, unit: string }
  caloricBreakdown: { percentProtein: number, percentFat: number, percentCarbs: number }
  flavonoids: { name: string, amount: number, unit: string }[]
  nutrients: { name: string, amount: number, unit: string, percentOfDailyNeeds: number }
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
              <div className='flex flex-col bg-mygreen border-4 border-blue-500' style={{fontFamily: "Salsa"}}>
                <div className='flex flex-col w-full p-4 border-2 border-red-500'>
                  <img src={details?.image} alt={details?.name} className='w-full h-full object-cover'/>
                  <p className='text-mypink text-3xl sm:text-4xl 2xl:text-7xl font-bold tracking-wider text-center pt-2'>{details?.name}</p>
                </div>
                <div className='w-full border-8 border-blue-400'>
                  { details?.nutrition.caloricBreakdown && <Chart {...details?.nutrition.caloricBreakdown}/> }
                </div>
              </div>
            </>
          )
      }
    </div>
  )
}

export default IngredientDetails
