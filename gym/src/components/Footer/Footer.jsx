import React from 'react'
import './Footer.css'
import Git from '../../assets/github.png'
import Linkedin from '../../assets/linkedin.png'
import Instagram from '../../assets/instagram.png'
import Logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <hr />
            <div className='feedback'>
                <div className='social-media'>
                    <img src={Git} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={Linkedin} alt="" />
                </div>
                <img src={Logo} alt="" />
            </div>
        </div>
    )
}
export default Footer;
