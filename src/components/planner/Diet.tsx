import React, { useState } from 'react'
import { SequenceType } from '.'
import img from "../../assets/planner/planner4.jpg"
import { motion } from 'framer-motion'

type DietInformationType = {
  view: boolean, 
  diet: string
}

const Diet:React.FC<SequenceType> = ({ toggleSequence }) => {

	const [dietInformation, setDietInformation] = useState<DietInformationType>({view: false, diet: ""})
  return (
	<div 
		className={`w-full h-auto relative bg-neutral-800`}
	>
		<img src={img} alt="img" className="h-full w-full object-fill absolute mix-blend-soft-light rotate-180"/>
		<div className="flex flex-col px-4 sm:px-8 2xl:px-10 py-6">
			<span className='text-mypink text-bold text-3xl sm:text-5xl 2xl:text-7xl'>Do you have a specific diet?</span>
			<motion.span 
				initial={{x:`${document.body.clientWidth < 500 ? -500 : -1500}`}} animate={{x:0}} transition={{delay: 1, duration: 1.5}}
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
              <div className='h-44 border-4 border-red-600'></div>
            ) : (
              <button 
                onClick={() => setDietInformation({view: true, diet: "dfhierufyheriu"})}
                className='bg-mypink mix-blend-lighten text-mygreen w-40 h-auto py-4 rounded-md text-2xl text-bold'>
                Vegetarian
              </button>
            )
          }
				{/* <motion.button 
					initial={{x:`${document.body.clientWidth < 500 ? -500 : -1500}`}} animate={{x:0}} transition={{delay: 1, duration: 1.5}}
					
					className='bg-mypink text-mygreen z-40 w-56 h-20 py-auto rounded-md text-2xl text-bold'>Day</motion.button>
				<motion.button 
					initial={{x:`${document.body.clientWidth < 500 ? 500 : 1500}`}} animate={{x:0}} transition={{delay: 1, duration: 1.5}}
					
					className='bg-mypink text-mygreen z-40 w-56 h-20 py-auto rounded-md text-2xl text-bold'>Week</motion.button> */}
			</div>
		</div>
	</div>
    // <div 
	// className={`flex flex-col w-screen h-[400px] bg-pink-100 p-4`}
	// 	>
	// 		<span className='text-mygreen text-3xl sm:text-5xl 2xl:text-7xl'>Do you have a specific diet?</span>
	// 		<span className='text-mygreen tracking-wider text-xl leading-relaxed sm:text-3xl my-8'>
	// 			Start building your health here!<br />
	// 			Try our nutrition advice planner now.<br />
	// 			If you are looking for well-being and a healthy taste for your body, you are in the right place!
	// 		</span>
	// 		<div className='flex justify-center items-center h-full'>
	// 			<button onClick={() => toggleSequence("exclude")} className='bg-mypink text-mygreen w-40 h-auto py-4 rounded-md text-2xl text-bold'>Start your plan!</button>
	// 		</div>
    // </div>
  )
}

export default Diet
