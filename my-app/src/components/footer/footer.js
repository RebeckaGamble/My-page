import React from 'react'
import '../../styles/footer.css'
import  { FaFacebookSquare, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {

  return (
    <div className='footer'>
        <div className="cont-left">
            <h1 className='contact'>Kontakt</h1>
            <h3 className='contact-info'>Mejl</h3>
            <a className='linkbtn' rel="noopener noreferrer" href="mailto: rebeckagamble@hotmail.com" target="_blank">rebeckagamble@hotmail.com</a>
            <h3 className='contact-info'>Mobil</h3>
            <p className='contact-content'>073 984 11 87</p>
        </div>

        <div className="cont-right">
            <h1 className='contact'>Social media</h1>
            <a className='linkbtn' rel="noopener noreferrer" href="https://https://www.github.com/RebeckaGamble" target="_blank"><FaGithub />GitHub</a>
            <a className='linkbtn' rel="noopener noreferrer" href="https://www.linkedin.com/in/rebecka-gamble-395803198" target="_blank"><FaLinkedin />Linkedin</a>
            <a className='linkbtn' rel="noopener noreferrer" href="https://www.instagram.com/" target="_blank"><FaInstagram />Instagram</a>
            <a className='linkbtn' rel="noopener noreferrer" href="https://www.facebook.com/" target="_blank"><FaFacebookSquare />Facebook</a>
        </div>
    
    
    </div>
  )
}

export default Footer