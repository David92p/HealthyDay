import React from 'react'
// immagini
import home1 from "../assets/home/home1.jpg";
import home2 from "../assets/home/home2.jpg";
import home3 from "../assets/home/home3.jpg";
import home4 from "../assets/home/home4.jpg";
import home5 from "../assets/home/home5.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';


const Home:React.FC = () => {
  const navigate = useNavigate()
  
  return (
   <div className='flex flex-col cursor-default' style={{fontFamily: "Salsa"}}>
      {/* introduzione */}
      <div className='flex flex-col sm:flex-row h-auto 2xl:h-[600px] w-full bg-mygreen py-8 sm:py-14 2xl:py-40 px-4 sm:px-10 2xl:px-16'>
        <span className='align-text-top sm:w-1/3 text-mypink text-3xl sm:text-5xl 2xl:text-7xl sm:mr-5'>Ciao! <br /> Siamo su <br />Buongiorno Salute</span>
        <span className='sm:w-2/3 text-slate-100 tracking-wider text-xl sm:text-3xl mt-6 mb-2 sm:mt-0 sm:ml-5'>
          Ci siamo appena trasferiti nel quartiere, ma è come se fossimo qui da sempre! Ci avete accolto come vecchi amici, passando con sorrisi pronti e appetito desideroso.
          <br />Ecco perché promettiamo di prenderci cura della tua salute tramite prodotti sani e serviti con sorrisi calorosi.<br /> Siamo una famiglia adesso. Ed è così che cuciniamo per chi amiamo.
          <br />Benvenuto a casa.
        </span>
      </div>
      {/* spazio ingredienti */}
      <div className='flex flex-col sm:flex-row-reverse h-auto w-full bg-slate-100 pt-8 sm:pt-16 2xl:pt-24 px-4 sm:px-10 2xl:px-16'>
        <div className='sm:w-3/5'>
          <img src={home1} alt="home2" className='brightness-75 2xl:brightness-50 object-cover h-full 2xl:h-[700px] w-full'/>
        </div>
        <div className='flex flex-col sm:w-4/5 2xl:w-2/5 text-mygreen mt-6 sm:mt-0 sm:mr-5'>
          <span className='text-3xl sm:text-5xl 2xl:text-7xl'>Inizia da quì</span>
          <span className='text-xl sm:text-3xl mt-4'>Lavoriamo tutti insieme per portare sulla tua tavola il gusto della salute.<br/>Prova le nostre specilità iniziando da quì.</span>
          <br />
          <ul className='text-xl sm:text-3xl list-disc ml-6'>
            <li className='mb-2'>Sano come vuoi tu</li>
            <li className='mb-2'>Vitamine per la mente e il corpo</li>
            <li className='mb-2'>Proteine di qualità.</li>
            <li>Scegli il tuo sapore</li>
          </ul>
          <button onClick={() => navigate("ricettario")} className='bg-mypink text-mygreen w-36 sm:w-40 h-8 sm:h-10 rounded-sm mx-auto my-6 text-xl sm:text-3xl' >Inizia</button>
        </div>
      </div>
      {/* spazio pasti 3 card  */}
      <div className='flex flex-col sm:flex-row sm:h-[700px] w-full bg-slate-100 pt-8 sm:py-16 px-4 sm:px-10 2xl:px-16 sm:gap-4 text-xl sm:text-3xl text-mygreen'>
        <div className='flex flex-col sm:w-1/3 cursor-pointer  '>
          <img className='brightness-75 2xl:brightness-50 2xl:hover:brightness-100 object-cover h-full w-full' src={home2} />
          <button className='bg-mypink h-12'>Colazione</button>
        </div>
        <div className='flex flex-col sm:w-1/3 mt-4 sm:mt-0 cursor-pointer'>
          <img className='brightness-75 2xl:brightness-50 2xl:hover:brightness-100 object-cover h-full w-full' src={home3} />
          <button className='bg-mypink h-12'>Pranzo</button>
        </div>
        <div className='flex flex-col sm:w-1/3 my-4 sm:my-0 cursor-pointer'>
          <img className='brightness-75 2xl:brightness-50 2xl:hover:brightness-100 object-cover h-full w-full' src={home4} />
          <button className='bg-mypink h-12'>Cena</button>
        </div>
      </div>
      {/* spazio about e collegamenti  */}
      <div className='flex flex-col sm:flex-row h-auto 2xl:h-[550px] w-full bg-mygreen py-8 sm:py-14 2xl:py-auto px-4 sm:px-10 2xl:px-16'>
        <span className='sm:w-2/5 align-text-top text-mypink text-3xl sm:text-5xl 2xl:text-7xl sm:mr-5'>Colorati di Sano</span>
        <div className='sm:w-3/5 flex flex-col text-slate-100 mt-6 sm:mt-0'>
          <span className='text-2xl sm:text-4xl 2xl:text-6xl'>Consulta</span>
          <span className='text-lg sm:text-2xl sm:mt-4'>Cerca le ricetta che soddisfino il tuo palato!</span>
          <span className='text-2xl sm:text-4xl 2xl:text-6xl mt-5'>Prepara</span>
          <span className='text-lg sm:text-2xl sm:mt-4'>Procurati gli ingredienti consigliati e accendi i fornelli, il tuo corpo aspetta di colorarsi di sano!</span>
          <span className='text-2xl sm:text-4xl 2xl:text-6xl mt-5'>Gusta</span>
          <span className='text-lg sm:text-2xl sm:mt-4'>Rilassati e gusta il tuo piatto, che sia un break veloce o un pasto principale. Gusta la Salute!</span>
        </div>
      </div>
      {/* Saluti  */}
      <div className='flex justify-center relative h-64 sm:h-80 2xl:h-[400px] w-full'>
        <img src={home5} alt="home1" className='brightness-50 object-cover h-full w-full'/>
        <h1 className='text-mypink text-3xl sm:text-5xl 2xl:text-7xl font-bold tracking-wider absolute text-center my-14 sm:my-16 mx-4 sm:mx-0'>Ti aspettano pasti<br/>sani e genuini.<br/><br/>A presto!</h1>
      </div>
      {/* footer e contatti */}
      <div className='flex flex-col bg-mypink w-full h-auto  text-mygreen pt-6 sm:pt-14 2xl:pt-16'>
        <span className='text-center text-3xl sm:text-5xl 2xl:text-7xl tracking-wider font-bold'>Buongiorno<br/>Salute</span>
        <div className='flex w-full mt-8'>
          <div className='w-1/3 flex flex-col justify-start text-cente text-mygreenr'>
            <span className='text-xl sm:text-4xl 2xl:text-6xl text-center text-mygreen'>Seguici</span>
            <div className='flex flex-col sm:flex-row gap-4 w-full justify-center mt-2 pl-2 mb-5'>
              <FontAwesomeIcon icon={faLinkedin} className='fa-2x cursor-pointer'/>
              <FontAwesomeIcon icon={faInstagram} className='fa-2x cursor-pointer'/>
              <FontAwesomeIcon icon={faGithub} className='fa-2x cursor-pointer'/>
            </div>
          </div>
          <div className='w-1/3 flex flex-col justify-start text-center text-mygreen text-xl'>
            <span className='text-xl sm:text-4xl 2xl:text-6xl text-mygreen'>Indirizzo</span>
            Buongiorno Salute<br/>
            743 Freedom Lane
            Modesto, California<br/>
            USA 12345
          </div>
          <div className='w-1/3 flex flex-col justify-start text-center text-mygreen'>
            <span className='text-xl sm:text-4xl 2xl:text-5xl text-mygreen'>Contattaci</span>
            <FontAwesomeIcon icon={faEnvelope} className='fa-2x cursor-pointer' onClick={() => navigate("/contattaci")}/>
          </div>
        </div>
      </div>
   </div> 
  )
}

export default Home
