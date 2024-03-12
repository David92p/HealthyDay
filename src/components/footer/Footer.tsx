import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';


const Footer:React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col bg-mypink w-full h-auto  text-mygreen pt-4 sm:pt-14 2xl:pt-16' style={{fontFamily: "Salsa"}}>
        <span className='text-center text-3xl sm:text-5xl 2xl:text-7xl tracking-wider font-bold'>Healthy<br/>Day</span>
        <div className='flex w-full mt-8'>
          <div className='w-1/3 flex flex-col justify-start text-center text-mygreen'>
            <span className='text-xl sm:text-4xl 2xl:text-6xl text-center text-mygreen'>Follow us</span>
            <div className='flex flex-col sm:flex-row gap-4 w-full justify-center mt-2 pl-2 mb-5'>
              <FontAwesomeIcon icon={faLinkedin} className='fa-2x cursor-pointer'/>
              <FontAwesomeIcon icon={faInstagram} className='fa-2x cursor-pointer'/>
              <FontAwesomeIcon icon={faGithub} className='fa-2x cursor-pointer'/>
            </div>
          </div>
          <div className='w-1/3 flex flex-col justify-start text-center text-mygreen text-xl'>
            <span className='text-xl sm:text-4xl 2xl:text-6xl text-mygreen leading-normal'>Address</span>
            Healthy Day<br/>
            743 Freedom Lane
            Modesto, California<br/>
            USA 12345
          </div>
          <div className='w-1/3 flex flex-col justify-start text-center text-mygreen'>
            <span className='text-xl sm:text-4xl 2xl:text-5xl text-mygreen'>Contact us</span>
            <FontAwesomeIcon icon={faEnvelope} className='fa-2x cursor-pointer' onClick={() => navigate("/contattaci")}/>
          </div>
        </div>
        <div className='cursor-default flex items-end justify-center pt-4 pb-2 w-full sm:text-lg bg-mypink text-mygreen'>© 2024 | Davide Panetta</div>
      </div>
  )
}

export default Footer
