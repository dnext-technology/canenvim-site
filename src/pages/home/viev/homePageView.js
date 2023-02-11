/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomePageContainer from '../container/homePageContainer';
import { Button } from '../../../components';
import Hand from '../../../assets/images/hand.png';
import Deprem from '../../../assets/images/deprem.png';
import axios from 'axios';

import '../style/homePageStyles.scss'

const HomePage = () => {
    const navigate = useNavigate();

return(
    <HomePageContainer>
    {({}) => {
    const [data, setData] = useState([])
    const [offerer, setOfferer] = useState({})
    const [requester, setRequester] = useState({})


    useEffect(() => {
        async function fetchData() {
            await axios({
              method: 'GET', url: `https://zorgundostu.com/api/mp-booking/v1/bookings/stats`
            })
              .then(async response => {
                setData(response.data)
                setOfferer(response.data && response.data.find(fil => fil.type === "offerer"))
                setRequester(response.data && response.data.find(fil => fil.type === "requester"))
              })
              .catch(error => {
                return error
              });
            
          }
        fetchData();
      }, []);
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
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                    {data && data.length > 0 &&
                        <div style={{ boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.1)", borderRadius: 24,minWidth: 250, backgroundColor: "#fff", padding: "10px 15px", marginBottom: 20}}>
                            <p style={{ color: "#D42E13", fontWeight: 700}}>Konaklama Talep Eden</p>
                            <p style={{ color: "#262626", fontWeight: 700, fontSize: 30, margin: 0, padding: 0 }}>{requester.capacity} <span style={{ color: "#8D8D8D", fontSize: 18}}>Yatak</span></p>
                        </div>
                    }
                    <Button
                        onClick={() => navigate('guest')}
                        text="Konaklamaya İhtiyacım Var" 
                        styleProps={{border: "2px solid #d63215",borderRadius: 48,padding: "10px 50px",backgroundColor: "#D42E13",color: "#fff", boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.25)"}}
                    />
                </div>
                <div className="requester">
                    {data && data.length > 0 &&
                        <div style={{ boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.1)", borderRadius: 24,minWidth: 250, backgroundColor: "#fff", padding: "10px 15px", marginBottom: 20}}>
                            <p style={{ color: "#D42E13", fontWeight: 700}}>Misafir Etmek İsteyen </p>
                            <p style={{ color: "#262626", fontWeight: 700, fontSize: 30, margin: 0, padding: 0 }}>{offerer.capacity} <span style={{ color: "#8D8D8D", fontSize: 18}}>Yatak</span></p>
                        </div>
                    }
                    <Button 
                        onClick={() => navigate('house')}
                        text="Konaklamaya Uygun Yerim Var" 
                        styleProps={{border: "2px solid #d63215",borderRadius: 48,padding: "10px 50px",backgroundColor: "#D42E13",color: "#fff", boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.25)"}}
                    />
                </div>
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
                <div > Hakkımızda</div>
                <p> Felaketlerden etkilenen insanlara yönelik ihtiyaçların karşılanmasını hedefliyoruz.</p>
            </div>

            <div className='bottom-right'>
                <div >
                 <p>Deprem felaketinden etkilenen insanlarımız ile evini açıp misafir kabul edeceklerin birbirlerine ulaşabilmelerine aracı olmak istiyoruz.</p>   
                </div>
                <div className='info-button'>
                    <Button 
                        onClick={() => navigate('about')}
                        text="Bilgi Alın" 
                        styleProps={{border: "1px solid #323232",borderRadius: 48,padding: "10px 50px",backgroundColor: "#323232",color: "#FFFFFF", boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.25)"}}
                    />
                </div>
            </div>
            
            
            </div>
            
        </div>
        </>
      )}}
    </HomePageContainer>
);
}
export default HomePage;
