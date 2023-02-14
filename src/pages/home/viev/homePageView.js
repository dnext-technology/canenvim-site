/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomePageContainer from "../container/homePageContainer";
import { Button } from "../../../components";
import { FaHandsHelping, FaHandHoldingHeart, FaBook, FaChild  } from 'react-icons/fa';
import Hand from "../../../assets/images/hand.png";
import Deprem from "../../../assets/images/deprem.png";
import Heart from "../../../assets/images/heart.png";
import HeartHand from "../../../assets/images/hearthand.png";
import axios from "axios";

import "../style/homePageStyles.scss";

const HomePage = () => {
  const { REACT_APP_BASE_URL, REACT_APP_BOOKING_API } = process.env;
  const navigate = useNavigate();

  return (
    <HomePageContainer>
      {({}) => {
        const [data, setData] = useState([]);
        const [offerer, setOfferer] = useState({});
        const [requester, setRequester] = useState({});

        useEffect(() => {
          async function fetchData() {
            await axios({
              method: "GET",
              url: `${REACT_APP_BASE_URL}${REACT_APP_BOOKING_API}/bookings/stats`,
            })
              .then(async (response) => {
                setData(response.data);
                setOfferer(
                  response.data &&
                    response.data.find((fil) => fil.type === "offerer")
                );
                setRequester(
                  response.data &&
                    response.data.find((fil) => fil.type === "requester")
                );
              })
              .catch((error) => {
                return error;
              });
          }
          fetchData();
        }, []);
        return (
          <>
            <div className="home-help-section">
              <div className="base-container">
                <div className="left-col">
                  <div className="content">
                    <h2>
                      Deprem bölgelerinde farklı şekillerde destek olabilirsiniz.
                    </h2>
                    <p>
                      Deprem bölgelerinde yaşanan zarardan dolayı. Depremzedelerimizin ihtiyacı olan Gıda ve Konut ihtiyaçları için bağış yapabilirsiniz. Deprem bölgelerinde yaşanan zarardan dolayı. 
                    </p>
                    <Button
                      onClick={() => navigate('donate')}
                      text="Bağış Yap"
                      className="button-con secondary"
                    />
                  </div>
                  <img alt="logo" className="logo-hand" src={Hand} />          
                </div>
                <div className="right-col">
                  <div className="content">
                    <h2>
                      Konaklama İhtiyacı Olan
                      <span className="countOuter">
                      <span className="countTitle">24,392 </span><span className="countText">Kişi var</span>
                      </span>
                    </h2>
                    <p>Deprem bölgelerinde toplam <b>24,392</b> vatandaşımızın konaklama ihtiyacı bulunmaktadır.</p>
                  </div>
                  <Button
                      onClick={() => navigate('donate')}
                      text="Konaklamaya Uygun Yerim Var"
                      className="button-con third"
                    />
                  <img alt="logo" className="logo-hand" src={Hand} />
                </div>
              </div>
            </div>
            <div className="home-categories-section">
              <div className="base-container">
                <div className="col-3">
                  <div className="card">
                    <span className="cardIcon">
                      <FaHandsHelping />
                    </span>
                    <h3 className="cardTitle">
                      Yardım & Destek
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet mid explanation. lorem ipsum
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card">
                    <span className="cardIcon">
                      <FaChild />
                    </span>
                    <h3 className="cardTitle">
                      Çocuk Sahiplenme
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet mid explanation. lorem ipsum
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card">
                    <span className="cardIcon">
                      <FaHandHoldingHeart />
                    </span>
                    <h3 className="cardTitle">
                      Gönüllü Çalışma
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet mid explanation. lorem ipsum
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card">
                    <span className="cardIcon">
                      <FaBook />
                    </span>
                    <h3 className="cardTitle">
                      Eğitim
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet mid explanation. lorem ipsum
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      }}
    </HomePageContainer>
  );
};
export default HomePage;
