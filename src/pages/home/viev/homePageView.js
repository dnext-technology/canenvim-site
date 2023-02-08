/* eslint-disable */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomePageContainer from '../container/homePageContainer';
import { Button } from '../../../components';
import Hand from '../../../assets/images/hand.png';
import Deprem from '../../../assets/images/deprem.png';

import '../style/homePageStyles.scss'

const HomePage = () => {
    const navigate = useNavigate();

return(
    <HomePageContainer>
    {({}) => {
    return(
        <>
        <div className='home-container'>
            <div className='text1'>
                Birbirimizin Yanındayız
            </div>
            <div className='text2'>
                Deprem felaketinden etkilenen insanlarımıza yardım edebiliriz.
            </div>
            <div className='button-container'>
                <Button
                    onClick={() => navigate('guest')}
                    text="Konaklama İhtiyacım Var" 
                    styleProps={{border: "2px solid #d63215",borderRadius: 48,padding: "10px 50px",backgroundColor: "#D42E13",color: "#fff", boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.25)"}}
                />
                <Button 
                    onClick={() => navigate('house')}
                    text="İnsanları Misafir Edebilirim" 
                    styleProps={{border: "2px solid #d63215",borderRadius: 48,padding: "10px 50px",backgroundColor: "#D42E13",color: "#fff", boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.25)"}}
                />
            </div>
            <div>
                <img alt="logo" className="logo-hand" src={Hand} />
            </div>

        </div>
        <div className='home-bottom'>
            <img alt="logo" className="deprem-img" src={Deprem} />
            <div> hakkımızda</div>
            <div>
                <p>
                <span onClick={() => navigate('privacy')}>Gizlilik Sözleşmesi</span> </p>
            </div>
        </div>
        </>
      )}}
    </HomePageContainer>
);
}
export default HomePage;
