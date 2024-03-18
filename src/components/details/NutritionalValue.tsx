
type NutritionalValueType = {
  title: string
  units: {name: string, amount: number, unit: string, percentOfDailyNeeds?: number}[]
  portion: {amount: number, unit: string}
  allValues: boolean // boolean se mostrare tutti i valori a schermo 
  name: "nutritionFacts" | "flavonoidsFacts" // titolo della label
  showAllValues: (titleLabel: "nutritionFacts" | "flavonoidsFacts") => void
}

const NutritionalValue:React.FC<NutritionalValueType> = ({title, units, portion, allValues, name,  showAllValues}) => {

  return (
    <div className={`flex flex-col w-full sm:w-1/2 2xl:w-1/3 h-1/2 ${allValues ? "sm:absolute top-72 2xl:top-[550px] sm:left-24 2xl:left-44 sm:w-4/5 2xl:w-4/5 sm:h-auto transition-all z-10" : null} bg-pink-100`} style={{fontFamily: "Salsa"}}>
      <p className='text-mygreen font-bold text-center text-3xl sm:text-2xl 2xl:text-3xl tracking-wider py-4 border-b-8 border-mypink mx-2 2xl:pb-7'>{title}</p>
      <div className={`p-4 text-3xl sm:text-2xl 2xl:text-3xl tracking-wider text-mygreen ${units[0].percentOfDailyNeeds ? "text-left" : "text-center"}`}>
        Amount per { portion.amount } { portion.unit }
      </div>
      { units[0].percentOfDailyNeeds ? <div className='text-end p-4 text-md sm:text-2xl 2xl:text-3xl tracking-wider text-mygreen'>
        % Daily Value *
      </div> : null
      }
      <div className='flex flex-col'>
        {
            allValues ? (
              <div className='grid grid-cols-1 sm:grid-cols-2'>
              {
                units.map((value, index) => {
                  return (
                    <div className='flex my-2 border-b-4 border-mypink mx-4 pb-2' key={index}>
                      <div className={`flex justify-center items-center text-center ${units[0].percentOfDailyNeeds ? "w-3/5" : "w-full"} text-xl sm:text-2xl 2xl:text-3xl tracking-wider text-mygreen`}>
                        {value.name} <br /> {value.amount} {value.unit}
                      </div>
                      {units[0].percentOfDailyNeeds ? <div className='flex justify-end items-center text-center py-2 w-2/5 text-xl sm:text-2xl 2xl:text-3xl tracking-wider text-mygreen'>
                        {value.percentOfDailyNeeds} %
                      </div> : null}
                    </div>
                  )
                })
              }
            </div>   
            )      
          : (
            units && units.map((value, index) => index < 5 ? (
              <div className='flex my-2 border-b-4 border-mypink mx-4 pb-2' key={index}>
                <div className={`flex justify-center items-center text-center ${units[0].percentOfDailyNeeds ? "w-3/5" : "w-full"} text-xl sm:text-2xl 2xl:text-3xl tracking-wider text-mygreen`}>
                  {value.name} <br /> {value.amount} {value.unit}
                </div>
                {units[0].percentOfDailyNeeds ? <div className='flex justify-end items-center text-center py-2 w-2/5 text-xl sm:text-2xl 2xl:text-3xl tracking-wider text-mygreen'>
                  {value.percentOfDailyNeeds} %
                </div> : null}
              </div>
            ) : null)
          )
        }
        {
          units.length > 5 ? (
            <div className='flex justify-around w-full py-4'>
            <button className='bg-mypink text-mygreen text-lg px-6 py-1 tracking-wider' 
              onClick={() => showAllValues(name)}
            >
              { allValues  ? "Close" : "More" }
            </button>
          </div>
          ) : null
        }
      </div>
      {units[0].percentOfDailyNeeds ? (
      <span className='mx-4 my-4 text-md sm:text-lg 2xl:text-2xl tracking-wider text-center text-mygreen'>
        * The percentage of daily value indicates how much a nutrient contained in a portion of food contributes to the daily intake. 2,000 calories per day is used for general nutritional advice.
      </span>) : null}
    </div>
  )
}

export default NutritionalValue
