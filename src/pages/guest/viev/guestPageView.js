/* eslint-disable */
import React from 'react';
import GuestPageContainer from '../container/guestPageContainer';
import { Button } from '../../../components';
import Hand from '../../../assets/images/hand.png';
import Deprem from '../../../assets/images/deprem.png';

import '../style/guestPageStyles.scss'

const GuestPage = () => {
return(
    <GuestPageContainer>
    {({}) => {
    return(
        <>
        <div className='home-container'>
            Guest
        </div>
        </>
      )}}
    </GuestPageContainer>
);
}
export default GuestPage;
