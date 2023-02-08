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
                Deprem felaketinden etkilenen vatandaşlarımıza yardım edebiliriz.
            </div>
            <div className='button-container'>
                <Button
                    onClick={() => navigate('guest')}
                    text="Konaklamaya İhtiyacım Var" 
                    styleProps={{border: "2px solid #d63215",borderRadius: 48,padding: "10px 50px",backgroundColor: "#D42E13",color: "#fff", boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.25)"}}
                />
                <Button 
                    onClick={() => navigate('house')}
                    text="Konaklamaya Uygun Yerim Var" 
                    styleProps={{border: "2px solid #d63215",borderRadius: 48,padding: "10px 50px",backgroundColor: "#D42E13",color: "#fff", boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.25)"}}
                />
            </div>
            <div>
                <img alt="logo" className="logo-hand" src={Hand} />
            </div>

        </div>
        <div className='home-bottom1'>
            <div>
                <img alt="logo" className="deprem-img1" src={Deprem} />
            </div>
            
            <div className='home-bottom-bottom'>
            <div className= "bottom-left">
                <div> Hakkımızda</div>
                <p>Felaketlerden etkilenen insanlarımıza ulaşmanız için aracı olmak istiyoruz.</p>
            </div>

            <div className='bottom-right'>
                <div >
                 <p>Deprem felaketinden etkilenen insanlarımız ile evini açıp misafir kabul edeceklerin birbirlerine ulaşabilmelerine aracı olmak istiyoruz.</p>   
                </div>
                <Button 
                    onClick={() => navigate('about')}
                    text="Bilgi Alın" 
                    styleProps={{border: "1px solid #323232",borderRadius: 48,padding: "10px 50px",backgroundColor: "#323232",color: "#FFFFFF", boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.25)"}}
                />
            </div>
            
            
            </div>
            
        </div>
        </>
      )}}
    </HomePageContainer>
);
}
export default HomePage;
