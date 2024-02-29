import { motion } from "framer-motion"
import { SequenceType } from "."




const TimeFrame:React.FC<SequenceType> = ({toggleSequence, updatedPlan}) => {

	const toggleTimeFrame = (timeFrame: "day" | "week") => {
		updatedPlan && updatedPlan("timeFrame", timeFrame )
		toggleSequence("targetCalories")
	}
  return (
    <motion.div 
			initial={{x:`${document.body.clientWidth < 500 ? 500 : 1200}`}} animate={{x:0}} transition={{delay: 0.5, duration: 1}}
			className={`flex flex-col w-screen h-[400px] bg-pink-100 p-4`}
		>
			<span className='text-mygreen text-3xl sm:text-5xl 2xl:text-7xl'>Time Frame!</span>
			<span className='text-mygreen tracking-wider text-xl leading-relaxed sm:text-3xl my-6'>
				We know when it's important to plan!<br />
				We have selected different plans for you depending on your needs<br />
				Let us know if you're looking for a daily or weekly plan!
			</span>
			<div className='flex justify-center items-center h-full gap-4'>
				<button onClick={() => toggleTimeFrame("day")} className='bg-mypink text-mygreen w-40 h-auto py-4 rounded-md text-2xl text-bold'>Day</button>
				<button onClick={() => toggleTimeFrame("week")} className='bg-mypink text-mygreen w-40 h-auto py-4 rounded-md text-2xl text-bold'>Week</button>
				{/* <button onClick={() => toggleSequence("targetCalories")} className='bg-mypink text-mygreen w-40 h-auto py-4 rounded-md text-2xl text-bold'>Start your plan!</button> */}
			</div>
    </motion.div>
  )
}

export default TimeFrame
