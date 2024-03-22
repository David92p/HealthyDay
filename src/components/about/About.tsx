import React from 'react'
import about1 from "../../assets/about/about1.jpg"
import { Redirection } from '../global'

const About:React.FC = () => {

    return (
    <div className='flex flex-col w-full h-auto cursor-default bg-mygreen' style={{fontFamily: "Salsa"}}>
        {/* Header */}
        <div className='flex flex-col sm:flex-row-reverse sm:h-[450px] 2xl:h-[600px] w-full items-center px-4 2xl:px-12 py-4 text-slate-100'>
            <img src={about1} alt="About1" className='brightness-75 2xl:brightness-50 object-cover h-full w-full sm:w-1/3 2xl:w-2/3'/>
            <p className='text-slate-100 text-center text-lg sm:text-2xl pt-4 sm:pt-0 sm:mr-4 2xl:mr-20 tracking-wider'>
                Healthy Day was born from the idea of bringing the taste of our cuisine to our tables.
                We think that every single product on our planet is a gift, offered to help us find the perfect balance between body and health. Our recipes are always healthy meals created with love but leaving the choice of diet to follow up to you .<br/>
                Our advice is always to follow a healthy and balanced diet, always favoring a good amount of fruit and vegetables.<br/>
                Don't forget to follow the advice of a nutritionist before embarking on a long-term diet.
            </p>
        </div>
        {/* buttons collegamenti */}
        <Redirection type={"about"} />
        {/* Footer */}
        <div className='w-full sm:h-[400px]  bg-mygreen text-slate-100 text-center p-4 sm:p-10 2xl:p-24 text-lg sm:text-2xl tracking-wider'>
            On behalf of Healthy Day I would like to thank the data service provided by Spoonacular.<br/> 
            This web app was created for educational purposes only in order to enhance my development knowledge.<br/>
            If you think you want to make some changes or improvements please contact me via the form and visit my GitHub profile in the contacts.<br/>
            For any collaboration I remain available, a healthy greeting from Healty Day!
        </div>
    </div>
  )
}

export default About

