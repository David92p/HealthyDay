import { MouseEvent, useEffect, useRef, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, getElementsAtEvent} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

type ChartType = {
	type: "percentage" | "grams"
	percentProteins: number, percentFats: number, percentCarbs: number
}

type ValuesType = {
	label : "Proteins" | "Fats" | "Carbs"
	value: number
}


const Chart:React.FC<ChartType> = ({ type, percentProteins, percentFats, percentCarbs}) => {
	const updateValues = ():ValuesType => {
		return {
			label: percentProteins >= percentFats 
		? (
			percentProteins >= percentCarbs 
			? "Proteins"
			: "Carbs"
		) 
		: (
			percentFats >= percentCarbs 
			? "Fats" : "Carbs"
		), 
		value: 
			percentProteins >= percentFats 
			? (
				percentProteins >= percentCarbs 
				? percentProteins
				: percentCarbs
			) 
			: (
				percentFats >= percentCarbs 
				? percentFats : percentCarbs
			)
		}
	}
	const [values, setValues] = useState<ValuesType | null>(null)


	const data = {
		labels: ['Proteins', 'Fats', "Carbs"],
		datasets: [
			{
				label: "Total",
				data: [
					percentProteins, 
					percentFats, 
					percentCarbs 
				],
				backgroundColor: [
					"rgba(216, 54, 54, 1)",
					"rgba(27, 193, 5, 1)", 
					"rgba(0, 143, 246, 1)"
				],
				borderColor: [
					"rgba(216, 54, 54, 1)",
					"rgba(27, 193, 5, 1)", 
					"rgba(0, 143, 246, 1)"
				],
				borderWidth: 1,
				hoverOffset: 1
			},
		],
	};
	
	const chartRef = useRef()

	const toggleDoughnut = (e:MouseEvent<HTMLCanvasElement, globalThis.MouseEvent>) => {
		if (chartRef.current && getElementsAtEvent(chartRef.current, e).length > 0 ) {
			const dataPoint = getElementsAtEvent(chartRef.current, e)[0].index
			console.log(dataPoint)
			
			setValues({label: dataPoint == 0 ? "Proteins" : (dataPoint == 1 ? "Fats" : "Carbs"), value: data.datasets[0].data[dataPoint]})
		}
	}

	useEffect(() => {
		setValues(updateValues())
	}, [percentCarbs, percentFats, percentProteins])

  return (
		<div className='flex justify-center items-center 2xl:h-[700px] 2xl:mt-10 relative'>
			<Doughnut data={data} onClick={(e) => toggleDoughnut(e)} ref={chartRef} className='z-10'/>
			<div className='flex flex-col justify-center items-center h-full w-full absolute 2xl:gap-4'>
				{
					values && (
						<>
							<span className='text-mypink text-2xl sm:text-3xl 2xl:text-6xl font-bold tracking-wider mt-4 2xl:mt-6'>{values.label}</span>
							<span className='text-mypink text-3xl sm:text-4xl 2xl:text-6xl font-bold tracking-wider '>
								{values.value} {type == "percentage" ? "%" : "g"}
							</span>
						</>
					)
				}
			</div>
		</div>
	)
}

export default Chart
