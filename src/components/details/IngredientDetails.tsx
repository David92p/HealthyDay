import React, { useEffect, useState } from 'react'
import { NutritionalValue, Chart } from '.';
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
                    <div className='w-full sm:w-1/2 2xl:w-1/3 sm:h-[300px] 2xl:h-[400px]'>
                      <img src={details?.image} alt={details?.name} className="object-contain h-56 sm:h-full w-96 sm:w-full" />
                    </div>
                    <div className='2xl:w-2/3 justify-center sm:ml-8'>
                      <p className='text-mypink text-5xl sm:text-6xl 2xl:text-7xl font-bold tracking-wider text-center mt-4'>{details?.name}</p>
                      <div className='flex flex-col justify-center items-center gap-3 my-4'>
                        <div className='text-mypink font-bold tracking-wider text-2xl sm:text-3xl'>Ingredient consistency</div>
                        <div className='flex justify-center items-center h-8 sm:h-10 2xl:h-14 w-auto px-2 rounded-lg text-mygreen text-lg sm:text-2xl 2xl:text-4xl tracking-wider font-bold bg-mypink'>{details?.consistency}</div>
                      </div>
                      <div className='flex flex-col justify-center items-center gap-3 mb-4'>
                        <div className='text-mypink font-bold tracking-wider text-2xl sm:text-3xl'>Possible units</div>
                        <div className='flex flex-wrap w-full h-auto justify-around pt-2 sm:p-4 gap-2 sm:gap-4'>
                          { 
                            details && details?.possibleUnits.map((type:string, i) => {
                              return <div key={i} className='flex justify-center items-center h-8 sm:h-10 2xl:h-14 w-auto px-2 rounded-lg text-mygreen text-lg sm:text-2xl 2xl:text-4xl tracking-wider font-bold bg-mypink'>{type}</div>
                            }) 
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col sm:flex-row-reverse w-full my-4 sm:my-6 2xl:my-10'>
                    <div className='flex flex-col sm:flex-col-reverse justify-end w-full sm:w-1/2 2xl:w-2/3'>
                      {details?.nutrition.caloricBreakdown && <Chart 
                        percentCarbs={details?.nutrition.caloricBreakdown.percentCarbs} 
                        percentFat={details?.nutrition.caloricBreakdown.percentFat} 
                        percentProtein={details?.nutrition.caloricBreakdown.percentProtein}
                      />}
                      <div className='flex flex-col w-full bg-mygreen sm:pl-6'>
                        <span className='text-mypink text-3xl sm:text-5xl 2xl:text-7xl m-4 sm:mt-0'>Macronutrients</span>
                        <span className='text-slate-100 tracking-wider text-xl sm:text-3xl mx-4 mb-4'>
                          Hi Friend, have you ever heard of macronutrients? <br /> These are food ingredients that must be introduced in large quantities, as they represent the most important energy source for the body.
                          <br/> Carbohydrates, proteins and of course also fats belong to this category!
                        </span>
                      </div>
                    </div>
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
