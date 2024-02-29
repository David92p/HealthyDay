import React from 'react'

const Header:React.FC = () => {
  return (
		<div  className='flex flex-col sm:flex-row h-auto 2xl:h-[500px] w-full bg-mygreen pt-4 sm:py-16 2xl:py-28 px-4 sm:px-8 2xl:px-10'>
      <span className='align-text-top sm:w-1/3 text-mypink text-3xl sm:text-5xl 2xl:text-7xl sm:mr-5'>Eat with taste and order, plan your health!</span>
      <span className='sm:w-2/3 text-slate-100 tracking-wider text-xl sm:text-3xl mt-4 mb-4 sm:mt-0 sm:ml-5'>
				Do you know what the first rule is for your nutritional balance? <br/> 
				Plan your well-being! It is important to find the right balance between mind and body. <br/>
				We have selected the best nutritional plans for your needs, always respecting your balance.<br/> 
				Try our health plan generator now!
      </span>
    </div>
  )
}

export default Header
