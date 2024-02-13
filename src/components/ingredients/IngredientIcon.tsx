import React from 'react'
import { IngredientType } from '../async'

const IngredientIcon:React.FC<IngredientType> = ({id, name, image}) => {
  return (
    <div className='flex flex-col items-center gap-4 rounded-xl w-40 sm:w-52 h-auto p-2 bg-mypink border-2 border-blue-500'>
      <img src={image} alt={name} className='w-20 sm:w-28 2xl:w-36 h-20 sm:h-28 2xl:h-36' />
      <p className="text-mygreen text-xl sm:text-2xl 2xl:text-3xl tracking-wider font-bold">{name}</p>
    </div>
  )
}

export default IngredientIcon
