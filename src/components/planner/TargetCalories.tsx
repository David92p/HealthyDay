
import { SequenceType } from '.'

const TargetCalories:React.FC<SequenceType> = ({toggleSequence, updatedPlan}) => {

	//const [calories, setcalories] = useState<number>(2000)

	const toggleTargetCalories = (targetCalories: number ) => {
		updatedPlan && updatedPlan("targetCalories", targetCalories )
		toggleSequence("diet")
	}

  return (
    <div 
			className={`flex flex-col w-screen h-[400px] bg-pink-100 p-4`}
		>
			<span className='text-mygreen text-3xl sm:text-5xl 2xl:text-7xl'>Target calories! 3</span>
			<span className='text-mygreen tracking-wider text-xl leading-relaxed sm:text-3xl my-8'>
				We know when it's important to plan!<br />
				Let us know if you are looking for a daily or weekly plan!
			</span>
			<div className='flex flex-col justify-around h-full'>
				<input onChange={(e) => console.log(e.target.value)} placeholder='2000 kcal' type="number" className={`h-10 bg-slate-100 text-mygreen border-2 border-mygreen text-3xl px-2 placeholder:text-2xl py-2 mx-auto rounded-md focus:placeholder:text-transparent`}/>
				<div className='flex flex-col gap-4'>
					<button className='bg-mypink text-mygreen w-full h-auto py-1 rounded-md text-2xl text-bold'>Set my calories</button>
					<button onClick={() => toggleTargetCalories(2000)} className='bg-mypink text-mygreen w-full h-auto py-1 rounded-md text-2xl text-bold'>Set default calories</button>
				</div>
			</div>
    </div>
  )
}

export default TargetCalories
