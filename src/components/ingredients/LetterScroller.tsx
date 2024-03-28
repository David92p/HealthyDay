import { 
	faA, faB, faC, faD, faE, faF, faG, faH, faI, faJ, faK, faL, faM, faN, faO, faP, faQ, faR, faS, faT, faU, faW, faX, faY, faZ, faArrowRight, faMagnifyingGlass, 
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type LetterScrollerlType = {
	scrool: number[]
	setScrool: React.Dispatch<React.SetStateAction<number[]>>
	toggleSearch: (letter: string) => void
}

const LetterScroller:React.FC<LetterScrollerlType> = ({ scrool, setScrool, toggleSearch }) => {
  const icons = [faA, faB, faC, faD, faE, faF, faG, faH, faI, faJ, faK, faL, faM, faN, faO, faP, faQ, faR, faS, faT, faU, faW, faX, faY, faZ]
	const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w", "x", "y", "z"]
   
  return (
		<>
			<div className='flex w-full h-32 bg-mygreen'>
				<div className='flex justify-center items-end w-1/5 ml-4 sm:ml-6 2xl:ml-10 pb-2 border-b-2 border-mypink'>
					<FontAwesomeIcon icon={icons[scrool[2]]} className='text-2xl text-mypink' />
				</div>
				<div className='flex justify-center items-end w-3/5 pb-2 text-mypink border-b-2 border-mypink'>
					<FontAwesomeIcon icon={icons[scrool[0]]} className='text-7xl' onClick={(e) => console.log(e)}/>
				</div>
				<div className='flex justify-center items-end w-1/5 mr-4 sm:mr-6 2xl:mr-10 pb-2 border-b-2 border-mypink text-mypink'>
					<FontAwesomeIcon icon={icons[scrool[1]]} className='text-2xl' />
				</div>
			</div>
			<div className='flex justify-around items-center h-14 bg-mygreen sm:my-4 2xl:my-6'>
				<button onClick={() => setScrool(scrool.map(letterNumber => letterNumber == 0 ? 24 : letterNumber -= 1))}  className='bg-mypink text-mygreen w-24 sm:w-40 h-8 sm:h-10 rounded-sm text-2xl sm:text-3xl' >
					<FontAwesomeIcon icon={faArrowRight} rotation={180} />
        </button>
				<button onClick={() => toggleSearch(letters[scrool[0]])} className='bg-mypink text-mygreen w-24 sm:w-40 h-8 sm:h-10 rounded-sm text-2xl sm:text-3xl' >
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
