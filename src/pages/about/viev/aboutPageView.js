/* eslint-disable */
import React from 'react';
import AboutPageContainer from '../container/aboutPageContainer';
import { Button } from '../../../components';
import Hand from '../../../assets/images/hand.png';
import Deprem from '../../../assets/images/deprem.png';

import '../style/aboutPageStyles.scss'

const AboutPage = () => {
return(
    <AboutPageContainer>
    {({}) => {
    return(
        <>
        <div className='home-container'>
            about page
        </div>
        </>
      )}}
    </AboutPageContainer>
);
}
export default AboutPage;
