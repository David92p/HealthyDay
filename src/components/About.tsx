import React from 'react'

import about1 from "../../src/assets/about/about1.jpg"
import { useNavigate } from 'react-router-dom'

const About:React.FC = () => {

    const navigate = useNavigate()

    return (
    <div className='flex flex-col w-full h-auto cursor-default' style={{fontFamily: "Salsa"}}>
        {/* Header */}
        <div className='flex flex-col sm:flex-row-reverse sm:h-[450px] 2xl:h-[600px] w-full items-center px-4 2xl:px-12 py-4 bg-mygreen'>
            <img src={about1} alt="About1" className='brightness-75 2xl:brightness-50 object-cover h-full w-full sm:w-1/3 2xl:w-2/3'/>
            <p className='text-slate-100 text-center text-lg sm:text-2xl pt-4 sm:pt-0 sm:mr-4 2xl:mr-20 tracking-wider'>
                Buongiorno Salute nasce dall'idea di portare sulle nostre tavole tutto ciò che la terra ha da offrirci.<br/>
                Pensiamo che ogni singolo prodotto creato dal nostro pianeta e dai suoi essere viventi sia un dono, offerto per aiutarci a trovare il perfetto equilibrio tra corpo e salute.<br/>
                Scroprire tutte le nostre ricette e prenderne spunto  sarà il primo passo verso per raggiungere il perfetto equilibrio tra corpo e salute.
            </p>
        </div>
        {/* buttons collegamenti */}
        <div className='flex flex-col 2xl:h-[400px] justify-center 2xl:justify-around gap-6 items-center py-10 bg-mypink tracking-wider'>
            <p className='text-3xl 2xl:text-5xl text-center tracking-wider'>Consulta subito i <br />nostri piani</p>
            <div className='flex w-full flex-wrap justify-center gap-4 px-4'>
                <button onClick={() => navigate("/ingredienti")} className='bg-mygreen text-mypink px-auto w-32 sm:w-40 2xl:w-48 h-10 sm:h-10 2xl:h-14 rounded-sm text-xl sm:text-3xl' >Ingredienti</button>
                <button onClick={() => navigate("/ricettario")} className='bg-mygreen text-mypink px-auto w-32 sm:w-40 2xl:w-48 h-10 sm:h-10 2xl:h-14 rounded-sm text-xl sm:text-3xl' >Ricettario</button>
                <button onClick={() => navigate("/pianifica")} className='bg-mygreen text-mypink px-auto w-32 sm:w-40 2xl:w-48 h-10 sm:h-10 2xl:h-14 rounded-sm text-xl sm:text-3xl' >Pianifica</button>
            </div>
        </div>
        {/* Footer */}
        <div className='w-full sm:h-[400px]  bg-mygreen text-slate-100 text-center p-4 sm:p-10 2xl:p-24 text-lg sm:text-2xl tracking-wider'>
            E' posizione dell'Academy of Nutrition and Dietetics che le diete vegetariane correttamente pianificate, comprese le diete totalmente vegetariane o vegane, sono salutari, nutrizionalmente adeguate e possono apportare benefici per la salute nella prevenzione e nel trattamento<br/> di alcune patologie.<br/>
            Queste diete sono adatte in tutti gli stadi del ciclo vitale, inclusi la gravidanza, l'allattamento, la prima e la seconda infanzia, l'adolescenza, l'età adulta, per gli anziani e per gli atleti.
        </div>
    </div>
  )
}

export default About

