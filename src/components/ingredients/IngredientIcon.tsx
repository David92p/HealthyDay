import React from 'react'
import { IngredientType } from '../async'
import { useNavigate } from 'react-router-dom'

const IngredientIcon:React.FC<IngredientType> = ({id, name, image}) => {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/ingredienti/dettaglio/${id}`)} className='flex flex-col items-center gap-4 rounded-xl w-40 sm:w-52 h-auto p-2 bg-mypink cursor-pointer'>
      <img src={image} alt={name} className='w-20 sm:w-28 2xl:w-36 h-20 sm:h-28 2xl:h-36' />
      <p className="text-mygreen text-center text-xl sm:text-2xl 2xl:text-3xl tracking-wider font-bold">{name}</p>
    </div>
  )
}

export default IngredientIcon
