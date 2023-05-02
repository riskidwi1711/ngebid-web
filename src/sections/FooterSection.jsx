import React from 'react';
import './FooterSection.css';
import { HelloPeopleImage, InstagramImage, NgebidLogoWhite, TiktokImage, TwitterImage } from '../assets';

function FooterSection(props) {
    return (
        <div className='back-black'>
            <img src={NgebidLogoWhite} className='ngebid-logo-white-footer' alt="" />
            <p className='address'>The CEO Building, Jl. TB Simatupang
                No. 18 Cilandak, Jakarta Selatan.</p>
            <div className='h-94'></div>
            <p className='email'>info@ngebid.com</p>
            <div className='h-136'></div>
            <div id='container-social' className='flex flex-row justify-center gap-6 sm:gap-16 lg:gap-16 items-center'>
                <a href=""><img src={TwitterImage} alt="" /></a>
                <a href=""><img src={InstagramImage} alt="" /></a>
                <a href=""><img src={TiktokImage} alt="" /></a>
            </div>
            <img src={HelloPeopleImage} className='hellopeopleimage' alt="" />
            <p className='footer-tag'>© 2023 Ngebid | Ngebid adalah merek milik PT.Ngebid Arunika Indonesia.</p>
        </div>
    );
}

export default FooterSection;