import { motion } from "framer-motion"
import { SequenceType } from "."
import img from "../../assets/planner/planner2.jpg"


const TimeFrame:React.FC<SequenceType> = ({toggleSequence, updatedPlan}) => {

	const toggleTimeFrame = (timeFrame: "day" | "week") => {
		updatedPlan && updatedPlan("timeFrame", timeFrame )
		toggleSequence("targetCalories")
	}
  return (
	<div 
		className={`w-full h-auto relative bg-neutral-800`}
	>
		<img src={img} alt="img" className="h-full w-full object-fill absolute mix-blend-soft-light"/>
		<div className="flex flex-col px-4 sm:px-8 2xl:px-10 py-6">
			<span className='text-mypink mix-blend-lighten text-bold text-3xl sm:text-5xl 2xl:text-7xl'>What time frame?</span>
			<motion.span 
				initial={{x:`${document.body.clientWidth < 500 ? -500 : -2000}`}} animate={{x:0}} transition={{delay: 0.1, duration: 1.5}}
				className='text-slate-100 w-[90%] tracking-wider text-xl sm:text-3xl leading-relaxed my-4 sm:my-10'>
				Let's start with good organization right away! <br/> 
				Some people like to follow different plans every day, but sometimes you need to have a well-structured plan for the whole week! <br/>
			</motion.span>
			<div 
				className='flex justify-center gap-4 2xl:gap-14 items-center h-full mt-4'>
				<motion.button 
					initial={{x:`${document.body.clientWidth < 500 ? -500 : -2000}`}} animate={{x:0}} transition={{delay: 0.1, duration: 1.5}}
					onClick={() => toggleTimeFrame("day")} 
					className='bg-mypink text-mygreen z-40 w-56 h-20 py-auto rounded-md text-2xl text-bold'>Day</motion.button>
				<motion.button 
					initial={{x:`${document.body.clientWidth < 500 ? 500 : 2000}`}} animate={{x:0}} transition={{delay: 0.1, duration: 1.5}}
					onClick={() => toggleTimeFrame("week")} 
					className='bg-mypink text-mygreen z-40 w-56 h-20 py-auto rounded-md text-2xl text-bold'>Week</motion.button>
			</div>
			<motion.span 
				initial={{x:`${document.body.clientWidth < 500 ? 500 : 2000}`}} animate={{x:0}} transition={{delay: 0.1, duration: 1.5}}
				className='text-slate-100 w-[90%] tracking-wider text-xl sm:text-3xl leading-relaxed mt-8 sm:my-14'>
				We know when it's important to plan!<br />
				We have selected different plans for you depending on your needs.<br />
				Let us know if you're looking for a daily or weekly plan!
			</motion.span>
		</div>
	</div>
  )
}

export default TimeFrame
