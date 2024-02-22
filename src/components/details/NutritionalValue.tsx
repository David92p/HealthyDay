import React, { useState } from 'react'

type NutritionalValueType = {
  units: {name: string, amount: number, unit: string, percentOfDailyNeeds: number}[]
  portion: {amount: number, unit: string}
}

const NutritionalValue:React.FC<NutritionalValueType> = ({units, portion}) => {

  const [allValues, setAllValues] = useState<boolean>(false)

	return (
    <div className='flex flex-col w-full sm:w-1/2 2xl:w-1/3 h-auto bg-pink-100' style={{fontFamily: "Salsa"}}>
      <p className='text-mygreen font-bold text-center text-3xl sm:text-2xl 2xl:text-3xl tracking-wider py-4 border-b-8 border-mypink mx-2 2xl:pb-7'>Nutrition Facts</p>
      <div className='p-4 text-3xl sm:text-2xl 2xl:text-3xl tracking-wider text-mygreen text-left'>
        Amount per { portion.amount } { portion.unit }
      </div>
      <div className='text-end p-4 text-md sm:text-2xl 2xl:text-3xl tracking-wider text-mygreen'>
        % Daily Value *
      </div>
      <div className='flex flex-col'>
        {
          allValues
          ? (
            units.map((value, index) => {
              return (
                <div className='flex my-2 border-b-4 border-mypink mx-4 pb-2' key={index}>
                  <div className='flex justify-center items-center text-center w-3/5 text-xl sm:text-2xl 2xl:text-3xl tracking-wider text-mygreen'>
                    {value.name} <br /> {value.amount} {value.unit}
                  </div>
                  <div className='flex justify-end items-center text-center py-2 w-2/5 text-xl sm:text-2xl 2xl:text-3xl tracking-wider text-mygreen'>
                    {value.percentOfDailyNeeds} %
                  </div>
                </div>
              )
            })
          ) 
          : (
            units && units.map((value, index) => index < 5 ? (
              <div className='flex my-2 border-b-4 border-mypink mx-4 pb-2' key={index}>
                <div className='flex justify-center items-center text-center w-3/5 text-xl sm:text-2xl 2xl:text-3xl tracking-wider text-mygreen'>
                  {value.name} <br /> {value.amount} {value.unit}
                </div>
                <div className='flex justify-end items-center text-center py-2 w-2/5 text-xl sm:text-2xl 2xl:text-3xl tracking-wider text-mygreen'>
                  {value.percentOfDailyNeeds} %
                </div>
              </div>
            ) : null)
          )
        }
        <div className='flex justify-around w-full py-4'>
          <button className='bg-mypink text-mygreen text-lg px-6 py-1 tracking-wider' onClick={() => setAllValues(!allValues)}>
            { allValues ? "Close" : "More" }
          </button>
        </div>
      </div>
      <span className='mx-4 my-4 text-md sm:text-lg 2xl:text-2xl tracking-wider text-mygreen'>
        * The percentage of daily value indicates how much a nutrient contained in a portion of food contributes to the daily intake. 2,000 calories per day is used for general nutritional advice.
      </span>
    </div>
  )
}

export default NutritionalValue
