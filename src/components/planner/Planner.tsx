
import { useEffect, useState } from 'react'
import { Diet, Exclude, FoodPlan, Header, Start, TargetCalories, TimeFrame } from '.'



type SequencesType = {
	start: boolean,
	timeFrame: boolean, 
	targetCalories: boolean, 
	diet: boolean, 
	exclude: boolean
  foodPlan: boolean
}

type Key = "timeFrame" | "targetCalories" | "diet" | "exclude" 
export type SequenceType = {
	toggleSequence: (nextSequence: "timeFrame" | "targetCalories" | "diet" | "exclude" | "foodPlan") => void
  updatedPlan?: (key: Key, value: string | number) => void
}


const Planner:React.FC = () => {

  // const [isLoading, setIsLoading] = useState<boolean>(true)
	// const [isError, setIsError] = useState<boolean>(false)

	const [sequences, setSequence] = useState<SequencesType>({
		start: true,
		timeFrame: false, 
		targetCalories: false, 
		diet: false, 
		exclude: false,
    foodPlan: false
	})

  const [plannerData, setPlannerData] = useState({
      timeFrame: "day",
      targetCalories: 4000,
      diet: "pescetarian",
      exclude: "olives",
    })
  
  const toggleSequence = (nextSequence:"timeFrame" | "targetCalories" | "diet" | "exclude" | "foodPlan" ) => {
		const newSequence:SequencesType =	{
			start: false,
			timeFrame: false, 
			targetCalories: false, 
			diet: false, 
			exclude: false,
      foodPlan: false
		}
		newSequence[nextSequence] = true
		setSequence(newSequence)
	}

  
	const updatedPlan = (key:Key, value: string | number) => {
    setPlannerData((prev) => {
      return {
        ...prev,
        [key]: value
      }
    })
  }

  // useEffect(() => {
  //   console.log(plannerData)
    // setIsLoading(true)
    // generateMealPlan(import.meta.env.VITE_APP_API_KEY, "7")
    // .then((res) => {
    //   setIsLoading(false)
    //   res ? console.log(res) : setIsError(true)
    // })
  // }, [plannerData])

  useEffect(() => {
    console.log(plannerData)
  }, [plannerData])

  return (
    <div className='flex flex-col' style={{fontFamily: "Salsa"}}>
      <Header/>
      <div className='flex items-center cursor-grab activer:cursor-grabbing bg-mygreen'>
        {sequences.start && <Start toggleSequence={toggleSequence}/>} 
        {sequences.timeFrame && <TimeFrame toggleSequence={toggleSequence} updatedPlan={updatedPlan}/>}
        {sequences.targetCalories && <TargetCalories toggleSequence={toggleSequence} updatedPlan={updatedPlan}/>}
        {sequences.diet && <Diet toggleSequence={toggleSequence}/>} 
        {sequences.exclude && <Exclude toggleSequence={toggleSequence}/>} 
        {sequences.foodPlan && <FoodPlan />} 
		</div>
    </div>
  )
}

export default Planner
