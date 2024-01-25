import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type ResearchType = {
  type: "Ingrediente" | "Ricetta"
}

const Research:React.FC<ResearchType> = ({ type }) => {
  return (
    <div className='w-full flex flex-col p-6 gap-2 cursor-default'>
      <label className='text-3xl tracking-wider text-center text-mypink'>Cerca {type}</label>
      <input type="text"placeholder={`Pasta pomodoro ...`} maxLength={30} className={`h-10 bg-slate-100 text-mygreen text-3xl px-2 placeholder:text-2xl py-2 rounded-md`}/>
      <button className='bg-mypink text-mygreen w-36 sm:w-40 h-8 sm:h-10 rounded-sm mx-auto text-2xl sm:text-3xl' >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  )
}

export default Research
