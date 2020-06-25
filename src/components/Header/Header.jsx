import React from 'react';
import './Header.css';
import Logo from '../../assets/images/logo.png';


const Header = () => (
    <div className="Header">
        <img src={Logo} alt="" className="Logo"/>
        <div className="" style={{ marginLeft: 20, overflow: 'hidden',
                display: 'flex', justifyContent: 'center',
                flex: 1,
            }}>
            <h1 style={{fontWeight: 'lighter'}}>Mayowa Bello</h1>
        </div>
        <div className="Contact">
            <button>Contact</button>
        </div>
    </div>
)

export default Header;