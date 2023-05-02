import React from 'react';
import { NgebidLogoBlack } from '../assets';
import './style.css';

function Header(props) {
    return (
        <div className='header'>
           <div className='w-100'>
           <img className='ngebid-logo' src={NgebidLogoBlack} alt=""/>
           </div>
        </div>
    );
}

export default Header;