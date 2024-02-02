import React from 'react'
import { useNavigate } from 'react-router-dom'

export type CardType = {
    id: number
    title: string
    image: string
}

const Card:React.FC<CardType> = ({ id, title, image }) => {

  const navigate = useNavigate()
  return (
    <div className='bg-white h-[400px] 2xl:h-[450px] sm:mx-4 text-mygreen' onClick={() => navigate(`/ricettario/dettaglio/${id}`)}>
      <div 
        className='bg-mypink bg-cover h-2/3' 
        style={{backgroundImage: `url(${image})`}}
      />
      <div className='flex flex-col justify-around items-center h-1/3'>
        <p className='text-xl text-mygreen font-semibold text-center'>{title.length > 60 ? title.slice(0, 60) + " ... " : title}</p>
        <button className='bg-mypink text-mygreen text-lg px-6 py-1'>Read More</button>
      </div>
    </div>
  )
}

export default Card
