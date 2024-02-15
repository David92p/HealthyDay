import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getIngredientDetails } from '../async';

const IngredientDetails:React.FC = () => {
  
	const { id } = useParams<{ id: string }>();

  useEffect(() => {
    id && getIngredientDetails(import.meta.env.VITE_APP_API_KEY, +id)
    .then(res => {
      console.log(res)
    })
  }, [id])
	
  return (
    <div>
        <h1>INGREDIENT DETAILS COMPONENTE ....</h1>
    </div>
  )
}

export default IngredientDetails
