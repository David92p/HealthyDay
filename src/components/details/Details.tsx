import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getRecipeDetails } from '../async';
import Parser from 'html-react-parser';
import { Loading, Error } from '../global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { RecipeToolType, ToolLabel } from '.';

// export type RawMaterialRecipeType = {
// 	id: number
// 	name: string
// 	image: string
// 	quantity?: string
// }
// export type RecipeToolType = {
//     id: number
//     image: string
//     measures?: {metric: {amount: number, unitLong: string}}
//     name: string
// }

export type DetailsType = {
	id: number
	title: string
	image: string
	description: string
	dishTypes: string[]
	servings: number // numero di persone per la quantità di ingredienti
	instructions: string
	ingredients: RecipeToolType[]
	equipments: RecipeToolType[]
}

const Details:React.FC = () => {

	const { id } = useParams<{ id: string }>();
	//console.log(id)

	const [details, setDetails] = useState<DetailsType | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [isError, setIsError] = useState<boolean>(false)
	const [moreDescription, setMoreDescription] = useState<boolean>(false)

	
  useEffect(() => {
	setIsLoading(true)
    id && getRecipeDetails(import.meta.env.VITE_APP_API_KEY, +id)
    .then((res:DetailsType | null) => {
			setIsLoading(false)
      res ? setDetails(res) : setIsError(true)
      setIsLoading(false)
    })
  }, [id])

	return (
		<div className='flex flex-col w-full h-auto bg-mygreen text-slate-100'>
			{
				isError 
					? <Error /> 
					: ( 
						isLoading 
						? <Loading /> 
						: (
							<>
								<div className='flex flex-col p-4 border-2 border-red-500'>
									<div className='flex flex-col w-full sm:flex-row border-4 border-slate-500'>
										<img src={details?.image} alt={details?.title} className='sm:w-1/2 border-2 border-green-500'/>
										<div className='flex flex-col sm:justify-around sm:w-1/2 border-8 border-yellow-300'>
											<p className='text-mypink text-3xl sm:text-4xl 2xl:text-7xl font-bold tracking-wider text-center pt-2 border-2 border-blue-500'>{details?.title}</p>
											<div className='flex flex-wrap w-full h-auto justify-around pt-2 sm:p-4 gap-2 sm:gap-4 border-2 border-red-500'>
												{ 
													details && details?.dishTypes.map((type:string, i) => {
														return <div key={i} className='flex justify-center items-center h-8 sm:h-10 2xl:h-14 w-auto px-2 rounded-lg text-mygreen text-lg sm:text-2xl 2xl:text-4xl tracking-wider font-bold bg-mypink'>{type}</div>
													}) 
												}
											</div>
										</div>
									</div>
									<div className='w-full h-auto pt-2 border-4 border-red-500'>
										{
											moreDescription ? (
												<p className='text-slate-100 text-center text-xl sm:text-2xl 2xl:text-4xl tracking-wider'>{details && Parser(details.description)}</p>
											) : (
												details && details.description.length > 450 
												? <p className='text-slate-100 text-center text-xl sm:text-2xl 2xl:text-4xl tracking-wider'>{ details && Parser(details.description.slice(0, 450) + " ... ") }</p>
												: <p className='text-slate-100 text-center text-xl sm:text-2xl 2xl:text-4xl tracking-wider'>{ details && Parser(details.description) }</p>
											)
										}
										<div className='flex w-full justify-end items-center p-2 gap-2 text-mypink tracking-wider cursor-pointer' onClick={() => setMoreDescription(!moreDescription)}>
											{ 
												moreDescription ? "Close" : "Read More"} 
												{ moreDescription 
													? <FontAwesomeIcon icon={faCaretDown} rotation={180} className="items-end text-3xl text-slate-100 border-4 border-blue-500" /> 
													: <FontAwesomeIcon icon={faCaretDown} className="items-end text-3xl text-slate-100 border-4 border-blue-500" />
												}
										</div>
									</div>
									<div className='flex flex-col w-full border-2 border-yellow-400'>
										<p className='text-mypink text-2xl sm:text-4xl 2xl:text-5xl tracking-wider text-center py-2 border-2 border-blue-500'>Ingredients for {details?.servings} people</p>
										<div className='flex w-full gap-4 flex-wrap justify-around  border-8 border-slate-500'>
												{ details && details.ingredients.map((ingredient:RecipeToolType) => {
													return (
														<ToolLabel {...ingredient} key={ingredient.id}/>
													)
												}) }
										</div>
									</div>
									{
										details && details.equipments.length > 0 ? (
											<div className='flex flex-col w-full border-2 border-yellow-400'>
												<p className='text-mypink text-2xl sm:text-4xl 2xl:text-5xl tracking-wider text-center py-2 border-2 border-blue-500'>Equipments</p>
												<div className='flex w-full gap-4 flex-wrap justify-around  border-8 border-slate-500'>
														{ details && details.equipments.map((equipment:RecipeToolType) => {
															return (
																<ToolLabel {...equipment} key={equipment.id}/>
															)
														}) }
												</div>
											</div> 
										) : null
									}
									
								</div>
							</>
						))
			}
		</div>
	)
}

export default Details
