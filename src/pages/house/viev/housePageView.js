/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import HousePageContainer from '../container/housePageContainer';
import { Button, Input, TextArea, Select } from '../../../components';
import axios from 'axios';
import Banner from '../../../assets/images/banner2.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../style/housePageStyles.scss';

const HousePage = () => {
  const { REACT_APP_BASE_URL, REACT_APP_BOOKING_API, REACT_APP_LOCATION_API } = process.env;
  const navigate = useNavigate();
  const [note, setNote] = useState("");
  const [tckn, setTckn] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guest, setGuest] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [childNumber, setChildNumber] = useState("");
  const [city, setCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [district, setDistrict] = useState([]);
  const [checkKVKK, setCheckKVKK] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [town, setTown] = useState([]);
  const [neighborhoodAddress, setNeighborhoodAddress] = useState([]);
  const [selectedNeighborhoodAddress, setSelectedNeighborhoodAddress] = useState([]);
  const [accommodationType, setAccommodationType] = useState("Ayrı Oda");
  const [accommodationPeriod, setAccommodationPeriod] = useState("1 Haftaya Kadar");
  const [tcknValidasyonError, setTCKNValidasyonError] = useState({ error: false, message: "" })
  const [emailValidasyonError, setEmailValidasyonError] = useState({ error: false, message: "" })
  const [phoneValidasyonError, setPhoneValidasyonError] = useState({ error: false, message: "" })
  const [nameValidasyonError, setNameValidasyonError] = useState({ error: false, message: "" })
  const [surnameValidasyonError, setSurnameValidasyonError] = useState({ error: false, message: "" })
  const [selectedTown, setSelectedTown] = useState("");

  useEffect(() => {
    async function fetchData () {
      await axios({
        method: 'GET', url: `${REACT_APP_BASE_URL}${REACT_APP_LOCATION_API}/locations`
      })
        .then(async response => {
          setCity(response.data)
          setSelectedCity(response.data[0].name)
        })
        .catch(error => {
          return error
        });
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData () {
      if (selectedCity !== "") {
        await axios({
          method: 'GET', url: `${REACT_APP_BASE_URL}${REACT_APP_LOCATION_API}/locations?city=${selectedCity}`
        })
          .then(async response => {
            setDistrict(response.data)
            setSelectedDistrict(response.data[0].name)
          })
          .catch(error => {
            return error
          });
      }

    }
    fetchData();
  }, [selectedCity]);

  useEffect(() => {
    async function fetchData () {
      if (selectedDistrict !== "") {
        await axios({
          method: 'GET', url: `${REACT_APP_BASE_URL}${REACT_APP_LOCATION_API}/locations?city=${selectedCity}&district=${selectedDistrict}`
        })
          .then(async response => {
            setTown(response.data)
            setSelectedTown(response.data[0].name)
          })
          .catch(error => {
            return error
          });
      }

    }
    fetchData();
  }, [selectedDistrict]);

  useEffect(() => {
    async function fetchData () {
      if (selectedTown !== "") {
        await axios({
          method: 'GET', url: `${REACT_APP_BASE_URL}${REACT_APP_LOCATION_API}/locations?city=${selectedCity}&district=${selectedDistrict}&town=${selectedTown}`
        })
          .then(async response => {
            setNeighborhoodAddress(response.data)
            setSelectedNeighborhoodAddress(response.data[0].name)
          })
          .catch(error => {
            return error
          });
      }
    }
    fetchData();
  }, [selectedTown]);

  const handleSubmit = async () => {
    const params = {
      identityNumber: tckn,
      firstName: name,
      lastName: surname,
      email: email,
      phone: phone,
      city: selectedCity,
      district: selectedDistrict,
      town: selectedTown,
      neighborhood: selectedNeighborhoodAddress,
      addressDetail: addressDetail,
      guestCapacity: guest,
      accommodationType,
      accommodationPeriod
    };
    await axios({
      method: 'POST', url: `${REACT_APP_BASE_URL}${REACT_APP_BOOKING_API}/bookings/offerers`, data: {
        identityNumber: tckn,
        firstName: name,
        lastName: surname,
        email: email,
        phone: phone,
        city: selectedCity,
        district: selectedDistrict,
        town: selectedTown,
        neighborhood: selectedNeighborhoodAddress,
        addressDetail: addressDetail,
        guestCapacity: guest,
        accommodationType: accommodationType,
        accommodationPeriod: accommodationPeriod,
        note: note
      }
    })
      .then(async response => {
        notify();
        setName("")
        setTckn("")
        setSurname("")
        setEmail("")
        setPhone("")
        setGuest("")
        setNote("")
        setCheckKVKK(false)
        setNeighborhood("")
        setAddressDetail("")
        setAccommodationType("Ayrı Oda")
        setAccommodationPeriod("1 Haftaya Kadar")
        setTCKNValidasyonError({ error: false, message: "" })
        setEmailValidasyonError({ error: false, message: "" })
        setPhoneValidasyonError({ error: false, message: "" })
      })
      .catch(error => {
        return error
      });
  };
  const notify = () => {
    toast("Bilgileriniz alınmıştır. İmkanlarınıza uygun ihtiyaç sahipleri için sizinle iletişime geçilecektir.", {
      position: "top-center",
      className: "black-background",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      type: "success"
    });
    setTimeout(() => {
      navigate('/house/table');
    }, 3000);
  }

  const checkTCKN = (e) => {
    setTckn(e);
    const tcknformat = /^[1-9]{1}[0-9]{9}[02468]{1}$/;
    if (e.length !== 11 || !e.match(tcknformat)) {
      setTCKNValidasyonError({ error: true, message: 'T.C. Kimlik Numarası uygun formatta değildir.' });
    } else {
      setTCKNValidasyonError({ error: false, message: '' });
    }
  };

  const checkEmail = (e) => {
    setEmail(e);
    const emailformat = /^([A-Za-z]|[0-9])+$/;
    if (e.match(emailformat)) {
      setEmailValidasyonError({ error: true, message: 'Eposta adresi uygun formatta değildir.' });
    } else {
      setEmailValidasyonError({ error: false, message: '' });
    }
  };

  const checkPhone = (e) => {
    setPhone(e);
    const phoneformat = /^(05)([0-9]{2})\s?([0-9]{3})\s?([0-9]{2})\s?([0-9]{2})$/;
    if (!e.match(phoneformat)) {
      setPhoneValidasyonError({ error: true, message: 'Telefon numarası uygun formatta değildir.' });
    } else {
      setPhoneValidasyonError({ error: false, message: '' });
    }
  };

  const changeName = (e) => {
    setName(e);
    const nameformat = /^[a-zA-Z_ğüşıöçĞÜŞİÖÇ ]*$/;
    if (!e.match(nameformat)) {
      setNameValidasyonError({ error: true, message: 'Adınız uygun formatta değildir.' });
    } else {
      setNameValidasyonError({ error: false, message: '' });
    }
  };

  const changeSurName = (e) => {
    setSurname(e);
    const nameformat = /^[a-zA-Z_ğüşıöçĞÜŞİÖÇ ]*$/;
    if (!e.match(nameformat)) {
      setSurnameValidasyonError({ error: true, message: 'Adınız uygun formatta değildir.' });
    } else {
      setSurnameValidasyonError({ error: false, message: '' });
    }
  };

  return (
    <HousePageContainer>
      {({ }) => {
        return (
          <>
            <img alt='logo' className='bannerzor' src={Banner} />
            <div className='house-container'>
              <p className='guest-text'>Misafir Etmek İstiyorum</p>
              <div className='guest-text-container'>
                <div className='guest-text2'>
                  Doldurduğunuz formdaki bilgiler konaklama ihtiyacı sahipleri için listelenecek ve görüntülenebilecektir. Konaklama
                  ihtiyacı sahipleri sizleri arayabilir ve görüşebilir. Yardımcı olduğunuz için teşekkür ederiz.
                </div>
              </div>
              <p className='ilan'>İlan Bilgi Formu</p>
              <form>
                {/* TCKN */}
                <div>
                  <Input
                    text='T.C. Kimlik No'
                    placeholder='T.C. Kimlik No'
                    error={tcknValidasyonError.error}
                    type='number'
                    value={tckn}
                    onChange={(e) => checkTCKN(e.target.value)}
                  />
                  {tcknValidasyonError.error && <p>{tcknValidasyonError.message}</p>}
                </div>
                {/* Ad soyad */}
                <div>
                  <div>
                    <Input
                      text='Adınız'
                      placeholder='Adınız'
                      error={nameValidasyonError.error}
                      value={name}
                      onChange={(e) => changeName(e.target.value)}
                    />
                    {nameValidasyonError.error && <p>{nameValidasyonError.message}</p>}
                  </div>
                  <div className='name'>
                    <Input
                      text='Soyadınız'
                      placeholder='Soyadınız'
                      error={surnameValidasyonError.error}
                      value={surname}
                      onChange={(e) => changeSurName(e.target.value)}
                    />
                    {surnameValidasyonError.error && <p>{surnameValidasyonError.message}</p>}
                  </div>
                </div>
                {/* Email Telefon */}
                <div className='name-surname'>
                  <div className='name'>
                    <Input
                      text='E-posta'
                      placeholder='E-posta'
                      error={emailValidasyonError.error}
                      value={email}
                      onChange={(e) => checkEmail(e.target.value)}
                    />
                    {emailValidasyonError.error && <p>{emailValidasyonError.message}</p>}
                  </div>
                  <div className='name'>
                    <Input
                      text='Telefon'
                      error={phoneValidasyonError.error}
                      placeholder='05xx xxx xx xx'
                      value={phone}
                      onChange={(e) => checkPhone(e.target.value)}
                    />
                    {phoneValidasyonError.error && <p>{phoneValidasyonError.message}</p>}
                  </div>
                </div>
                <div className='guest-list-house'>
                  {/* Kaç Misafir Kaç Çocuk */}
                  <div className='name-surname'>
                    <div className='guest-list-number'>
                      <Input
                        placeholder='Kaç Kişi Misafir Edebilirsiniz?'
                        text='Kaç Kişi Misafir Edebilirsiniz?'
                        type='number'
                        value={guest}
                        onChange={(e) => setGuest(e.target.value)}
                      />
                    </div>

                    <div className='guest-list-number'>
                      <Select
                        text="Misafirlik Süresi"
                        value={accommodationPeriod}
                        onChange={(e) => setAccommodationPeriod(e.target.value)}
                        data={[{ name: '1 Haftaya Kadar' }, { name: '2 Haftaya Kadar' }, { name: '1 Aya Kadar' }, { name: 'Belirsiz' }]}
                      />
                    </div>
                    <div className='guest-list-number'>
                      <Select
                        text='Konaklama Türü'
                        value={accommodationType}
                        onChange={(e) => setAccommodationType(e.target.value)}
                        data={[{ name: 'Ayrı Oda' }, { name: 'Otel Odası' }, { name: 'Müstakil Ev' }]}
                      />
                    </div>
                  </div>
                </div>
                {/* İl İlçe */}
                <div className='name-surname'>
                  <div className='name'>
                    <Select text='İl' onChange={(e) => setSelectedCity(e.target.value)} data={city} />
                  </div>
                  <div className='name'>
                    <Select text='İlçe' disabled={selectedCity === ''} onChange={(e) => setSelectedDistrict(e.target.value)} data={district} />
                  </div>
                </div>
                {/* Semt Mahalle */}
                <div className='name-surname'>
                  <div className='name'>
                    <Select text='Semt' disabled={selectedDistrict === ''} onChange={(e) => setSelectedTown(e.target.value)} data={town} />
                  </div>
                  <div className='name'>
                    <span> </span>
                    <Select
                      text='Mahalle'
                      disabled={selectedTown === ''}
                      onChange={(e) => setSelectedNeighborhoodAddress(e.target.value)}
                      data={neighborhoodAddress}
                    />
                  </div>
                </div>
                {/* Adres Tarifi */}
                <div className='address-style'>
                  <TextArea text='Adres Tarifi ( Zorunlu Değil )' placeholder='Adres Tarifi' value={addressDetail} onChange={(e) => setAddressDetail(e.target.value)} />
                </div>
                {/* Ekstra Bilgi */}
                <div className='address-style'>
                  <TextArea text='Özel Not ( Zorunlu Değil )' placeholder='Ör. Engeli birey var...' value={note} onChange={(e) => setNote(e.target.value)} />
                </div>
                <div>
                  {/* <TextArea placeholder="Örnek: Engelli birey var" value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)}/> */}
                  <input
                    value={checkKVKK}
                    onChange={(e) => setCheckKVKK(e.target.checked ? true : false)}
                    type='checkbox'
                    id='vehicle1'
                    name='vehicle1'
                  ></input>
                  <a download='KVKK.pdf' href='KVKK.pdf'>
                    KVKK Metnini okudum ve kabul ediyorum.<span>*</span>
                  </a>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', fontWeight: 400, width: 200, margin: '0px 30px 0px 10px' }}>
                  <Button
                    disabled={
                      tckn === '' ||
                      name === '' ||
                      surname === '' ||
                      phone === '' ||
                      city === '' ||
                      district === '' ||
                      guest === '' ||
                      nameValidasyonError.error ||
                      surnameValidasyonError.error ||
                      tcknValidasyonError.error ||
                      emailValidasyonError.error ||
                      phoneValidasyonError.error ||
                      !checkKVKK
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                    text='Gönder'
                    styleProps={{
                      border: '1px solid #323232',
                      borderRadius: 48,
                      backgroundColor: '#323232',
                      color: '#FFFFFF',
                      padding: '10px 20px',
                    }}
                  />

                  <ToastContainer />
                </div>
              </form>
            </div>
          </>
        );
      }}
    </HousePageContainer>
  );
}
export default HousePage;
