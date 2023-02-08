/* eslint-disable */
import React from "react";
import AboutPageContainer from "../container/aboutPageContainer";
import { Button } from "../../../components";
import Hand from "../../../assets/images/hand.png";
import Deprem from "../../../assets/images/deprem.png";

import "../style/aboutPageStyles.scss";

const AboutPage = () => {
  return (
    <AboutPageContainer>
      {({}) => {
        return (
          <>
            <div className="about-container">
              <p style={{ color: "#D42E13E5", fontSize: 40 }}>Hakkımızda</p>

              <p style={{ color: "#000000", fontSize: 18, fontWeight: 400 }}>
                Zor Gün Dostu platformu, ihtiyaç sahiplerini, destek sağlamak
                isteyen birey, kurum ve kuruluşlarla eşleştirmek amacıyla
                kullanıma açılmıştır.
              </p>
              <p style={{ color: "#000000", fontSize: 18, fontWeight: 400 }}>
                Bu platform üzerinden depremden etkilenen konaklama ihtiyacı
                olanlar ilgili formları doldurarak, ne kadar süre konaklama
                isteğinde bulunduklarını belirtebilirler. Aynı zamanda misafir
                edecek kişilerin de "Konaklamaya Uygun Yerim Var" bilgi formunu
                doldurmaları sağlanabilir. Toplanan bilgiler yetkili kurum ve
                kuruluşlar ile paylaşılarak, uygun eşleşmelerin yapılması
                sağlanacaktır.
              </p>
              <p style={{ color: "#000000", fontSize: 18 }}>
                Zor Gün Dostu Ekibi
              </p>
              <a href="mailto:iletisim.zorgundostu@gmail.com">
                iletisim.zorgundostu@gmail.com
              </a>
            </div>
          </>
        );
      }}
    </AboutPageContainer>
  );
};
export default AboutPage;
