import React from 'react'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Loading:React.FC = () => {
  return (
    <div className='w-full h-screen bg-mygreen'>
      <div className='flex flex-col justify-center items-center gap-6 w-full h-1/3 2xl:h-2/3 mt-10 sm:mt-36 2xl:my-auto text-mypink'>
        <FontAwesomeIcon icon={faSpinner} spin className='text-6xl sm:text-8xl'/>
        <h1 className='text-5xl sm:text-7xl tracking-wider'>Loading ...</h1>
      </div>
    </div>
  )
}

export default Loading
