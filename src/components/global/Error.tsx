import React from 'react'

import error from "../../assets/global/error.gif"

const Error:React.FC = () => {
  return (
    <div className='flex justify-center w-full h-screen'>
      <div className='2xl:flex 2xl:justify-center w-full h-1/3 2xl:h-2/3 mt-10 sm:mt-36 2xl:my-auto'>
        <img src={error} alt="ERROR 404" className='w-full 2xl:w-2/3 h-full'/>
      </div>
   </div>
  )
}

export default Error
