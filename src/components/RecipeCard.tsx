import React from 'react'

type RecipeCardType = {
    id: number
    image: string
    title: string
}

const RecipeCard:React.FC<RecipeCardType> = ({ id, image, title }) => {
  return (
    <div className='bg-white h-[400px] 2xl:h-[450px] sm:mx-4 text-mygreen'>
      <div 
        className='bg-mypink bg-cover h-2/3' 
        style={{backgroundImage: `url(${image})`}}
      />
      <div className='flex flex-col justify-around items-center h-1/3'>
        <p className='text-xl text-mygreen font-semibold text-center'>{title.length > 50 ? title.slice(0, 20) + " ... " : title}</p>
        <button className='bg-mypink text-mygreen text-lg px-6 py-1'>Read More</button>
      </div>
    </div>
  )
}

export default RecipeCard
