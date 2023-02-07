/* eslint-disable */
import React from 'react';
import HomePageContainer from '../container/homePageContainer';
import { Button } from '../../../components';

import '../style/homePageStyles.scss'

const HomePage = () => {
return(
    <HomePageContainer>
    {({}) => {
    return(
        <div className='home-container'>
            <div className='text1'>
                Birbirimizin Yanındayız
            </div>
            <div className='text2'>
                Deprem felaketinden etkilenen insanlarımıza yardım edebiliriz.
            </div>
            <div className='button-container'>
                <Button 
                    text="Konaklama İhtiyacım Var" 
                    styleProps={{border: "2px solid #d63215",borderRadius: 15,padding: "10px 50px",backgroundColor: "#d63215",color: "#fff"}}
                />
                <Button 
                    text="İnsanları Misafir Edebilirim" 
                    styleProps={{border: "2px solid #d63215",borderRadius: 15,padding: "10px 50px",backgroundColor: "#d63215",color: "#fff"}}
                />
            </div>

        </div>
      )}}
    </HomePageContainer>
);
}
export default HomePage;
