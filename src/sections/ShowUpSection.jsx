import React from 'react';
import './ShowUpSection.css';
import { BeSellerImage, CheckImage, LightningImage, OrholdImage, PapanImage, PersonWithLight } from '../assets';

function ShowUpSection(props) {
    return (
        <div className='orhold_container'>
            <div className=' bg-yellow-700 orhold' >
            </div>
            <div className='container-box'>
                <img className='lightning' src={LightningImage} alt="" />
                <div className='box-1 flex justify-start pt-10 flex-col items-center'>
                    <p className='jadi-pelelang'>Jadi pelelang?</p>
                    <div className='flex flex-row justify-center items-center'><p className='jadi-pelelang'>Bisa</p> <img className='check' src={CheckImage} alt="" /></div>
                    <div className='space-31'></div>
                    <div className='be-seller'></div>
                </div>
                <div className='box-2 flex justify-start pt-10 flex-col items-center'>
                    <p className='jadi-pelelang'>Ikutan lelang?</p>
                    <div className='flex flex-row justify-center items-center'><p className='jadi-pelelang'>Bisa</p> <img className='check' src={CheckImage} alt="" /></div>
                    <div className='space-31'></div>
                    <div className='be-bidder'></div>
                </div>
                <img className='person-with-senter' src={PersonWithLight} alt="" />
            </div>
            <div className='text-show-up'>
                <p className='title-show-up'>Cukup 1 menit!</p>
                <p className='desc-show-up'>Upload & custom lelangmu sendiri di Ngebid, Auction <strong>community platform</strong> no.1 di Indonesia. </p>
            </div>
        </div>
    );
}

export default ShowUpSection;