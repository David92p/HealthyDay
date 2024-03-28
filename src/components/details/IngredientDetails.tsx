import React, { useEffect, useState } from 'react'
import { NutritionalValue, Chart } from '.';
import { Loading, Error } from "../global"
import { useParams } from 'react-router-dom';
import { getIngredientDetails, getIngredientSubstitutes } from '../async';
import second from "../../assets/ingredients/second.jpg"

export type AllValuesType = {
  nutritionFacts: boolean
  flavonoidsFacts: boolean
}

export type Nutrition = {
  portion: { amount: number, unit: string }
  caloricBreakdown: { percentProtein: number, percentFat: number, percentCarbs: number }
  flavonoids: { name: string, amount: number, unit: string }[]
  nutrients: { name: string, amount: number, unit: string, percentOfDailyNeeds: number }[]
}

export type IngredientDetailsType = {
  id: number
	name: string
	image: string
  consistency: string
  possibleUnits: string[]
  nutrition: Nutrition
}

export type SubstituteType = {
  status: "success" | "failure"
  message?: string
  substitutes?: string[]
}

const IngredientDetails:React.FC = () => {
  
	const { id } = useParams<{ id: string }>();

  const [details, setDetails] = useState<IngredientDetailsType | null>(null)
  const [substitute, setSubsistute] = useState<SubstituteType | null>(null)
  const [allValues, setAllValues] = useState<AllValuesType>({nutritionFacts: false, flavonoidsFacts: false})
  const [isLoading, setIsLoading] = useState<boolean>(false)
	const [isError, setIsError] = useState<boolean>(false)

  const toggleAllValues = (titleLabel: "nutritionFacts" | "flavonoidsFacts")  => {
    setAllValues((prev: AllValuesType) => {
      return titleLabel ? {...prev, [titleLabel]: !prev[titleLabel]} : {nutritionFacts: false, flavonoidsFacts: false}
    })
  }

  useEffect(() => {
    setIsLoading(true)
		
		id && getIngredientDetails(+id)
    .then((res: IngredientDetailsType | null) => {
			setIsLoading(false)
			res ? setDetails(res) : setIsError(true)
		})	

    id && getIngredientSubstitutes(+id)
    .then((res: SubstituteType | null) => {
      setIsLoading(false)
      res ? setSubsistute(res) : setIsError(true)
    })

  }, [id])
	
  return (
    <div className='flex flex-col w-full h-auto'>
      {
        isError 
        ? <Error /> 
        : isLoading 
          ? <Loading />
          : (
            <div 
              className={`flex flex-col w-full bg-mygreen ${allValues.nutritionFacts || allValues.flavonoidsFacts ? "bg-opacity-30" : "opacity-100"}`} 
              style={{fontFamily: "Salsa"}}
              onClick={() => allValues.nutritionFacts || allValues.flavonoidsFacts ? setAllValues({nutritionFacts: false, flavonoidsFacts: false}) : null}
              >
                <div className='flex flex-col w-full items-center p-4 sm:p-6 2xl:p-10'>
                  <div className='flex flex-col sm:flex-row w-full'>
                    <div className={`w-full sm:w-1/2 2xl:w-1/3 sm:h-[300px] 2xl:h-[400px] ${allValues.nutritionFacts || allValues.flavonoidsFacts  ? "opacity-10" : "opacity-100"}`}>
                      <img src={details?.image} alt={details?.name} className="object-contain h-56 sm:h-full w-96 sm:w-full" />
                    </div>
                    <div className={`2xl:w-2/3 justify-center sm:ml-8 ${allValues.nutritionFacts || allValues.flavonoidsFacts  ? "opacity-10" : "opacity-100"}`}>
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
                  <div className={`flex flex-col sm:flex-row-reverse w-full my-4 sm:my-6 2xl:my-14 ${allValues.flavonoidsFacts ? "opacity-10" : "opacity-100"}`}>
                    <div className={`flex flex-col sm:flex-col-reverse justify-end w-full sm:w-1/2 2xl:w-2/3 relative ${allValues.nutritionFacts || allValues.flavonoidsFacts  ? "opacity-10" : "opacity-100"}`}>
                      {details?.nutrition.caloricBreakdown && <Chart 
                        type = {"percentage"}
                        percentCarbs={details?.nutrition.caloricBreakdown.percentCarbs} 
                        percentFats={details?.nutrition.caloricBreakdown.percentFat} 
                        percentProteins={details?.nutrition.caloricBreakdown.percentProtein}
                      />}
                      <div className='flex flex-col w-full bg-mygreen mt-4 sm:mt-0'>
                        <span className='text-mypink text-3xl sm:text-5xl 2xl:text-7xl my-4 sm:mt-0 sm:pl-2 tracking-wider'>Macronutrients</span>
                        <span className='text-slate-100 tracking-wider text-xl sm:text-3xl mb-4 sm:pl-4  leading-normal'>
                          Hi Friend, have you ever heard of macronutrients? <br /> These are food ingredients that must be introduced in large quantities, as they represent the most important energy source for the body.
                          <br/> Carbohydrates, proteins and of course also fats belong to this category!
                        </span>
                      </div>
                    </div>
                    { details?.nutrition && <NutritionalValue title={"Nutrition Facts"} units={details.nutrition.nutrients} portion={details.nutrition.portion} allValues={allValues.nutritionFacts} name="nutritionFacts" showAllValues={toggleAllValues} /> }
                  </div>
                  {details?.nutrition.flavonoids && details?.nutrition.flavonoids.length > 0 ? <div className={`flex flex-col sm:flex-row my-4 sm:my-6 2xl:my-10 ${allValues.nutritionFacts ? "opacity-10" : "opacity-100"}`}>
                    <div className={`flex flex-col w-full sm:w-1/2 2xl:w-2/3 bg-mygreen sm:pr-6 ${allValues.nutritionFacts || allValues.flavonoidsFacts  ? "opacity-10" : "opacity-100"}`}>
                      <span className='text-mypink text-3xl sm:text-5xl 2xl:text-7xl my-4 sm:mt-0'>Flavonoids</span>
                      <span className='text-slate-100 tracking-wider text-xl sm:text-3xl mb-4 leading-normal'>
                        Flavonoids - or bioflavonoids, if you prefer - are natural compounds widely present in the plant world. <br/>
                        Bioflavonoids are able to exert various biological activities that are very useful for the body. Hence, the importance for health attributed to these compounds. <br/> Among the properties attributed to flavonoids that arouse greatest interest we undoubtedly find the antioxidant action, the protective action on the microcirculation, the estrogen-like and anti-inflammatory action.
                      </span>
                    </div>
                    <NutritionalValue title={"Flavonoids Facts"} units={details.nutrition.flavonoids} portion={details.nutrition.portion} allValues={allValues.flavonoidsFacts} name='flavonoidsFacts' showAllValues={toggleAllValues} />
                  </div> : null}
                  { substitute?.status == "success" ? <div className={`flex flex-col w-full my-4 sm:my-6 2xl:my-14 ${allValues.nutritionFacts || allValues.flavonoidsFacts  ? "opacity-10" : "opacity-100"}`}>
                    <div className={`flex flex-col-reverse ${details?.nutrition.flavonoids && details?.nutrition.flavonoids.length > 0 ? "sm:flex-row-reverse" : "sm:flex-row"} bg-mygreen sm:mt-6 2xl:mt-10`}>
                      <div className={`flex flex-col sm:w-1/2 2xl:w-2/3 sm:gap-6 2xl:gap-10 ${details?.nutrition.flavonoids && details?.nutrition.flavonoids.length > 0 ? "sm:ml-6" : "sm:mr-6"}`}>
                        <div className={`flex flex-col`}>
                          <p className='text-mypink text-3xl sm:text-5xl 2xl:text-7xl my-4 sm:mt-0 tracking-wider'>Customized ingredients</p>
                          <span className='text-slate-100 tracking-wider text-xl sm:text-3xl mb-4 leading-normal'>We care about your nutrition, which is why we offer all our knowledge at your disposal.<br/> We thought that some ingredients may not be to your liking for any reason <br/> Try something different!<br/> Don't forget to contact us if you don't find a worthy replacement for your palate!</span>
                        </div>
                        <div className='flex flex-col w-full bg-mygreen sm:pr-6'>
                          <span className='text-mypink text-2xl sm:text-4xl 2xl:text-6xl my-4 sm:mt-0 tracking-wider'>{substitute?.message} </span>
                          {
                            substitute.substitutes && 
                              substitute?.substitutes.map((substitute, i) => {
                                return (
                                  <span key={i} className='text-slate-100 tracking-wider text-xl sm:text-3xl mb-4 leading-normal'>{substitute}</span>
                                )
                              }) 
                          }
                        </div>
                      </div>

                      <div className='sm:w-1/2 2xl:w-1/3 sm:py-10 2xl:py-0'>
                        <img src={second} alt="first photo" className='h-full w-full object-cover brightness-100 2xl:brightness-75'/>
                      </div>
                    </div>
                  </div> : null}
                </div>
            </div>
          )
      }
    </div>
  )
}

export default IngredientDetails
