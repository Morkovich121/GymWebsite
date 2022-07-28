import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'

const Header = () => {

    const mobile = document.documentElement.clientWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false);

    return (
        <div className="header">

            <img src={Logo} alt="" className='logo'></img>
            {(menuOpened === false && mobile === true) ? (
                <div
                    style={{
                        backgroundColor: 'var(--appColor)',
                        padding: '0.5rem', borderRadius: '10px',
                        cursor: 'pointer'
                    }}

                    onClick={() => setMenuOpened(true)}
                ><img src={Bars} alt="" style={{ width: '1.5rem', height: '1.5rem' }} /></div>
            ) : <ul className='header-menu'>
                <li onClick={() => setMenuOpened(false)}><a href='#hero'>Home</a></li>
                <li onClick={() => setMenuOpened(false)}><a href='#programs'>Programs</a></li>
                <li onClick={() => setMenuOpened(false)}><a href='#reasons'>Why us</a></li>
                <li onClick={() => setMenuOpened(false)}><a href='#plans'>Plans</a></li>
                <li onClick={() => setMenuOpened(false)}><a href='#testimonials'>Testimonials</a></li>
            </ul>}
        </div>
    )
}

export default Header;
