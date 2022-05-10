import React, { useState } from 'react'
import jag from '../images/jag1.jpg'
import '../styles/index.css'
import Img from '../images/woods.jpg'
import Image from '../images/odling.jpg'


  


const Home = () => {
  const [show , setShow] = useState(false);
    const handleOnClick = () => {
    setShow(true);
    }
    
  return (
    
    <div className='all'>
      
      <div className='img'>
        <img src={jag} alt="jag" style={{
          borderRadius: "10px",
          border: "5px solid black",
        }}/>
      </div>
      <h1>Rebecka Gamble</h1>

      <div className='picture'>
        <h3 className='like'>Något jag gillar:</h3>
        <button className='click' onClick={handleOnClick}>Visa bild</button>
        {
          show && <img className='img-show' src={Img} alt="skogen" />  
        }

        {
          show &&  "Skogen"
        }

        {
          show && <img className='img-show2' src={Image} alt="odling" />
        }
        {
          show &&  "Odling"
        }
      </div>

      <div className='cd'></div>
    </div>
  )
}

export default Home