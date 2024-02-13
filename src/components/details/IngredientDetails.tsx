import React from 'react'
import { useParams } from 'react-router-dom';

const IngredientDetails:React.FC = () => {

	const { id } = useParams<{ id: string }>();
	
  return (
    <div>
        <h1>INGREDIENT DETAILS COMPONENTE ....</h1>
    </div>
  )
}

export default IngredientDetails
