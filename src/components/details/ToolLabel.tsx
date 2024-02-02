import React from 'react'

export type RecipeToolType = {
    id: number
    image: string
    measures: string | null
    name: string
}

const ToolLabel:React.FC<RecipeToolType> = ({name, measures, image}) => {
  return (
    <div className='flex flex-col justify-between sm:justify-center 2xl:justify-between sm:gap-4 2xl:gap-0 items-center w-28 sm:w-52 h-auto p-2 2xl:py-4 bg-mypink 2xl:cursor-pointer'>
      <img src={image} alt={name} className='w-20 sm:w-28 2xl:w-36 h-20 sm:h-28 2xl:h-36 rounded-full'/>
      { measures && <p className='text-mygreen text-center text-xl sm:text-2xl 2xl:text-4xl tracking-wider'>{measures}</p> }
      <p className='text-mygreen font-bold text-center text-xl sm:text-2xl 2xl:text-3xl tracking-wider'>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
    </div>
  )
}

export default ToolLabel
