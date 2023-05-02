import React from 'react';
import './GetAppSection.css';
import { AppleLogo, BidderImage, GroupAppImages, NgebidImages, PlaystoreLogo, SmokeImage } from '../assets';

function GetAppSection(props) {
    return (
        <div className='back-blue'>
            <img className='bidder-image' src={BidderImage} alt="" />
            <div className='flex flex-row justify-around items-center h-full'>
                <div className='get-container'>
                    <p className='get-desc'>Belum punya aplikasi Ngebid? Cus, download gratis sekarang!</p>
                    <div className=' h-12'></div>
                    <div>
                        <a className='btn-get-appstore sm:mr-2 lg:mr-6 mr-2' href=""><i className='fab fa-apple'></i> App Store</a>
                        <a className='btn-get-playstore' href=""><i class="fab fa-google-play"></i> Play Store</a>
                    </div>
                </div>
                <img className='ngebid-app-images' src={NgebidImages}  alt="" />
            </div>
            <img className='smokeperson' src={SmokeImage} alt="" />
            <img className='group-app-image' src={GroupAppImages} alt="" />
        </div>
    );
}

export default GetAppSection;