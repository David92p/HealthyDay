import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getRecipeDetails, getSimilarRecipes } from '../async';
import Parser from 'html-react-parser';
import { Loading, Error, CardType, Carousel } from '../global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { RecipeToolType, ToolLabel } from '.';
import  startPrepare  from "../../assets/details/detail.jpg"


type ExpandTextType = {
	description: boolean
	instructions: boolean
}

export type RecipeDetailsType = {
	id: number
	title: string
	image: string
	description: string
	diets: string[]
	servings: number // numero di persone per la quantità di ingredienti
	instructions: string | null
	ingredients: RecipeToolType[]
	equipments: RecipeToolType[] | null
}

const RecipeDetails:React.FC = () => {

	const { id } = useParams<{ id: string }>();

	const [details, setDetails] = useState<RecipeDetailsType | null>(null)
	const [similarRecipes, setSimilarRecipes] = useState<CardType[] | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [isError, setIsError] = useState<boolean>(false)
	const [expandText, setExpandText] = useState<ExpandTextType>({description: false, instructions: false})

	
  useEffect(() => {
		setIsLoading(true)
		
		id && getRecipeDetails(import.meta.env.VITE_APP_API_KEY, +id)
		.then((res:RecipeDetailsType | null) => {
			setIsLoading(false)
			res ? setDetails(res) : setIsError(true)

		})	

		id && getSimilarRecipes(import.meta.env.VITE_APP_API_KEY, +id)
    .then((res:CardType[] | null) => {
			setIsLoading(false)
      res ? setSimilarRecipes(res) : setIsError(true)
    })
	}, [id])

	// controller toggle expand text
	const toggleExpand = (context:"description" | "instructions") => {
		setExpandText((prev:ExpandTextType) => {
			return {...prev, [context]: !prev[context]}
		})
	}

	return (
		<div className='flex flex-col w-full h-auto'>
			{
				isError 
					? <Error /> 
					: ( 
						isLoading 
						? <Loading /> 
						: (
							<>
								<div className='flex flex-col bg-mygreen' style={{fontFamily: "Salsa"}}>
									{/* Foto del piatto, titolo ed etichette assegnate */}

									<div className='flex flex-col w-full sm:flex-row justify-around text-slate-100 p-4 sm:p-6'>
										<img src={details?.image} alt={details?.title} className='sm:w-1/2 2xl:w-1/3'/>
										<div className='flex flex-col sm:justify-around sm:w-1/2'>
											<p className='text-mypink text-3xl sm:text-4xl 2xl:text-7xl font-bold tracking-wider text-center pt-2'>
												{ details && details?.title }
											</p>
											<div className='flex flex-wrap w-full h-auto justify-around pt-2 sm:p-4 gap-2 sm:gap-4'>
												{ 
													details && details?.diets.map((type:string, i) => {
														return <div key={i} className='flex justify-center items-center h-8 sm:h-10 2xl:h-14 w-auto px-2 rounded-lg text-mygreen text-lg sm:text-2xl 2xl:text-4xl tracking-wider font-bold bg-mypink'>{type}</div>
													}) 
												}
											</div>
										</div>
									</div>
									{/* descrizione del piatto */}
									<div className='w-full h-auto pt-2 px-4 sm:px-6 text-slate-100'>
										{
											expandText.description ? (
												<p className='text-slate-100 text-center text-xl sm:text-2xl 2xl:text-4xl tracking-wider'>{details && Parser(details.description)}</p>
											) : (
												details && details.description.length > 450 
												? <p className='text-slate-100 text-center text-xl sm:text-2xl 2xl:text-4xl tracking-wider'>{ details && Parser(details.description.slice(0, 450) + " ... ") }</p>
												: <p className='text-slate-100 text-center text-xl sm:text-2xl 2xl:text-4xl tracking-wider'>{ details && Parser(details.description) }</p>
											)
										}
										<div className='flex w-full justify-end items-center p-2 gap-2 text-mypink tracking-wider cursor-pointer'  onClick={() => toggleExpand("description")}>
											{ expandText.description ? "Close" : "Read More" } 
											{ expandText.description 
												? <FontAwesomeIcon icon={faCaretDown} rotation={180} className="items-end text-3xl text-slate-100" /> 
												: <FontAwesomeIcon icon={faCaretDown} className="items-end text-3xl text-slate-100" />
											}
										</div>
									</div>
									{/* ingredienti */}
									<div className='bg-pink-100 '>
										<div className='flex flex-col w-full items-center px-4 pb-4'>
											<p className='text-mygreen text-3xl sm:text-5xl 2xl:text-7xl tracking-wider text-center py-4'>Ingredients for {details?.servings} people</p>
											<div className='flex w-full sm:w-10/12 gap-4 flex-wrap justify-around'>
													{ details && details.ingredients.map((ingredient:RecipeToolType) => {
														return (
															<ToolLabel {...ingredient} key={ingredient.id}/>
														)
													}) }
											</div>
										</div>
										{/* strumenti di lavoro */}
										{
											details?.equipments && details?.equipments.length > 0 ? (

												<div className='flex flex-col w-full items-center px-4 pb-4'>

													<p className='text-mygreen text-3xl sm:text-5xl 2xl:text-7xl tracking-wider text-center py-4'>Equipments</p>
													<div className='flex w-full sm:w-10/12 gap-4 flex-wrap justify-around'>
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
									{/* istruzioni per la preparazione */}
									{
										details?.instructions 
										? ( details.instructions.length > 400 
												? (
													expandText.instructions 
													? (
														<div className='flex flex-col w-full pb-4 px-4 sm:px-6 2xl:px-10 bg-mygreen text-slate-100'>
															<p className='text-mypink text-2xl sm:text-4xl 2xl:text-5xl tracking-wider text-center py-4'>Let's begin!</p>
															<div className='flex flex-col sm:flex-row h-auto w-full'>
																<div className='w-full sm:w-3/5'>
																	<p className='text-slate-100 text-center sm:text-left sm:mr-6 text-xl sm:text-2xl 2xl:text-4xl tracking-wider'>{ Parser(details.instructions) }</p>
																	<div className='flex w-full justify-end items-center p-2 sm:pr-6 gap-2 text-mypink tracking-wider cursor-pointer' onClick={() => toggleExpand("instructions")}>
																		Close <FontAwesomeIcon icon={faCaretDown} rotation={180} className="items-end text-3xl text-slate-100" /> 
																	</div>
																</div>
																<div className='flex items-center w-full sm:w-2/5'>
																	<img src={startPrepare} alt="Let's begin!" className='brightness-75 2xl:brightness-50 object-cover h-full sm:h-[500px] w-full mt-4 sm:mt-0'/>
																</div>
															</div>
														</div>
													)
													: (
														<div className='flex flex-col w-full pb-4 px-4 sm:px-6 2xl:px-10 bg-mygreen text-slate-100'>
															<p className='text-mypink text-2xl sm:text-4xl 2xl:text-5xl tracking-wider text-center py-4'>Let's begin!</p>
															<div className='flex flex-col sm:flex-row h-auto w-full'>
																<div className='w-full sm:w-3/5'>
																	<p className='text-slate-100 text-center sm:text-left sm:mr-6 text-xl sm:text-2xl 2xl:text-4xl tracking-wider'>{ Parser(details.instructions.slice(0, 400) + " ... ") }</p>
																	<div className='flex w-full justify-end items-center p-2 sm:pr-6 gap-2 text-mypink tracking-wider cursor-pointer' onClick={() => toggleExpand("instructions")}>
																		Read More <FontAwesomeIcon icon={faCaretDown} className="items-end text-3xl text-slate-100" />
																	</div>
																</div>
																<div className='flex items-center w-full sm:w-2/5'>
																	<img src={startPrepare} alt="Let's begin!" className='brightness-75 2xl:brightness-50 object-cover h-full sm:h-[400px] w-full mt-4 sm:mt-0'/>
																</div>
															</div>
														</div>
													)
												)
												: (
													<div className='flex flex-col w-full pb-4 px-4 sm:px-6 2xl:px-10 bg-mygreen text-slate-100'>
														<p className='text-mypink text-2xl sm:text-4xl 2xl:text-5xl tracking-wider text-center py-4'>Let's begin!</p>
														<div className='flex flex-col sm:flex-row h-auto w-full'>
															<div className='w-full sm:w-3/5'>
																<p className='text-slate-100 text-center sm:text-left sm:mr-6 text-xl sm:text-2xl 2xl:text-4xl tracking-wider'>{ Parser(details.instructions) }</p>
															</div>
															<div className='flex items-center w-full sm:w-2/5'>
																<img src={startPrepare} alt="Let's begin!" className='brightness-75 2xl:brightness-50 object-cover h-full sm:h-[400px] 2xl:full w-full mt-4 sm:mt-0'/>
															</div>
														</div>
													</div>
												)
											)
										: null
									}
									<div className='flex flex-col w-full pt-4 sm:pt-6 px-4 bg-mygreen'>
										<p className='text-mypink text-2xl sm:text-4xl 2xl:text-5xl tracking-wider text-center mb-4'>Do you want something similar?<br/> Take a look at these dishes!</p>
										{ similarRecipes &&  <Carousel cards={similarRecipes} /> }
									</div>
								</div>
							</>
						)
					)
			}
		</div>
	)
}

export default RecipeDetails