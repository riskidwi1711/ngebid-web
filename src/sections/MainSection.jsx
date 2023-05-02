import React from 'react';
import './MainSection.css'
import { MainAppImage, SiapImage } from '../assets';

function MainSection(props) {
    return (
        <div className='back-putih'>
            <div id='container-yellow-circle'>
                <div className='yellow-circle'>
                </div>
                <img src={MainAppImage} className='image-main-app' alt="" />
            </div>
            <div id='container-words'>
                <p className='cukup_1_menit'>Cukup 1 menit!</p>
                <p className='desc_cukup_1_menit'>Upload & custom lelangmu sendiri di Ngebid, Auction community platform no.1 di Indonesia. </p>
            </div>
            <div id='container-tag-line'>
                <p className='tag_line'>
                    BUILT FOR YOU, TREASURE HUNTS.
                </p>
                <a className='cobain_ngebid' href="">COBAIN NGEBID!</a>
                <img className='siap-image' src={SiapImage} alt="" />
            </div>
        </div>
    );
}

export default MainSection;