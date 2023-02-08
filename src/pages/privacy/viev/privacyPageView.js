/* eslint-disable */
import React from "react";
import PrivacyPageContainer from "../container/privacyPageContainer";
import { Button } from "../../../components";
import Hand from "../../../assets/images/hand.png";
import Deprem from "../../../assets/images/deprem.png";

import "../style/privacyPageStyles.scss";

const PrivacyPage = () => {
  return (
    <PrivacyPageContainer>
      {({}) => {
        return (
          <>
            <div className="home-container">
              <h2>Gizlilik Sözleşmesi Ve Gizlilik Politikamız</h2>

            </div>
            <div className="home-bottom">

              <p>Zor G&uuml;n Dostu Yardımlaşma Ağı (Bundan b&ouml;yle &ldquo;Zor G&uuml;n Dostu&rdquo; olarak
                anılacaktır.),&nbsp;<a href="http://www.zorgundostu.com">www.zorgundostu.com</a>&nbsp;(Bundan
                b&ouml;yle &ldquo;İnternet Sitesi&rdquo; olarak anılacaktır.) isimli internet sitesi &uuml;zerinden
                başlatmış olduğu sosyal yardım faaliyeti ile ihtiya&ccedil; sahibi kişiler ile destek&ccedil;i ve
                g&ouml;n&uuml;ll&uuml;lerin aynı platformda bir araya gelmesini ve bu sayede araya 3. kişiler girmeden
                yardımlaşma faaliyetlerinin y&uuml;r&uuml;t&uuml;lmesini hedeflemektedir. Bu doğrultuda Zor G&uuml;n
                Dostu,İnternet Sitesi&rsquo;nde &uuml;yeleri tarafından verilen bilgilerin nasıl kullanıldığı ve
                paylaşıldığının &uuml;yeleri i&ccedil;in ne kadar &ouml;nemli olduğunun sorumluluğu ve bilincinde olup,
                bilgilerin gizliliğini korumak amacıyla aşağıda belirtilen temel kuralları benimsemektedir.<br />
                <br /> Zor G&uuml;n Dostu, İnternet Sitesi&rsquo;nde y&uuml;r&uuml;t&uuml;len faaliyeti
                ger&ccedil;ekleştirebilmek adına &uuml;yelerin bazı kişisel bilgilerini (ad, soyad, telefon numarası,
                e-posta adresi, adres vb.) talep etmektedir.<br /> <br /> Aksi belirtilmediği takdirde, mevcut gizlilik
                politikamız siz ve hesabınızla ilgili olarak kendi isteğiniz ile sisteme kaydettirdiğiniz
                b&uuml;t&uuml;n bilgiler i&ccedil;in ge&ccedil;erlidir. &Uuml;yeler, İnternet Sitesi&rsquo;nde bir
                Kullanıcı profili oluşturarak ve İnternet Sitesi&rsquo;ne kendi kişisel bilgileri ile kayıt yaptırarak
                işbu gizlilik politikasını ve gizlilik s&ouml;zleşmesini kabul etmiş sayılırlar.<br />
                <br /> &Uuml;yeler tarafından İnternet Sitesi&rsquo;nde Zor G&uuml;n Dostu ile paylaşılmış olan kişisel
                bilgiler sadece ilgili sosyal yardım faaliyetinin y&uuml;r&uuml;t&uuml;lmesi maksadıyla ilgili
                İhtiya&ccedil; Sahibi ya da Destek&ccedil;i/G&ouml;n&uuml;ll&uuml; ile paylaşılmaktadır. Bu bilgiler,
                genel kullanıma a&ccedil;ık olmayan g&uuml;venli bir ortamda saklanmakta ve sadece Zor G&uuml;n Dostu
                b&uuml;nyesinde kullanılmaktadır.<br /> <br /> İnternet Sitesi, kullanıcılarının gizliliklerini
                korumakla y&uuml;k&uuml;ml&uuml;d&uuml;r. İnternet Sitesi&rsquo;ne girilen bilgilerin g&uuml;venliğinin
                sağlanabilmesi a&ccedil;ısından Zor G&uuml;n Dostu sistem ve internet altyapısını en g&uuml;venilir
                seviyede tutarak gerekli &ouml;nlemleri almıştır. Bu sorumluluk, internet ortamının gerektirdiği
                koşullar i&ccedil;erisinde sağlanan en &uuml;st d&uuml;zey gizliliği i&ccedil;ermekte olup, internet
                ortamında hi&ccedil;bir zaman tam g&uuml;venliğin sağlanamadığı da bilinmesi gerekli hususlar
                i&ccedil;erisindedir.Zor G&uuml;n Dostu ve İnternet Sitesi kullanıcılarının gizlilik haklarına saygı
                duyar ve kullanıcının site vasıtasıyla sağladığı t&uuml;m bilgileri saklı tutar.Bununla birlikte Zor
                G&uuml;n Dostu ve dolayısıyla İnternetSitesi &uuml;&ccedil;&uuml;nc&uuml; şahısların yasal ya da yasal
                olmayan davranışlarının herhangi bir kişi veya kuruma verebileceği hasarlardan sorumlu tutulamaz.<br />
                <br /> Zor G&uuml;n Dostu, s&ouml;z konusu bilgileri &uuml;yelerin onayı yada aksi bir talimatı
                olmaksızın ya da yasal bir y&uuml;k&uuml;ml&uuml;l&uuml;k altında bulunmadığı s&uuml;rece herhangi
                bir &uuml;&ccedil;&uuml;nc&uuml; şahıs, kurum ve kuruluş ile paylaşmayacaktır.<br /> <br /> Zor G&uuml;n
                Dostu, bu bilgileri sadece gerekli yetkiler ve yasal d&uuml;zenlemeler &ccedil;er&ccedil;evesinde
                a&ccedil;ıklayabilecek olup, Zor G&uuml;n Dostu&rsquo;nun tabi olduğu d&uuml;zenleyici mevzuat, yetkili
                kurumlar ve/veya yasama, y&uuml;r&uuml;tme, yargı organ ve mercileri &uuml;ye bilgilerinin
                a&ccedil;ıklanmasını istediğinde, Zor G&uuml;n Dostu bu bilgileri yalnızca gerekli
                yetkiler &ccedil;er&ccedil;evesinde a&ccedil;ıklayabilecektir. Yasal bir y&uuml;k&uuml;ml&uuml;l&uuml;k
                altında bulunulmadığı s&uuml;rece bu bilgiler &uuml;&ccedil;&uuml;nc&uuml; şahıslarla kesinlikle
                paylaşılmayacak, faaliyet dışı hi&ccedil;bir nedenle ticari vb. nitelikteki ama&ccedil;la
                kullanılmayacak ve satılmayacaktır.<br /> <br /> Zor G&uuml;n Dostu, idari ve operasyonel a&ccedil;ıdan
                s&uuml;rekli olarak gelişmekte; kurumsal yapısı &ccedil;er&ccedil;evesinde gerekli revizyonları
                s&uuml;ratle uygulamaya koymaktadır. Bu gelişmeler paralelinde, Gizlilik S&ouml;zleşmemiz ve Gizlilik
                Politikamız da revize edilmektedir. Gizlilik S&ouml;zleşmemiz ve Gizlilik Politikamız ile ilgili son
                değişiklikleri g&ouml;rmek i&ccedil;in internet sitemizi sık sık ziyaret etmenizi &ouml;neririz.<br />
                <br /> İnternet Sitesi&rsquo;nin i&ccedil;eriği Zor G&uuml;n Dostu tarafından hazırlanmaktadır.<br />
                <br /> Zor G&uuml;n Dostu, İnternet Sitesi&rsquo;nin geliştirilmesi ve desteklenmesi maksadıyla destek
                hizmetler almak amacıyla farklı kuruluşlarla &ccedil;alışılması durumunda, bu firmaların Zor G&uuml;n
                Dostu&rsquo;nun gizlilik standartlarına ve şartlarına uymalarını sağlayacaktır.<br /> <br /> İnternet
                Sitesi, diğer internet sitelerine bağlantı vermektedir. Gizlilik Politikamız'da yer alan
                taahh&uuml;tlerimiz sadece İnternet Sitesi i&ccedil;erisinde ge&ccedil;erlidir ve diğer internet
                sitelerini kapsamamaktadır. İnternet Sitesi&rsquo;nden bağlantı ile gidilecek diğer internet
                sitelerindeki kullanım ile ilgili o sitelere ait gizlilik g&uuml;vencesi ve kullanım şartları
                ge&ccedil;erlidir. İnternet Sitesi&rsquo;nden reklam, banner, i&ccedil;erik maksatlı veya başka bir
                maksat ile ge&ccedil;ilen diğer internet sitelerinin bilgi kullanımı, etik ilkeleri, gizlilik
                prensipleri, nitelik ve servis kalitesi ile bu sitelerde oluşabilecek herhangi bir maddi / manevi zarar
                ve kayıplardan Zor G&uuml;n Dostu sorumlu değildir.<br /> <br /> İnternet Sitesi&rsquo;nde ve İnternet
                Sitesi&rsquo;nde yer alan bilgi, materyal ve bunların d&uuml;zenlenmesi konusundaki telif hakları, Zor
                G&uuml;n Dostu&rsquo;na aittir. İnternet Sitesi&rsquo;nin
                i&ccedil;erdiği &uuml;&ccedil;&uuml;nc&uuml; şahıslara ait materyaller dışında kalan diğer bilgi ve
                materyallere dair t&uuml;m telif hakları, tescilli marka, patent, entelekt&uuml;el ve diğer
                m&uuml;lkiyet hakları Zor G&uuml;n Dostu&rsquo;nda saklıdır.<br /> <br /> &Uuml;yelerin Zor G&uuml;n
                Dostu ile paylaştığı bilgiler,sosyal yardımlaşma faaliyetinin y&uuml;r&uuml;t&uuml;lmesinde ve İnternet
                Sitesi&rsquo;nde yer alan uygulamaların yenilenmesi durumunda bilgilendirme yapmak amacıyla
                kullanılabilecektir.<br /> <br /> &Uuml;yelerin kişisel bilgilerinin gizliliğini korumak amacıyla Zor
                G&uuml;n Dostu tarafından sistem ve internet altyapısı en g&uuml;venilir seviyede tutularak
                gerekli &ouml;nlemler alınmıştır. Ek olarak bilgi alınmak istenen konularda İnternet Sitemiz&rsquo;den
                bize ulaşabilirsiniz.<br /> <br /> Zor G&uuml;n Dostu&rsquo;nun g&ouml;nderim listesinden &ccedil;ıkmak
                i&ccedil;in İnternet Sitemiz&rsquo;den bize ulaşabilir veya bilgilendirme maillerinin alt kısmında
                bulunan &ldquo;Bilgilendirme e-postalarını almak istemiyorsanız l&uuml;tfen
                tıklayınız&rdquo; c&uuml;mlesinin &uuml;zerine tıklayarak talebinizi sisteme otomatik kayıt ile
                iletebilirsiniz.<br /> <br /> Bize olan g&uuml;veniniz i&ccedil;in teşekk&uuml;r ederiz.</p>


            </div>

          </>
        );
      }}
    </PrivacyPageContainer>
  );
};
export default PrivacyPage;
