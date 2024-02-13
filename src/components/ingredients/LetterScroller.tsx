import { 
	faA, faB, faC, faD, faE, faF, faG, faH, faI, faJ, faK, faL, faM, faN, faO, faP, faQ, faR, faS, faT, faU, faW, faX, faY, faZ, faArrowRight, faMagnifyingGlass, 
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type LetterScrollerlType = {
	scrool: number[]
	setScrool: React.Dispatch<React.SetStateAction<number[]>>
	//toggleSearch: () => void
}

const LetterScroller:React.FC<LetterScrollerlType> = ({ scrool, setScrool }) => {
  const letters = [faA, faB, faC, faD, faE, faF, faG, faH, faI, faJ, faK, faL, faM, faN, faO, faP, faQ, faR, faS, faT, faU, faW, faX, faY, faZ]

  // const [scrool, setScrool] = useState<number[]>([0, 1, 24])
   
  return (
		<>
			<div className='flex w-full h-32 bg-pink-100'>
				<div className='flex justify-center items-end pb-2 w-1/5 border-4 border-red-500'>
					<FontAwesomeIcon icon={letters[scrool[2]]} className='text-2xl' />
				</div>
				<div className='flex justify-center items-end pb-2 w-3/5 border-4 border-red-500'>
					<FontAwesomeIcon icon={letters[scrool[0]]} bounce className='text-7xl' onClick={(e) => console.log(e)}/>
				</div>
				<div className='flex justify-center items-end pb-2 w-1/5 border-4 border-red-500'>
					<FontAwesomeIcon icon={letters[scrool[1]]} className='text-2xl' />
				</div>
			</div>
			<div className='flex justify-around items-center h-14 bg-pink-100'>
				<button onClick={() => setScrool(scrool.map(letterNumber => letterNumber == 0 ? 24 : letterNumber -= 1))}  className='bg-mypink text-mygreen w-24 sm:w-40 h-8 sm:h-10 rounded-sm text-2xl sm:text-3xl' >
					<FontAwesomeIcon icon={faArrowRight} rotation={180} />
        </button>
				<button className='bg-mypink text-mygreen w-24 sm:w-40 h-8 sm:h-10 rounded-sm text-2xl sm:text-3xl' >
					<FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
				<button onClick={() => setScrool(scrool.map(letterNumber => letterNumber == 24 ? 0 : letterNumber += 1))} className='bg-mypink text-mygreen w-24 sm:w-40 h-8 sm:h-10 rounded-sm text-2xl sm:text-3xl'>
					<FontAwesomeIcon icon={faArrowRight} />
				</button>
			</div>
		</>
  )
}

export default LetterScroller
