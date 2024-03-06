
import { motion } from 'framer-motion'
import { SequenceType } from '.'
import img from "../../assets/planner/planner3.jpg"
import { useState } from 'react'

const TargetCalories:React.FC<SequenceType> = ({toggleSequence, updatedPlan}) => {

	const [calories, setcalories] = useState<string>("")
	const [error, setError] = useState<boolean>(false)

	const toggleTargetCalories = (targetCalories: string ) => {
		if (Number(targetCalories) > 5000 || Number(targetCalories) < 1000){
			setError(true)
		} else {
			setError(false)
			updatedPlan && updatedPlan("targetCalories", targetCalories )
			toggleSequence("diet")
		}
	}

  return (
		<div 
		className={`w-full h-auto relative bg-neutral-800`}
	>
		<img src={img} alt="img" className="h-full w-full object-fill absolute mix-blend-soft-light rotate-180"/>
		<div className="flex flex-col px-4 sm:px-8 2xl:px-10 py-6">
			<span className='text-mypink mix-blend-lighten text-bold text-3xl sm:text-5xl 2xl:text-7xl'>And how many calories?</span>
			<motion.span 
				initial={{x:`${document.body.clientWidth < 500 ? -500 : -2000}`}} animate={{x:0}} transition={{delay: 0.1, duration: 1.5}}
				className='text-slate-100 w-[90%] tracking-wider text-xl sm:text-3xl leading-relaxed my-4 sm:my-10'>
					Calories are a unit of measurement.<br/>They are usually used to calculate, and therefore measure, the energy content of foods and drinks.<br/>
					Proteins and carbohydrates each provide about 4 calories per gram, while fats provide 9 calories per gram.
			</motion.span>
			<div className='flex flex-col justify-center items-center h-full gap-4'>
				<input 
					placeholder='Enter a value, example 2000 (kcal)' 
					type="text" 
					onChange={e => (setError(false), setcalories(e.target.value.replace(/[^0-9]/g, "")))}
					value={calories}
					className={`z-40 h-10 w-72 sm:w-[500px] bg-slate-100 text-mygreen ${error ? "border-4 border-red-500" : "border-2 border-mygreen"} text-3xl placeholder:text-base sm:placeholder:text-xl 2xl:placeholder:text-xl pl-2 mx-auto rounded-md focus:placeholder:text-transparent`}
				/>
				{error ? <p className='text-xl text-red-500'>Enter a value between 1000 and 5000 kcal</p> : null}
				<div className='flex gap-6 sm:gap-20'>
					<motion.button 
						onClick={() => toggleTargetCalories(calories)}
						initial={{x:`${document.body.clientWidth < 500 ? -500 : -2000}`}} animate={{x:0}} transition={{delay: 0.1, duration: 1.5}}
						className='bg-mypink text-mygreen z-40 w-32 sm:w-44 h-20 py-auto rounded-md text-2xl text-bold'>
							Set my<br/> calories
					</motion.button>
					<motion.button 
						onClick={() => toggleTargetCalories("2000")}
						initial={{x:`${document.body.clientWidth < 500 ? 500 : 2000}`}} animate={{x:0}} transition={{delay: 0.1, duration: 1.5}}
						className='bg-mypink text-mygreen z-40 w-32 sm:w-44 h-20 py-auto rounded-md text-2xl text-bold'>
							Set default<br/> calories
					</motion.button>
				</div>
			</div>
			<motion.span 
				initial={{x:`${document.body.clientWidth < 500 ? 500 : 2000}`}} animate={{x:0}} transition={{delay: 0.1, duration: 1.5}}
				className='text-slate-100 w-[90%] tracking-wider text-xl sm:text-3xl leading-relaxed mt-8 sm:my-14'>
					The recommended caloric intake depends on various factors, although on average the requirement is between 2000-2500 calories (kcal) per day for men and 1800-2000 for women.<br/> 
					It may vary from individual to individual and should customized based on your lifestyle.<br /> 
					We suggest you delve deeper to identify your correct ratio.
			</motion.span>
		</div>
	</div>
  )
}

export default TargetCalories
