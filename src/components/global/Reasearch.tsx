import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import { SearchType, getResearchdata } from '../async'
import { Loading } from '.'
import { useNavigate } from 'react-router-dom'

type ResearchType = {
  title: "Search ingredient" | "Search recipe"
  type: "ingredients" | "recipe" | "exclude"
  setIngredientToExclude?: React.Dispatch<React.SetStateAction<string>>
}

const Research:React.FC<ResearchType> = ({ title, type, setIngredientToExclude }) => {

  const input = useRef<HTMLInputElement | null>(null)!
  const navigate = useNavigate()

  const [searchList, setSearchList] = useState<SearchType[] | null>(null)
  const [search, setSearch] = useState<SearchType | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const toggleResearch = () => {
    if (input.current?.value){
      setIsLoading(true)
      getResearchdata(import.meta.env.VITE_APP_API_KEY, type, input.current?.value)
      .then((res:SearchType[] | null ) => {
        res ? setSearchList(res) : setSearchList(null)
        setIsLoading(false)
      })
    } 
  }

  useEffect(() => {
    if (input.current && search){
      input.current.value = search?.title
      setSearchList(null)
    }
  }, [input, search])

  return (
    <div className={`flex flex-col ${type == "exclude" ? "h-[200px]" : "h-[200px]"} gap-4 cursor-default`} style={{fontFamily: "Salsa"}}>
      <label className='text-3xl sm:text-4xl tracking-wider text-center text-mypink mt-4'>{title}</label>
      <div className='flex justify-center items-center w-full h-1/3 relative'>
        <input ref={input} onChange={toggleResearch} type="text" placeholder={type == "recipe" ? "Spaghetti sauce ..." :  "Tomato ..."} maxLength={30} className={`h-10 w-[90%] sm:w-full 2xl:w-3/4 bg-slate-100 text-mygreen text-3xl px-2 placeholder:text-xl py-2 mx-auto sm:mx-4 rounded-md`}/>
        {
          isLoading 
          ? (
            <div className='flex flex-col w-full 2xl:w-3/4 h-auto p-4 absolute top-full z-10 bg-mygreen bg-opacity-75 text-slate-100'>
              <Loading />
            </div>
          )
          : (
            input.current?.value && searchList 
            ? (
              <div className='flex flex-col w-full 2xl:w-3/4 px-10 sm:px-6 2xl:px-2 pb-2 absolute top-full z-20 tracking-wider bg-mygreen text-slate-100 bg-opacity-75'>
                { 
                  searchList.map(el => {
                    return (
                      <div 
                        onClick={type == "exclude" 
                        ? () => setIngredientToExclude && setIngredientToExclude(el.title)
                        : () => setSearch({id: el.id, title: el.title})
                        } 
                        key={el.id} 
                        className='text-xl sm:text-3xl tracking-wider 2xl:hover:bg-mypink 2xl:hover:text-mygreen'>
                        {el.title}
                      </div>)
                  }) 
                }
              </div>
            )
            : null
          )
        }
      </div>
      {
        type != "exclude"
        ? (
          <div className='flex justify-center items-center w-full h-1/3 z-10'>
          <button 
            onClick={() => (
              search ? (
                type == "recipe" ? navigate(`/ricettario/dettaglio/${search?.id}`) : navigate(`/ingredienti/dettaglio/${search?.id}`)
              ) : null 
            )} 
            className='bg-mypink text-mygreen w-36 sm:w-40 h-8 sm:h-10 rounded-sm text-2xl sm:text-3xl' >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        ) : null
      }
    </div>
  )
}

export default Research