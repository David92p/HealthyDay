import React from 'react'
// immagini
import home1 from "../../assets/home/home1.jpg";
import home2 from "../../assets/home/home2.jpg";
import home3 from "../../assets/home/home3.jpg";
import home4 from "../../assets/home/home4.jpg";
import home5 from "../../assets/home/home5.jpg";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


const Home:React.FC = () => {
  const navigate = useNavigate()
  
  return (
    <div className='flex flex-col cursor-default' style={{fontFamily: "Salsa"}}>
      {/* introduzione */}
      <div className='flex flex-col sm:flex-row h-auto 2xl:h-[500px] w-full bg-mygreen pt-4 sm:py-16 2xl:py-28 px-4 sm:px-8 2xl:px-10'>
        <span className='align-text-top sm:w-1/3 text-mypink text-3xl sm:text-5xl 2xl:text-7xl sm:mr-5'>Hi!<br/>We're up<br/>Healthy day</span>
        <span className='sm:w-2/3 text-slate-100 tracking-wider text-xl sm:text-3xl mt-4 mb-4 sm:mt-0 sm:ml-5 leading-normal'>
        We just moved into the neighborhood, but it's like we've been here forever! You welcomed us like old friends, passing by with ready smiles and eager appetites.
        <br />That's why we promise to take care of your health through healthy products and served with warm smiles.<br /> We are a family now. And this is how we cook for those we love.
        <br />Welcome home.
        </span>
      </div>
      {/* spazio main con ricette link */}
      <div className='flex flex-col sm:flex-row-reverse h-auto w-full bg-pink-100 pt-4 sm:pt-16 2xl:pt-24 px-4 sm:px-6 2xl:px-10'>
        <div className='sm:w-3/5'>
          <img src={home1} alt="home2" className='brightness-75 2xl:brightness-50 object-cover h-full 2xl:h-[700px] w-full'/>
        </div>
        <div className='flex flex-col sm:w-4/5 2xl:w-2/5 text-mygreen mt-6 sm:mt-0 sm:mr-5'>
          <span className='text-3xl sm:text-5xl 2xl:text-7xl'>Start from here</span>
          <span className='text-xl sm:text-3xl mt-4 leading-normal'>We all work together to bring healthy and genuine flavors to your table.<br/>Try our specialties starting here.</span>
          <br />
          <ul className='text-xl sm:text-3xl list-disc ml-6'>
            <li className='mb-2'>Healthy as you want</li>
            <li className='mb-2'>Vitamins for mind and body</li>
            <li className='mb-2'>Quality proteins</li>
            <li>Choose your flavor</li>
          </ul>
          <button onClick={() => navigate("ricettario")} className='bg-mypink text-mygreen w-36 sm:w-40 h-8 sm:h-10 rounded-sm mx-auto my-6 text-xl sm:text-3xl' >Start</button>
        </div>
      </div>
			{/* spazio pasti 3 card  */}
			<div className='flex flex-col sm:flex-row 2xl:justify-between sm:h-[700px] w-full bg-pink-100 pt-8 sm:pb-6 px-4 sm:px-6 2xl:px-10 sm:gap-4 text-xl sm:text-3xl text-mygreen'>
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='flex flex-col sm:w-1/3 2xl:h-[550px] 2xl:w-[400px] cursor-pointer sm:mt-4 2xl:mt-10'
          onClick={() => navigate("ingredienti")} 
        >
					<img className='brightness-75 2xl:brightness-50 2xl:hover:brightness-100 object-cover h-full w-full' src={home2} />
					<button className='bg-mypink h-12'>Ingredients</button>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='flex flex-col sm:w-1/3 2xl:h-[550px] 2xl:w-[400px] cursor-pointer mt-4 2xl:mt-10'
          onClick={() => navigate("ricettario")} 
        >
					<img className='brightness-75 2xl:brightness-50 2xl:hover:brightness-100 object-cover h-full w-full' src={home3} />
					<button className='bg-mypink h-12'>Recipes</button>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='flex flex-col sm:w-1/3 2xl:h-[550px] 2xl:w-[400px] cursor-pointer my-4 sm:mt-4 sm:mb-0 2xl:mt-10'
          onClick={() => navigate("pianifica")} 
        >
					<img className='brightness-75 2xl:brightness-50 2xl:hover:brightness-100 object-cover h-full w-full' src={home4} />
					<button className='bg-mypink h-12'>Planner</button>
        </motion.div>
      </div>
			{/* spazio about e collegamenti  */}
      <div className='flex flex-col sm:flex-row h-auto 2xl:h-[550px] w-full bg-mygreen py-8 sm:py-14 2xl:py-auto px-4 sm:px-6 2xl:px-10'>
        <span className='sm:w-2/5 align-text-top text-mypink text-3xl sm:text-5xl 2xl:text-7xl sm:mr-5 2xl:mr-10'>Healthy and Genuine</span>
        <div className='sm:w-3/5 flex flex-col text-slate-100 mt-6 sm:mt-0 2xl:mt-4'>
          <span className='text-2xl sm:text-3xl 2xl:text-5xl'>Consult</span>
          <span className='text-lg sm:text-2xl sm:mt-4 leading-normal'>Search for the recipe that satisfies your palate!</span>
          <span className='text-2xl sm:text-3xl 2xl:text-5xl mt-5'>Prepare</span>
          <span className='text-lg sm:text-2xl sm:mt-4 leading-normal'>Get the recommended ingredients and turn on the stove, your body is waiting for a healthy glow!</span>
          <span className='text-2xl sm:text-3xl 2xl:text-5xl mt-5'>Enjoy</span>
          <span className='text-lg sm:text-2xl sm:mt-4 leading-normal'>Relax and enjoy your dish, whether it's a quick break or a main meal. Enjoy the goodness!</span>
        </div>
      </div>
      {/* Saluti  */}
      <div className='flex justify-center relative h-64 sm:h-80 2xl:h-[400px] w-full'>
        <img src={home5} alt="home1" className='brightness-50 object-cover h-full w-full'/>
        <h1 className='text-mypink text-3xl sm:text-5xl 2xl:text-7xl font-bold tracking-wider absolute text-center my-14 sm:my-16 mx-4 sm:mx-0'>Healthy and tasty meals<br/>await you.<br/><br/>See you soon!</h1>
      </div>
    </div> 
  )
}

export default Home
