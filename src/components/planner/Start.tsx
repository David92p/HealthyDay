import { SequenceType } from "."
import img from "../../assets/planner/planner1.jpg"


const Start:React.FC<SequenceType> = ({toggleSequence}) => {

  return (
		<div 
			className={`w-full h-auto relative bg-neutral-800`}
		>
			<img src={img} alt="img" className="h-full w-full object-fill absolute mix-blend-soft-light rotate-180"/>
			<div className="flex flex-col px-4 sm:px-8 2xl:px-10 py-6">
				<span className='text-mypink text-bold text-3xl sm:text-5xl 2xl:text-7xl'>Let's start right here!</span>
				<span className='text-slate-100 w-[90%] tracking-wider text-xl sm:text-3xl leading-relaxed my-4 sm:my-10'>
					Start building your health here!
					Try our nutrition advice<br /> planner now.
					If you are looking for <br /> well-being and a healthy taste for your body, you are in the right place!
				</span>
				<div className='flex justify-center items-center h-full mt-4'>
					<button onClick={() => toggleSequence("timeFrame")} className='bg-mypink mix-blend-lighten text-mygreen z-40 w-56 h-20 py-auto rounded-md text-2xl text-bold'>Start your plan!</button>
				</div>
				<span className='text-slate-100 w-[90%] tracking-wider text-xl sm:text-3xl leading-relaxed mt-8 sm:my-14'>
					Eating healthy is important for the health of the body and mind, at any age.<br/>
					Following a balanced diet, a correct and tailor-made food plan, helps you face each day with the right energy!
				</span>
			</div>
		</div>
  )
}

export default Start
