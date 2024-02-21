import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

type ChartType = {
	percentProtein: number, percentFat: number, percentCarbs: number
}


const Chart:React.FC<ChartType> = ({ percentProtein, percentFat, percentCarbs}) => {
	const data = {
		labels: ['Protein', 'Fat', "Carbs"],
		datasets: [
			{
				//label: '%',
				data: [
					percentProtein, 
					percentFat, 
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

	const options = {

	}

  return (
		<div className='w-full py-4'>
			<Doughnut data={data} options={options}/>
		</div>
	)
}

export default Chart
