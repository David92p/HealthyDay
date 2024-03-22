import React, { useState } from 'react'
import { SequenceType } from '.'
import img from "../../assets/planner/planner4.jpg"
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faCheck } from '@fortawesome/free-solid-svg-icons'

type DietInformationType = {
  view: boolean, 
  diet: DietType
}

type DietType = {
	title: string, 
	explanation: string
}

const DIETS:DietType[] = [
	{
		title: "vegetarian",
		explanation: "No ingredients may contain meat or meat by-products, such as bones or gelatin."
	},
	{
		title: "gluten-free",
		explanation: "Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated)."
	},
	{
		title: "ketogenic", 
		explanation: "The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not. The formula we use is 55-80% fat content, 15-35% protein content, and under 10% of carbohydrates."
	},
	{
		title: "lacto-Vegetarian",
		explanation: "All ingredients must be vegetarian and none of the ingredients can be or contain egg."
	},	
	{
		title: "ovo-vegetarian",
		explanation: "All ingredients must be vegetarian and none of the ingredients can be or contain dairy."
	},
	{
		title: "vegan",
		explanation: "No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey."
	},
	{
		title: "pescetarian",
		explanation: "Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not."
	},
	{
		title: "paleo",
		explanation: "Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods."
	},
	{
		title: "primal",
		explanation: "Very similar to Paleo, except dairy is allowed - think raw and full fat milk, butter, ghee, etc."
	},
	{
		title: "low FODMAP",
		explanation: `FODMAP stands for "fermentable oligo-, di-, mono-saccharides and polyols". Our ontology knows which foods are considered high in these types of carbohydrates (e.g. legumes, wheat, and dairy products)`
	},
	{
		title: "whole30",
		explanation: `Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredients not allowed include added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snap peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites.`
	},
]


const Diet:React.FC<SequenceType> = ({ toggleSequence, updatedPlan, container, item }) => {

	const [dietInformation, setDietInformation] = useState<DietInformationType>({view: false, diet: DIETS[0]})
	
	const toggleDietInformation = (diet: string) => {
		updatedPlan && updatedPlan("diet", diet )
		toggleSequence("exclude")
	}

  return (
	<div 
		className={`w-full h-auto relative bg-neutral-800`}
	>
		<img src={img} alt="img" className="h-full w-full object-fill absolute mix-blend-soft-light rotate-180"/>
		<motion.div variants={container} initial="hidden" animate="show" className="flex flex-col px-4 sm:px-8 2xl:px-10 py-6">
			<span className='text-mypink text-bold text-3xl sm:text-5xl 2xl:text-7xl'>Do you have a specific diet?</span>
			<motion.span 
				variants={item}
				className='text-slate-100 w-[90%] tracking-wider text-xl sm:text-3xl leading-relaxed my-4 sm:my-10'>
					There are various diets tested and implemented by leading nutritionists, even if sometimes these are decisions made solely by our will.<br/>
					With respect for letting you choose your eating habits, <br/> 
					we always offer taste and goodness in our dishes.<br/> 
					You choose which diet is right for you!
			</motion.span>
			<div 
				className='flex justify-center gap-4 2xl:gap-14 items-center h-full mt-4'>
					{
            dietInformation.view ? (
              <motion.div 
								variants={item}
								className='flex flex-col justify-centerh-auto w-full'>
								<span className='text-mypink text-bold text-center sm:text-left text-3xl sm:text-5xl 2xl:text-7xl'>{dietInformation.diet.title[0].toUpperCase() + dietInformation.diet.title.substring(1)}?</span>
								<span className='text-slate-100 text-center sm:text-left w-[90%] tracking-wider text-xl sm:text-3xl leading-relaxed my-4 sm:my-10'>{dietInformation.diet.explanation}</span>
								<div className='flex justify-around mt-4'>
									<button 
										onClick={() => setDietInformation((prev) => {
											return {...prev, view: false}
										})}
										className='bg-mypink mix-blend-lighten text-mygreen w-24 h-10 p-auto rounded-md text-2xl text-bold'
									>
										<FontAwesomeIcon icon={faArrowLeftLong}/>
									</button>
									<button
										className='bg-mypink mix-blend-lighten text-mygreen w-24 h-10 p-auto rounded-md text-2xl text-bold'
										onClick={() => toggleDietInformation(dietInformation.diet.title)}
									>
										<FontAwesomeIcon icon={faCheck} />
									</button>
								</div>
							</motion.div>
            ) : (
							<div className='flex flex-col items-center gap-4'>
								<motion.div 
								variants={item}
								className='flex flex-wrap gap-4 w-full justify-around mt-4'>
									<button 
										onClick={() => setDietInformation({view: true, diet: DIETS[0]})}
										className='bg-mypink mix-blend-lighten text-mygreen w-28 h-16 py-auto rounded-md text-xl text-bold'>
										Vegetarian
									</button>
									<button 
										onClick={() => setDietInformation({view: true, diet: DIETS[1]})}
										className='bg-mypink mix-blend-lighten text-mygreen w-28 h-16 py-auto rounded-md text-xl text-bold'>
										Gluten-Free
									</button>
									<button 
										onClick={() => setDietInformation({view: true, diet: DIETS[2]})}
										className='bg-mypink mix-blend-lighten text-mygreen w-28 h-16 py-auto rounded-md text-xl text-bold'>
										Ketogenic
									</button>
									<button 
										onClick={() => setDietInformation({view: true, diet: DIETS[3]})}
										className='bg-mypink mix-blend-lighten text-mygreen w-28 h-16 py-auto rounded-md text-xl text-bold'>
										Lacto-Vegetarian 
									</button>
									<button 
										onClick={() => setDietInformation({view: true, diet: DIETS[4]})}
										className='bg-mypink mix-blend-lighten text-mygreen w-28 h-16 py-auto rounded-md text-xl text-bold'>
										Ovo-Vegetarian
									</button>
									<button 
										onClick={() => setDietInformation({view: true, diet: DIETS[5]})}
										className='bg-mypink mix-blend-lighten text-mygreen w-28 h-16 py-auto rounded-md text-xl text-bold'>
										Vegan
									</button>
									<button 
										onClick={() => setDietInformation({view: true, diet: DIETS[6]})}
										className='bg-mypink mix-blend-lighten text-mygreen w-28 h-16 py-auto rounded-md text-xl text-bold'>
										Pescetarian
									</button>
									<button 
										onClick={() => setDietInformation({view: true, diet: DIETS[7]})}
										className='bg-mypink mix-blend-lighten text-mygreen w-28 h-16 py-auto rounded-md text-xl text-bold'>
										Paleo
									</button>
									<button 
										onClick={() => setDietInformation({view: true, diet: DIETS[8]})}
										className='bg-mypink mix-blend-lighten text-mygreen w-28 h-16 py-auto rounded-md text-xl text-bold'>
										Primal
									</button>
									<button 
										onClick={() => setDietInformation({view: true, diet: DIETS[9]})}
										className='bg-mypink mix-blend-lighten text-mygreen w-28 h-16 py-auto rounded-md text-xl text-bold'>
										Low FODMAP
									</button>
									<button 
										onClick={() => setDietInformation({view: true, diet: DIETS[10]})}
										className='bg-mypink mix-blend-lighten text-mygreen w-28 h-16 py-auto px-2 rounded-md text-xl text-bold'>
										Whole30
									</button>
								</motion.div>
								<motion.button 
									variants={item}
									onClick={() => toggleDietInformation("")}
									className='bg-mypink mix-blend-lighten text-mygreen w-28 h-16 py-auto px-2 rounded-md text-xl text-bold'>
									No interest
								</motion.button>
							</div>
							
            )
          }
			</div>
		</motion.div>
	</div>
  )
}

export default Diet
