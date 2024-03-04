import { motion } from "framer-motion"
import { SequenceType } from "."
import img from "../../assets/planner/planner5.jpg"
import { Research } from "../global"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeftLong, faCheck } from "@fortawesome/free-solid-svg-icons"


const Exclude:React.FC<SequenceType> = ({ toggleSequence, updatedPlan }) => {

	const [ingredientsListExcluded, setIngredientsListExcluded] = useState<string[]>([])
	const [ingredientToExclude, setIngredientToExclude] = useState<string>("")
	const [error, setError] = useState<boolean>(false)

	const toggleExclude = (ingredients:string[]) => {
		if (ingredients.length == 0) updatedPlan && updatedPlan("exclude", "")
		else if (ingredients.length == 1) updatedPlan && updatedPlan("exclude", ingredients[0])
		else {
			let ingredientsParameters = ""
			ingredients.forEach((ingredient:string) => ingredientsParameters += ingredient + ", ")
			updatedPlan && updatedPlan("exclude", ingredientsParameters)
		}
		toggleSequence("foodPlan")
	}

	useEffect(() => {
		ingredientsListExcluded.includes(ingredientToExclude) ? setError(true) : setError(false)
	}, [ingredientToExclude, ingredientsListExcluded])

	useEffect(() => {
		console.log(ingredientsListExcluded)
	}, [ingredientsListExcluded])

  return (
	<div 
		className={`w-full h-auto relative bg-neutral-800`}
	>
		<img src={img} alt="img" className="h-full w-full object-fill absolute mix-blend-soft-light"/>
		<div className="flex flex-col px-4 sm:px-8 2xl:px-10 py-6">
			<span className='text-mypink mix-blend-lighten text-bold text-3xl sm:text-5xl 2xl:text-7xl'>Do you have some ingredients to exclude?</span>
			<motion.span 
				initial={{x:`${document.body.clientWidth < 500 ? -500 : -1500}`}} animate={{x:0}} transition={{delay: 1, duration: 1.5}}
				className='text-slate-100 w-[90%] tracking-wider text-xl sm:text-3xl leading-relaxed my-4 sm:my-10'>
				Our mission is to find dishes<br/>  tailor-made for you! <br/> Some ingredients may not be suitable for your eating habits<br/>  or simply do not satisfy your palate.
			</motion.span>
			{
				ingredientsListExcluded.length == 5 ? (
					null
				) : (
					ingredientToExclude ? (
						error ? (
							<div className='flex flex-col justify-center items-center gap-4 border-4 border-blue-500'>
							<p className='text-xl text-center text-red-500 leading-relaxed'>
								This ingredient is already on your list of excluded ingredients!
							</p> 
							<button 
								onClick={() => (setError(false), setIngredientToExclude(""))}
								className='bg-mypink mix-blend-lighten text-mygreen w-24 h-10 p-auto rounded-md text-2xl text-bold'>
								Back
							</button>
						</div>							
						) : (
							<div 
							className='flex flex-col justify-center items-center h-auto w-full'>
							{/* <span className='text-mypink text-bold text-center sm:text-left text-3xl sm:text-5xl 2xl:text-7xl'>titolo qui</span> */}
							<span className='text-slate-100 text-center w-[90%] tracking-wider text-xl sm:text-3xl leading-relaxed my-4 sm:my-10'>
								Do you want to exclude the {ingredientToExclude} ingredient from your searches?
							</span>
							<div className='flex justify-around mt-4 gap-10 sm:gap-20'>
								<button 
									onClick={() => setIngredientToExclude("")}
									className='bg-mypink mix-blend-lighten text-mygreen w-24 h-10 p-auto rounded-md text-2xl text-bold'
								>
									<FontAwesomeIcon icon={faArrowLeftLong}/>
								</button>
								<button
									onClick={() => {setIngredientsListExcluded((prev:string[]) => [...prev, ingredientToExclude]), setIngredientToExclude("")}}
									className='bg-mypink mix-blend-lighten text-mygreen w-24 h-10 p-auto rounded-md text-2xl text-bold'	
								>
									<FontAwesomeIcon icon={faCheck} />
								</button>
							</div>
						</div>
						)
					) : <Research title={"un ingrediente"} type={"exclude"} setIngredientToExclude={setIngredientToExclude}/>
					
				)
			}
			{
				ingredientsListExcluded.length > 0 ? (
					<>
						<div
							className='flex flex-col items-center flex-wrap gap-4 w-full text-3xl sm:text-4xl tracking-wider text-center text-mypink my-4'
						> Ingredients to exclude
							{
								ingredientsListExcluded.map((ingredint:string, i ) => {
									return (
										<div 
											key={i}
											className='flex justify-center items-center bg-mypink mix-blend-lighten text-mygreen w-full sm:w-1/2 2xl:w-1/3 h-10 py-auto px-1 rounded-md text-xl text-bold'>
											{ingredint}
										</div>
									)
								})
							}
						</div>
					</>
				) : null
			}
			<motion.span 
				initial={{x:`${document.body.clientWidth < 500 ? 500 : 1700}`}} animate={{x:0}} transition={{delay: 1, duration: 1.5}}
				className='text-slate-100 w-[90%] tracking-wider text-xl sm:text-3xl leading-relaxed mt-4 sm:my-14'>
				Search and enter the ingredients to exclude up to a maximum of 5 ingredients or continue without specifying any ingredients.
			</motion.span>
			<div className='flex justify-center items-center h-full mt-4'>
				<button 
					onClick={() => toggleExclude(ingredientsListExcluded)}
					className='bg-mypink mix-blend-lighten text-mygreen z-40 w-auto px-4 h-20 py-auto rounded-md text-2xl text-bold'>
						Generate Meal Plan!
				</button>
			</div>	
		</div>
	</div>
  )
}

export default Exclude
