/* eslint-disable */
import React from 'react';
import HousePageContainer from '../container/housePageContainer';
import { Button } from '../../../components';
import Hand from '../../../assets/images/hand.png';
import Deprem from '../../../assets/images/deprem.png';

import '../style/housePageStyles.scss'

const HousePage = () => {
return(
    <HousePageContainer>
    {({}) => {
    return(
        <>
        <div className='home-container'>
            House
        </div>
        </>
      )}}
    </HousePageContainer>
);
}
export default HousePage;
