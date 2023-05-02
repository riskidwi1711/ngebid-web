import React from 'react';
import Header from '../components/Header';
import MainSection from '../sections/MainSection';
import ShowUpSection from '../sections/ShowUpSection';
import GetAppSection from '../sections/GetAppSection';
import FooterSection from '../sections/FooterSection';

function Main(props) {
    return (
        <div className='font-default'>
            <Header/>
            <MainSection/>
            <ShowUpSection/>
            <GetAppSection/>
            <FooterSection/>
        </div>
    );
}

export default Main;