import { SequenceType } from "."


const Exclude:React.FC<SequenceType> = ({ toggleSequence }) => {
  return (
    <div className={`flex flex-col w-screen h-[400px] bg-pink-100 p-4`}>
			<span className='text-mygreen text-3xl sm:text-5xl 2xl:text-7xl'>Exclude! 5</span>
			<span className='text-mygreen tracking-wider text-xl leading-relaxed sm:text-3xl my-8'>
				Start building your health here!<br />
				Try our nutrition advice planner now.<br />
				If you are looking for well-being and a healthy taste for your body, you are in the right place!
			</span>
			<div className='flex justify-center items-center h-full'>
				<button onClick={() => toggleSequence("diet")} className='bg-mypink text-mygreen w-40 h-auto py-4 rounded-md text-2xl text-bold'>Start your plan!</button>
			</div>
    </div>
  )
}

export default Exclude
